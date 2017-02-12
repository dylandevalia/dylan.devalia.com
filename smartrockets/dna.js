/**
 *  Holds an array of vectors which make up the DNA
 *
 *  @param [genes]  The genes of the DNA. If none are given, random vectors will fill the array
 */
function DNA(genes) {
	if (genes) {
		this.genes = genes;
	} else {
		this.genes = [];
		for (var i = 0; i < lifespan; i++) {
			this.genes[i] = p5.Vector.random2D().setMag(0.1);
		}
	}
	
	/**
	 *  Cross breeds two DNA strands
	 *
	 *  @param partner  The other DNA strand to cross breed with
	 *  @returns {DNA}  The final crossbred DNA
	 */
	this.crossBreed = function(partner) {
		var newGenes = [];
		for (var i = 0; i < lifespan; i++) {
			if (i < this.genes.length - 1) {
				var rnd = floor(random(2));
				switch (rnd) {
					case 0:
						newGenes[i] = this.genes[i];
						break;
					case 1:
						newGenes[i] = partner.genes[i];
				}
			} else {
				newGenes[i] = p5.Vector.random2D().setMag(0.1);
			}
		}
		return new DNA(this.mutation(newGenes));
	}
	
	/**
	 *  Goes through a DNA strand and randomly mutates 1% of it
	 *
	 *  @param genes    The genes to be mutated
	 *  @returns {*}    The mutated genes
	 */
	this.mutation = function(genes) {
		for (var i = 0; i < genes.length; i++) {
			if (random(1) < 0.001) { // 0.1% to randomly mutate a new thrust
				genes[i] = p5.Vector.random2D().setMag(0.1);
			}
		}
		return genes;
	}
}