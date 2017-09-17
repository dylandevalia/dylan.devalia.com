var STATE_START = 0;
var STATE_END = 1;
var STATE_GROUND = 2;
var STATE_FOREST = 3;
var STATE_WATER = 4;

function Cell(col, row) {
	this.col = col;
	this.row = row;

	this.state = STATE_GROUND;
}

Cell.prototype.draw = function() {
	stroke(66);
	switch (this.state) {
		case STATE_START:
			Color.Material.light_green[5].fill();
			break;
		case STATE_END:
			Color.Material.red[5].fill();
			break;
		case STATE_GROUND:
			Color.Material.green[5].fill();
			break;
		case STATE_FOREST:
			Color.Material.green[9].fill();
			break;
		case STATE_WATER:
			Color.Material.light_blue[5].fill();
			break;
		default:
			fill(255, 0, 0);
	}
	rect(this.col * scl, this.row * scl, scl, scl);
};

Cell.prototype.incrementState = function(bool) {
	if (bool) { // Cycle from 0 to 1
		this.state = (++this.state > 1) ? 0 : this.state;
	} else { // Cycle from 2 to 4
		this.state = (++this.state < 2 || this.state > 4) ? 2 : this.state;
	}
	//this.state = (++this.state > 4) ? 0 : this.state;
	//loop();
};
