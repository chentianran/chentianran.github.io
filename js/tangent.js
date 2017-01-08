function setup() {
  var canvas = createCanvas(500,500);
  canvas.parent('sketch-holder');
}

function draw() {
  background(255);
  ellipseMode(CENTER);
  noFill();
  var x0 = width;
  var y0 = height;
  arc(x0,y0,900,900,3.3,4.6);
  //noStroke();
  fill(255,0,0);

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
