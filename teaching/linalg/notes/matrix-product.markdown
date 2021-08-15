---
layout: lecturenote
title: Matrix products
---

Matrix-matrix product
---------------------

The definition of products of matrices appears complicated.
It is much easier to explain if we write matrices in terms of columns and rows.
As always, we start with some concrete cases
and will see the full generalization soon.

For a $4 \times 2$ matrix $A$ and a $2 \times 3$ matrix $B$,
if we write
$B = [ \mathbf{b}_1 \; \mathbf{b}_2 \; \mathbf{b}_3]$,
where $\mathbf{b}_1,\mathbf{b}_2,\mathbf{b}_3$ are its three columns,
then the matrix-matrix product $AB$ is a $4 \times 3$ matrix given by

$$  A 
    \begin{bmatrix}
        \mathbf{b}_1 &
        \mathbf{b}_2 &
        \mathbf{b}_3 
    \end{bmatrix}
    =
    \begin{bmatrix}
        A \mathbf{b}_1 &
        A \mathbf{b}_2 &
        A \mathbf{b}_3 
    \end{bmatrix}.$$

In general, if $B$ has $\ell$ columns

$$  \mathbf{b}_1,
    \ldots,
    \mathbf{b}_\ell,$$

then the product $AB$ also has
$\ell$ columns which are

$$  A \mathbf{b}_1,
    \ldots ,
    A \mathbf{b}_\ell.$$

**Exercise.**
Compute the matrix-matrix product

$$  \begin{bmatrix}
        1 & 2 \\
        3 & 4 \\
    \end{bmatrix}
    \begin{bmatrix}
        2 & 1 \\
        0 & 4 \\
    \end{bmatrix}.$$

**Exercise.**
Compute the matrix-matrix product

$$  \begin{bmatrix}
        1 & 2 \\
        3 & 4 \\
        0 & 2
    \end{bmatrix}
    \begin{bmatrix}
        0 & 3 & 1 & 0\\
        1 & 2 & 0 & 4\\
    \end{bmatrix}.$$

Entry formula
-------------

Alternatively, we can also express matrix-matrix product
in terms of the formula for individual entries.
Suppose $A$ is an $m \times n$ matrix
and $B$ is an $n \times \ell$ matrix
then the product $C = AB$ is an $m \times \ell$ matrix
whose entries are given by

$$ c_{ij} = \sum_{k=1}^n a_{ik} b_{kj}. $$

Of course, this formula is equivalent to what we explained above.

Matching dimensions
-------------------

For matrix product to be defined,
the dimensions of the matrices must match in a specific way:

$$  (m \times n) \cdot (n \times \ell)
    \;\longrightarrow\;
    (m \times \ell).$$

That is, for the matrix $AB$ to make sense,
the number of columns in $A$ must be exactly the number of rows in $B$.

Notation
--------

It is worth noting that the matrix-matrix product
between $A$ and $B$ is simply $AB$.
There is *no* $\times$ or $\cdot$ in between.

Algebraic properties
--------------------

It is straightforward to verify that for matrices $A,B,C$,

$$  \begin{aligned}
        IA &= A
        &
        (A+B)C &= AC + BC
        &
        (AB)C &= A(BC)
        \\
        AI &= A
        &
        A(B+C) &= AB + AC
        &
        (AB)^\top &= B^\top A^\top
    \end{aligned}$$

as long as their dimensions allow the products to be properly defined.
Similarly, for a matrices $A,B$ and a vector $\mathbf{v}$

$$  \begin{aligned}
        A(B\mathbf{v}) &= (AB) \mathbf{v}
        &
        (\mathbf{v} A)B &= \mathbf{v} (AB)
    \end{aligned}$$

as long as their dimensions allow these products to be properly defined
(in particular, the vector $\mathbf{v}$ in the second equation has to be a row vector).

Matrix power
------------

For a *square* matrix $A$, its product with itself is well defined,
and naturally we use the notation

$$A^2 = A A.$$

In general, we use the notation

$$A^d = \overbrace{A \cdots A}^d$$
