var state;

var scl = 20;
// var gridSize = Math.min(Math.floor(innerWidth / scl), Math.floor(innerHeight / scl));
var w = Math.floor(innerWidth / scl);
var h = Math.floor(innerHeight / scl);

var snake;
var food;
var counter;

/**
 *  Creates canvas and all object on page load
 */
function setup() {
	/* Create objects */
	createCanvas(w * scl, h * scl);
	// frameRate(60);
	init();
}

/**
 *  Initialises game board
 */
function init() {
	state = "PLAY";
	counter = 15;
	snake = new Snake();
	food = new Pellet();
}

/**
 *  Updates and draws all objects
 */
function draw() {
	background(66);
	strokeWeight(0);
	
	if (state === "PLAY") {
		state_play();
	} else if (state === "DEATH") {
		state_dead();
	} else if (state === "WIN") {
		state_won();
	}
}

/**
 *  Runs the game
 */
function state_play() {
	if (frameCount % counter === 0) {
		/* Update and show snake */
		snake.update();
		snake.death();
		snake.eat(food);
	}
	
	/* Show objects */
	food.show();
	snake.show();
}

/**
 *  When the player dies
 */
function state_dead() {
	print("Dead");
	background(255, 0, 0);
	init();
}

/**
 *  When the game is won
 */
function state_won() {
	print("Won");
}

/**
 *  Event listener for all key presses
 *  Uses arrow keys and (WASD) to control
 */
function keyPressed() {
	if (keyCode === UP_ARROW || keyCode === 87) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW || keyCode === 83) {
		snake.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW || keyCode === 68) {
		snake.dir(1, 0);
	} else if (keyCode === LEFT_ARROW || keyCode === 65) {
		snake.dir(-1, 0);
	}
}