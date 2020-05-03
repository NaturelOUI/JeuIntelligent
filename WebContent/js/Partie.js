console.log("chargement Partie");

class Partie {
	 
  constructor(NB_JOUEUR) {
    
	console.log(NB_JOUEUR);
	this.cpt = 0 ;
	this.aQuiLeTour = 0 ; 
	this.joueurs = [];
	for (let i = 0 ; i<NB_JOUEUR ; i++) {

		var joueur = new Joueur(i);
		this.joueurs.push(joueur);
		Page.moveJeton(joueur, 0 );
	}
	this.detectionSexeFaite = false;
	this.detectionPermisFaite = false;
	this.detectionTelephoneFaite = false;
	this.nombre = 0 ;
	this.nbJ12 = 0 ;
	this.STOP = false;
	this.r12 = false;
	
	
  }
	incremente(des){
		//this.actionNessesaire = false ; 
		Page.ecrire("___________________________________");
		if ( ! this.joueurs[this.aQuiLeTour].tourPasse){
			if (31 != this.joueurs[this.aQuiLeTour].pos){
				if (this.joueurs[this.aQuiLeTour].pos + des > 31){
					des = 31 - this.joueurs[this.aQuiLeTour].pos;
				}
							
				console.log(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);			
				Page.ecrire(this.joueurs[this.aQuiLeTour].name +" a fait : " + des);
				this.joueurs[this.aQuiLeTour].bouge(des);
				// que doit il faire : 
				this.regle(this.joueurs[this.aQuiLeTour]);
			}
		}  else {
			this.joueurs[this.aQuiLeTour].tourPasse = false;
			Page.ecrire(this.joueurs[this.aQuiLeTour].name + " passe son tour");
		}
		
		this.cpt++;
		this.aQuiLeTour = this.cpt%NB_JOUEUR;
		
	}
	
