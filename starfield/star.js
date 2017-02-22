function Star() {
	this.pos = createVector(
		random(-width / 2, width / 2),      // x
		random(-height / 2, height / 2),    // y
		random(1, width)                    // z
	);
	this.pz = this.pos.z;
	
	this.maxSize = random(2, 15);
	this.color = Color.Material.blue_grey[0];
}

Star.prototype.update = function() {
	this.pos.z -= speed;
	if (this.pos.z < 1) {
		this.pos.x = random(-width / 2, width / 2);
		this.pos.y = random(-height / 2, height / 2);
		this.pos.z = random(1, width);
		
		this.pz = this.pos.z;
		
		// 10% chance to have a colour
		if (random(1) < 0.1) {
			this.color = Color.Material.getRandomColorOfShade(5);
		} else {
			this.color = Color.Material.blue_grey[0];
		}
	}
};

Star.prototype.show = function() {
	var sx = map(this.pos.x / this.pos.z, 0, 1, 0, width);
	var sy = map(this.pos.y / this.pos.z, 0, 1, 0, height);
	var r = map(this.pos.z, 0, width, this.maxSize, 0);
	
	var px = map(this.pos.x / this.pz, 0, 1, 0, width);
	var py = map(this.pos.y / this.pz, 0, 1, 0, height);
	
	noStroke();
	this.color.fill();
	ellipse(sx, sy, r, r);
	
	this.color.stroke();
	line(px, py, sx, sy);
	
	this.pz = this.pos.z;
};