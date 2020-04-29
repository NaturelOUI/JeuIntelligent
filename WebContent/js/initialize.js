console.log("ajustement de la taille du plateau...")
adjustDivHeight(1000);

/* 
 * affichage des NBJOUEUR au tout début
 */

const NB_JOUEUR = 3;

for (let i = 1; i <= NB_JOUEUR; i++) {
	document.getElementById("joueur"+i).style.visibility = "visible";
}