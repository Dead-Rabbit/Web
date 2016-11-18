function changeBackground(type){
	var picType = "./img/background/background"+type+".jpg";
	var backgrounImg = document.getElementById("background_img");
	backgrounImg.src=picType;
	backgrounImg.style.filter = "alpha(opacity=0.6)";
	backgrounImg.style.opacity = 60;
}
function removeBackground(){
	var backgrounImg = document.getElementById("background_img");
	backgrounImg.style.filter = "alpha(opacity=0)";
	backgrounImg.style.opacity = 0;
}