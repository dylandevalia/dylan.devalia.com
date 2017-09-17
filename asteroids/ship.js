var maxVel = 2;

function Ship(pos, r) {
	this.pos = pos;
	this.angle = PI;
	this.r = r;
	this.vel = createVector();
	this.acc = createVector();

	this.turnAngle = 0;
	this.boosting = false;
	this.slowing = false;

	this.boostStr = 0;
}

Ship.prototype.update = function() {
	this.angle += this.turnAngle;

	if (this.boosting) {
		var heading = p5.Vector.fromAngle(this.angle + PI / 2);
		this.vel.add(heading.mult(0.5));
	}

	if (this.vel.mag() < 0.1) {
		this.vel.mult(0);
	} else if (this.slowing) {
		this.vel.mult(0.95);
	} else {
		this.vel.mult(0.99);
	}

	this.pos.add(this.vel);

	this.wrapEdges();
};

Ship.prototype.draw = function() {
	if (this.pos.x < -this.r || this.pos.x > width + this.r || this.pos.y < -this.r || this.pos.y > height + this.r) {
		return;
	}

	push();
	translate(this.pos.x, this.pos.y);
	rotate(this.angle);

	noStroke();

	if (this.boosting) {
		this.boostStr = constrain(this.boostStr += 1, 0, this.r / 3);
	} else {
		this.boostStr = constrain(this.boostStr -= 2, 0, this.r / 3);
	}

	/* Boost */
	var rnd = (this.boostStr > 0) ? random(-5, 5) : 0;
	Color.Material.orange[7].fill();
	triangle(
		(-(this.boostStr + rnd) / 2) * sqrt(3), -this.r / 2,
		((this.boostStr + rnd) / 2) * sqrt(3), -this.r / 2,
		0, (-this.r / 2) - (3 * (this.boostStr + rnd) / 2)
	);
	Color.Material.yellow[5].fill(50);
	var noShades = 3;
	for (var i = noShades; i > 0; i--) {
		var j = map(i, noShades, 1, this.boostStr, this.boostStr / noShades);
		triangle(
			(-(j + rnd) / 2) * sqrt(3), -this.r / 2,
			((j + rnd) / 2) * sqrt(3), -this.r / 2,
			0, (-this.r / 2) - (3 * (j + rnd) / 2)
		);
	}

	/* Ship */
	Color.Material.blue_grey[3].fill();
	triangle(
		(-this.r / 2) * sqrt(3), -this.r / 2, // Bottom left
		(this.r / 2) * sqrt(3), -this.r / 2, // Bottom right
		0, this.r // Top
	);

	/* Bridge */
	Color.Material.red[5].fill(100);
	var rSmall = 6 * this.r / 11;
	triangle(
		(-rSmall / 2) * sqrt(3), this.r - (3 * rSmall) / 2, // Bottom left
		(rSmall / 2) * sqrt(3), this.r - (3 * rSmall) / 2, // Bottom right
		0, this.r // Top
	);
	rSmall = this.r / 2;
	Color.Material.red[3].fill();
	triangle(
		(-rSmall / 2) * sqrt(3), this.r - (3 * rSmall) / 2, // Bottom left
		(rSmall / 2) * sqrt(3), this.r - (3 * rSmall) / 2, // Bottom right
		0, this.r // Top
	);
	pop();
};

Ship.prototype.checkIntersect = function(target) {
	if (!isOnScreen(this.pos)) {
		return false;
	}
	var pointA = createVector(
		this.pos.x + (this.r * sin(-this.angle)),
		this.pos.y + (this.r * cos(-this.angle))
	);
	var pointB = createVector(
		this.pos.x + (this.r * sin(-this.angle + TWO_PI / 3)),
		this.pos.y + (this.r * cos(-this.angle + TWO_PI / 3))
	);
	var pointC = createVector(
		this.pos.x + (this.r * sin(-this.angle + 2 * TWO_PI / 3)),
		this.pos.y + (this.r * cos(-this.angle + 2 * TWO_PI / 3))
	);

	// noStroke();
	// fill(255);
	// ellipse(target.x, target.y, 5);

	/* Check collision */
	// Vectors
	var v0 = pointC.sub(pointA);
	var v1 = pointB.sub(pointA);
	var v2 = target.sub(pointA);

	// Dot products
	var dot00 = p5.Vector.dot(v0, v0);
	var dot01 = p5.Vector.dot(v0, v1);
	var dot02 = p5.Vector.dot(v0, v2);
	var dot11 = p5.Vector.dot(v1, v1);
	var dot12 = p5.Vector.dot(v1, v2);

	// Compute barycentric coordinates
	var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

	// Check if point is in triangle
	// print(u);
	// print(v);
	// print("---");
	return (u >= 0) && (v >= 0) && (u + v < 1);
};

Ship.prototype.wrapEdges = function() {
	if (this.pos.x < -width) {
		this.pos.x += 3 * width;
	} else if (this.pos.x > 2 * width) {
		this.pos.x -= 3 * width;
	}

	if (this.pos.y < -height) {
		this.pos.y += 3 * height;
	} else if (this.pos.y > 2 * height) {
		this.pos.y -= 3 * height;
	}
};

Ship.prototype.boost = function(boost) {
	this.boosting = boost;
};

Ship.prototype.turn = function(angle) {
	this.turnAngle = angle;
};

Ship.prototype.slow = function(slow) {
	this.slowing = slow;
};
