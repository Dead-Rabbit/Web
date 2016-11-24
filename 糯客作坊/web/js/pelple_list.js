function ulGoDown(){
	var people_list_ul = document.getElementById("people_list_ul");
	var list_ul = document.getElementById("list_ul");
	var trans = parseInt(getTransformNumber(list_ul.style.transform));
	if(trans <= -(list_ul.offsetHeight - people_list_ul.offsetHeight)) return ;
	trans-=10;
	list_ul.style.transform = "translateY("+trans+"px)";
}
function ulGoUp(){
	var list_ul = document.getElementById("list_ul");
	var trans = parseInt(getTransformNumber(list_ul.style.transform));
	if(trans >= 0) return ;
	trans+=10;
	list_ul.style.transform = "translateY("+trans+"px)";
}
function mouseWheInterface(e){
	var scrollDir = "";
	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
		if (e.wheelDelta > 0) { //当滑轮向上滚动时  
			ulGoUp();
		} else if (e.wheelDelta < 0) { //当滑轮向下滚动时  
			ulGoDown();
		}
	} else if (e.detail) {  //Firefox滑轮事件
		if (e.detail> 0) { //当滑轮向上滚动时
			ulGoUp();
		} else if (e.detail< 0) { //当滑轮向下滚动时
			ulGoDown();
		}
	}
}
function getTransformNumber(str){
	return str.substring(11,str.length-3);
}
function changPeople(path){
	removeBackground();
	setTimeout("changPeopleBackground('"+path+"')",150);
}
function changPeopleBackground(path){
	var backgrounImg = document.getElementById("background_img");
	var rgb = getDominantColor(backgrounImg);
	setTopColor(rgb);
	backgrounImg.src=path;
	backgrounImg.style.filter = "alpha(opacity=0.6)";
	backgrounImg.style.opacity = 60;
}
function setTopColor(rgb){
	var top = document.getElementById("top");
	top.style.backgroundColor = "rgba("+rgb.r+","+rgb.g+","+rgb.b+",0.5)";
	top.onmouseover = function(){
		top.style.backgroundColor = "rgba(255,255,255,1)";
	}
	top.onmouseleave = function(){
		top.style.backgroundColor = "rgba("+rgb.r+","+rgb.g+","+rgb.b+",0.5)";
	}
}
