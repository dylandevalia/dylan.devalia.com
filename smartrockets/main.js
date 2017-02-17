var population;
var lifespan = 2000;
var dnaCounter = 0;
var target;
var obstacle, oWidth, oHeight;

var moveTarget = false;
var moveObstacle = false;

/**
 *  Creates canvas and objects
 */
function setup() {
	createCanvas(innerWidth, innerHeight);
	population = new Population(50);
	target = createVector(width / 2, height * 0.1); // Middle and 10% down
	obstacle = createVector(width / 2, height / 2);
	oWidth = width / 3;
	oHeight = 20;
}

/**
 *  Update loop and renders objects
 */
function draw() {
	background(66);
	noStroke();
	
	/*Draw target*/
	fill(244, 67, 54);
	ellipse(target.x, target.y, 48, 48);
	fill(255, 205, 210);
	ellipse(target.x, target.y, 32, 32);
	fill(244, 67, 54);
	ellipse(target.x, target.y, 16, 16);
	
	/* Draw obstacle */
	fill(3, 169, 244);
	rect(obstacle.x - oWidth / 2, obstacle.y - oHeight / 2, oWidth, oHeight);
	
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

function mousePressed() {
	if (mouseButton == LEFT) {
		if (dist(mouseX, mouseY, target.x, target.y) < 24) {
			moveTarget = true;
		} else if (
			(mouseX > obstacle.x - oWidth / 2 && mouseX < obstacle.x + oWidth / 2) &&
			(mouseY > obstacle.y - oHeight / 2 && mouseY < obstacle.y + oHeight / 2)
		) {
			moveObstacle = true;
		}
	}
}

function mouseDragged() {
	if (mouseButton == LEFT) {
		if (moveTarget) {
			target.x = mouseX;
			target.y = mouseY;
		}
		if (moveObstacle) {
			obstacle.x = mouseX;
			obstacle.y = mouseY;
		}
	}
}

function mouseReleased() {
	if (mouseButton == LEFT) {
		moveTarget = false;
		moveObstacle = false;
	}
}