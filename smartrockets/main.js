var population;
var lifespan = 2000;
var dnaCounter = 0;
var target;
var obstacles = [];

var moveTarget = false;

var thrustStrength = 0.1;
var mutationChance = 0.01;

var sidebarButton = new SidebarButton();

/* Sliders & text boxes */
var slide_population, text_population;
var slide_thrust, text_thrust;
var slide_mutation, text_mutation;
/* Buttons */
var btn_kill, btn_restart;

function preload() {
	/* Population */
	slide_population = document.getElementById("slide_population");
	text_population = document.getElementById("text_population");
	text_population.value = slide_population.value;
	
	slide_population.oninput = function () {
		text_population.value = this.value;
		population = new Population(this.value);
		dnaCounter = 0;
	};
	text_population.oninput = function () {
		slide_population.value = this.value;
		population = new Population(this.value);
		dnaCounter = 0;
	};
	
	/* Thrust strength */
	slide_thrust = document.getElementById("slide_thrust");
	text_thrust = document.getElementById("text_thrust");
	text_thrust.value = slide_thrust.value;
	
	slide_thrust.oninput = function () {
		text_thrust.value = this.value;
		thrustStrength = this.value;
		// population.rockets.forEach(function(rocket) {
		// 	rocket.dna.genes.forEach(function(gene) {
		// 		gene.setMag(text_thrust.value);
		// 	})
		// })
	};
	text_thrust.oninput = function () {
		slide_thrust.value = this.value;
		thrustStrength = this.value;
		// population.rockets.forEach(function(rocket) {
		// 	rocket.dna.genes.forEach(function(gene) {
		// 		gene.setMag(text_thrust.value);
		// 	})
		// })
	};
	
	/* Mutation Chance*/
	slide_mutation = document.getElementById("slide_mutation");
	text_mutation = document.getElementById("text_mutation");
	text_mutation.value = slide_mutation.value;
	
	slide_mutation.oninput = function () {
		text_mutation.value = this.value;
		mutationChance = this.value;
	};
	text_mutation.oninput = function () {
		slide_mutation.value = this.value;
		mutationChance = this.value;
	};
	
	/* Kill rockets */
	btn_kill = document.getElementById("btn_kill");
	btn_kill.onclick = function () {
		newGeneration();
	};
	
	/* Restart */
	btn_restart = document.getElementById("btn_restart");
	btn_restart.onclick = function () {
		population = new Population(text_population.value);
	};
}

/**
 *  Creates canvas and objects
 */
function setup() {
	createCanvas(innerWidth, innerHeight);
	
	population = new Population(50);
	
	target = createVector(width / 2, height * 0.1); // Middle and 10% down
	obstacles.push(new Obstacle(createVector(width / 2, height / 2), width / 3, height * 0.05));
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
	if (allFinished || lifespan === dnaCounter) {
		newGeneration();
	}
	
	/* Update rocket physics and draw */
	population.updateDraw();
	dnaCounter++;
	
	sidebarButton.draw();
}

function newGeneration() {
	population.evalFitness();
	population.naturalSelection();
	dnaCounter = 0;
}

var newObstacle;
function mousePressed() {
	if (mouseButton === LEFT) {
		if (sidebarButton.checkHit(mouseX, mouseY)) {
			openNav();
		} else if (dist(mouseX, mouseY, target.x, target.y) < 24) {
			moveTarget = true;
		} else {
			for (var i = 0; i < obstacles.length; i++) {
				if (obstacles[i].hit(mouseX, mouseY)) {
					obstacles[i].move = true;
					break;
				}
			}
		}
	} else if (mouseButton === RIGHT) {
		newObstacle = new Obstacle(createVector(mouseX, mouseY), 10, 10, true);
	} else if (mouseButton === CENTER) {
		for (var i = 0; i < obstacles.length; i++) {
			if (obstacles[i].hit(mouseX, mouseY)) {
				obstacles.splice(i, 1);
				break;
			}
		}
	}
}

function mouseDragged() {
	if (mouseButton === LEFT) {
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
	} else if (mouseButton === RIGHT) {
		newObstacle.w = mouseX - newObstacle.pos.x;
		newObstacle.h = mouseY - newObstacle.pos.y;
	}
}

function mouseReleased() {
	if (mouseButton === LEFT) {
		moveTarget = false;
		for (var i = 0; i < obstacles.length; i++) {
			obstacles[i].move = false;
		}
	} else if (mouseButton === RIGHT) {
		var o = newObstacle.finish();
		if (o) {
			obstacles.push(o);
		}
	}
}