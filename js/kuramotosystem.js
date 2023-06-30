Oscillator = function (c) {
    this.angle    = Math.random() * 6.28318530718;
    this.natural  = Math.random() * 0.3;            // natural angular velocity
    this.velocity = this.natural;                   // current angular velocity
    this.color    = c;
};

Oscillator.prototype.update = function(dt) {
    this.angle += this.velocity * dt;
    this.angle %= 6.28318530718;
};

OscillatorNetwork = function () {
    this.oscillators = [];
    this.couplings = [];
    this.coupled = false;
    this.coupling_scalar = 1.0;
};

OscillatorNetwork.prototype.add_random = function (c) {
    this.oscillators.push (new Oscillator(c));
};

OscillatorNetwork.prototype.update = function(dt) {
    this.oscillators.forEach( (p) => {
        p.velocity = p.natural;
    });
    if (this.coupled) {
        this.couplings.forEach( (c) => {
            const p = this.oscillators[c.src];
            const q = this.oscillators[c.dst];
            const k = c.coef * this.coupling_scalar;
            const d = p.angle - q.angle;
            p.velocity -= k * Math.sin(d);
            q.velocity += k * Math.sin(d);
        });
    }

    this.oscillators.forEach( (p) => {
        p.update(dt);
    });
};
