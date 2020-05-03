console.log("chargement joueur");

class Joueur {
	num;
	//color;
	name;
	pos;
	gorgee;
	genre;
	permis;
	telephone;
	tourPasse;
	rg12Imbrique;
	
	constructor(i){
		this.num = i ; 
		//this.color = COLOR[i];
		this.name = Page.getName(this)
		this.pos = 0 ; 
		this.gorgee = 0;
		this.genre = 0;
		this.permis = 0;
		this.telephone = 0 ;
		this.tourPasse = false ;  
		this.rg12Imbrique = false;
	}
	get rg12Imbrique() {  return this.rg12Imbrique;   }
	set rg12Imbrique(x) {  this.rg12Imbrique = x; }
	
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
	get permis() { 
         return this.permis; 
    }
	get telephone() { 
         return this.telephone; 
    }
	get tourPasse() { 
         return this.telephone; 
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
	set permis(x) { 
         this.permis = x;
    }
	set telephone(x) { 
         this.telephone = x;
    }
	set tourPasse(x) { 
         this.tourPasse = x;
    }
	set num(x) { 
         this.num = x;
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