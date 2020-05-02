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
	this.detectionSexeFaite = false;
	this.detectionPermisFaite = false;
	this.nombre = 0 ;
	
  }
	incremente(des){
		
		this.cpt++;
		if (31 != this.joueurs[this.aQuiLeTour].pos){
			if (this.joueurs[this.aQuiLeTour].pos + des > 31){
				des = 31 - this.joueurs[this.aQuiLeTour].pos
			}
			
			console.log(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);
			
			//Page.moveJeton(this.joueurs[this.aQuiLeTour],des)
			this.joueurs[this.aQuiLeTour].bouge(des);
			//this.joueurs[this.aQuiLeTour].pos += des;			
			Page.ecrire(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);
			
			// que doit il faire : 
			this.regle(this.joueurs[this.aQuiLeTour]);
		}
		this.aQuiLeTour = this.cpt%NB_JOUEUR;
	}
	
	recupChoix(numJoueur,choix){
		//envoie vers la suite de la regle
		//console.log(numJoueur)
		//console.log(this.joueurs[numJoueur])
		this.regleSuite(this.joueurs[numJoueur], choix);
		
	}
	
	regle0(joueur){}
	regle1(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			this.joueurs[i].boit(1);
		}
		Page.ecrire("TOUT LE MONDE BOIT, ALLEZ ON Y VA ! ")
			
	}
	regle2(joueur){
		Page.cacherLeDe();
		var question = "Qui doit boire";
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			choixListe.push(this.joueurs[i].name);	
		}
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite2(joueur, choix){

		this.joueurs[choix].boit(1);
		Page.afficherLeDe();
	}
	regle3(joueur){
		joueur.boit(1)
	}
	regle4(joueur){
		this.joueurs[(joueur.num -1 + NB_JOUEUR) % NB_JOUEUR].boit(1);
	}
	regle5(joueur){
		Page.cacherLeDe();
		var question = "Qui doit boire";
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			choixListe.push(this.joueurs[i].name);	
		}
		Page.afficheChoix(joueur, question, choixListe)
		
	}
	regleSuite5(joueur, choix){
		this.nombre++
		this.joueurs[choix].boit(1);
		if (this.nombre >= 3 ){
			Page.afficherLeDe();
			this.nombre = 0 ;
			return;
		}else {
			var question = "Qui doit boire";
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				choixListe.push(this.joueurs[i].name);	
			}
			Page.afficheChoix(joueur, question, choixListe)
		}
		
		
	}
	regle6(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (i != joueur.num){
				this.joueurs[i].boit(1);
			}
		}
	}
	regle7(joueur){
		Page.cacherLeDe();
		var question = "Combien as-tu d'oreilles?";
		var choixListe = [];
		choixListe.push(0+" oreille");
		choixListe.push(1+" oreille");
		for (let i = 2 ; i < 5 ; i++){
			choixListe.push(i+" oreilles");	
		}
		Page.afficheChoix(joueur, question, choixListe);
		
	}
	regleSuite7(joueur, choix){
		if (0!= choix){
			joueur.boit(choix )	
		}
		Page.afficherLeDe();
	}
	regle8(joueur){}
	regle9(joueur){
		joueur.bouge(-7);
		joueur.boit(1);
		this.regle2(joueur);
		
	}
	regle10(joueur){}
	regle11(joueur){
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){ // genre = 1 --> fille
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.detectionSexe(joueur, 1)
		}
	}
	regleSuite11(joueur, choix){
	
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){ // genre = 1 --> fille
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.detectionSexeSuite(joueur, 1, choix);
			if (this.detectionSexeFaite){
				this.regleSuite(joueur,"choixNotNeeded") ; //regle 11 en theorie
			}
			
		}
		
			
	}
	regle12(joueur){
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos > 0 ){
				this.joueurs[i].bouge(-1);
				this.regle(this.joueurs[i].pos, this.joueurs[i]);
			}
		}
	}
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
	regle18(joueur){
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == -1 ){ // genre = 1 --> garcon
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.detectionSexe(joueur, -1)
		}
	}
	regleSuite18(joueur, choix){
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == -1 ){ // genre = -1 --> garcon
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.detectionSexeSuite(joueur, -1, choix);
			
			if (this.detectionSexeFaite){
				this.regleSuite(joueur,"choixNotNeeded") ; //regle 11 en theorie
			}
			
		}
	}
	regle19(joueur){}
	regle20(joueur){
		if (this.detectionSexeFaite){
			Page.cacherLeDe();
			var question = "Designe une fille qui doit boire 3";
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){
					choixListe.push(this.joueurs[i].name);
				}
						
			}
			if (0 == choixListe.length){
				Page.ecrire("Ah ouais, soirée entre couilles");
				Page.afficherLeDe();
			} else {
				Page.afficheChoix(joueur, question, choixListe)
			}
			
		} else {
			this.detectionSexe(joueur, 1)
		}
	}
	regleSuite20(joueur, choix){
		if (this.detectionSexeFaite){
			var JoueursFille = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){
					JoueursFille.push(this.joueurs[i]);
				}		
			}
			console.log(JoueursFille);
			JoueursFille[choix].boit(3);
			Page.afficherLeDe();
		} else {
			this.detectionSexeSuite(joueur, 1, choix);
			if (this.detectionSexeFaite){
				this.regle(joueur)
			}
		}
	}
	regle21(joueur){
		joueur.bouge(-10)
		this.regle11(joueur);
	}
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
	regle29(joueur){
		joueur.bouge(-8);
		joueur.boit(1);
		this.regle21(joueur);
	}
	regle30(joueur){}

	
	
	detectionSexe(joueur, genre){
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
				choixListe.push(this.joueurs[i].name);		
		}

		Page.cacherLeDe();
		if (genre == 1){
			if (joueur.pos == 20 ){
				var question = "Clique sur TOUTES les filles pour commencer";
			} else {
				var question = "Clique sur les filles";
			}
		} else {
			var question = "Clique sur les mecs";
		}
			
		choixListe.push("terminé");
		Page.afficheChoix(joueur, question, choixListe);	
	}
	detectionSexeSuite(joueur, genre, choix){
		// onchange le genre de la personne cliqué
		var joueursNonBinaire = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].genre == 0 ){
				joueursNonBinaire.push(this.joueurs[i]);	
			}
		}
		// Si clique sur terminé
		if (choix == joueursNonBinaire.length){
			// tous les autres sont des mecs * genre 
			for(let j of joueursNonBinaire){
				j.genre = -1 * genre;
			}
			Page.afficherLeDe();
			this.detectionSexeFaite = true ;
			
			
		} else {
			console.log(choix);
			console.log(joueursNonBinaire);
			joueursNonBinaire[choix].genre = 1 * genre ;		
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 0 ){
					choixListe.push(this.joueurs[i].name);	
				}		
			}
			choixListe.push("terminé");
			if (genre == 1){
				if (joueur.pos == 20 ){
					var question = "Clique sur TOUTES les filles pour commencer";
				} else {
					var question = "Clique sur les filles";
				}
				
			} else {
				var question = "Clique sur les mecs";
			}
			Page.afficheChoix(joueur, question, choixListe)
		}
		 
			
	}
	detectionPermis(joueur){
		
	}
	detectionPermisSuite(joueur, genre, choix){
		
	}
	
	regle(joueur){
		switch(joueur.pos) {
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
	regleSuite(joueur,choix){
		switch(joueur.pos) {
		  case 1:
		    this.regleSuite1(joueur, choix)
		    break;
		  case 2:
		    this.regleSuite2(joueur, choix)
		    break;
		  case 3:
		    this.regleSuite3(joueur, choix)
		    break;
		  case 4:
		    this.regleSuite4(joueur, choix)
		    break;
		  case 5:
		    this.regleSuite5(joueur, choix)
		    break;
		  case 6:
		    this.regleSuite6(joueur, choix)
		    break;
		  case 7:
		    this.regleSuite7(joueur, choix)
		    break;
		  case 8:
		    this.regleSuite8(joueur, choix)
		    break;
		  case 9:
		    this.regleSuite9(joueur, choix)
		    break;
		  case 10:
		    this.regleSuite10(joueur, choix)
		    break;
		  case 11:
		    this.regleSuite11(joueur, choix)
		    break;
		  case 12:
		    this.regleSuite12(joueur, choix)
		    break;
		  case 13:
		    this.regleSuite13(joueur, choix)
		    break;
		  case 14:
		    this.regleSuite14(joueur, choix)
		    break;
		  case 15:
		    this.regleSuite15(joueur, choix)
		    break;
		  case 16:
		    this.regleSuite16(joueur, choix)
		    break;
		  case 17:
		    this.regleSuite17(joueur, choix)
		    break;
		  case 18:
		    this.regleSuite18(joueur, choix)
		    break;
		  case 19:
		    this.regleSuite19(joueur, choix)
		    break;
		  case 20:
		    this.regleSuite20(joueur, choix)
		    break;
		  case 21:
		    this.regleSuite21(joueur, choix)
		    break;
		  case 22:
		    this.regleSuite22(joueur, choix)
		    break;
		  case 23:
		    this.regleSuite23(joueur, choix)
		    break;
		  case 24:
		    this.regleSuite24(joueur, choix)
		    break;
		  case 25:
		    this.regleSuite25(joueur, choix)
		    break;
		  case 26:
		    this.regleSuite26(joueur, choix)
		    break;
		  case 27:
		    this.regleSuite27(joueur, choix)
		    break;
		  case 28:
		    this.regleSuite28(joueur, choix)
		    break;
		  case 29:
		    this.regleSuite29(joueur, choix)
		    break;
		  case 30:
		    this.regleSuite30(joueur, choix)
		    break;
		  default:
		    console.log("on ne rentre pas dans un case");
		}
		
		
	}
}

