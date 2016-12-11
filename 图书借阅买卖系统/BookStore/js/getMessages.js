window.onload = function(){
	doChange()
}
function doChange(){
	document.getElementById("search-hot").innerHTML = getHot(hotSearchJson);
	document.getElementById("glodenStore").innerHTML = getGloden(goldenStore);
	document.getElementById("mostRent").innerHTML = getMost(mostRent);
	document.getElementById("mostBuy").innerHTML = getMost(mostBuy);
}
function getHot(json){
	var res = "最近热搜：";
	for(var i = 0;i < json.hots.length;i++){
		res+="<a href='"+
				json.hots[i].id+
				"'>"+
				json.hots[i].name+
				"</a> ";
	}
	return res;
}
function getGloden(json){
	var res = "";
	for(var i = 0;i < json.stores.length;i++){
		res += "<div class='gloden_part_item'>"+
				"<img class='gloden_item_img' src='img/testImgs/background0.jpg'/>"+
				getSign(i)+
				"<div class='gloden_name'>"+
				json.stores[i].name+
				"</div>"+
			"</div>";
	}
	return res;
}
function getMost(json){
	var res = "";
	for(var i = 0;i < json.stores.length;i++){
		res += "<div class='gloden_part_item'>"+
				"<img class='gloden_item_img' src='img/testImgs/background0.jpg'/>"+
				getSign(i)+
				"<div class='gloden_name'>"+
				json.stores[i].name+
				"</div>"+
			"</div>";
	}
	return res;
}
function getSign(num){
	var res = "";
	switch(num){
		case 0:res = "gloden";break;
		case 1:res = "silver";break;
		case 2:res = "copper";break;
	}
	return (res == "") ? (""):("<img class='glod' src='img/"+res+".png'/>");
}