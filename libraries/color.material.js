function Color(r, g, b, a) {
	this.r = r;
	this.g = g;
	this.b = b;
	if (typeof a === "undefined") {
		this.a = 255;
	} else {
		this.a = a;
	}
}

Color.prototype.fill = function(a) {
	if (a) {
		fill(this.r, this.g, this.b, a);
	} else {
		fill(this.r, this.g, this.b, 255);
	}
};

Color.prototype.stroke = function(a) {
	if (a) {
		stroke(this.r, this.g, this.b, a);
	} else {
		stroke(this.r, this.g, this.b, 255);
	}
};

Color.Material = function() {
	Color.Material.prototype = Color.prototype;
};

Color.Material.red = [
	new Color(255, 235, 238),   //  50
	new Color(255, 205, 210),   // 100
	new Color(239, 154, 154),   // 200
	new Color(229, 115, 115),   // 300
	new Color(239, 83, 80),     // 400
	new Color(244, 67, 54),     // 500
	new Color(229, 57, 53),     // 600
	new Color(211, 47, 47),     // 700
	new Color(198, 40, 40),     // 800
	new Color(183, 28, 28)      // 900
];
Color.Material.pink = [
	new Color(252, 228, 236),   //  50
	new Color(248, 187, 208),   // 100
	new Color(244, 143, 177),   // 200
	new Color(240, 98, 146),    // 300
	new Color(236, 64, 122),    // 400
	new Color(233, 30, 99),     // 500
	new Color(216, 27, 96),     // 600
	new Color(194, 24, 91),     // 700
	new Color(173, 20, 87),     // 800
	new Color(136, 14, 79)      // 900
];
Color.Material.purple = [
	new Color(243, 229, 245),   //  50
	new Color(225, 190, 231),   // 100
	new Color(206, 147, 216),   // 200
	new Color(186, 104, 200),   // 300
	new Color(171, 71, 188),    // 400
	new Color(156, 39, 176),    // 500
	new Color(142, 36, 170),    // 600
	new Color(123, 31, 162),    // 700
	new Color(106, 27, 154),    // 800
	new Color(74, 20, 140)      // 900
];
Color.Material.deep_purple = [
	new Color(237, 231, 246),   //  50
	new Color(209, 196, 233),   // 100
	new Color(179, 157, 219),   // 200
	new Color(149, 117, 205),   // 300
	new Color(126, 87, 194),    // 400
	new Color(103, 58, 183),    // 500
	new Color(94, 53, 177),     // 600
	new Color(81, 45, 168),     // 700
	new Color(69, 39, 160),     // 800
	new Color(49, 27, 146)      // 900
];
Color.Material.indigo = [
	new Color(232, 234, 246),   //  50
	new Color(197, 202, 233),   // 100
	new Color(159, 168, 218),   // 200
	new Color(121, 134, 203),   // 300
	new Color(92, 107, 192),    // 400
	new Color(63, 81, 181),     // 500
	new Color(57, 73, 171),     // 600
	new Color(48, 63, 159),     // 700
	new Color(40, 53, 147),     // 800
	new Color(26, 35, 126)      // 900
];
Color.Material.blue = [
	new Color(227, 242, 253),   //  50
	new Color(187, 222, 251),   // 100
	new Color(144, 202, 249),   // 200
	new Color(100, 181, 246),   // 300
	new Color(66, 165, 245),    // 400
	new Color(33, 150, 243),    // 500
	new Color(30, 136, 229),    // 600
	new Color(25, 118, 210),    // 700
	new Color(21, 101, 192),    // 800
	new Color(13, 71, 161)      // 900
];
Color.Material.light_blue = [
	new Color(225, 245, 254),   //  50
	new Color(179, 229, 252),   // 100
	new Color(129, 212, 250),   // 200
	new Color(79, 195, 247),    // 300
	new Color(41, 182, 246),    // 400
	new Color(3, 169, 244),     // 500
	new Color(3, 155, 229),     // 600
	new Color(2, 136, 209),     // 700
	new Color(2, 119, 189),     // 800
	new Color(1, 87, 155)       // 900
];
Color.Material.cyan = [
	new Color(224, 247, 250),   //  50
	new Color(178, 235, 242),   // 100
	new Color(128, 222, 234),   // 200
	new Color(77, 208, 225),    // 300
	new Color(38, 198, 218),    // 400
	new Color(0, 188, 212),     // 500
	new Color(0, 172, 193),     // 600
	new Color(0, 151, 167),     // 700
	new Color(0, 131, 143),     // 800
	new Color(0, 96, 100)       // 900
];
Color.Material.teal = [
	new Color(224, 242, 241),   //  50
	new Color(178, 223, 219),   // 100
	new Color(128, 203, 196),   // 200
	new Color(77, 182, 172),    // 300
	new Color(38, 166, 154),    // 400
	new Color(0, 150, 136),     // 500
	new Color(0, 137, 123),     // 600
	new Color(0, 121, 107),     // 700
	new Color(0, 105, 92),      // 800
	new Color(0, 77, 64)        // 900
];
Color.Material.green = [
	new Color(232, 245, 233),   //  50
	new Color(200, 230, 201),   // 100
	new Color(165, 214, 167),   // 200
	new Color(129, 199, 132),   // 300
	new Color(102, 187, 106),   // 400
	new Color(76, 175, 80),     // 500
	new Color(67, 160, 71),     // 600
	new Color(56, 142, 60),     // 700
	new Color(46, 125, 50),     // 800
	new Color(27, 94, 32)       // 900
];
Color.Material.light_green = [
	new Color(241, 248, 233),   //  50
	new Color(220, 237, 200),   // 100
	new Color(197, 225, 165),   // 200
	new Color(174, 213, 129),   // 300
	new Color(156, 204, 101),   // 400
	new Color(139, 195, 74),    // 500
	new Color(124, 179, 66),    // 600
	new Color(104, 159, 56),    // 700
	new Color(85, 139, 47),     // 800
	new Color(51, 105, 30)      // 900
];
Color.Material.lime = [
	new Color(249, 251, 231),   //  50
	new Color(240, 244, 195),   // 100
	new Color(230, 238, 156),   // 200
	new Color(220, 231, 117),   // 300
	new Color(212, 225, 87),    // 400
	new Color(205, 220, 57),    // 500
	new Color(192, 202, 51),    // 600
	new Color(175, 180, 43),    // 700
	new Color(158, 157, 36),    // 800
	new Color(130, 119, 23)     // 900
];
Color.Material.yellow = [
	new Color(255, 253, 231),   //  50
	new Color(255, 249, 196),   // 100
	new Color(255, 245, 157),   // 200
	new Color(255, 241, 118),   // 300
	new Color(255, 238, 88),    // 400
	new Color(255, 235, 59),    // 500
	new Color(253, 216, 53),    // 600
	new Color(251, 192, 45),    // 700
	new Color(249, 168, 37),    // 800
	new Color(245, 127, 23)     // 900
];
Color.Material.amber = [
	new Color(255, 248, 225),   //  50
	new Color(255, 236, 179),   // 100
	new Color(255, 224, 130),   // 200
	new Color(255, 213, 79),    // 300
	new Color(255, 202, 40),    // 400
	new Color(255, 193, 7),     // 500
	new Color(255, 179, 0),     // 600
	new Color(255, 160, 0),     // 700
	new Color(255, 143, 0),     // 800
	new Color(255, 111, 0)      // 900
];
Color.Material.orange = [
	new Color(255, 243, 224),   //  50
	new Color(255, 224, 178),   // 100
	new Color(255, 204, 128),   // 200
	new Color(255, 183, 77),    // 300
	new Color(255, 167, 38),    // 400
	new Color(255, 152, 0),     // 500
	new Color(251, 140, 0),     // 600
	new Color(245, 124, 0),     // 700
	new Color(239, 108, 0),     // 800
	new Color(230, 81, 0)       // 900
];
Color.Material.deep_orange = [
	new Color(251, 233, 231),   //  50
	new Color(255, 204, 188),   // 100
	new Color(255, 171, 145),   // 200
	new Color(255, 138, 101),   // 300
	new Color(255, 112, 67),    // 400
	new Color(255, 87, 34),     // 500
	new Color(244, 81, 30),     // 600
	new Color(230, 74, 25),     // 700
	new Color(216, 67, 21),     // 800
	new Color(191, 54, 12)      // 900
];
Color.Material.brown = [
	new Color(239, 235, 233),   //  50
	new Color(215, 204, 200),   // 100
	new Color(188, 170, 164),   // 200
	new Color(161, 136, 127),   // 300
	new Color(141, 110, 99),    // 400
	new Color(121, 85, 72),     // 500
	new Color(109, 76, 65),     // 600
	new Color(93, 64, 55),      // 700
	new Color(78, 52, 46),      // 800
	new Color(62, 39, 35)       // 900
];
Color.Material.grey = [
	new Color(250, 250, 250),   //  50
	new Color(245, 245, 245),   // 100
	new Color(238, 238, 238),   // 200
	new Color(224, 224, 224),   // 300
	new Color(189, 189, 189),   // 400
	new Color(158, 158, 158),   // 500
	new Color(117, 117, 117),   // 600
	new Color(97, 97, 97),      // 700
	new Color(66, 66, 66),      // 800
	new Color(33, 33, 33)       // 900
];
Color.Material.blue_grey = [
	new Color(236, 239, 241),   //  50
	new Color(207, 216, 220),   // 100
	new Color(176, 190, 197),   // 200
	new Color(144, 164, 174),   // 300
	new Color(120, 144, 156),   // 400
	new Color(96, 125, 139),    // 500
	new Color(84, 110, 122),    // 600
	new Color(69, 90, 100),     // 700
	new Color(55, 71, 79),      // 800
	new Color(38, 50, 56)       // 900
];

