/**
 *  Rocket trails - Don't do much else bar look nice
 */
function Trail() {
	this.pos = null;
	this.iteration = 0;
	
	/**
	 *  Sets the position of the particle
	 *  @param _pos Position of the particle
	 */
	this.setPos = function(_pos) {
		this.pos = _pos;
		this.iteration = 0;
	}
	
	/**
	 *  Updates the particle every 5 ticks
	 */
	this.update = function() {
		if (this.pos != null) {
			if (frameCount % 5 == 0) {
				this.iteration++;
			}
		}
	}
	
	/**
	 *  Draws the particle
	 */
	this.show = function() {
		if (this.pos != null && this.iteration < 10) {
			var size = this.iteration + 1;
			this.getColour(this.iteration);
			push();
			translate(this.pos.x, this.pos.y);
			quad(
				-size, size,   //    Top left
				size, size,   //    Top right
				size, -size,   // Bottom right
				-size, -size    // Bottom left
			);
			pop();
		}
	}
	
	/**
	 *  Determines the colour and alpha of the particle depending on its life-stage
	 *
	 *  @param i    Life-stage of the particle
	 */
	this.getColour = function(i) {
		var alpha = map(i, 0, 5, 200, 20);
		switch (i) {
			case 0:
				fill(230, 81, 0, alpha);
				break;
			case 1:
				fill(239, 109, 0, alpha);
				break;
			case 2:
				fill(245, 124, 0, alpha);
				break;
			case 3:
				fill(251, 140, 0, alpha);
				break;
			case 4:
				fill(255, 152, 0, alpha);
				break;
			case 5:
				fill(255, 167, 38, alpha);
				break;
			case 6:
				fill(255, 183, 77, alpha);
				break;
			case 7:
				fill(255, 204, 128, alpha);
				break;
			case 8:
				fill(255, 224, 178, alpha);
				break;
			case 9:
				fill(255, 243, 224, alpha);
				break;
			default:
				fill(0, 255, 0, 255);
				break;
		}
	}
}