var time = 0.0;
var dt   = 0.01;

function update(t0) {
  var r = 1.0 + 0.1*t0;
  var t = t0;
  return [r,t];
}

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-holder');
  frameRate(60);
}

function draw() {
  //background(255,255,255,)
  ellipseMode (CENTER);

  var mr = min (width,height);
  var dr = mr / 6;              // distance between rings
  var cx = width  / 2;          // center x
  var cy = height / 2;          // center y

  //--- polar axis ---------------------------
  stroke(50,50,50);
  fill(50,50,50);
  ellipse (cx, cy, 3, 3);
  line (0, cy, width, cy);
  line (cx, 0, cx, height);

  textSize(12);
  noFill();
  for (var i = 1; i <= 5; i++) {
    ellipse (cx, cy, i*dr, i*dr);
    text (i, cx+i*(dr/2)+4,cy-5);
  }

  //--- line ---------------------------------
  var pt = update(time);
  var r  = pt[0] * (dr/2);
  var t  = pt[1];

  var x = r * cos(t);
  var y = r * sin(t);

  //--- point --------------------------------
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(cx + x,cy + y,5,5);

  time = time + dt;
}