Color.Material.numberOfShades = 10;

Color.Material.all = [
	Color.Material.red,
	Color.Material.pink,
	Color.Material.purple,
	Color.Material.deep_purple,
	Color.Material.indigo,
	Color.Material.blue,
	Color.Material.light_blue,
	Color.Material.cyan,
	Color.Material.teal,
	Color.Material.green,
	Color.Material.light_green,
	Color.Material.lime,
	Color.Material.yellow,
	Color.Material.amber,
	Color.Material.orange,
	Color.Material.deep_orange,
	Color.Material.brown,
	Color.Material.grey,
	Color.Material.blue_grey
];

Color.Material.fill = function(shade, alpha) {
	if (!shade || shade < 0 || shade > 10) {
		shade = Math.floor(Math.random() * Color.Material.numberOfShades);
	}
	if (!alpha || alpha < 0 || alpha > 255) {
		alpha = 255;
	}
	var color = Math.floor(Math.random() * Color.Material.all.length);
	
	Color.Material.all[color][shade].fill(alpha);
};

/**
 *  Gets a random color from the material library
 *
 *  @returns {*}    A random material color
 */
Color.Material.getRandomColor = function() {
	return Color.Material.all[Math.floor(Math.random() * Color.Material.all.length)];
};

/**
 *  Gets a random color and returns a random shade
 *
 *  @returns {*}    A random shade from a random color
 */
Color.Material.getRandomShade = function() {
	return Color.Material.getRandomColor()[Math.floor(Math.random() * Color.Material.numberOfShades)];
};

/**
 *  Gets a random color and returns the given shade
 *
 *  @param shade    The shade of the color to return
 *  @returns {*}    A random color's given shade
 */
Color.Material.getRandomColorOfShade = function(shade) {
	return Color.Material.getRandomColor()[shade];
};

/**
 *  Gets a random shade of the given color
 *
 *  @param color    The color which to pick a random shade
 *  @returns {*}    The random shade of the given color
 */
Color.Material.getRandomShadeOfColor = function(color) {
	return color[Math.floor(Math.random() * Color.Material.numberOfShades)];
};