var flock = [];

/* Sliders & text boxes */
var slide_population, text_population;
var slide_maxSpeed, text_maxSpeed;
var slide_maxForce, text_maxForce;
var btn_adv, isAdvShowing = true;
var label_sepDist, slide_sepDist, text_sepDist;
var label_aliDist, slide_aliDist, text_aliDist;
var label_cohDist, slide_cohDist, text_cohDist;
var label_sepMult, slide_sepMult, text_sepMult;
var label_aliMult, slide_aliMult, text_aliMult;
var label_cohMult, slide_cohMult, text_cohMult;
var label_objMult, slide_objMult, text_objMult;
var btn_reset;

function preload() {
	/* Population */
	slide_population = document.getElementById("slide_population");
	text_population = document.getElementById("text_population");
	text_population.value = slide_population.value;

	slide_population.oninput = function() {
		text_population.value = this.value;
		newFlock(this.value);
	};
	text_population.oninput = function() {
		slide_population.value = this.value;
		newFlock(this.value);
	};

	/* Max speed */
	slide_maxSpeed = document.getElementById("slide_maxSpeed");
	text_maxSpeed = document.getElementById("text_maxSpeed");
	text_maxSpeed.value = slide_maxSpeed.value;

	slide_maxSpeed.oninput = function() {
		text_maxSpeed.value = this.value;
		maxSpeed = this.value;
	};
	text_maxSpeed.oninput = function() {
		slide_maxSpeed.value = this.value;
		maxSpeed = this.value;
	};

	/* Max force */
	slide_maxForce = document.getElementById("slide_maxForce");
	text_maxForce = document.getElementById("text_maxForce");
	text_maxForce.value = slide_maxForce.value;

	slide_maxForce.oninput = function() {
		text_maxForce.value = this.value;
		maxForce = this.value;
	};
	text_maxForce.oninput = function() {
		slide_maxForce.value = this.value;
		maxForce = this.value;
	};

	/* Show advanced options */
	btn_adv = document.getElementById("btn_adv");
	btn_adv.onclick = function() {
		toggleAdv();
	}

	/* Separtation radius */
	label_sepDist = document.getElementById("label_sepDist");
	slide_sepDist = document.getElementById("slide_sepDist");
	text_sepDist = document.getElementById("text_sepDist");
	text_sepDist.value = slide_sepDist.value;

	slide_sepDist.oninput = function() {
		text_sepDist.value = this.value;
		sepDist = this.value;
	};
	text_sepDist.oninput = function() {
		slide_sepDist.value = this.value;
		sepDist = this.value;
	};

	/* Alignment radius */
	label_aliDist = document.getElementById("label_aliDist");
	slide_aliDist = document.getElementById("slide_aliDist");
	text_aliDist = document.getElementById("text_aliDist");
	text_aliDist.value = slide_aliDist.value;

	slide_aliDist.oninput = function() {
		text_aliDist.value = this.value;
		aliDist = this.value;
	};
	text_aliDist.oninput = function() {
		slide_aliDist.value = this.value;
		aliDist = this.value;
	};

	/* Cohesion radius */
	label_cohDist = document.getElementById("label_cohDist");
	slide_cohDist = document.getElementById("slide_cohDist");
	text_cohDist = document.getElementById("text_cohDist");
	text_cohDist.value = slide_cohDist.value;

	slide_cohDist.oninput = function() {
		text_cohDist.value = this.value;
		cohDist = this.value;
	};
	text_cohDist.oninput = function() {
		slide_cohDist.value = this.value;
		cohDist = this.value;
	};

	/* Separation force */
	label_sepMult = document.getElementById("label_sepMult");
	slide_sepMult = document.getElementById("slide_sepMult");
	text_sepMult = document.getElementById("text_sepMult");
	text_sepMult.value = slide_sepMult.value;

	slide_sepMult.oninput = function() {
		text_sepMult.value = this.value;
		sepMult = this.value;
	};
	text_sepMult.oninput = function() {
		slide_sepMult.value = this.value;
		sepMult = this.value;
	};

	/* Alignment force */
	label_aliMult = document.getElementById("label_aliMult");
	slide_aliMult = document.getElementById("slide_aliMult");
	text_aliMult = document.getElementById("text_aliMult");
	text_aliMult.value = slide_aliMult.value;

	slide_aliMult.oninput = function() {
		text_aliMult.value = this.value;
		aliMult = this.value;
	};
	text_aliMult.oninput = function() {
		slide_aliMult.value = this.value;
		aliMult = this.value;
	};

	/* Cohesion force */
	label_cohMult = document.getElementById("label_cohMult");
	slide_cohMult = document.getElementById("slide_cohMult");
	text_cohMult = document.getElementById("text_cohMult");
	text_cohMult.value = slide_cohMult.value;

	slide_cohMult.oninput = function() {
		text_cohMult.value = this.value;
		cohMult = this.value;
	};
	text_cohMult.oninput = function() {
		slide_cohMult.value = this.value;
		cohMult = this.value;
	};

	/* Objective force */
	label_objMult = document.getElementById("label_objMult");
	slide_objMult = document.getElementById("slide_objMult");
	text_objMult = document.getElementById("text_objMult");
	text_objMult.value = slide_objMult.value;

	slide_objMult.oninput = function() {
		text_objMult.value = this.value;
		objMult = this.value;
	};
	text_objMult.oninput = function() {
		slide_objMult.value = this.value;
		objMult = this.value;
	};

	/* Reset button */
	btn_reset = document.getElementById("btn_reset");
	btn_reset.onclick = function() {
		resetVals();
	}

	toggleAdv();
}

