
console.log('fichier JS charge.........');

	
function cacher(id){
	console.log(id);
	var res = id.substring(7, id.length);
	console.log(res);
	
	document.getElementById("joueur"+res).style.visibility="hidden";
	
}	