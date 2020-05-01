console.log("chargement Partie");

class Partie {
	 
  constructor(NB_JOUEUR) {
    
	console.log(NB_JOUEUR);
	this.cpt = 0 ;
	this.aQuiLeTour = 0 ; 
	this.joueurs = []
	for (let i = 0 ; i<NB_JOUEUR ; i++) {
		var joueur = new Joueur(i)
		this.joueurs.push(joueur)
		Page.moveJeton(joueur, 0 )
	}
	
  }
	incremente(des){
		
		this.cpt++;
		if (31 != this.joueurs[this.aQuiLeTour].pos){
			if (this.joueurs[this.aQuiLeTour].pos + des > 31){
				des = 31 - this.joueurs[this.aQuiLeTour].pos
			}
			
			console.log(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);
			
			Page.moveJeton(this.joueurs[this.aQuiLeTour],des)
			this.joueurs[this.aQuiLeTour].pos += des;			
			Page.ecrire(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);
			
			// que doit il faire : 
			this.regle(this.joueurs[this.aQuiLeTour].pos, this.joueurs[this.aQuiLeTour]);
		}
		this.aQuiLeTour = this.cpt%NB_JOUEUR;
	}
	
	
	regle1(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			this.joueurs[i].boit(1);
		}
		Page.ecrire("TOUT LE MONDE BOIT, ALLEZ ON Y VA ! ")
			
	}
	regle2(joueur){}
	regle3(joueur){
		joueur.boit(1)
	}
	regle4(joueur){
		this.joueurs[(joueur.num -1 + NB_JOUEUR) % NB_JOUEUR].boit(1);
	}
	regle5(joueur){}
	regle6(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (i != joueur.num){
				this.joueurs[i].boit(1);
			}
		}
	}
	regle7(joueur){}
	regle8(joueur){}
	regle9(joueur){}
	regle10(joueur){}
	regle11(joueur){}
	regle12(joueur){}
	regle13(joueur){}
	regle14(joueur){}
	regle15(joueur){}
	regle16(joueur){}
	regle17(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos > joueur.pos){
				this.joueurs[i].boit(1);
			}
		}
		
	}
	regle18(joueur){}
	regle19(joueur){}
	regle20(joueur){}
	regle21(joueur){}
	regle22(joueur){}
	regle23(joueur){
		var max = this.joueurs[0].pos;
		var who = 0 ;
		for (let i = 1 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos > max){
				max = this.joueurs[i].pos;
			}
		}
		for (let i = 1 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos == max){
				this.joueurs[i].boit(1)
			}
		}
		
	}
	regle24(joueur){}
	regle25(joueur){}
	regle26(joueur){}
	regle27(joueur){}
	regle28(joueur){}
	regle29(joueur){}
	regle30(joueur){}

	regle(numRegle,joueur){
		switch(numRegle) {
		  case 1:
		    this.regle1(joueur)
		    break;
		  case 2:
		    this.regle2(joueur)
		    break;
		  case 3:
		    this.regle3(joueur)
		    break;
		  case 4:
		    this.regle4(joueur)
		    break;
		  case 5:
		    this.regle5(joueur)
		    break;
		  case 6:
		    this.regle6(joueur)
		    break;
		  case 7:
		    this.regle7(joueur)
		    break;
		  case 8:
		    this.regle8(joueur)
		    break;
		  case 9:
		    this.regle9(joueur)
		    break;
		  case 10:
		    this.regle10(joueur)
		    break;
		  case 11:
		    this.regle11(joueur)
		    break;
		  case 12:
		    this.regle12(joueur)
		    break;
		  case 13:
		    this.regle13(joueur)
		    break;
		  case 14:
		    this.regle14(joueur)
		    break;
		  case 15:
		    this.regle15(joueur)
		    break;
		  case 16:
		    this.regle16(joueur)
		    break;
		  case 17:
		    this.regle17(joueur)
		    break;
		  case 18:
		    this.regle18(joueur)
		    break;
		  case 19:
		    this.regle19(joueur)
		    break;
		  case 20:
		    this.regle20(joueur)
		    break;
		  case 21:
		    this.regle21(joueur)
		    break;
		  case 22:
		    this.regle22(joueur)
		    break;
		  case 23:
		    this.regle23(joueur)
		    break;
		  case 24:
		    this.regle24(joueur)
		    break;
		  case 25:
		    this.regle25(joueur)
		    break;
		  case 26:
		    this.regle26(joueur)
		    break;
		  case 27:
		    this.regle27(joueur)
		    break;
		  case 28:
		    this.regle28(joueur)
		    break;
		  case 29:
		    this.regle29(joueur)
		    break;
		  case 30:
		    this.regle30(joueur)
		    break;
		  default:
		    console.log("on ne rentre pas dans un case");
		}
	}
}

