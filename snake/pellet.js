function Pellet() {
	this.pos = createVector(floor(random(w)), floor(random(h))).mult(scl);
	this.col = floor(random(7));
	
	// this.getFreeTile = function(snake) {
	// 	var tmp;
	// 	var d = -1;
	// 	while (d < 1) {
	// 		tmp = createVector(floor(random(gridSize)), floor(random(gridSize))).mult(scl);
	// 		d = dist(snake.pos.x, snake.pos.y, tmp.x, tmp.y);
	//
	// 		for (var i = 0; d > 1 && i < snake.tail.length; i++) {
	// 			d = dist(snake.tail[i].x, snake.tail[i].y, tmp.x, tmp.y)
	// 		}
	// 	}
	//
	// 	return tmp;
	// }
}

/**
 *  Shows the pellet object
 */
Pellet.prototype.show = function() {
	switch (this.col) {
		case 0:
			fill(179, 229, 252);
			break;
		case 1:
			fill(129, 212, 250);
			break;
		case 2:
			fill(79, 159, 247);
			break;
		case 3:
			fill(41, 182, 246);
			break;
		case 4:
			fill(3, 169, 244);
			break;
		case 5:
			fill(3, 155, 229);
			break;
		case 6:
			fill(2, 136, 209);
			break;
	}
	rect(this.pos.x, this.pos.y, scl, scl);
};

/**
 *  Seclects a new position if it has been eaten
 *  @param snake
 */
Pellet.prototype.eaten = function(snake) {
	/* Move to new position */
	this.pos.x = floor(random(w)) * scl;
	this.pos.y = floor(random(h)) * scl;
	
	/* Change colour */
	this.col = floor(random(7));
};