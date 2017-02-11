/**
 *  In charge of all the rockets. Evaluates their fitness and generates
 *  new rocket AI through natural selection
 *
 *  @param size     Number of rockets
 *  @constructor    Initialises the rockets
 */
function Population(size) {
	this.rockets = [];
	this.matingPool = [];
	
	for (var i = 0; i < size; i++) {
		this.rockets[i] = new Rocket(10);
	}
	
	/**
	 *  Updates the physics and draws rockets
	 */
	this.updateDraw = function() {
		for (var i = 0; i < this.rockets.length; i++) {
			this.rockets[i].update();
			this.rockets[i].show();
		}
	}
	
	/**
	 *  Normalises all rockets' fitness and puts them in a mating pool
	 *  The more successful the rocket, the more times they are in the pool
	 */
	this.evalFitness = function() {
		/* Gets max fitness value for normalisation */
		var maxFit = 0;
		for (var i = 0; i < this.rockets.length; i++) {
			this.rockets[i].calcFitness();
			if (this.rockets[i].fitness > maxFit) {
				maxFit = this.rockets[i].fitness;
			}
		}
		
		/* Adds rocket DNA to mating pool */
		this.matingPool = [];
		for (var i = 0; i < this.rockets.length; i++) {
			var n = floor((this.rockets[i].fitness / maxFit) * 100);   // Normalise fitness
			for (var j = 0; j < n; j++) {
				this.matingPool.push(this.rockets[i].dna);
			}
		}
	}
	
	/**
	 *  Selects random parents from mating pool and creates a child
	 *  Generates new rockets with child DNA
	 */
	this.naturalSelection = function() {
		for (var i = 0; i < this.rockets.length; i++) {
			var mother = random(this.matingPool);
			var father = random(this.matingPool);   // Come at me tumblr
			var child = mother.crossBreed(father);  // He's cis white too
			
			this.rockets[i].newGeneration(child);
		}
	}
}