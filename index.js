let bg, canvas, context, wig, shift;

window.onload = () => {
	setTimeout(() => {
		document.querySelector('body').classList.add('blur-background');
	}, 100);
	
	const name = document.getElementById("main-text");
	setTimeout(() => {
		name.classList.add('shown');
		setTimeout(() => wig = setInterval(() => wiggle(name), 333), 500);
	}, 500);
	
	const footer = document.getElementsByClassName('footer-content');
	for (let i = 0; i < footer.length; i++) {
		const f = footer[i];
		setTimeout(() => {
			f.classList.add('shown');
		}, 1000 + (150 * i));
	}
	
	document.getElementById('about-button').onclick = () => showExtra(document.getElementById('about'));
	document.getElementById('contact-button').onclick = () => showExtra(document.getElementById('contact'));
	document.getElementById('cv-button').onclick = () => showExtra(document.getElementById('cv'));
	
	bg = document.getElementById('background');
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	initialise();
};

function wiggle(a) {
	if (a.classList.contains('shown')) {
		a.style.transition = 'all 0s';
	}
	
	const b = getRandom(-.75, .75);
	let c; // = getRandom(-.75, .75);
	if (shift === true) {
		c = getRandom(-.75 - (canvas.height * .25), .75 - (canvas.height * .25))
	} else {
		c = getRandom(-.75, .75);
	}
	const d = getRandom(-0.1, 0.1);
	const e = getRandom(0.99, 1.01);
	const f = getRandom(-0.25, 0.25);
	const g = getRandom(-0.25, 0.25);
	
	a.style.transform =
		'translate(' + b + 'px,' + c + 'px)' +
		' rotate(' + d + 'deg)' +
		' skew(' + f + 'deg,' + g + 'deg)' +
		' scale(' + e + ')';
	
	a.style.msTransform =
		'translate(' + b + 'px,' + c + 'px)' +
		' rotate(' + d + 'deg)' +
		' skew(' + f + 'deg,' + g + 'deg)' +
		' scale(' + e + ')';
	
	a.style.WebkitTransform =
		'translate(' + b + 'px,' + c + 'px)' +
		' rotate(' + d + 'deg)' +
		' skew(' + f + 'deg,' + g + 'deg)' +
		' scale(' + e + ')';
}

let currentExtra;

function showExtra(a) {
	currentExtra = a;
	a.classList.remove('hidden');
	a.classList.add('shown');
	document.querySelector('html').classList.add('expand-borders');
	document.querySelector('html').classList.add('dim-background');
	document.addEventListener('click', hideExtra);
	
	const name = document.getElementById("main-text");
	clearInterval(wig);
	wig = -1;
	name.style.transition = 'all 1s';
	name.style.transform = 'translateY(-' + canvas.height * .25 + 'px)';
	shift = true;
	setTimeout(() => {
		if (wig < 0) wig = setInterval(() => wiggle(name), 333)
	}, 1000);
}

let clicked = false;

function hideExtra() {
	if (clicked === true) {
		currentExtra.classList.remove('shown');
		currentExtra.classList.add('hidden');
		document.querySelector('html').classList.remove('expand-borders');
		document.querySelector('html').classList.remove('dim-background');
		document.removeEventListener('click', hideExtra);
		clicked = false;
		
		const name = document.getElementById("main-text");
		clearInterval(wig);
		wig = -1;
		name.style.transition = 'all 1s';
		name.style.transform = 'translateY(0px)';
		shift = false;
		setTimeout(() => {
			if (wig < 0) wig = setInterval(() => wiggle(name), 333)
		}, 1000);
	} else {
		clicked = true
	}
}

let ps = [];

function initialise() {
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
	
	for (let i = 0; i < Math.min(canvas.width, canvas.height) / 5; i++) {
		ps.push(new Particle(i));
	}
	
	window.requestAnimationFrame(redraw);
	
	const updatesPerSec = 30;
	setInterval(() => update(), 1000 / updatesPerSec);
}

