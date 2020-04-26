
console.log('fichier JS charge');
function adjustDivHeight(time){
	setTimeout(() => { 
		console.log("World!"); 
		var hgtImg = document.getElementById('imgPlateau').clientHeight;
		console.log(hgtImg);
	
		
		var tds = document.getElementsByClassName("divTd");
		
		for (let step = 0; step < 32; step+=7) {
				tds[step].setAttribute("style","height:"+((hgtImg - 20) /5)+"px");
			}
	}, time);
	
}
