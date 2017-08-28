---
layout: default
title: Matrix-vector products
---

# {{ page.title }}

We can "multiply" a matrix and a vector together.
This type of matrix-vector product represents the result of a linear transformation
on a (geometric) vector, and it is only defined for cases where the
_number of columns in the matrix equals the number of rows in the vector_.
For the 2x2 case, the algebraic definition is quite simple:

<p>
\[
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    \begin{bmatrix}
        a x + b y \\ c x + d y
    \end{bmatrix}
\]
</p>

<div id="sketch-holder" class="text-center" style="position: relative;">
  <!-- Our sketch will go here! -->
</div>

In the 3x3 case:
<p>
\[
    \begin{bmatrix}
        a & b & c \\
        d & e & f \\
        g & h & i
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x \\ y \\ z
    \end{bmatrix}
    =
    \begin{bmatrix}
        a x + b y + c z \\
        d x + e y + f z \\
        g x + h y + i z
    \end{bmatrix}
\]
</p>

Of course the matrix does not need to be square.
When it is not square, the input vector and the output vector have different dimensions.
In that case, the matrix represents a
_linear transformation between two different spaces_.
For example, for a 2x3 matrix:
<p>
\[
    \begin{bmatrix}
        a & b & c \\
        d & e & f
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x \\ y \\ z
    \end{bmatrix}
    =
    \begin{bmatrix}
        a x + b y + c z \\
        d x + e y + f z
    \end{bmatrix}
\]
</p>

In general the matrix-vector between an $$m \times n$$ matrix
and an $$n \times 1$$ vector is defined to be
<p>
\[
    \begin{bmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        a_{21} & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x_1 \\ x_2 \\ \vdots \\ x_n
    \end{bmatrix}
    =
    \begin{bmatrix}
        a_{11} x_1 & a_{12} x_2 & \cdots & a_{1n} x_n \\
        a_{21} x_1 & a_{22} x_2 & \cdots & a_{2n} x_n \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{m1} x_1 & a_{m2} x_2 & \cdots & a_{mn} x_n
    \end{bmatrix}
\]
</p>

Note that the result is an $$m \times 1$$ vector.

<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/p5.dom.js"></script>
<script language="javascript" type="text/javascript" src="/js/matvec.js"></script>
