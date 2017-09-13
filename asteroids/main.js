var ship;
var asteroids;
var lasers;

function setup() {
	createCanvas(innerWidth, innerHeight);
	start();
}

function start() {
	ship = new Starfleet();
	asteroids = [];
	for (var i = 0; i < 10; i++) {
		asteroids.push(new Asteroid());
	}
	lasers = [];
}

function draw() {
	background(66);
	// asteroids.forEach(function(a) {
	// 	//a.update();
	// 	a.draw();
	// });

	ship.update();
	/* Collision */
	for (var j = 0; j < asteroids.length; j++) {
		var a = asteroids[j];
		for (var i = 0; i < a.offsets.length; i++) {
			var pos = createVector(
				a.pos.x + ((a.r + a.offsets[i]) * cos(i * TWO_PI / a.offsets.length)),
				a.pos.y + ((a.r + a.offsets[i]) * sin(i * TWO_PI / a.offsets.length))
			);
			if (ship.checkIntersect(pos) || ship.checkIntersect) {
				start();
				return;
			}
		}
	};
	ship.draw();
}


function isOnScreen(pos) {
	if (pos.x > 0 && pos.x < width && pos.y > 0 && pos.y < height) {
		return true;
	}
	return false;
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		ship.turn(0.1);
	} else if (keyCode == LEFT_ARROW) {
		ship.turn(-0.1);
	} else if (keyCode == UP_ARROW) {
		ship.boost(true);
	} else if (keyCode == DOWN_ARROW) {
		ship.slow(true);
	} else if (keyCode == 32) {
		// lasers.push(new Laser());
	}
}

function keyReleased() {
	if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
		ship.turn(0);
	}

	if (keyCode == UP_ARROW) {
		ship.boost(false);
	}

	if (keyCode == DOWN_ARROW) {
		ship.slow(false);
	}
}
