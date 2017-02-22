var population;
var lifespan = 2000;
var dnaCounter = 0;
var target;
var obstacles = [];

var moveTarget = false;

/**
 *  Creates canvas and objects
 */
function setup() {
	createCanvas(innerWidth, innerHeight);
	
	population = new Population(50);
	target = createVector(width / 2, height * 0.1); // Middle and 10% down
	// obstacle = createVector(width / 2, height / 2);
	obstacles.push(new Obstacle(createVector(width / 2, height / 2), width / 3, height * 0.05));
	// oWidth = width / 3;
	// oHeight = 20;
}

/**
 *  Update loop and renders objects
 */
function draw() {
	background(66);
	noStroke();
	
	/* Draw obstacle */
	for (var i = 0; i < obstacles.length; i++) {
		obstacles[i].show();
	}
	if (newObstacle) {
		newObstacle.show();
	}
	
	/*Draw target*/
	Color.Material.red[5].fill();
	ellipse(target.x, target.y, 48, 48);
	Color.Material.red[1].fill();
	ellipse(target.x, target.y, 32, 32);
	Color.Material.red[5].fill();
	ellipse(target.x, target.y, 16, 16);
	
	/* Check if any rockets are still alive */
	var allFinished = true;
	for (var i = 0; i < population.rockets.length; i++) {
		if (!population.rockets[i].dead && !population.rockets[i].completed) {
			allFinished = false;
			break;
		}
	}
	
	/* If all rockets are dead or have reached lifespan generate new genes */
	if (allFinished || lifespan == dnaCounter) {
		population.evalFitness();
		population.naturalSelection();
		dnaCounter = 0;
	}
	
	/* Update rocket physics and draw */
	population.updateDraw();
	dnaCounter++;
}

var newObstacle;

function mousePressed() {
	if (mouseButton == LEFT) {
		if (dist(mouseX, mouseY, target.x, target.y) < 24) {
			moveTarget = true;
		} else {
			for (var i = 0; i < obstacles.length; i++) {
				if (obstacles[i].hit(mouseX, mouseY)) {
					obstacles[i].move = true;
					break;
				}
			}
		}
	} else if (mouseButton == RIGHT) {
		newObstacle = new Obstacle(createVector(mouseX, mouseY), 10, 10, true);
	} else if (mouseButton == CENTER) {
		for (var i = 0; i < obstacles.length; i++) {
			if (obstacles[i].hit(mouseX, mouseY)) {
				obstacles.splice(i, 1);
				break;
			}
		}
	}
}

function mouseDragged() {
	if (mouseButton == LEFT) {
		if (moveTarget) {
			target.x = mouseX;
			target.y = mouseY;
		}
		for (var i = 0; i < obstacles.length; i++) {
			if (obstacles[i].move) {
				obstacles[i].pos.x = mouseX;
				obstacles[i].pos.y = mouseY;
			}
		}
	} else if (mouseButton == RIGHT) {
		newObstacle.w = mouseX - newObstacle.pos.x;
		newObstacle.h = mouseY - newObstacle.pos.y;
	}
}

function mouseReleased() {
	if (mouseButton == LEFT) {
		moveTarget = false;
		for (var i = 0; i < obstacles.length; i++) {
			obstacles[i].move = false;
		}
	} else if (mouseButton == RIGHT) {
		var o = newObstacle.finish();
		if (o) {
			obstacles.push(o);
		}
	}
}