function update() {
	ratio -= 0.005;
	
	for (const p of ps) {
		p.update();
	}
}

function redraw() {
	drawBg();
	
	for (const p of ps) {
		p.draw();
	}
	
	const w = canvas.width / 2;
	const h = canvas.height / 2;
	const grd = context.createRadialGradient(w, h, w * 2, w, h, 100);
	grd.addColorStop(0, "#00000033");
	grd.addColorStop(1, "#00000019");
	
	context.fillStyle = grd;
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	window.requestAnimationFrame(redraw);
}

function resizeCanvas() {
	canvas.height = window.innerHeight * .99;
	canvas.width = bg.clientWidth;
	redraw();
}

let colors = [
	'rgb(244,067,054)', 'rgb(233,030,099)', 'rgb(156,039,176)', 'rgb(103,058,183)',
	'rgb(063,081,181)', 'rgb(033,150,243)', 'rgb(003,169,244)', 'rgb(000,188,212)',
	'rgb(000,150,136)', 'rgb(076,175,080)', 'rgb(139,195,074)', 'rgb(205,220,057)',
	'rgb(255,235,059)', 'rgb(255,193,007)', 'rgb(255,152,000)', 'rgb(255,087,034)'
];

let bgi = Math.floor(getRandom(0, colors.length));
let ratio = 0;

function drawBg() {
	const c = colors[bgi].slice(4, -1);
	const d = colors[(bgi + 1) % colors.length].slice(4, -1);
	
	const r1 = c.slice(0, 3);
	const g1 = c.slice(4, 7);
	const b1 = c.slice(8, 11);
	
	const r2 = d.slice(0, 3);
	const g2 = d.slice(4, 7);
	const b2 = d.slice(8, 11);
	
	if (ratio < 0) {
		ratio = 1;
		bgi = (bgi + 1) % colors.length;
	}
	
	context.fillStyle = 'rgb(' +
		lerp(ratio, r1, r2) + ', ' +
		lerp(ratio, g1, g2) + ', ' +
		lerp(ratio, b1, b2) +
		')';
	
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	const grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
	grd.addColorStop(0, "rgba(0, 0, 0, 0.5)");
	grd.addColorStop(1, "rgba(0, 0, 0, 0)");
	
	context.fillStyle = grd;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function getRandom(a, b) {
	return Math.random() * (b - a) + a;
}

function lerp(r, a, b) {
	return Math.floor(Math.abs(r * a) + Math.abs((1 - r) * b));
}

function map(n, start1, stop1, start2, stop2) {
	return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

class Particle {
	constructor(i) {
		this.x = getRandom(-200, canvas.width + 200);
		this.y = getRandom(-200, canvas.height + 200);
		
		const speed = 0.5;
		this.vx = getRandom(-speed, speed);
		this.vy = getRandom(-speed, speed);
		
		this.i = i;
	}
	
	update() {
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.x < -200) {
			this.x += canvas.width + 400;
		} else if (this.x > canvas.width + 200) {
			this.x -= canvas.width + 400;
		}
		
		if (this.y < -200) {
			this.y += canvas.height + 400;
		} else if (this.y > canvas.height + 200) {
			this.y -= canvas.height + 400;
		}
	}
	
	draw() {
		context.beginPath();
		context.arc(this.x, this.y, 2, 0, 2 * Math.PI);
		
		context.fillStyle = 'rgba(250, 250, 250, 0.5)';
		context.fill();
		
		for (let i = this.i + 1; i < ps.length; i++) {
			const dist = ps[i].dist(this.x, this.y);
			if (dist < 200) {
				context.beginPath();
				context.strokeStyle = 'rgba(250, 250, 250, ' + map(dist, 0, 200, 1, 0) + ')';
				context.moveTo(this.x, this.y);
				context.lineTo(ps[i].x, ps[i].y);
				context.stroke();
			}
		}
		
	}
	
	dist(x, y) {
		return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
	}
}
