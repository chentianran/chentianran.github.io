var rad = 200;
var system;
var dt = 0.01;
var coupled = false;
var strength;

function setup() {
    var canvas = createCanvas(600,500);
    canvas.parent('sketch-holder');
    var b_reset  = createButton ('Reset');
    var b_couple = createButton ('Coupling');
    strength = createSlider(0, 40, 10);

    b_reset.parent('sketch-control');
    b_couple.parent('sketch-control');
    strength.parent('sketch-control');

    b_reset.mousePressed (reset);
    b_couple.mousePressed (coupling);

    reset();
}

function draw() {
    background(255);
    translate (width/2, height/2);

    noFill();
    stroke (128, 128, 128);
    ellipseMode (RADIUS);
    ellipse (0, 0, rad, rad);
    system.run();
}

function reset() {
    system = new ParticleSystem (createVector(width/2,height/2));
    system.addParticle('red');
    system.addParticle('orange');
    system.addParticle('magenta');
    system.addParticle('blue');
    system.addParticle('cyan');
}

function coupling() {
    coupled = ! coupled;
}

Particle = function (c) {
    this.angle = random(0,1);
    this.natural  = random(-0.2,0.6);        // natural angular velocity
    this.velocity = this.natural;
    this.color    = c;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

Particle.prototype.display = function() {
    stroke(128);
    strokeWeight(2);
    fill(this.color);
    var x = rad * cos(this.angle * TWO_PI);
    var y = rad * sin(this.angle * TWO_PI);
    ellipse(x, y, 12, 12);
};

Particle.prototype.update = function() {
    this.angle += this.velocity * dt;
    this.angle %= 1.0;
};

ParticleSystem = function(pos) {
    this.origin = pos.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function (c) {
    this.particles.push (new Particle(c));
};

ParticleSystem.prototype.run = function() {
    if (coupled) {
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            p.velocity = p.natural;
            for (var j = 0; j < this.particles.length; j++) {
                if (j != i ) {
                    var q = this.particles[j];
                    diff = p.angle - q.angle;
                    var k = map (strength.value(), 0, 20, 0.0, 0.3);
                    p.velocity -= k * sin(diff * TWO_PI);
                }
            }
        }
    }

    for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].run();
    }

    strokeWeight(1)
    if (coupled) {
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i];
            var x1 = rad * cos(p.angle * TWO_PI);
            var y1 = rad * sin(p.angle * TWO_PI);
            for (var j = 0; j < this.particles.length; j++) {
                var q = this.particles[j];
                var x2 = rad * cos(q.angle * TWO_PI);
                var y2 = rad * sin(q.angle * TWO_PI);
                line (x1, y1, x2, y2);
            }
        }
    }
};
