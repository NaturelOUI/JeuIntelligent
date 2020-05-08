class Page {
	partie;
	nbJoueur;
	constructor(nbJoueur) {		
		console.log("ajustement de la taille du plateau en cours")
		Page.adjustDivHeight(1000);
	    this.nbJoueur = nbJoueur ;
	    //console.log("nombre de joueur = " + this.nbJoueur);
	    for (let i = 0 ; i< nbJoueur ; i++){
			Page.addPlayer();
		}
		
		 
		
	  }
	lancerDes(){
		let alea = Math.floor(Math.random() * 6) +1 ;
		//let alea = 4;
		
		/*let alea = TRICHEDES[COMPTEUR];
		COMPTEUR++;
		//console.log(alea);*/
		Page.effacerText();
		document.getElementById("des").textContent = alea;	
		if (PARTIESTARTED){
			this.partie.incremente(alea);
		}
	}
	static creerFakeDice(joueur){
		let btDe = document.getElementById("btDes");
		btDe.setAttribute("onclick","page.recupFakeDice("+joueur.num +")");
		//ACTION_NEEDED = true ; 
		console.log("action Nessesaire");
	}
	recupFakeDice(numJoueur){
		let btDe = document.getElementById("btDes");
		btDe.setAttribute("onclick","page.lancerDes()");
		let alea = Math.floor(Math.random() * 6) +1 ;
		document.getElementById("des").textContent = alea;
		this.partie.recupDiceValue(numJoueur, alea);
			
	}
	
	static decalerBoutonPlus(){
		//console.log("decalage du bouton + ");
		let boutonPlus = document.getElementById("ajouterJoueur");
		//console.log(boutonPlus);
		// remove button by id (bec worries about 2 items with same id)
		document.getElementById("ajouterJoueur").remove();
		let joueurList = document.getElementById("joueurListe");
		//add button
		joueurList.appendChild(boutonPlus);		
	}
	static removePlayer(id){
		let num = id.substring(6, id.length);
		document.getElementById("joueur"+num).remove();
		
		//decalage des autre joueurs
		for (let i = parseInt(num)+1 ; i <= NB_JOUEUR; i++){
			let joueurHtml = document.getElementById("joueur"+i);	
			joueurHtml.setAttribute("id","joueur"+(i-1));
			
			let nomJoueur = document.getElementById("nomJ"+i);	
			nomJoueur.setAttribute("id","nomJ"+(i-1));
			
			let bouton = document.getElementById("btHide"+i);
			bouton.setAttribute("id","btHide"+(i-1));
			
			let jeton = joueurHtml.getElementsByClassName("cercle" + i)[0];
			
			jeton.setAttribute("class","cercle"+(i-1));
			
		}
		NB_JOUEUR -= 1 ;
		
	}
	static addPlayer(){
		NB_JOUEUR = NB_JOUEUR + 1 ; 
		console.log("nombre de joueur = " + NB_JOUEUR);
		let joueurList = document.getElementById("joueurListe"); 
		let joueurHtml = document.createElement('div'); // is a node
		joueurHtml.setAttribute("id", "joueur"+NB_JOUEUR);
		joueurHtml.setAttribute("class", "joueur");
		
		joueurList.appendChild(joueurHtml);
		
		// INTERIEUR DE LA DIV
		
		// bouton Hide
		let bouton = document.createElement('button');
		bouton.setAttribute("id","btHide"+NB_JOUEUR);
		bouton.setAttribute("class","btHide");
		bouton.setAttribute("onclick","Page.removePlayer(this.id)");
		bouton.innerHTML = "X";
		joueurHtml.appendChild(bouton);
		//joueurHtml.innerHTML += "Joueur " + NB_JOUEUR +" :";
		
		// editable text
		let nomJoueur = document.createElement('div'); // is a node
		nomJoueur.setAttribute("id", "nomJ"+NB_JOUEUR);
		nomJoueur.setAttribute("class", "txtEdit");
		nomJoueur.setAttribute("contenteditable", "true");
		nomJoueur.innerHTML = "joueur" + NB_JOUEUR;
		joueurHtml.appendChild(nomJoueur);
		
		let jeton = document.createElement('div'); // is a node
		jeton.setAttribute("class", "cercle cercle" + NB_JOUEUR);
		jeton.style.visibility = "visible";
		joueurHtml.appendChild(jeton);
		joueurList.appendChild(joueurHtml);
		
		//move the remove button at the end  
		Page.decalerBoutonPlus();
	}
	static adjustDivHeight(time){
		setTimeout(() => { 		
			let hgtImg = document.getElementById('imgPlateau').clientHeight;
			let tds = document.getElementsByClassName("divTd");			
			for (let step = 0; step < 32; step++) {
				tds[step].setAttribute("style","height:"+((hgtImg - 20) /5)+"px");			
				}
		}, time);

	}
		
	lancerPartie(){
		this.partie = new Partie(NB_JOUEUR)
		PARTIESTARTED = true ; 
		console.log("lancer partie");

		for (let i = 1 ; i<= NB_JOUEUR; i++) {
			document.getElementById("btHide"+i).remove();
			let nomJoueur= document.getElementById("nomJ"+i);
			nomJoueur.setAttribute("contenteditable", "false");
			nomJoueur.setAttribute("class", "txtEditValidated");
			let compteurGorgee = document.createElement("div");
			compteurGorgee.setAttribute("class", "cptGorgee");
			compteurGorgee.innerHTML = 0 ; 
			let joueurHtml = document.getElementById("joueur"+i);
			joueurHtml.appendChild(compteurGorgee);
			
		}
		
		document.getElementById("ajouterJoueur").remove();
		document.getElementById("LancerPartie").remove();
		
		
	}
	
	static moveJeton(joueur, combien){
		let cercle1 = document.getElementById("case" + joueur.pos).getElementsByClassName("cercle" + (joueur.num +1))[0];
		cercle1.style.visibility = "hidden";
		let cercle2 = document.getElementById("case" + (joueur.pos + combien)).getElementsByClassName("cercle" + (joueur.num +1))[0];
		cercle2.style.visibility = "visible";
		
	}
	static getName(joueur){
		console.log(joueur.num);
		let nomJoueur = document.getElementById("nomJ"+(joueur.num +1));	
			return nomJoueur.innerHTML;
	}
	static ecrire(text){
		let bulletPoint = document.createElement('li'); // is a node
		bulletPoint.setAttribute("class","bulletPoint");
		bulletPoint.innerHTML = text;
		document.getElementById("CadreBas").appendChild(bulletPoint);
	}
	static effacerText(){
		let bulletPoints = document.getElementsByClassName("bulletPoint");
		//console.log(bulletPoints.length)
		for (let i = bulletPoints.length -1 ; i >= 0   ; i-- ){
			//console.log(i);
			bulletPoints[i].remove();
		}
	}
	static afficheGorgee(joueur){
		let joueurHtml = document.getElementById("joueur"+(joueur.num +1));		
		let cptGorgee = joueurHtml.getElementsByClassName("cptGorgee")[0];
		cptGorgee.innerHTML = joueur.gorgee;
		
		
		
	}
	static afficheChoix(joueur, question, choixListe){
		const nb = choixListe.length;
		let bulletPointChoix = document.createElement('li'); // is a node
		bulletPointChoix.setAttribute("id","reponse");
		for (let i = 0 ; i < nb ; i++){
			let choixX = document.createElement('button'); // is a node
			choixX.setAttribute("onclick","page.transmitChoice("+ joueur.num +", "+i+")");
			choixX.setAttribute("class","boutonChoix");
			choixX.innerHTML = choixListe[i];
			bulletPointChoix.appendChild(choixX);
		}
		document.getElementById("CadreBas").appendChild(bulletPointChoix);
		let bulletPointQuestion = document.createElement('li'); // is a node
		bulletPointQuestion.setAttribute("id","question");
		bulletPointQuestion.innerHTML = question;
		document.getElementById("CadreBas").appendChild(bulletPointQuestion);
		//ACTION_NEEDED = true ; 
		console.log("action Nessesaire");
		
	}
	transmitChoice(numJoueur ,choice){
		
		
		document.getElementById("question").remove();
		document.getElementById("reponse").remove();
		/*for (let bt of document.getElementsByClassName("boutonChoix")){
			bt.remove();
		}*/
		this.partie.recupChoix(numJoueur, choice);
	}
	
	static cacherLeDe(){
		document.getElementById("btDes").style.visibility = "hidden";
	}
	static afficherLeDe(){
		let isBT = document.getElementsByClassName("boutonChoix");

		if (isBT.length == 0){
			document.getElementById("btDes").style.visibility = "visible";
		} 
		
	}
}