function toggleAdv() {
	isAdvShowing = !isAdvShowing;
	if (isAdvShowing) {
		btn_adv.value = "Hide Advanced";
		// Show adv options
		slide_sepDist.style.visibility = "visible";
		label_sepDist.style.visibility = "visible";
		slide_aliDist.style.visibility = "visible";
		label_aliDist.style.visibility = "visible";
		slide_cohDist.style.visibility = "visible";
		label_cohDist.style.visibility = "visible";
		slide_sepMult.style.visibility = "visible";
		label_sepMult.style.visibility = "visible";
		slide_aliMult.style.visibility = "visible";
		label_aliMult.style.visibility = "visible";
		slide_cohMult.style.visibility = "visible";
		label_cohMult.style.visibility = "visible";
		slide_objMult.style.visibility = "visible";
		label_objMult.style.visibility = "visible";
		btn_reset.style.visibility = "visible";
	} else {
		btn_adv.value = "Show Advanced";
		// Hide adv options
		slide_sepDist.style.visibility = "hidden";
		label_sepDist.style.visibility = "hidden";
		slide_aliDist.style.visibility = "hidden";
		label_aliDist.style.visibility = "hidden";
		slide_cohDist.style.visibility = "hidden";
		label_cohDist.style.visibility = "hidden";
		slide_sepMult.style.visibility = "hidden";
		label_sepMult.style.visibility = "hidden";
		slide_aliMult.style.visibility = "hidden";
		label_aliMult.style.visibility = "hidden";
		slide_cohMult.style.visibility = "hidden";
		label_cohMult.style.visibility = "hidden";
		slide_objMult.style.visibility = "hidden";
		label_objMult.style.visibility = "hidden";
		btn_reset.style.visibility = "hidden";
	}
}

function resetVals() {
	newFlock(15);
	slide_population.value = 15;
	text_population.value = 15;
	maxSpeed = 5;
	slide_maxSpeed.value = 5;
	text_maxSpeed.value = 5;
	maxForce = 0.1;
	slide_maxForce.value = 0.1;
	text_maxForce.value = 0.1;
	sepDist = 25;
	slide_sepDist.value = 25;
	text_sepDist.value = 25;
	aliDist = 50;
	slide_aliDist.value = 50;
	text_aliDist.value = 50;
	cohDist = 50;
	slide_cohDist.value = 50;
	text_cohDist.value = 50;
	sepMult = 1.5;
	slide_sepMult.value = 1.5;
	text_sepMult.value = 1.5;
	aliMult = 1.0;
	slide_aliMult.value = 1.0;
	text_aliMult.value = 1.0;
	cohMult = 1.0;
	slide_cohMult.value = 1.0;
	text_cohMult.value = 1.0;
	objMult = 1.5;
	slide_objMult.value = 1.5;
	text_objMult.value = 1.5;
}

function setup() {
	createCanvas(innerWidth, innerHeight);
	frameRate(60);

	newFlock(slide_population.value);

	curTarget = createVector();
}

function draw() {
	background(66);

	//	print(flock[0].pos + " " + flock[0].vel + " " + flock[0].acc);

	flock.forEach(function(bird) {
		bird.update(flock);
		bird.draw();
	});
}

function newFlock(noBirds) {
	flock = [];

	for (var i = 0; i < noBirds; i++) {
		flock[i] = new Bird();
	}
}

function keyPressed() {
	if (keyCode == CONTROL) {
		toggleNav();
	}
}
