var t = 0.0;
var dt = 0.02;
var r, x, y;

function update() {
  r = 0.8*min(width/2,height/2);
  x = r*cos(t);
  y = r*sin(t);
}

function setup() {
  var canvas = createCanvas(500,500);
  canvas.parent('sketch-holder');

  background(255,255,255);
  frameRate(30);
}

function draw() {
  update();

  background(255,255,255,5);
  ellipseMode(CENTER);
  noStroke();
  fill(255,0,0);
  ellipse(width/2 + x,height/2-y,10,10);

  t = t + dt;
}
