var maxForce = 0.1; // Turning radius
var maxSpeed = 5; // Speed
var r = 20;
var colour = Color.Material.getRandomColor();

function Bird() {
	this.pos = createVector(
		// random(width), random(height)
		(width / 2) + random(-15, 15),
		(height / 2) + random(-15, 15)
	);
	this.vel = p5.Vector.random2D();
	this.acc = createVector(0, 0);

	this.shade = floor(random(10));
}

var sepMult = 1.5;
var aliMult = 1.0;
var cohMult = 1.0;
var objMult = 1.5;
// Updates the bird's position
Bird.prototype.update = function() {
	// Calculate values
	var sep = this.separate();
	var ali = this.align();
	var coh = this.cohesion();
	var obj = this.objective();

	// Arbitrarily weight these forces
	sep.mult(sepMult);
	ali.mult(aliMult);
	coh.mult(cohMult);
	obj.mult(objMult);

	// Apply forces to bird
	this.applyForce(sep);
	this.applyForce(ali);
	this.applyForce(coh);
	this.applyForce(obj);


	// Physics model
	this.vel.add(this.acc);
	this.vel.limit(maxSpeed);
	this.pos.add(this.vel);
	this.acc.mult(0);

	if (this.pos.x < -r) this.pos.x = width + r;
	if (this.pos.y < -r) this.pos.y = height + r;
	if (this.pos.x > width + r) this.pos.x = -r;
	if (this.pos.y > height + r) this.pos.y = -r;
};

// Draws the bird
Bird.prototype.draw = function() {
	noStroke();
	colour[this.shade].fill();
	rect(this.pos.x, this.pos.y, r, r);
};

Bird.prototype.applyForce = function(force) {
	// f = ma => a = f / m
	// Assuming mass = 1 for all
	this.acc.add(force);
};

// Seeking algorithm - steers towards given target
Bird.prototype.seek = function(target) {
	// Get desired vector to target and limit to maxSpeed
	var desired = target.sub(this.pos);
	desired.normalize();
	desired.mult(maxSpeed);

	// Calculate actual steering force and limit to maxForce
	var steer = desired.sub(this.vel);
	return steer.limit(maxForce);
};

var sepDist = 25;
// Separates the bird from other birds to avoid crowding
Bird.prototype.separate = function() {
	var steer = createVector(0, 0); // Cumulative steer
	var k = 0;
	//flock.forEach(function(bird) {
	for (var i = 0; i < flock.length; i++) {
		// Difference between this bird and other bird
		var d = this.pos.dist(flock[i].pos);
		if (d > 0 && d < sepDist) {
			var diff = p5.Vector.sub(this.pos, flock[i].pos);
			diff.normalize();
			//diff.div(d); // Weight by distance (larger the dist, small the force)
			steer.add(diff);
			k++;
		}
	}

	// Average steering
	if (k > 0) steer.div(k);

	// If force exists
	if (steer.mag() > 0) {
		steer.normalize();
		steer.mult(maxSpeed);
		steer.sub(this.vel);
		steer.limit(maxForce);
	}
	return steer;
};

var aliDist = 50;
// Goes towards average heading of flock
Bird.prototype.align = function() {
	var steer = createVector(0, 0);
	var k = 0;
	for (var i = 0; i < flock.length; i++) {
		var d = p5.Vector.dist(this.pos, flock[i].pos);
		if (d > 0 && d < aliDist) {
			steer.add(flock[i].vel);
			k++;
		}
	}

	if (k > 0) {
		steer.div(k);

		steer.normalize();
		steer.mult(maxSpeed);
		steer.sub(this.vel);
		steer.limit(maxForce);
	}

	return steer;
};

var cohDist = 50;
// Move towards the centre of the flock
Bird.prototype.cohesion = function() {
	var sum = createVector(0, 0);
	var k = 0;
	for (var i = 0; i < flock.length; i++) {
		var d = p5.Vector.dist(this.pos, flock[i].pos);
		if (d > 0 && d < cohDist) {
			sum.add(flock[i].pos);
			k++;
		}
	}

	if (k > 0) {
		sum.div(k);
		return this.seek(sum);
	}

	return createVector(0, 0);
};

var cooldown = 0;
var curTarget;
// Go towards a specific target
Bird.prototype.objective = function() {
	// If mouse is on screen then go towards mouse
	if (
		mouseX > 0 && mouseX < width &&
		mouseY > 0 && mouseY < height
	) {
		return this.seek(createVector(mouseX, mouseY));
		print("mouse");
	}

	// Go towards random point on screen
	if (--cooldown < 0) {
		curTarget.x = random(width);
		curTarget.y = random(height);
		cooldown = random(1200, 3000);
		print(curTarget.x + " " + curTarget.y + " " + cooldown);
	}

	return this.seek(curTarget);
};
