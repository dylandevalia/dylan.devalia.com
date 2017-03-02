/**
 *  The rocket object
 *
 *  @param rocketWidth  The width of the object (height is gotten through golden ratio)
 *  @constructor        Creates all variables and initialise trails
 */
function Rocket(rocketWidth) {
	this.pos = createVector(width / 2, height);
	this.vel = createVector(0, 0);
	this.acc = createVector();
	this.dna = new DNA();
	
	this.width = rocketWidth;
	
	this.fitness = 0;
	this.dead = 0;
	this.completed = 0;
	this.timer = 0;
	
	this.trails = [];
	this.noTrails = 5;
	this.trailCount = 0;
	this.trailDelay = 5;
	for (var i = 0; i < this.noTrails; i++) {
		this.trails[i] = new Trail();
	}
}

/**
 *  Applies the given force to the rocket
 *
 *  @param force    The force to be exerted on the rocket
 */
Rocket.prototype.applyForce = function(force) {
	this.acc.add(force);
};

/**
 *  Updates the rocket physics and its trail
 *  Also determines if it is alive and completed its goal (you pass butter)
 */
Rocket.prototype.update = function() {
	if (!this.dead && !this.completed &&
		frameCount % this.trailDelay == 0
	) {
		this.trails[this.trailCount].setPos(this.pos.copy());
		this.trails[this.trailCount++].iteration = 0;
		if (this.trailCount >= 5) {
			this.trailCount = 0;
		}
	}
	
	for (var i = 0; i < obstacles.length; i++) {
		if (obstacles[i].hit(this.pos.x, this.pos.y)) {
			this.dead = true;
			break;
		}
	}
	
	if (dist(this.pos.x, this.pos.y, target.x, target.y) < 16) {                                // Hit target
		this.completed = 1;
	} else if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) { // Out of bounds
		this.dead = 1;
	} else if (!this.dead && !this.completed) {
		this.applyForce(this.dna.genes[dnaCounter].setMag(thrustStrength));
		
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.timer++;
	}
};

/**
 *  Shows trails and itself
 */
Rocket.prototype.show = function() {
	this.showTrail();
	
	push();
	translate(this.pos.x, this.pos.y);
	rotate(this.vel.heading() - PI / 2);    // Rotated 90* for some reason
	Color.Material.blue_grey[0].fill(100);
	triangle(-this.width / 2, 0, this.width / 2, 0, 0, this.width * 1.618);
	pop();
};

/**
 *  Shows all the trails
 */
Rocket.prototype.showTrail = function() {
	for (var i = 0; i < this.trails.length; i++) {
		this.trails[i].update();
		this.trails[i].show();
	}
};

/**
 *  Calculates the rocket's fitness using its final distance between itself and the target
 *  Fitness is reduced if it died and increased if it made it to the target (quicker the better)
 */
Rocket.prototype.calcFitness = function() {
	var d = dist(this.pos.x, this.pos.y, target.x, target.y);
	this.fitness = 1 / (d + 1);
	if (this.dead) {
		this.fitness *= map(this.timer, 0, lifespan, 0.05, 0.1);
	} else if (this.completed) {
		this.fitness *= map(this.timer, 0, lifespan, 20, 10);
	}
};

/**
 *  Gets a new DNA and resets all variables
 *
 *  @param newDna   The rockets new DNA
 */
Rocket.prototype.newGeneration = function(newDna) {
	this.dna = newDna;
	this.pos.x = width / 2;
	this.pos.y = height;
	this.vel.mult(0);
	this.acc.mult(0);
	
	this.dead = 0;
	this.completed = 0;
	this.timer = 0;
};