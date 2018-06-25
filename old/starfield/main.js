var stars = [];
var speed = 10;
var decelerate = false;
var targetSpeed = speed;
var tmpSpeed;

function setup() {
	createCanvas(innerWidth, innerHeight);
	for (var i = 0; i < 500; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(66);
	translate(width / 2, height / 2);
	
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
	
	if (decelerate && frameCount % 10 === 0) {
		speed -= 10;
		if (speed === 10) {
			speed = 10;
			decelerate = false;
		}
	}
}

function mousePressed() {
	if (mouseButton === LEFT) {
		speed += 10;
	} else if (mouseButton === RIGHT) {
		decelerate = true;
		targetSpeed -= floor(speed / 3);
		tmpSpeed = speed;
	}
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}