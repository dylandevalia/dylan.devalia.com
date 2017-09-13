var scl = 100.0;
var cols, rows;

var grid = [];

function setup() {
	cols = floor(innerWidth / scl);
	rows = floor(innerHeight / scl);
	createCanvas(cols * scl, rows * scl);

	for (var c = 0; c < cols; c++) {
		grid[c] = []
		for (var r = 0; r < rows; r++) {
			grid[c][r] = new Cell(c, r);
		}
	}
}

function draw() {
	background(66);

	// Draw grids
	grid.forEach(function(c) {
		c.forEach(function(cell) {
			cell.draw();
		});
	});

	//noLoop();
}

function mouseClicked() {
	grid[floor(mouseX / scl)][floor(mouseY / scl)].incrementState((keyIsDown(CONTROL) || mouseButton == RIGHT));
}
