var cx = 0;
var cy = 0;
var x1 = 200;
var y1 = 100;
var ta,tb,tc,td;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  frameRate(60);
  cx = width  / 2;
  cy = height / 2;

    ta = createInput();
    tb = createInput();
    tc = createInput();
    td = createInput();
    ta.parent('sketch-holder');
    tb.parent('sketch-holder');
    tc.parent('sketch-holder');
    td.parent('sketch-holder');

    ta.position (20, 120);
    tb.position (50, 120);
    tc.position (20, 150);
    td.position (50, 150);

    ta.size(20);
    tb.size(20);
    tc.size(20);
    td.size(20);

}

function draw() {
  clear();
  ellipseMode (CENTER);
  textSize(16)

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

  var x3 = ta.value() * x2 + (tb.value()*y2);
  var y3 = tc.value() * x2 + (td.value()*y2);

  stroke(255,0,0);
  fill  (255,0,0);
  line(cx,cy,cx + x3,cy - y3);
  ellipse (cx + x3,cy - y3,8,8);
  text("A v", cx + x3, cy - y3 - 15);
}

function mousePressed() {
    x1 = mouseX - cx;
    y1 = cy - mouseY;
}
