function setup() {
  var canvas = createCanvas(800,400);
  canvas.parent('sketch-holder');
}

function get_value(x) {
    return sin(x);
}

function get_slope(x) {
    return cos(x);
}

function makeY() {

function draw() {
  background("#f2f2f2");
  ellipseMode(CENTER);
  noFill();

  var dx = 4;
  var scale = 100;

  for (var i = 0; i < width / dx; ++i) {
      var sx = i * dx;
      var ax = (sx - width/2) / scale;
      var ay = get_value (ax);
      var sy = height/2 - (ay * scale);

      point (sx, sy);
  }

  var x1 = 181.8;
  var y1 = 181.8;
  ellipse(x1,y1,6,6);

  if ((mouseX < width - 50) && (mouseX > 50)) {
    var dx = width - mouseX;
    var dy = sqrt(450*450 - dx*dx);
    var x2 = mouseX;
    var y2 = height - dy;
    ellipse(x2,y2,6,6);

    dx = x2 - x1;
    dy = y2 - y1;
    if (abs(dy) > 0.01) {
      var xl = 0.0;
      var yl = y1 + (0.0-x1)*dy/dx;
      var xr = width;
      var yr = y1 + (xr-x1)*dy/dx;
      line(xl,yl,xr,yr);

      text("slope = ", 300, 400);
      text( -dy/dx,    360, 400);
    }
  }
}
