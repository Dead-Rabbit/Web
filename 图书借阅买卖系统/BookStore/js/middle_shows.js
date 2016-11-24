function showGoLeft(){
	var nowShowNumber = parseInt(document.getElementById("middle_shows_pics").getAttribute("value"));
	var maxShowNumber = parseInt(document.getElementById("middle_shows_big").getAttribute("value"));
	if(nowShowNumber <= -maxShowNumber+1) return ;
	var pics = document.getElementById("middle_shows_pics");
	nowShowNumber--;
	document.getElementById("middle_shows_pics").setAttribute("value",nowShowNumber);
	var posi = nowShowNumber*835;
	pics.style.transform = "translateX("+posi+"px)";
}
function showGoRight(){
	var nowShowNumber = parseInt(document.getElementById("middle_shows_pics").getAttribute("value"));
	var maxShowNumber = parseInt(document.getElementById("middle_shows_big").getAttribute("value"));
	if(nowShowNumber >= 0) return ;
	var pics = document.getElementById("middle_shows_pics");
	nowShowNumber++;
	document.getElementById("middle_shows_pics").setAttribute("value",nowShowNumber);
	var posi = nowShowNumber*835;
	pics.style.transform = "translateX("+posi+"px)";
}
