function Asteroid() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0) // p5.Vector.random2D();
	this.r = random(30, 90);
	var mag = map(this.r, 30, 90, 3, 1);
	this.vel.setMag(mag);
	this.offsets = [];

	for (var i = 0; i < random(map(this.r, 20, 90, 4, 10), 10); i++) {
		this.offsets[i] = random(-this.r / 2, this.r / 2);
	}
}

Asteroid.prototype.update = function() {
	this.pos.add(this.vel);
	this.wrapEdges();
};

Asteroid.prototype.draw = function() {
	push();
	translate(this.pos.x, this.pos.y);
	fill(66);
	strokeWeight(5);
	Color.Material.blue_grey[3].stroke();
	// ellipse(0, 0, 20);

	beginShape();
	for (var i = 0; i < this.offsets.length; i++) {
		vertex(
			(this.r + this.offsets[i]) * cos(i * TWO_PI / this.offsets.length),
			(this.r + this.offsets[i]) * sin(i * TWO_PI / this.offsets.length)
		)
	}
	endShape(CLOSE);

	pop();
};

Asteroid.prototype.wrapEdges = function() {
	var maxR = this.r + Math.max.apply(null, this.offsets);
	if (this.pos.x < -maxR) {
		this.pos.x += (width + 2 * maxR);
	} else if (this.pos.x > width + maxR) {
		this.pos.x -= (width + 2 * maxR);
	}

	if (this.pos.y < -maxR) {
		this.pos.y += (height + 2 * maxR);
	} else if (this.pos.y > height + maxR) {
		this.pos.y -= (height + 2 * maxR);
	}
}
