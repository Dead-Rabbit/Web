var showName = document.getElementById("showName");
window.onload = function(){
	doChange();
	var userName = getCookie("userName");
	//delCookie("userName");
	if(userName == null){
		showName.innerHTML = "登录/注册";
	}else{
		showName.innerHTML = "欢迎回来，"+userName;
	}
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
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
////使用示例
//setCookie("name","hayden");
//alert(getCookie("name"));
////如果需要设定自定义过期时间
////那么把上面的setCookie　函数换成下面两个函数就ok;
////程序代码
function setCookie(name,value,time)
{
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec*1);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str)
{
	alert(str);
	var str1=str.substring(1,str.length)*1;
	var str2=str.substring(0,1);
	if (str2=="s")
	{
		return str1*1000;
	}
	else if (str2=="h")
	{
		return str1*60*60*1000;
	}
	else if (str2=="d")
	{
		return str1*24*60*60*1000;
	}
}