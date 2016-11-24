var logoSize ;
var comma ;
var driangle ;
function can(canvasId,width,height){
	this.height = height;
	this.width = width;
	this.type = 0;
	this.fillColor = "white";
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext("2d");
	this.ctx.fillStyle = this.fillColor;
	this.e = this.e||window.event;
	this.canvasMouseOver = function(e){
		var bbox = this.canvas.getBoundingClientRect();
        var x = e.clientX - bbox.left * (this.canvas.width/bbox.width);
        var y = e.clientY - bbox.top * (this.canvas.height/bbox.height);
        if(this.ctx.isPointInPath(x,y)){
        	changeBackground(this.type);
        }else{
        	removeBackground();
        }
	}
	this.canvasMouseLeave = function(){
		removeBackground();
	}
}
function driangleCanvas(size){
	can.call(this,"knox_canvas_triangle",150*size,300*size);
	this.type = 0;
	this.doDrow = function(){
		this.ctx.beginPath();
		
		this.ctx.moveTo(0,0);
		this.ctx.lineTo(0,this.height);
		this.ctx.lineTo(this.width,this.height*5/7);
		this.ctx.lineTo(0,0);
		
		this.ctx.closePath();
		this.ctx.fill();
	}
}
function commaCanvas(size){
	can.call(this,"knox_canvas_comma",185*size,310*size);
	this.type = 1;
	this.doDrow = function(){
		var betCirAndStran = this.width/2;
		this.ctx.beginPath();
		
		this.ctx.moveTo(0,betCirAndStran);
		this.ctx.bezierCurveTo(0,this.height/2,this.width/7,this.height*4/5,this.width*4/5,this.height);
		this.ctx.bezierCurveTo(this.width/3,this.height*7/10,this.width,this.height*6/10,this.width,betCirAndStran);
		this.ctx.arc(this.width/2,betCirAndStran,this.width/2,0,Math.PI,true);
		
		this.ctx.closePath();
		this.ctx.fill();
	}
}
window.onload = function(){
	//初始化
	doInit();
	//绘制三角形
	driangle.doDrow();
	//绘制逗号
	comma.doDrow();
}
function doInit(){
	logoSize = 1;
	comma = new commaCanvas(logoSize);
	driangle = new driangleCanvas(logoSize);
	
	var list_ul = document.getElementById("list_ul");
	list_ul.style.transform = "translateY(0px)";
}
function getCanvasPos(canvas,e)  
{//获取鼠标在canvas上的坐标  
    var rect = canvas.getBoundingClientRect();
    return {   
     x: e.clientX - rect.left * (canvas.width / rect.width),  
     y: e.clientY - rect.top * (canvas.height / rect.height)  
   };
} 