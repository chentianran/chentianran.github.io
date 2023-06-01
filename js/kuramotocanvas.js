OscillatorAnimation = function(parent, params) {
    this.track_radius = 0.8  * Math.min(params.width, params.height) / 2;
    this.disk_radius  = 0.08 * Math.min(params.width, params.height) / 2;
    this.two = new Two(params).appendTo(parent);
    this.cx = params.width  / 2;   // center x value
    this.cy = params.height / 2;   // center y value
    this.track = this.two.makeCircle(
        params.width / 2,
        params.height / 2,
        this.track_radius
    );
    this.track.linewidth = 5;
    this.track.fill = 'transparent';
    this.track.stroke = '#888';
    this.network = new OscillatorNetwork();
    this.speed = 0.05;
    this.isAnimating  = false;
    this.isCoupled    = false;
    this.isRotational = false;

    this.add_oscillator = function(p) {
        p.circle = this.two.makeCircle(cx, cy, this.disk_radius);
        p.circle.fill = p.color;
        this.network.add_oscillator(p);
    }

    this.add_random = function(color) {
        const p = new Oscillator(color);
        p.circle = this.two.makeCircle(this.cx, this.cy, this.disk_radius);
        p.circle.fill = p.color;
        this.network.oscillators.push(p);
    }

    this.add_coupling = (src, dst, coef) => {
        const c = { src: src, dst: dst, coef: coef };
        c.line = this.two.makeLine(this.cx,this.cx,this.cy,this.cy);
        c.line.linewidth = 5;
        c.line.stroke = "#333333";
        this.network.couplings.push(c);
    }

    this.update = (frameCount) => {
        this.network.update(this.speed);
        let ref = 0.0;
        if (this.isRotational) {
            ref = this.network.oscillators[0].angle;
        }
        this.network.oscillators.forEach((p) => {
            const x = this.cx + this.track_radius * Math.sin(p.angle - ref);
            const y = this.cy - this.track_radius * Math.cos(p.angle - ref);
            p.x = x;
            p.y = y;
            p.circle.translation.set(x, y);
        });
        if (this.network.coupled) {
            this.network.couplings.forEach((c) => {
                const p = this.network.oscillators[c.src];
                const q = this.network.oscillators[c.dst];
                c.line.vertices[0].x = p.x;
                c.line.vertices[0].y = p.y;
                c.line.vertices[1].x = q.x;
                c.line.vertices[1].y = q.y;
            });
        }
    }

    this.toggle_animation = () => {
        console.log(this.two);
        if (! this.isAnimating) {
            this.isAnimating = true;
            this.two.bind('update', this.update).play();
        } else {
            this.isAnimating = false;
            this.two.unbind('update', this.update).pause();
        }
    }

    this.toggle_coupling = () => {
        this.isCoupled = !this.isCoupled;
        this.network.coupled = this.isCoupled;
        if (this.isCoupled) {
            this.network.couplings.forEach((c) => {
                c.line.visible = true;
            });
        } else {
            this.network.couplings.forEach((c) => {
                c.line.visible = false;
            });
        }
    }

    this.toggle_rotational = () => {
        this.isRotational = !this.isRotational;
    }

    this.randomize = () => {
        this.network.oscillators.forEach((p) => {
            p.angle = Math.random() * 6.28318530718;
            p.natural = Math.random() * 0.1;
        });
        this.network.couplings.forEach((c) => {
            c.coef = Math.random() * 0.2;
        });
    }

};
