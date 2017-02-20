function Pellet() {
	this.pos = createVector(floor(random(w)), floor(random(h))).mult(scl);
	this.color = Color.Material.red[floor(random(2, 8))];
	
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
	this.color.fill();
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
	this.color = Color.Material.red[floor(random(2, 8))];
};