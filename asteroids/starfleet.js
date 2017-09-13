function Starfleet() {
	this.fleet = [];
	this.r = 50;

	for (var i = -width; i < 2 * width; i += width) {
		for (var j = -height; j < 2 * height; j += height) {
			this.fleet.push(new Ship(createVector(i + width / 2, j + height / 2), this.r));
		}
	}
	this.pos = this.fleet[5].pos;
	// this.centre = this.fleet[5]; //this.fleet[5].pos.copy();
}

Starfleet.prototype.update = function() {
	for (var i = 0; i < this.fleet.length; i++) {
		this.fleet[i].update();
		if (isOnScreen(this.fleet[i].pos)) {
			this.pos = this.fleet[i].pos;
		}
	}
};

Starfleet.prototype.draw = function() {
	this.fleet.forEach(function(ship) {
		ship.draw();
	})
};

Starfleet.prototype.checkIntersect = function(target) {
	var bool = false;
	this.fleet.forEach(function(ship) {
		bool = bool || ship.checkIntersect(target);
	});
	return bool;
};

Starfleet.prototype.turn = function(angle) {
	this.fleet.forEach(function(ship) {
		ship.turn(angle);
	})
};

Starfleet.prototype.boost = function(boost) {
	this.fleet.forEach(function(ship) {
		ship.boost(boost);
	})
};

Starfleet.prototype.slow = function(slow) {
	this.fleet.forEach(function(ship) {
		ship.slow(slow);
	})
};
