---
layout: default
title: Dot product of vectors
---

# {{ page.title }}

The _dot product_ (a.k.a. scalar product) is an operation that
take two vectors of the same dimension and produces a real number.
Algebraically, it is simply the sum of the products of the corresponding
entries in the two vectors:
<p>
\[
    \begin{bmatrix}
        x_1 \\ y_1
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x_2 \\ y_2
    \end{bmatrix}
    =
    x_1 x_2 + y_1 y_2
\]
</p>
In three-dimension, it is defined to be
<p>
\[
    \begin{bmatrix}
        x_1 \\ y_1 \\ z_1
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x_2 \\ y_2 \\ z_2
    \end{bmatrix}
    =
    x_1 x_2 + y_1 y_2 + z_1 z_2
\]
</p>


<div id="sketch-holder" class="text-center">
  <!-- Our sketch will go here! -->
</div>

<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/dotprod.js"></script>
