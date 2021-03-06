---
layout: default
title: Polar coordinate
---

# {{ page.title }}

Polar coordinate system is a planar (2-dimensional) coordinate system in which
each point on a plane is represented by its distance from a reference point
(the _pole_ or _origin_) and an angle from a reference direction (the _polar axis_).

### TL;DR
* It uses the pair of numbers (distance,angle) to represent a point.
* We usually use the notation $$(r,\theta)$$.
* We usually require $$r \ge 0$$ and $$\theta \in [0,2\pi)$$ (there are other conventions out there).

### How does it work?
In the demonstration below, move your mouse to see how points on the plane
are represented in the polar coordinate system.

<div id="sketch-holder" class="text-center">
  <!-- Our sketch will go here! -->
</div>

Just like the in the Cartesian system, each point on the plane is represented
by a pair of numbers in the polar coordinate system.
But instead of using $$(x,y)$$, the polar coordinate system uses $$(r,\theta)$$
where $$r$$ represents the distance between this point and the pole
while $$\theta$$ angle between the reference direction and the ray formed by
the pole and this point.

### Polar coordinates are may not be unique
* First of all, $$(0,\theta)$$ for all choice of $$\theta$$ point to the pole.


### Conversion between Cartesian coordinate system

The polar coordinates $$(r,\theta)$$ can be converted to the Cartesian coordinates
$$(x,y)$$ using the following equations:

<p>
\[
  \begin{align*}
    x &= r \cos(\theta) \\
    y &= r \sin(\theta)
  \end{align*}
\]
</p>

<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/polar.js"></script>
