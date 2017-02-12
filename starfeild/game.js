var stars = [];
var speed = 10;

function setup() {
	createCanvas(innerWidth, innerHeight);
	for (var i = 0; i < 500; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(66);
	//noStroke();
	
	translate(width / 2, height / 2);
	
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
}

function mousePressed() {
	if (mouseButton == LEFT) {
		speed += 10;
		if (speed > 100) {
			speed = 10;
		}
	}
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}