---
layout: lecturenote
title: Computing inverse via row reduction
---

The formula for computing inverse matrix via cofactors turns out to be
extremely inefficient for all but the smallest matrices. A much more
efficient way is to use row reductions.

## Block matrix product {#block-matrix-product}

Recall that in defining the matrix-matrix product $AB$,
for matrices $A$ and $B$
(as long as their dimensions match in a way that the product is defined),
if we write

$$B = [ \mathbf{b}_1 \; \cdots \; \mathbf{b}_n],$$

then $AB$ is given by

$$  A 
    \begin{bmatrix}
        \mathbf{b}_1 &
        \cdots &
        \mathbf{b}_n 
    \end{bmatrix}
    =
    \begin{bmatrix}
        A \mathbf{b}_1 &
        \cdots &
        A \mathbf{b}_n 
    \end{bmatrix}.$$

Grouping columns of $B$ into blocks, we can see
the same convention works for block matrices
(matrices whose columns are divided into blocks).
In particular, if $B$ consists of two blocks

$$B = [ \, B_1 \;\; B_2 \, ]$$

(i.e., it consists of two blocks $B_1$ and $B_2$
having the same number of rows), then

$$  A 
    \begin{bmatrix}
        B_1 & B_2
    \end{bmatrix}
    =
    \begin{bmatrix}
        A \, B_1 &
        A \, B_2
    \end{bmatrix}.$$

## Computing inverse via row reductions {#inverse-via-row-reductions}

To compute the inverse of an $n \times n$ matrix $A$
(and also test if an inverse exists in the first place),
we can start with the $n \times 2n$ matrix
(twice as wide as $A$)

$$  \begin{bmatrix}
        A & I
    \end{bmatrix}$$

consisting of two blocks.
Using elementary row operations, we will *try* to perform
the reduction

$$  \begin{bmatrix}
        A & I
    \end{bmatrix}
    \quad\longrightarrow\quad
    \begin{bmatrix}
        I & B
    \end{bmatrix}$$

for some $n \times n$ matrix $B$.
This is equivalent to performing Gauss-Jordan elimination.
If this process is successful,
i.e., the left half of the $n \times 2n$ matrix can be reduced to
the identity matrix, then the right half, matrix $B$, is the
inverse of $A$.
This process can be summarized into the following simple recipe.

To compute the inverse of an $n \times n$ matrix $A$:

1. Form the $n \times 2n$ matrix $[ \; A \quad I \;\; ]$.
2. Perform Gauss-Jordan elimination to reduce $[ \; A \quad I \;\; ]$
    to its RREF.
3. Examine the left half of the RREF:
    - If the left half is reduced to $I$, i.e., if every row has a
        leading 1, then the right half is $A^{-1}$.
    - Otherwise $A$ has no inverse.

One important consequence of this procedure is a potentially simpler
criterion for determining if a square matrix has an inverse:

A square matrix $A$ has an inverse if and only if its RREF is the
identity matrix.

**Exercise.**
Compute the inverse matrices of

$$  \begin{aligned}
        \begin{bmatrix}
            1 & 2 & 3 \\
            0 & 4 & 5 \\
            0 & 1 & 1 \\
        \end{bmatrix}
        && 
        \begin{bmatrix}
            1 & 2 &  0 \\ 
            2 & 3 &  5 \\
            0 & 2 & -8 \\
        \end{bmatrix}
        && 
        \begin{bmatrix}
                1 & 2 & 3 \\
            -1 & 4 & 5 \\
                0 & 3 & 4 \\
        \end{bmatrix}
    \end{aligned}$$

## Why does it work? {#why-does-it-work}

It turns out the result of Gauss-Jordan elimination of a matrix $M$ can
always be expressed as a matrix-matrix product $BM$ for a nonsingular
square matrix $B$. Here, the matrix $B$ is the product of several
matrices each representing a single elementary row operation. Therefore,
computing the RREF of $[\; A \quad I \;]$ is equivalent to forming the
matrix product

$$  B 
    \begin{bmatrix}
        A & I
    \end{bmatrix}
    = 
    \begin{bmatrix}
        BA & BI
    \end{bmatrix}
    = 
    \begin{bmatrix}
        BA & B
    \end{bmatrix}$$

for some nonsingular square matrix $B$. It is
easy to see that the right half ($BA$) will become the identity matrix
if and only if $B = A^{-1}$, which is the right half of the resulting
RREF.

From the uniqueness of the RREF, we can also justify the uniqueness of
the inverse matrix (if exist). That is, for an $n \times n$ matrix A,
there is at most one matrix $B$ such that $AB = BA = I$.
