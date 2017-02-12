function Star() {
	this.pos = createVector(
		random(-width / 2, width / 2),      // x
		random(-height / 2, height / 2),    // y
		random(1, width)                // z
	);
	
	this.pz = this.pos.z;
	
	this.update = function() {
		this.pos.z -= speed;
		if (this.pos.z < 1) {
			this.pos.x = random(-width / 2, width / 2);
			this.pos.y = random(-height / 2, height / 2);
			this.pos.z = random(1, width);
			
			this.pz = this.pos.z;
		}
	}
	
	this.show = function() {
		var sx = map(this.pos.x / this.pos.z, 0, 1, 0, width);
		var sy = map(this.pos.y / this.pos.z, 0, 1, 0, height);
		var r = map(this.pos.z, 0, width, 5, 0);
		
		var px = map(this.pos.x / this.pz, 0, 1, 0, width);
		var py = map(this.pos.y / this.pz, 0, 1, 0, height);
		
		
		stroke(238, 200);
		fill(238, 200);
		ellipse(sx, sy, r, r);
		line(px, py, sx, sy);
		
		this.pz = this.pos.z;
	}
}