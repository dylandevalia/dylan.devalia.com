var scl = 50;
var cols = Math.floor(350 / scl);
var rows = Math.floor(200 / scl);

var grid = [];
var current;

var stack = [];

var GRID_TOP = 0;
var GRID_LEFT = 1;
var GRID_BOTTOM = 2;
var GRID_RIGHT = 3;

var rnd;

function setup() {
	createCanvas(cols * scl, rows * scl);
	
	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			grid.push(new Cell(i, j));
		}
	}
	
	current = grid[0];
	current.visited = true;
	current.active = true;
	rnd = floor(random(16));
}

function draw() {
	background(66);
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
	
	
	var next = current.checkNeighbours();
	if (next) {
		next.visited = true;
		stack.push(current);
		removeWalls(current, next);
		
		current.active = false;
		current = next;
		current.active = true;
	} else if (stack.length > 0) {
		current.active = false;
		current = stack.pop();
		current.active = true;
	} else {
		current.active = false;
		current.show();
		noLoop();
	}
}

function removeWalls(a, b) {
	var dcol = a.col - b.col;
	var drow = a.row - b.row;
	
	if (dcol == 1) {
		a.walls[GRID_RIGHT] = false;
		b.walls[GRID_LEFT] = false;
	} else if (dcol == -1) {
		a.walls[GRID_LEFT] = false;
		b.walls[GRID_RIGHT] = false;
	}
	
	if (drow == 1) {
		a.walls[GRID_TOP] = false;
		b.walls[GRID_BOTTOM] = false;
	} else if (drow == -1) {
		a.walls[GRID_BOTTOM] = false;
		b.walls[GRID_TOP] = false;
	}
}

function index(i, j) {
	if (i < 0 || i > cols - 1 || j < 0 || j > rows - 1) {
		return -1;
	}
	
	return i + j * cols;
}

function fillColour(state) {
	if (state == "visited") {
		switch (rnd) {
			case 0:
				fill(255, 87, 34);
				break;
			case 1:
				fill(244, 67, 54);
				break;
			case 2:
				fill(233, 30, 99);
				break;
			case 3:
				fill(156, 39, 176);
				break;
			case 4:
				fill(103, 58, 183);
				break;
			case 5:
				fill(63, 81, 181);
				break;
			case 6:
				fill(33, 150, 243);
				break;
			case 7:
				fill(3, 169, 244);
				break;
			case 8:
				fill(0, 188, 212);
				break;
			case 9:
				fill(0, 150, 136);
				break;
			case 10:
				fill(76, 175, 80);
				break;
			case 11:
				fill(139, 195, 74);
				break;
			case 12:
				fill(205, 220, 57);
				break;
			case 13:
				fill(255, 235, 59);
				break;
			case 14:
				fill(255, 193, 7);
				break;
			case 15:
				fill(255, 152, 0);
				break;
		}
	} else if (state == "active") {
		switch (rnd) {
			case 0:
				fill(191, 54, 12);
				break;
			case 1:
				fill(183, 28, 28);
				break;
			case 2:
				fill(136, 14, 79);
				break;
			case 3:
				fill(74, 20, 140);
				break;
			case 4:
				fill(49, 27, 146);
				break;
			case 5:
				fill(26, 35, 126);
				break;
			case 6:
				fill(13, 71, 161);
				break;
			case 7:
				fill(1, 87, 155);
				break;
			case 8:
				fill(0, 96, 100);
				break;
			case 9:
				fill(0, 77, 64);
				break;
			case 10:
				fill(27, 94, 32);
				break;
			case 11:
				fill(51, 105, 30);
				break;
			case 12:
				fill(130, 119, 23);
				break;
			case 13:
				fill(245, 127, 23);
				break;
			case 14:
				fill(255, 111, 0);
				break;
			case 15:
				fill(230, 81, 0);
				break;
		}
	}
}