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
	
	/**
	 *  Applies the given force to the rocket
	 *
	 *  @param force    The force to be exerted on the rocket
	 */
	this.applyForce = function(force) {
		this.acc.add(force);
	}
	
	/**
	 *  Updates the rocket physics and its trail
	 *  Also determines if it is alive and completed its goal (you pass butter)
	 */
	this.update = function() {
		if (!this.dead && frameCount % this.trailDelay == 0) {
			this.trails[this.trailCount].setPos(this.pos.copy());
			this.trails[this.trailCount++].iteration = 0;
			if (this.trailCount >= 5) {
				this.trailCount = 0;
			}
		}
		
		if (dist(this.pos.x, this.pos.y, target.x, target.y) < 16) {                                // Hit target
			this.completed = 1;
		} else if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) { // Out of bounds
			this.dead = 1;
		} else if (
			(this.pos.x > obstacle.x - oWidth / 2 && this.pos.x < obstacle.x + oWidth / 2) &&
			(this.pos.y > obstacle.y - oHeight / 2 && this.pos.y < obstacle.y + oHeight / 2)        // Hit obstacle
		) {
			this.dead = 1;
		} else if (!this.dead && !this.completed) {
			this.applyForce(this.dna.genes[dnaCounter]);
			
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);
			this.timer++;
		}
	}
	
	/**
	 *  Shows trails and itself
	 */
	this.show = function() {
		this.showTrail();
		
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading() - PI / 2);    // Rotated 90* for some reason
		fill(238, 238, 238, 100);
		triangle(-rocketWidth / 2, 0, rocketWidth / 2, 0, 0, rocketWidth * 1.618);
		pop();
	}
	
	/**
	 *  Shows all the trails
	 */
	this.showTrail = function() {
		for (var i = 0; i < this.trails.length; i++) {
			this.trails[i].update();
			this.trails[i].show();
		}
	}
	
	/**
	 *  Calculates the rocket's fitness using its final distance between itself and the target
	 *  Fitness is reduced if it died and increased if it made it to the target (quicker the better)
	 */
	this.calcFitness = function() {
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		this.fitness = 1 / (d + 1);
		if (this.dead) {
			this.fitness *= map(this.timer, 0, lifespan, 0.05, 0.1);
		} else if (this.completed) {
			this.fitness *= map(this.timer, 0, lifespan, 20, 10);
			
		}
	}
	
	/**
	 *  Gets a new DNA and resets all variables
	 *
	 *  @param newDna   The rockets new DNA
	 */
	this.newGeneration = function(newDna) {
		this.dna = newDna;
		this.pos.x = width / 2;
		this.pos.y = height;
		this.vel.mult(0);
		this.acc.mult(0);
		
		this.dead = 0;
		this.completed = 0;
		this.timer = 0;
	}
}