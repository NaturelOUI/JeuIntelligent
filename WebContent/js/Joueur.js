console.log("chargement joueur");

class Joueur {
	num;
	//color;
	name;
	pos;
	gorgee;
	genre;
	
	constructor(i){
		this.num = i ; 
		//this.color = COLOR[i];
		this.name = Page.getName(this)
		this.pos = 0 ; 
		this.gorgee = 0;
		this.genre = 0;
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
	get genre() { 
         return this.genre; 
    }
	set pos(newPos) { 
         this.pos = newPos;
    }
	set gorgee(x) { 
         this.gorgee = x;
    }
	set genre(x) { 
         this.genre = x;
    }

	boit(x){
		Page.ecrire(this.name + " boit " + x);
		this.gorgee +=x;
		Page.afficheGorgee(this);
	}
	bouge(x){
		Page.moveJeton(this,x);
		this.pos += x; 
		
	}
}