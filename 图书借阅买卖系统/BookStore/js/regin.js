var title = document.getElementById("title");
var loginTable = document.getElementById("login");
var reginTable = document.getElementById("regin");
function changeMode(mode){
	switch(mode){
		case 1:loginMode();break;
		case 2:reginMode();break;
	}
}
function loginMode(){
	title.innerHTML = "欢迎登录";
	loginTable.style.display = "table";
	reginTable.style.display = "none";
}
function reginMode(){
	title.innerHTML = "欢迎注册";
	loginTable.style.display = "none";
	reginTable.style.display = "table";
}
function doRegin(){
	var rad = document.getElementById("rad");
	if(!rad.checked){
		alert("请阅读并同意阅读协议");
		return ;
	}
	if(document.getElementById("reginpasswd").value != document.getElementById("reppasswd").value){
		alert("密码不一致！");
		return ;
	}
	var xmlHttpReq = createXMLHttpRequest();
	var message = getReginMessage();
	var requestURL = "";
	xmlHttpReq.open("POST",requestURL,true);
    xmlHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
    xmlHttpReq.send(message);
    xmlHttpReq.onreadystatechange = function(){
    	if(xmlHttpReq.readyState == 4){
    		if(judStatus(xmlHttpReq.status)){
    			alert(json);
				var json = eval("("+xmlHttpReq.responseText+")");
				if(json.ifSucc == "succ"){
					alert("注册成功！");
				}else{
					switch(json.code){
						case 1:alert("已有用户名！");break;
						case 2:alert("布拉布拉布拉~");break;
					}
				}
    		}
    	}
    }
}
function doLogin(){
	var xmlHttpReq = createXMLHttpRequest();
	var message = getLoginMessage();
	var requestURL = "";
	xmlHttpReq.open("POST",requestURL,true);
    xmlHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
    xmlHttpReq.send(message);
    xmlHttpReq.onreadystatechange = function(){
    	if(xmlHttpReq.readyState == 4){
    		if(judStatus(xmlHttpReq.status)){
    			alert(json);
    			var json = eval("("+xmlHttpReq.responseText+")");
				document.cookie = "userName="+json.userName;
    		}
    	}
    }
}
function getLoginMessage(){
	return "userName="+document.getElementById("loginuser").value+"&passWd="+document.getElementById("loginpasswd").value;
}
function getReginMessage(){
	return "userName="+document.getElementById("reginuser").value+"&passWd="+document.getElementById("reginpasswd").value;
}
function judStatus(status){
	var ifSucc = false;
	switch(status){
        case 200:
            ifSucc = true;
            break;
        case 400:
            alert("错误的请求！\nError Code:400!");
            break;
        case 403:
            alert("拒绝请求！\nError Code:403!");
            break;
        case 404:
            alert("请求地址不存在！\nError Code:404!");
            break;
        case 500:
            alert("内部错误！\nError Code:500!");
            break;
        case 503:
            alert("服务不可用！\nError Code:503!");
            break;
        default:
            alert("请求返回异常！\nError Code:"+xmlHttpReq.status);
            break;
    }
	return ifSucc;
}
