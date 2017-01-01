var k = 0;
var sum = 0.0;
var step = 40;
var tw = 40;

function denom(n) {
  return n;
}

function setup() {
  var canvas = createCanvas(600,200);
  canvas.parent('sketch-holder');
  frameRate(60);
}

function draw() {

  var n = Math.floor(k / step) + 1;
  var r = k % step;
  var d = denom(n);

  if (0 == r) {
    sum = sum + (1.0 / d);
  }

  background("#f2f2f2");
  fill(0,0,0);
  text("n = ", width/2, height/2);
  text(n, width/2+20, height/2);

  text("S = ", width/2, height/2+20);
  text(sum, width/2+20, height/2 + 20);

  var i;
  for (i = -5; i < 12; i++) {
    var dx = tw * (i + r/step);
    var tx = width*0.75 - dx;
    if (i < 0) {
      fill(0,0,0,80 + i*25);
    } else {
      fill(0,0,0,255 - i*20);
    }
    if (n-i > 0) {
      text("1",tx,15);
      text("─",tx,22);
      text("+",tx-10,22);
      text(n-i,tx,30);
    }
  }
  k = k + 1;

  if ((0 == r) && (step > 5)) {
    step = step - 1;
    k = step * (n-1) + 1;
  }
}
