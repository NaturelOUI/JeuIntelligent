
console.log('fichier JS charge.........');
function adjustDivHeight(time){
	setTimeout(() => { 
		
		var hgtImg = document.getElementById('imgPlateau').clientHeight;
		//console.log(hgtImg);
	
		
		var tds = document.getElementsByClassName("divTd");
		
		for (let step = 0; step < 32; step++) {

			tds[step].setAttribute("style","height:"+((hgtImg - 20) /5)+"px");
			
				
			}
	}, time);

	
}
function LancerDes(){
	var alea = Math.floor(Math.random() * 6) +1 ;
	console.log(alea);
	document.getElementById("des").textContent = alea;
	
}	
function cacher(id){
	console.log(id);
	var res = id.substring(7, id.length);
	console.log(res);
	
	document.getElementById("joueur"+res).style.visibility="hidden";
	
}	