var a=190;
var x=300;
var y=300;
var z=300;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('#C34E35');
  fill('#5989B7');
  noStroke();
  fill(221,212,203,a);
  ellipse(x,300,250,250);
  fill(89,137,183,a);
  ellipse(y,300,200,200);
  fill(41,41,41,a);
  ellipse(x,z,150,150);
  fill(229,150,128,a);
  ellipse(y,x,100,100);
  fill(235,196,103,a);
  ellipse(x,y,50,50);
  
  x+=2
  y-=2
  z+=2.5
  if(x>730){
    x=300;
    y=300;
    z=300;
  }
}