var scl = 50;
var rows = Math.floor(innerHeight / scl);
var cols = Math.floor(innerWidth / scl);

var grid = [];

var state_play = false;

var cellColour = Color.Material.getRandomColor();

function setup() {
	createCanvas(cols * scl, rows * scl);
	
	for (var row = 0; row < rows; row++) {
		grid[row] = [];
		for (var col = 0; col < cols; col++) {
			grid[row][col] = new Cell(row, col);
		}
	}
}

function draw() {
	background(66);
	
	for (var row = 0; row < rows; row++) {
		for (var col = 0; col < cols; col++) {
			grid[row][col].draw();
			if (state_play && frameCount % 10 == 0) {
				grid[row][col].update();
			}
		}
	}
	for (var row = 0; row < rows; row++) {
		for (var col = 0; col < cols; col++) {
			if (grid[row][col].toDie) {
				grid[row][col].isAlive = false;
				grid[row][col].toDie = false;
			} else if (grid[row][col].toLive) {
				grid[row][col].isAlive = true;
				grid[row][col].toLive = false;
			}
			
		}
	}
}

function mousePressed() {
	if (mouseButton == LEFT) {
		var row = floor(mouseY / scl);
		var col = floor(mouseX / scl);
		
		if (!(row < 0 || row > rows || col < 0 || col > cols)) {
			grid[row][col].isAlive = !grid[row][col].isAlive;
		}
	}
}

function keyPressed() {
	if (keyCode == 32) {
		state_play = !state_play;
	}
}