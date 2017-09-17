function Cell(row, col) {
	this.row = row;
	this.col = col;
	
	this.isAlive = false;
	
	this.toLive = false;
	this.toDie = false;
}

Cell.prototype.draw = function () {
	stroke(0);
	if (state_play && this.isAlive) {
		cellColour[5].fill();
	} else if (this.isAlive) {
		cellColour[9].fill();
	} else {
		fill(66);
	}
	rect(this.col * scl, this.row * scl, scl, scl);
};

Cell.prototype.update = function () {
	var noAlive = this.neighboursAlive();
	// print(noAlive);
	if (this.isAlive) {
		if (noAlive < 2 || noAlive > 3) {
			this.toDie = true;
			// print(this.row + " " + this.col + ": die");
			// print(noAlive);
		}
	} else {
		if (noAlive === 3) {
			this.toLive = true;
			// print(row + " " + col + ": live");
			// print(noAlive);
		}
	}
};

Cell.prototype.neighboursAlive = function () {
	var alive = 0;
	
	/* for 3x3 area around cell */
	for (var row = this.row - 1; row <= this.row + 1; row++) {
		for (var col = this.col - 1; col <= this.col + 1; col++) {
			if (this.row === 1 && this.col === 1) {
				// print(row + " " + col);
			}
			
			/* Not this cell */
			if (!(row === this.row && col === this.col)) {
				/* Catch out of bounds */
				if (!(row < 0 || row > rows - 1 || col < 0 || col > cols - 1)) {
					// print(row + " " + col);
					if (grid[row][col].isAlive) {
						alive++;
					}
				} else {
					// print("failed: " + row + " " + col);
				}
			} else {
				// print("failed- " + row + " " + col);
			}
		}
		// print("---")
	}
	return alive;
};