---
layout: default
title: Matrix determinant
---

# {{ page.title }}

The __determinant__ is an important numerical value that can be computed
from a _square_ matrix.
The determinant of a matrix $$A$$ is usually denoted by
$$\det(A)$$ or $$|A|$$.
One geometric interpretation of determinant is the signed scaling factor
of the transformation represented by the matrix.

## 2x2 cases
For a 2x2 matrix, we have simple formula for its determinant:
<p>
\[
    \det
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    =
    ad - bc.
\]
</p>
It is easy to verify that the absolute value of the determinant is exactly
the area of the parallelogram spanned by the two column vectors.
The sign of the determinant tells us about the "orientation" of this parallelogram
(homework).

## 3x3 cases
For a 3x3 matrix, the formula is much more complicated:
<p>
\[
    \det
    \begin{bmatrix}
        a & b & c \\
        d & e & f \\
        g & h & i
    \end{bmatrix}
    =
    aei + bfg + cdh - ceg - bdi - afh.
\]
</p>
This looks rather complicated.
I would not recommend anyone to spend much energy memorizing this formula.
Instead, we should use the _cofactor expansion_:
<p>
\[
    \det
    \begin{bmatrix}
        a & b & c \\
        d & e & f \\
        g & h & i
    \end{bmatrix}
    =
    a
    \det
    \begin{bmatrix}
        e & f \\
        h & i
    \end{bmatrix}
    -
    b
    \det
    \begin{bmatrix}
        d & f \\
        g & i
    \end{bmatrix}
    +
    c
    \det
    \begin{bmatrix}
        d & e \\
        g & h
    \end{bmatrix}
\]
</p>
In this formula, each 2x2 determinant is called a __minor__.
Similar to the 2x2 cases, we have a nice geometric interpretation
for the 3x3 matrix determinant:
It is the "signed volume" of the parallelepiped spanned by the
three column vectors.
