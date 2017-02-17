function RGBColor(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	
	this.p5_fill = function() {
		fill(this.r, this.g, this.b);
	}
}

var materialRed = [
	new RGBColor(255, 235, 238),    // 50
	new RGBColor(255, 205, 210),    // 100
	new RGBColor(239, 154, 154),    // 200
	new RGBColor(229, 115, 115),    // 300
	new RGBColor(239, 83, 80),      // 400
	new RGBColor(244, 67, 54),      // 500
	new RGBColor(229, 57, 53),      // 600
	new RGBColor(211, 47, 47),      // 700
	new RGBColor(198, 40, 40),      // 800
	new RGBColor(183, 28, 28)       // 900
];
var materialPink = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialPurple = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialDeepPurple = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialIndigo = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialBlue = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialLightBlue = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialCyan = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialTeal = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialGreen = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialLightGreen = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialLime = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialYellow = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialAmber = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialOrange = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialDeepOrange = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialBrown = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialGray = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];
var materialBlueGray = [
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0),
	new RGBColor(255, 0, 0)
];

var materialColors = [
	materialRed, materialPink,
	materialPurple, materialDeepPurple,
	materialIndigo, materialBlue,
	materialLightBlue, materialCyan,
	materialTeal, materialGreen,
	materialLightGreen, materialLime,
	materialYellow, materialAmber,
	materialOrange, materialDeepOrange,
	materialBrown, materialGray,
	materialBlueGray
];