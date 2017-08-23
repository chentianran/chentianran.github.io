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
  var xs = x1 + x2;
  var ys = y1 + y2;

  //--- vector sum -----------------------------
  stroke(50,200,80);
  fill(50,200,80);
  line(cx,cy,cx+xs,cy-ys);
  ellipse(cx+xs,cy-ys,8,8);
  text("u+v", cx+xs + 10, cy-ys - 10);

  //--- parallelogram -----------------------------
  stroke(100,100,100,100);
  line(cx+x1,cy-y1,cx+xs,cy-ys);
  line(cx+x2,cy-y2,cx+xs,cy-ys);
}

function mousePressed() {
    x1 = mouseX - cx;
    y1 = cy - mouseY;
}
