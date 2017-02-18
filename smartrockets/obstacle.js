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
	
	this.show = function() {
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
	}
	
	this.finish = function() {
		var o = new Obstacle(
			createVector(this.pos.x + this.w / 2, this.pos.y + this.h / 2),
			abs(this.w), abs(this.h)
		);
		this.w = 0;
		this.h = 0;
		return o;
	}
	
	this.hit = function(entityX, entityY) {
		return (entityX > this.pos.x - this.w / 2) &&
			(entityX < this.pos.x + this.w / 2) &&
			(entityY > this.pos.y - this.h / 2) &&
			(entityY < this.pos.y + this.h / 2);
	}
}