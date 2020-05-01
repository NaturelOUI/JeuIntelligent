console.log("chargement joueur");

class Joueur {
	num;
	//color;
	name;
	pos;
	gorgee;
	
	constructor(i){
		this.num = i ; 
		//this.color = COLOR[i];
		this.name = Page.getName(this)
		this.pos = 0 ; 
		this.gorgee = 0;
	}
	get num() { 
         return this.num; 
    }
	get pos() { 
         return this.pos; 
    }
	get name() { 
         return this.name; 
    }
	get gorgee() { 
         return this.gorgee; 
    }

	set pos(newPos) { 
         this.pos = newPos;
    }
	set gorgee(x) { 
         this.gorgee = x;
    }

	boit(x){
		Page.ecrire(this.name + " boit " + x);
		this.gorgee +=x;
		Page.afficheGorgee(this);
	}
}