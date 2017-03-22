function SidebarButton() {
	this.x = 10;
	this.y = 10;
	this.w = 50;
	this.h = 50;
}

SidebarButton.prototype.draw = function () {
	if (!isNavOpen) {
		Color.Material.blue_grey[5].fill();
		rect(this.x, this.y, this.w, this.h, 5, 10, 15, 10);
		
		Color.Material.blue_grey[2].fill();
		rect(this.x + 10, this.y + 10, this.w - 20, 7, 5);
		// rect(this.x + 10, this.y + 20, this.w - 20, 10, 5);
		rect(this.x + 10, this.y + 20, this.w - 20, 7, 5);
		rect(this.x + 10, this.y + 30, this.w - 20, 7, 5);
	}
};

SidebarButton.prototype.checkHit = function (x, y) {
	return (x > this.x && x < this.x + this.w) && (y > this.y && y < this.y + this.h);
};

var isNavOpen = false;
function toggleNav() {
	/* If nav is open, close nav else open nav */
	isNavOpen ? closeNav() : openNav();
	isNavOpen = !isNavOpen;
}

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("sidenav").style.left = "0px";
	isNavOpen = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("sidenav").style.left = "-250px";
	isNavOpen = false;
}