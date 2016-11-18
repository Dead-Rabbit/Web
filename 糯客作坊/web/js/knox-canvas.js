function can(canvasId,width,height){
	this.height = height;
	this.width = width;
	this.fillColor = "white";
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext("2d");
	this.ctx.fillStyle = this.fillColor;
}
function driangleCanvas(size){
	can.call(this,"knox_canvas_triangle",150*size,300*size);
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
	var logoSize = 1;
	//绘制三角形
	var driangle = new driangleCanvas(logoSize);
	driangle.doDrow();
	//绘制逗号
	var comma = new commaCanvas(logoSize);
	comma.doDrow();
}
