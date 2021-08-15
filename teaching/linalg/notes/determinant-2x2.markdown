---
layout: lecturenote
title: 2x2 matrix determinant
---

We have already seen "determinants" in the context of linear systems.
This is actually a quantity that we can compute for any square matrice.
Its value can provide us some important information about the matrix.
In particular, just by look at the determinant of a matrix,
we can know if the matrix is invertible.

Determinant: 2x2 cases {#determinant-2-times-2-cases}
----------------------

As we saw earlier, a matrix with a zero row or zero column will not be invertible.
Similarly, a matrix that has column that is a multiple or another column
will also not be invertible.
In general, the "invertibility" can be determined by computing the "matrix determinant".
For a $2 \times 2$ matrix

$$  A =
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}$$

its **determinant** is a number, denoted $\det A$,
is given by the formula

$$  \det A =
    \det
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    =
    ad - bc.$$

From a geometric point of view, we can see that the determinant
tells us if the two column vectors are collinear or zero.
That is, the determinant is 0 exactly when

- One of the column vector is zero;
- Both columns are zero;
- The two column vectors have the same direction; or
- The two column vectors have the exact opposite directions.

**Exercise.**
It is worth thinking about the geometric meaning of $|\det A|$ as well.
Prove that $|\det A|$ is the area of the parallelogram spanned by
the two columns of $A$.

**Exercise.**
What does the sign of the determinant tell us?

**Exercise.**
Prove that for a *lower triangular* or *upper triangular* matrix,
i.e., matrices of the form

$$  \begin{aligned}
        &
        \begin{bmatrix}
            a_{11} & a_{12} \\
            0      & a_{22}
        \end{bmatrix}
        &&\text{or} &
        \begin{bmatrix}
            a_{11} & 0 \\
            a_{21} & a_{22}
        \end{bmatrix},
    \end{aligned}$$

their determinants are simply the product of their diagonal entries.

From an algebraic point of view, determinants tell us
if a matrix is invertible.
For a $2 \times 2$ matrix $A$,

$$  \det A \ne 0
    \quad\Leftrightarrow\quad
    A^{-1} \text{ exists}.$$

**Exercise.**
Can you see why this criterion works?

For $2 \times 2$ matrices, the following properties hold:

$$  \begin{aligned}
        \det(A^\top) &= \det(A) &
        \det(AB) &= \det(A) \det(B).
    \end{aligned}$$

Consequently, if $A$ is invertible, then

$$\det(A^{-1}) = \frac{1}{\det(A)}.$$

Determinant and row/column operations {#determinant-and-rowcolumn-operations}
-------------------------------------

From the formula

$$  \det
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    =
    ad - bc$$

we can see that

- Scaling one row/column by a factor will scale the determinant by the same factor;
- Permuting the rows/column will alter the sign of the determinant;
- Adding a multiple of a row/column to another row/column will *not*
  change the determinant.

These properties suggest that we can also compute the determinant of a
matrix by performing elementary row/column operations and reducing the
matrix into a simple form
(although this seems unnecessary for the $2 \times 2$ case).
We will soon explore this idea for matrices of larger sizes

Inverse formula: 2x2 cases {#inverse-formula-2-times-2-cases}
--------------------------

Indeed, when $\det A \ne 0$,
we have a formula for the inverse:

$$
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}^{-1}
    =
    \frac{1}{ad - bc}
    \begin{bmatrix}
        d & -b \\
        -c & a
    \end{bmatrix},$$

if $ad - bc \ne 0$.

**Exercise.**
Determine if the following matrices are invertible.
If yes, compute their inverses.

$$  \begin{aligned}
        A &=
        \begin{bmatrix}
            1 & 2 \\
            3 & 6
        \end{bmatrix}
        &
        B &=
        \begin{bmatrix}
            1 & 2 \\
            3 & 7
        \end{bmatrix}
        &
        C &=
        \begin{bmatrix}
            1 & 2 \\
            3 & 8
        \end{bmatrix}
        \\
        D &=
        \begin{bmatrix}
            0 & 1 \\
            0 & 0
        \end{bmatrix}
        &
        E &=
        \begin{bmatrix}
            3 & -4 \\
            4 &  3
        \end{bmatrix}
        &
        R &=
        \begin{bmatrix}
            \cos \theta & -\sin \theta \\
            \sin \theta & \cos \theta
        \end{bmatrix}
    \end{aligned}$$
