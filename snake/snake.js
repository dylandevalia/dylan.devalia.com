function Snake() {
	this.pos = createVector(floor(w / 2) * scl, floor(h / 2) * scl);
	this.speed = createVector(0, 0);
	this.tail = [];
	this.length = 0;
	this.dirBuffer = [];
}

/**
 *  Updates the snake's position
 */
Snake.prototype.update = function() {
	/* Shuffles snake's history/tail */
	if (this.length === this.tail.length) { // Only if not eaten food
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
	}
	this.tail[this.length - 1] = this.pos.copy();   // Adds head to
	
	/* Update position */
	if (this.dirBuffer.length > 0) {
		this.speed = this.dirBuffer.shift().copy();
	}
	this.pos.add(this.speed.setMag(scl));
	this.pos.x = constrain(this.pos.x, 0, width - scl);
	this.pos.y = constrain(this.pos.y, 0, height - scl);
};

/**
 *  Displays the snake's head and its tail
 */
Snake.prototype.show = function() {
	/* Display tail */
	fill(139, 195, 74);
	for (var i = 0; i < this.tail.length; i++) {
		rect(this.tail[i].x, this.tail[i].y, scl, scl);
	}
	/* Display head */
	fill(104, 159, 56);
	rect(this.pos.x, this.pos.y, scl, scl);
};

/**
 *  Set direction of the snake
 *  Uses unit vectors
 *  @param x    Set x-axis direction
 *  @param y    Set y-axis direction
 */
Snake.prototype.dir = function(x, y) {
	this.dirBuffer.push(createVector(x, y));
};

/**
 *  Checks with food pellet if it has eaten it
 *  @param food The pellet object
 */
Snake.prototype.eat = function(food) {
	var d = dist(food.pos.x, food.pos.y, this.pos.x, this.pos.y);
	if (d < 1) {
		food.eaten(this);
		this.length++;
		if (counter > 2) {
			counter--;
		}
	}
};

/**
 *  Checks if it has collided with its own tail, this is dead
 */
Snake.prototype.death = function() {
	var d;
	for (var i = 0; i < this.tail.length; i++) {
		d = dist(this.pos.x, this.pos.y, this.tail[i].x, this.tail[i].y);
		if (d < 1) {
			state = "DEATH";
		}
	}
}