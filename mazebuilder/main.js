var scl = 50;
var cols = Math.floor(innerWidth / scl);
var rows = Math.floor(innerHeight / scl);

var grid = [];
var current;

var stack = [];

var GRID_TOP = 0;
var GRID_LEFT = 1;
var GRID_BOTTOM = 2;
var GRID_RIGHT = 3;

var cellColor = Color.Material.getRandomColor();
var showActive = true;
var showStack = false;

function setup() {
	createCanvas(cols * scl, rows * scl);
	
	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			grid.push(new Cell(i, j));
		}
	}
	
	current = grid[0];
	current.beenVisited = true;
	current.isActive = true;
}

function draw() {
	background(66);
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
	
	
	var next = current.checkNeighbours();
	if (next) {
		next.beenVisited = true;
		current.onStack = true;
		stack.push(current);
		removeWalls(current, next);
		
		current.isActive = false;
		current = next;
		current.isActive = true;
	} else if (stack.length > 0) {
		current.isActive = false;
		current = stack.pop();
		current.onStack = false;
		current.isActive = true;
	} else {
		current.isActive = false;
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

function keyPressed() {
	if (keyCode == 65 || keyCode == 97) {           // 'A' || 'a'
		showActive = !showActive;
	} else if (keyCode == 83 || keyCode == 115) {   // 'S' || 's'
		showStack = !showStack;
	}
}