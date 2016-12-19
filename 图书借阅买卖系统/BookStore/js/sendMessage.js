var xmlHttpReq = null;//XMLHttpRequest对象
// 去除字符串两边空格
//String.prototype.trim = function () {
//  return this.replace(/(^\s*)|(\s*$)/g, "");
//}
// 创建XMLHttpRequest对象
function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {// IE 7.0及以上版本和非IE的浏览器
        xmlHttpReq = new XMLHttpRequest();
    } else {// IE 6.0及以下版本
        try {
            xmlHttpReq = new ActiveXObject("MSXML2.XMLHTTP");
        }catch (e) {
            try {
                xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {}
        }
    }
    if (!xmlHttpReq) {
        alert("当前浏览器不支持!");
        return null;
    }
    return xmlHttpReq;
}
