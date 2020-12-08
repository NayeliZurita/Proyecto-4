var bodyX = 208;
var bodyY = 204;
var bodyW = 270;
var b;
b=243;
var n;
n=206;
var o,j;
o=25;
j=108;

var sketchProc = function(processingInstance){
    with(processingInstance){
        size(400,400);
        frameRate(60);
        draw = function() {
    background(207, 254, 255);
    fill(8, 8, 8);
    ellipse(bodyX, bodyY, bodyW,338); // cuerpo
    fill(250, 250, 250);//panza
    rect(bodyX-96,bodyY-15,bodyW-84,168,91);
    fill(240, 221, 197);//nariz
    ellipse(n++,155,40,20);
    fill(0, 0, 0);//brazos
    ellipse(345,b++,30,100);
    ellipse(71,b++,30,100);
    noStroke();//ojos
    fill(71, 67, 71);
    ellipse(159,j--,o++,40);
    fill(250, 242, 242);
    ellipse(161,j--,10,20);
    fill(71, 67, 71);
    ellipse(259,j--,o++,40);
    fill(250, 242, 242);
    ellipse(259,j--,10,20);
	}
	}
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);