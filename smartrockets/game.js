var population;
var lifespan = 500;
var dnaCounter = 0;
var target;

/**
 *  Creates canvas and objects
 */
function setup() {
	createCanvas(innerWidth, innerHeight);
	population = new Population(25);
	target = createVector(width / 2, height * 0.1); // Middle and 10% down
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
	
	/* Check if any rockets are still alive */
	var allDead = true;
	for (var i = 0; i < population.rockets.length; i++) {
		if (!population.rockets[i].dead) {
			allDead = false;
			break;
		}
	}
	
	/* If all rockets are dead or have reached lifespan generate new genes */
	if (allDead || lifespan == dnaCounter) {
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
		target.x = mouseX;
		target.y = mouseY;
	}
}