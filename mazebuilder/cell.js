/**
 *  Creates a cell at a given column and row
 *  Cells have a top, left, bottom and right wall which can be turned on and off
 *
 *  @param col  Column index of the cell
 *  @param row  Row index of the cell
 */
function Cell(col, row) {
	this.col = col;
	this.row = row;
	this.x = col * scl;
	this.y = row * scl;
	
	this.active = false;
	this.visited = false;
	
	this.walls = [true, true, true, true];   // Top right bottom left
}

/**
 *  Renders the cell
 *  Grey if unvisited, base color if visited and dark color if currently active
 */
Cell.prototype.show = function() {
	if (this.active) {
		noStroke();
		fillColour("active");
		rect(this.x, this.y, scl, scl);
	} else if (this.visited) {
		noStroke();
		fillColour("visited");
		rect(this.x, this.y, scl, scl);
	}
	
	stroke(33);
	if (this.walls[GRID_TOP]) {
		line(this.x, this.y, this.x + scl, this.y);
	}
	if (this.walls[GRID_LEFT]) {
		line(this.x + scl, this.y, this.x + scl, this.y + scl);
	}
	if (this.walls[GRID_BOTTOM]) {
		line(this.x + scl, this.y + scl, this.x, this.y + scl);
	}
	if (this.walls[GRID_RIGHT]) {
		line(this.x, this.y + scl, this.x, this.y);
	}
};

/**
 *  Checks the cell's neighbours and stores the unvisited ones in an array which is then randomly chosen to return
 *  If no neighbours are unvisited, null is returned
 *
 *  @returns {Cell/*}   A randomly chosen neighbour which is unvisited || null
 */
Cell.prototype.checkNeighbours = function() {
	var neighbours = [];
	
	var top = grid[index(this.col, this.row - 1)];
	var right = grid[index(this.col + 1, this.row)];
	var bottom = grid[index(this.col, this.row + 1)];
	var left = grid[index(this.col - 1, this.row)];
	
	if (top && !top.visited) {
		neighbours.push(top);
	}
	if (right && !right.visited) {
		neighbours.push(right);
	}
	if (bottom && !bottom.visited) {
		neighbours.push(bottom);
	}
	if (left && !left.visited) {
		neighbours.push(left);
	}
	
	if (neighbours.length > 0) {
		return random(neighbours);
	} else {
		return null;
	}
};