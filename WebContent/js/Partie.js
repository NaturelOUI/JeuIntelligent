console.log("chargement Partie");

class Partie {
	 
  constructor(NB_JOUEUR) {
    this.NB = NB_JOUEUR;
	console.log(this.NB = NB_JOUEUR);
	this.cpt = 0 ;
  }
	incremente(des){
		console.log("le dé a fait : " + des);
		this.cpt++;
	}
}

