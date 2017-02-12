---
layout: default
title: Polar coordinate
---

# {{ page.title }}

Polar coordinate system is a planar (2-dimensional) coordinate system in which
each point on a plane is represented by its distance from a reference point
(the _pole_ or _origin_) and an angle from a reference direction (the _polar axis_).

In the demonstration below, move your mouse to see how points on the plane
are represented in the polar coordinate system.

<div id="sketch-holder">
  <!-- Our sketch will go here! -->
</div>

The polar coordinates r and ϕ can be converted to the Cartesian coordinates
x and y by using the trigonometric functions:

\\[
  \begin{align*}
    x &= r \cos(\theta) \\
    y &= r \sin(\theta)
  \end{align*}
\\]

<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/polar.js"></script>
