class Page {
	
	constructor(nbJoueur) {		
		console.log("ajustement de la taille du plateau en cours")
		Page.adjustDivHeight(1000);
		
	    this.nbJoueur = nbJoueur ;
	    console.log("nombre de joueur = " + this.nbJoueur);
	    for (let i = 0 ; i< nbJoueur ; i++){
			Page.addPlayer();
		}
		
		 
		
	  }
	
	static decalerBoutonPlus(){
		console.log("decalage du bouton + ");
		let boutonPlus = document.getElementById("ajouterJoueur");
		//console.log(boutonPlus);
		// remove button by id (bec worries about 2 items with same id)
		document.getElementById("ajouterJoueur").remove();
		var joueurList = document.getElementById("joueurListe");
		//add button
		joueurList.appendChild(boutonPlus);		
	}
	static removePlayer(id){
		var num = id.substring(6, id.length);
		document.getElementById("joueur"+num).remove();
		
		//decalage des autre joueurs
		for (let i = parseInt(num)+1 ; i <= NB_JOUEUR; i++){
			console.log(i);
			var joueurHtml = document.getElementById("joueur"+i);	
			joueurHtml.setAttribute("id","joueur"+(i-1));
			
			var nomJoueur = document.getElementById("nomJ"+i);	
			nomJoueur.setAttribute("id","nomJ"+(i-1));
			
			var bouton = document.getElementById("btHide"+i);
			bouton.setAttribute("id","btHide"+(i-1));
			
		}
		NB_JOUEUR -= 1 ;
		
	}
	static addPlayer(){
		NB_JOUEUR = NB_JOUEUR + 1 ; 
		console.log("nombre de joueur = " + NB_JOUEUR);
		var joueurList = document.getElementById("joueurListe"); 
		var joueurHtml = document.createElement('div'); // is a node
		joueurHtml.setAttribute("id", "joueur"+NB_JOUEUR);
		joueurHtml.setAttribute("class", "joueur");
		
		joueurList.appendChild(joueurHtml);
		
		// INTERIEUR DE LA DIV
		
		// bouton Hide
		var bouton = document.createElement('button');
		bouton.setAttribute("id","btHide"+NB_JOUEUR);
		bouton.setAttribute("onclick","Page.removePlayer(this.id)");
		bouton.innerHTML = "X";
		joueurHtml.appendChild(bouton);
		//joueurHtml.innerHTML += "Joueur " + NB_JOUEUR +" :";
		
		// editable text
		var nomJoueur = document.createElement('div'); // is a node
		nomJoueur.setAttribute("id", "nomJ"+NB_JOUEUR);
		nomJoueur.setAttribute("class", "txtEdit");
		nomJoueur.setAttribute("contenteditable", "true");
		nomJoueur.innerHTML = "joueur" + NB_JOUEUR;
		joueurHtml.appendChild(nomJoueur);
		joueurList.appendChild(joueurHtml);
		
		//move the remove button at the end  
		Page.decalerBoutonPlus();
	}
	static adjustDivHeight(time){
		setTimeout(() => { 		
			var hgtImg = document.getElementById('imgPlateau').clientHeight;
			var tds = document.getElementsByClassName("divTd");			
			for (let step = 0; step < 32; step++) {
				tds[step].setAttribute("style","height:"+((hgtImg - 20) /5)+"px");			
				}
		}, time);

	}
	static LancerDes(){
		var alea = Math.floor(Math.random() * 6) +1 ;
		//console.log(alea);
		document.getElementById("des").textContent = alea;
		
		if (PARTIESTARTED){
			this.partie.incremente(alea);
		}
	
	}	
	static LancerPartie(){
		this.partie = new Partie(NB_JOUEUR)
		PARTIESTARTED = true ; 
		
		for (let i = 1 ; i<= NB_JOUEUR; i++) {
			document.getElementById("btHide"+i).remove();
			var nomJoueur= document.getElementById("nomJ"+i);
			nomJoueur.setAttribute("contenteditable", "false");
		}
		document.getElementById("ajouterJoueur").remove();
		document.getElementById("btLancerPartie").remove();
		
		
	}
	
}

var NB_JOUEUR = 0;
var PARTIESTARTED = false;
let page = new Page(3);