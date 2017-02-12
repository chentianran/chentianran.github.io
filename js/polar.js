function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  frameRate(60);
}

function draw() {
  clear();

  ellipseMode (CENTER);

  var mr = min (width,height);
  var cx = width  / 2;
  var cy = height / 2;

  //--- pole ---------------------------------
  stroke(0);
  fill(0);
  ellipse (cx, cy, 3, 3);

  //--- axis ---------------------------------
  stroke(50);
  fill(0,0,0,0);
  line (cx, cy, width, cy);

  //--- rings --------------------------------
  stroke(50,50,50,100);
  var dr = mr / 6;
  textSize(12);
  for (var i = 1; i <= 5; i++) {
    ellipse (cx, cy, i*dr, i*dr);
    text (i, cx+i*(dr/2)+4,cy-5);
  }

  if (mouseX <= 0 || mouseX >= width) {
    return;
  }
  if (mouseY <= 0 || mouseY >= height) {
    return;
  }
  
  //--- line ---------------------------------
  stroke(255,0,0,100);
  line(cx,cy,mouseX,mouseY);

  //--- point --------------------------------
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(mouseX,mouseY,8,8);

  //--- polar coordinate ---------------------
  stroke(0,0,0,0);
  var x = mouseX - cx;
  var y = cy - mouseY;
  var r = sqrt(x*x + y*y) / (dr/2);
  var t = atan2(y,x) / PI;
  if (t < 0.0) {
    t = t + 2.0;
  }
  fill(0);
  textSize(14);
  text("r = " + nf(r,1,2),         cx-70,30);
  text("t = " + nf(t,1,2) + " Pi", cx+30,30);
}
