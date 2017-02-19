/**
 *  Creates and obstacle which the ships crash into
 *
 *  @param pos      The position vector of the obstacle (centre of the rect)
 *  @param w        The width
 *  @param h        The height
 *  @param [create] Boolean which changes the maths for drawing when creating an obstacle
 */
function Obstacle(pos, w, h, create) {
	this.pos = pos;
	this.w = w;
	this.h = h;
	
	if (create) {
		this.create = create;
	} else {
		this.create = false;
	}
	this.move = false;
}

/**
 *  Renders the object to the canvas
 */
Obstacle.prototype.show = function() {
	if (this.create) {
		fill(144, 202, 249);
		rect(this.pos.x, this.pos.y, this.w, this.h);
	} else {
		fill(3, 169, 244);
		rect(
			this.pos.x - this.w / 2, this.pos.y - this.h / 2,
			this.w, this.h
		);
	}
};

/**
 *  Used for creation object where it creates a new obstacle using the centre as its pos
 *  If the obstacle's width or height is less than 10px, null is returned
 *
 *  @returns {Obstacle/*}   Pointer to the finished obstacle object || null
 */
Obstacle.prototype.finish = function() {
	var o;
	if (abs(this.w) > 10 && abs(this.h) > 10) {
		o = new Obstacle(
			createVector(this.pos.x + this.w / 2, this.pos.y + this.h / 2),
			abs(this.w), abs(this.h)
		);
	} else {
		o = null;
	}
	this.w = 0;
	this.h = 0;
	return o;
};

/**
 *  Returns a boolean if the given coordinates intersect with the object
 *
 *  @param entityX      The x position of the object to check against the obstacle
 *  @param entityY      The y position of the object to check against the obstacle
 *  @returns {boolean}  True if the objects intersect else false
 */
Obstacle.prototype.hit = function(entityX, entityY) {
	return (entityX > this.pos.x - this.w / 2) &&
		(entityX < this.pos.x + this.w / 2) &&
		(entityY > this.pos.y - this.h / 2) &&
		(entityY < this.pos.y + this.h / 2);
};
