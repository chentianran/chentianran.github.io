var cx = 0;
var cy = 0;
var x1 = 200;
var y1 = 100;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  frameRate(60);
  cx = width  / 2;
  cy = height / 2;
}

function draw() {
  clear();
  ellipseMode (CENTER);
  textSize(16)

  //--- vector 1 -----------------------------
  stroke(255,0,0);
  fill(255,0,0);
  line(cx,cy,cx+x1,cy-y1);
  ellipse(cx+x1,cy-y1,8,8);
  text("u", cx+x1 + 10, cy-y1 - 10);

  if (mouseX <= 0 || mouseX >= width) {
    return;
  }
  if (mouseY <= 0 || mouseY >= height) {
    return;
  }

  //--- vector 2 -----------------------------
  stroke(0,0,255);
  fill(0,0,255);
  line(cx,cy,mouseX,mouseY);
  ellipse(mouseX,mouseY,8,8);
  text("v", mouseX, mouseY - 15);

  var x2 = mouseX - cx;
  var y2 = cy - mouseY;
  var r1 = sqrt(x1*x1+y1*y1)/100;
  var r2 = sqrt(x2*x2+y2*y2)/100;
  var d  = (x1 * x2)/10000 + (y1 * y2)/10000;

  stroke(0);
  text("|u| = " + nf(r1,1,2), cx + 30, 20);
  text("|v| = " + nf(r2,1,2), cx + 30, 40);
  text("u . v = " + nf(d,1,2), cx + 30, 60);
}

function mousePressed() {
    x1 = mouseX - cx;
    y1 = cy - mouseY;
}
