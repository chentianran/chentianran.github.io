---
layout: default
title: Contour plots
---

# {{ page.title }}

A _contour plot_ is a 2-dimensional way to visualize a 3-dimensional surface.
It is done by by plotting constant z slices, called contours (a.k.a. level sets).
That is, given a value for $$z$$, points/lines/curves are drawn for the $$(x,y)$$
coordinates where that $$z$$ value occurs.

### Near a minimum
This is the contour plot for the function $$z = x^2 + y^2$$ near $$(0,0)$$.
Noticing the closed contour lines with lower values in the center and
higher values on the outside.

<div id="plot-min"></div>

### Near a maximum
This is the contour plot for the function $$z = 4 - x^2 - y^2$$ near $$(0,0)$$.
Noticing the closed contour lines with higher values in the center and
lower values on the outside.

<div id="plot-max"></div>

### Near a saddle point
This is the contour plot for the function $$z = x^2 - y^2$$ near $$(0,0)$$
which is a _saddle point_.


<div id="plot-saddle"></div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script>
    var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

    for(var i = 0; i < size; i++) {
        x[i] = y[i] = -2.0 + 4.0*i / size;
        z[i] = new Array(size);
    }

    for(var i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            z[i][j] = x[i]*x[i] + y[j]*y[j];
        }
    }

    var data = [ {
            z: z,
            x: x,
            y: y,
            type: 'contour'
        }
    ];

    var layout = {
      title: 'A contour plot near a local minimum'
    }

    Plotly.newPlot('plot-min', data, layout);
</script>

<script>
    var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

    for(var i = 0; i < size; i++) {
        x[i] = y[i] = -2.0 + 4.0*i / size;
        z[i] = new Array(size);
    }

    for(var i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            z[i][j] = 4.0 - x[i]*x[i] - y[j]*y[j];
        }
    }

    var data = [ {
            z: z,
            x: x,
            y: y,
            type: 'contour'
        }
    ];

    var layout = {
      title: 'A contour plot near a local maximum'
    }

    Plotly.newPlot('plot-max', data, layout);
</script>


<script>
    var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

    for(var i = 0; i < size; i++) {
        x[i] = y[i] = -2.0 + 4.0*i / size;
        z[i] = new Array(size);
    }

    for(var i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            z[i][j] = x[i]*x[i] - y[j]*y[j];
        }
    }

    var data = [ {
            z: z,
            x: x,
            y: y,
            type: 'contour'
        }
    ];

    var layout = {
      title: 'A contour plot near a saddle point'
    }

    Plotly.newPlot('plot-saddle', data, layout);
</script>