	recupChoix(numJoueur,choix){
		//envoie vers la suite de la regle
		
		this.regleSuite(this.joueurs[numJoueur], choix);

		
	}
	recupDiceValue(numJoueur, dice){
		
		this.regleSuite(this.joueurs[numJoueur], dice);
		/*if (this.nombreRegle12 != 0  ){
			ACTION_NEEDED = false;
			this.regleSuite12();
		}*/
		
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
		this.STOP = true ; 
		var question = joueur.name + " : qui doit boire";
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			choixListe.push(this.joueurs[i].name);	
		}
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite2(joueur, choix){

		this.joueurs[choix].boit(1);
		Page.afficherLeDe();
		this.STOP = false;
		if (this.r12){
			this.regle12();
		}
	}
	regle3(joueur){
		joueur.boit(1)
	}
	regle4(joueur){
		this.joueurs[(joueur.num -1 + NB_JOUEUR) % NB_JOUEUR].boit(1);
	}
	regle5(joueur){
		Page.cacherLeDe();
		this.STOP = true ;
		var question = joueur.name + " : qui doit boire";
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			choixListe.push(this.joueurs[i].name);	
		}
		Page.afficheChoix(joueur, question, choixListe)
		
	}
	regleSuite5(joueur, choix){
		this.nombre++
		this.joueurs[choix].boit(1);
		if (this.nombre >= 2 ){
			Page.afficherLeDe();
			this.nombre = 0 ;
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
			
		} else {
			var question = joueur.name +  " : Qui doit boire";
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
		this.STOP = true;
		var question = joueur.name +  " : Combien as-tu d'oreilles?";
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
		this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
		
	}
	regle8(joueur){}
	regle9(joueur){
		joueur.bouge(-7);
		joueur.boit(1);
		this.regle2(joueur);
		
	}
	regle10(joueur){
		if (this.detectionTelephoneFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].telephone == 1 ){ // proprio
				this.joueurs[i].boit(3);
			}	
		}
		} else {
			this.STOP = true;
			this.detectionTelephone(joueur)
		}
	}
	regleSuite10(joueur, choix){
		this.detectionTelephoneSuite(choix)
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].telephone == 1 ){ // proprio
				this.joueurs[i].boit(3);
			}	
		}
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}				
	}
	regle11(joueur){
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){ // genre = 1 --> fille
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.STOP = true ;
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
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
		} else {
			this.detectionSexeSuite(joueur, 1, choix);
			if (this.detectionSexeFaite){
				this.regleSuite(joueur,"choixNotNeeded") ; //regle 11 en theorie
			}
			
		}
		
			
	}
	regle12(joueur){
		this.r12 = true;
		//for(let j of this.joueurs){
		while (this.nbJ12 < NB_JOUEUR & ! this.STOP){
			let j = this.joueurs[this.nbJ12];
			if (j.pos > 0 ){
				j.bouge(-1);
				if (j.pos != 12){ 	
					this.regle(j);
				} else {
					j.rg12Imbrique = true ; 
				}
			}
			this.nbJ12++;
		}
		if ( !(this.nbJ12 < NB_JOUEUR)){
			this.r12 = false;
			this.nbJ12 = 0 ;
			var test = false;
			var cpt = 0 ; 
			while (!test){
				if (this.joueurs[cpt].rg12Imbrique){
					this.joueurs[cpt].rg12Imbrique = false ;
					this.regle12(joueur);
					test = true ;  
				}
				cpt++;
				if (cpt == NB_JOUEUR){
					test = true; 
				}
			}
		}
		
	}
	regleSuite12(){
		
	}
	regle13(joueur){
		if (this.detectionPermisFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].permis == -1 ){ // genre = 1 --> fille
					this.joueurs[i].boit(1);
				}
			}
		} else {
			this.STOP = true ; 
			this.detectionPermis(joueur)
		}
	}
	regleSuite13(joueur, choix){
		if (this.detectionPermisFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].permis == -1 ){ // -1 --> piéton
					this.joueurs[i].boit(1);
				}
			}
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
		} else {
			this.detectionPermisSuite(joueur, choix);
			
			if (this.detectionPermisFaite){
				this.regleSuite(joueur,"choixNotNeeded") ; //regle 13 en theorie
			}
			
		}
	}
	regle14(joueur){
		Page.cacherLeDe();
		this.STOP = true;
		var question = joueur.name + " tu préfère : ";
		var choixListe = [];
		choixListe.push("Boire 3");
		choixListe.push("Reculer de 8 cases");
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite14(joueur, choix){
		if (0 == choix){
			joueur.boit(3);
		} else {
			joueur.bouge(-8)
			this.regle6(joueur);
		}
		Page.afficherLeDe();
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}
	
	regle15(joueur){		
		Page.creerFakeDice(joueur);
		this.STOP = true ; 
		Page.ecrire(joueur.name + " : lance le dé pour savoir combien tu dois boire");
	}
	regleSuite15(joueur, dice){
		joueur.boit(dice);
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}
	regle16(joueur){
		Page.cacherLeDe();
		this.STOP = true ; 
		var question = joueur.name + " : qui doit boire";
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			choixListe.push(this.joueurs[i].name);	
		}
		Page.afficheChoix(joueur, question, choixListe)
		
	}
	regleSuite16(joueur, choix){
		this.nombre++
		this.joueurs[choix].boit(1);
		if (this.nombre >= 3 ){
			Page.afficherLeDe();
			this.nombre = 0 ;
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
			
		} else {
			var question = joueur.name +  " : Qui doit boire";
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				choixListe.push(this.joueurs[i].name);	
			}
			Page.afficheChoix(joueur, question, choixListe)
		}
		
		
	}
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
			this.detectionSexe(joueur, -1);
			this.STOP = true ; 
		}
	}
	regleSuite18(joueur, choix){
		if (this.detectionSexeFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == -1 ){ // genre = -1 --> garcon
					this.joueurs[i].boit(1);
				}
			}
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
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
		this.STOP = true ;
		if (this.detectionSexeFaite){
			Page.cacherLeDe();
			
			var question = joueur.name +  " : Designe une fille qui doit boire 3";
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].genre == 1 ){
					choixListe.push(this.joueurs[i].name);
				}
						
			}
			if (0 == choixListe.length){
				Page.ecrire("Ah ouais, soirée entre couilles");
				Page.afficherLeDe();
				this.STOP = false ;
				if (this.r12){
					this.regle12(joueur);
				}
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
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
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
	regle22(joueur){
		Page.ecrire("C'est chaud pour vous..");
		this.STOP = true ; 
		Page.creerFakeDice(joueur);
		Page.ecrire(this.joueurs[0].name + " : Lance le dé");
				
	}
	regleSuite22(joueur, dice){
		
		if (this.nombre < NB_JOUEUR ){
			if (dice == 6){
				Page.ecrire("Aie aie aie, retour à la case départ pour " + this.joueurs[this.nombre].name );
				this.joueurs[this.nombre].bouge(-1 * this.joueurs[this.nombre].pos);
				
			}
			this.nombre ++ ;
			if (this.nombre < NB_JOUEUR ){
				Page.creerFakeDice(joueur);
				Page.ecrire(this.joueurs[this.nombre].name + " : Lance le dé");
			}
			
		} else {
			this.nombre = 0 ;
			this.STOP = false ;
			if (this.r12){
				this.regle12(joueur);
			}
		}
		
	}
	regle23(joueur){
		var max = this.joueurs[0].pos;
		//var who = 0 ;
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos > max){
				max = this.joueurs[i].pos;
			}
		}
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].pos == max){
				this.joueurs[i].boit(1)
			}
		}
		
	}
	regle24(joueur){
		Page.cacherLeDe();
		this.STOP = true ; 
		var question = joueur.name + " : lance une pièce";
		var choixListe = [];
		
		choixListe.push("Lancer la pièce");	
		
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite24(joueur, choix){
		
		var alea = Math.floor(Math.random() * 2);
		if (alea == 1 ){
			Page.ecrire("PILE ! Les autres boivent ");
			for(let j of this.joueurs){
				if (j.num != joueur.num ){
					j.boit(1)
				}
			}
		} else {
			Page.ecrire("FACE ! Tu bois");
			joueur.boit(1)
		}
		Page.afficherLeDe();
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}
	regle25(joueur){		
		
		Page.creerFakeDice(joueur);
		this.STOP = true ; 
		Page.ecrire(joueur.name + " : Bois et lance le dé pour savoir de combien tu vas reculer");
		joueur.boit(1);
	}
	regleSuite25(joueur, dice){
		joueur.bouge(dice * -1);
		this.regle(joueur);
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}
	regle26(joueur){
		Page.cacherLeDe();
		this.STOP = true ; 
		var question = joueur.name + " raconte une blague ou bois 4 ";
		var choixListe = [];
		choixListe.push("Raconter une blague");
		choixListe.push("Boire 4");
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite26(joueur, choix){
		if (1 == choix){
			joueur.boit(4);
		}
		Page.afficherLeDe();
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}
	
	regle27(joueur){
		joueur.boit(1);
		joueur.tourPasse = true;
	}
	regle28(joueur){
		if (this.detectionTelephoneFaite){
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].telephone == 1 ){ // proprio			
					if (joueur == this.joueurs[i]){
						Page.ecrire(joueur.name + " trinque tout seul (sers toi un deuxième verre pour le faire) " );
						joueur.boit(2);
					} else {
						Page.ecrire(joueur.name + " trinque avec " + this.joueurs[i].name)
						joueur.boit(1);
						this.joueurs[i].boit(1);
					}	
				}	
			}
			
		} else {
			this.detectionTelephone(joueur);
			this.STOP = true ; 
		}
	}
	regleSuite28(joueur, choix){
		this.detectionTelephoneSuite(choix)
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].telephone == 1 ){ // proprio
				if (joueur == this.joueurs[i]){
						Page.ecrire(joueur.name + " trinque tout seul (sers toi un deuxième verre pour le faire) " );
						joueur.boit(2);
					} else {
						Page.ecrire(joueur.name + " trinque avec " + this.joueurs[i].name)
						joueur.boit(1);
						this.joueurs[i].boit(1);
					}
			}	
		}
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}				
	}
	regle29(joueur){
		joueur.bouge(-8);
		joueur.boit(1);
		this.regle21(joueur);
	}
	regle30(joueur){
		this.regle1(joueur)
		Page.cacherLeDe();
		this.STOP = true;
		var question = joueur.name + " Tu arrives à lire la règle ?";
		var choixListe = [];
		choixListe.push("oui");
		choixListe.push("non");
		Page.afficheChoix(joueur, question, choixListe)
	}
	regleSuite30(joueur, choix){
		if (0 == choix){ // oui
			joueur.bouge(-30);
		}
		Page.afficherLeDe();
		this.STOP = false ;
		if (this.r12){
			this.regle12(joueur);
		}
	}

	
	
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
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
				choixListe.push(this.joueurs[i].name);		
		}
		Page.cacherLeDe();
		var question = "Clique ceux qui n'ont pas le permis";
			
		choixListe.push("terminé");
		Page.afficheChoix(joueur, question, choixListe);
	}
	detectionPermisSuite(joueur, choix){
		var joueurVelo = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
			if (this.joueurs[i].permis == 0 ){
				joueurVelo.push(this.joueurs[i]);	
			}
		}
		// Si clique sur terminé
		if (choix == joueurVelo.length){
			// tous les autres ont le permis
			for(let j of joueurVelo){
				j.permis = 1 ;
			}
			Page.afficherLeDe();
			this.detectionPermisFaite = true ;	
		} else {
			joueurVelo[choix].permis = -1; // -1 -> pas de permis
			var choixListe = [];
			for (let i = 0 ; i < NB_JOUEUR ; i++){
				if (this.joueurs[i].permis == 0 ){
					choixListe.push(this.joueurs[i].name);	
				}		
			}
			choixListe.push("terminé");
			
			var question = "Clique sur ceux qui n'ont pas le permis";
			
			Page.afficheChoix(joueur, question, choixListe)
		}
	}
	
	detectionTelephone(joueur){
		var choixListe = [];
		for (let i = 0 ; i < NB_JOUEUR ; i++){
				choixListe.push(this.joueurs[i].name);		
		}
		Page.cacherLeDe();
		var question = "Qui est le propriétaire du téléphone / ordi ?";

		Page.afficheChoix(joueur, question, choixListe);
	}
	detectionTelephoneSuite(choix){
		
		this.joueurs[choix].telephone = 1; // 1 -> proprio
		for (let j of this.joueurs){
			if (j.telephone != 1 ){
				j.telephone= -1 ; 
			}
		}
		this.detectionTelephoneFaite = true ; 
		Page.afficherLeDe()
		
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
		    this.regleSuite12()
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

