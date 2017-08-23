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
  var dr = mr / 5;

  //--- pole ---------------------------------
  stroke(0);
  fill(0);
  ellipse (cx, cy, 3, 3);

  //--- axis ---------------------------------
  stroke(50,50,50,100);
  fill(0,0,0,0);
  line (cx, cy, width, cy);
  line (cx, cy, cx,    0);

  //--- rings --------------------------------
  // stroke(50,50,50,100);
  // textSize(12);
  // for (var i = 1; i <= 4; i++) {
  //   ellipse (cx, cy, i*dr, i*dr);
  //   text (i, cx+i*(dr/2)+4,cy-5);
  // }

  //--- basis --------------------------------
  stroke(0);
  line (cx, cy, cx + dr, cy);
  line (cx, cy, cx, cy - dr);
  triangle (cx + dr, cy, cx + dr - 10, cy + 5, cx + dr - 10, cy - 5)
  triangle (cx, cy - dr, cx + 5, cy - dr + 10, cx - 5, cy - dr + 10)

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

  //--- coordinate ---------------------
  stroke(0,0,0,0);
  var x = mouseX - cx;
  var y = cy - mouseY;
  var r = sqrt(x*x + y*y) / (dr);
  fill(0);
  textSize(14);
  text("x = " + nf(x/(dr),1,2), cx+30,15);
  text("y = " + nf(y/(dr),1,2), cx+30,30);
}
