---
layout: default
title: Vectors
---

# {{ page.title }}

In the context of calculus (as well as in physics and engineering),
a __vector__ is a geometry object that has both _magnitude_ and _direction_.
This concept is also known as "Euclidean vector" or "geometric vector".
Vectors are fundamental to the language of classical physics:
velocity, acceleration, and force are all vectors.

## Generalizations
In the much more general context of linear algebra, a vector can be any object
in a vector space which can be manipulated according to the rules of
vector algebra.

## Vectors in the plane

In the two-dimensional plane, a vector can be represented by two numbers ---
the vertical and horizontal "components".
They form the numerical coordinates of a vector in _standard basis_.

<p>
\[
    \vec{v} = x \vec{x} + y \vec{y}
\]
</p>

<div id="sketch-holder" class="text-center">
  <!-- Our sketch will go here! -->
</div>

## Basic operations

<p>
\[
    \begin{aligned}
        &\|\vec{v}\| &&\text{the magnitude of } \vec{v} \\
        &\vec{v} + \vec{u} &&\text{the sum of two vectors} \\
        &-\vec{v} &&\text{reverse the direction (and keeping the magnitude)} \\
        &c \cdot \vec{v} &&\text{scaling by a (positive) factor of } c
    \end{aligned}
\]


<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/vector.js"></script>
