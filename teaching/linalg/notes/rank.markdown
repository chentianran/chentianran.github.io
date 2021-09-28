---
layout: lecturenote
title: Row space, column space, and matrix rank
---

For a matrix $A$,
its **row space** is the span of the rows of $A$,
and its **column space** is the span of its columns.
We call them "spaces" because they are examples of "vector spaces",
which will study more closely soon.
For now, we derive the concept of "rank" from these two spaces.

Geometric motivations
---------------------

It is useful to interpret matrices as representations of
geometric transformations of "vectors"
(free geometric vectors, which are simply directed line segments).
Indeed, that is how matrices are usually used in practice.

For example, we can consider the matrix

$$  \begin{bmatrix}
    1 & 2 \\
    3 & 5
    \end{bmatrix}$$

to represent the transformation

$$  \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \quad\mapsto\quad
    \begin{bmatrix}
        1 & 2 \\
        3 & 5
    \end{bmatrix}
    \;
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    \begin{bmatrix}
        1x + 2y \\
        3x + 5y
    \end{bmatrix},$$

which sends vectors in the plane to vectors in the plane.
It is easy to verify that the image of this transformation
also fills the entire two-dimensional plane,
i.e., it is possible to get every vector in the plane as output of this transformation.
We consider such a transformation to have "rank-2".

The following transformation, however, behave a little differently.

$$  \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \quad\mapsto\quad
    \begin{bmatrix}
        1 & 2 \\
        0 & 0
    \end{bmatrix}
    \;
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    \begin{bmatrix}
        1x + 2y \\
        0
    \end{bmatrix}.$$

We can see that the $y$-coordinate of the output will be zero
regardless of the input.
That is, the output will be restricted to vectors parallel to the $x$-axis,
and, in a sense, this transformation "crushes" the two-dimensional plane
to a one-dimensional line.
We describe such transformations as having "rank-1".

Indeed, we can even crush the entire plane into a single point
via the transformation

$$  \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \quad\mapsto\quad
    \begin{bmatrix}
        0 & 0 \\
        0 & 0
    \end{bmatrix}
    \;
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    \begin{bmatrix}
        0x + 0y \\
        0x + 0y
    \end{bmatrix}
    =
    \begin{bmatrix}
        0 \\
        0
    \end{bmatrix}.$$

The output will be the zero vector regardless of the input.
We consider such a transformation as having "rank-0".

It is not difficult to generalize the vague description we gave here
to the three-dimensional space.
Indeed, the concept of "rank" can be developed in a similar way in any dimension.
In the following we will develop this concept of "rank"
more rigorously via the concept of linear independence.

Column rank of a matrix {#column-rank-of-a-matrix}
-----------------------

Given a matrix, the maximal number of linearly independent *columns*
is known as the **column rank** of the matrix.
Note that there may be more than one way of choosing a
linearly independent subset of columns.
However, regardless of your choice, the number of columns in such a
linearly independent subset of columns is always the same,
and this number is the column rank.
The column rank measures how "big" the "column space" is,
and this notion agree with the geometric intuition
we developed in the previous section.

A matrix whose column rank matches its number of columns (i.e., reaching
the maximum possible column rank) is said to be of **full column-rank**.

Row rank of a matrix {#row-rank-of-a-matrix}
--------------------

Similarly, given a matrix, the maximal number of linearly independent *row* is
known as the **row rank** of the matrix.
The row rank measures how "big" the row space is.

A matrix whose row rank matches its number of rows (i.e., reaching the
maximum possible row rank) is said to be of **full row-rank**.

Rank of a matrix {#rank-of-a-matrix}
----------------

It turns out, despite the rather different definitions, the column rank
and row rank of a matrix are always the *same*.

Given a matrix $A$, its column rank equals its row rank.

Therefore, we simply call this quantity the **rank** of the matrix $A$,
denoted by $\operatorname{rank} A$. This turns out to be one of the most
important quantity of a matrix. It tells us a great deal of information
about the corresponding linear function.

A *square* $n \times n$ matrix $A$ is said to be of **full rank** if its
rank is $n$ (the maximum possible rank). From the properties listed
above, we can see that a square matrix is invertible if and only if it
is full rank.

For nonsquare matrix, however, the term "full rank" may be ambiguous,
and usually depends on the context, we therefore avoid this term.

Computing matrix rank from RREF {#computing-matrix-rank-from-rref}
-------------------------------

Since column/row rank of a matrix is defined in terms of linear independence,
it is therefore not at all surprising that rank can be extracted
easily from RREF (reduced row echelon forms).

Given a matrix $A$, the rank of $A$ equals the number of leading 1's in
its RREF.

**Exercise.**
Compute the (column) rank of the following matrices.

$$  \begin{bmatrix}
        0 & 0 \\
        0 & 0 \\
    \end{bmatrix}
    , \quad
    \begin{bmatrix}
        1 & 2 \\
        2 & 4 \\
    \end{bmatrix}
    , \quad
    \begin{bmatrix}
        1 & 2 & 3 \\
        4 & 5 & 6 \\
        7 & 8 & 9 \\
    \end{bmatrix}
    , \quad
    \begin{bmatrix}
        1 & 1 & 3 \\
        2 & 1 & 2 \\
        1 & 2 & 6 \\
        3 & 2 & 5 \\
    \end{bmatrix}
    , \quad
    \begin{bmatrix}
        1 & 2 & 3 \\
        0 & 0 & 0 \\
        2 & 4 & 6 \\
        3 & 6 & 9 \\
    \end{bmatrix}$$

Why does this method work? {#why-does-this-method-work}
--------------------------

While the Gauss-Jordan elimination process will most likely alter all
columns, the linear independence among columns is nonetheless preserved.
Recall that the process of reducing a matrix $A$ into its RREF $E$ can
be represented by a matrix-matrix product

$$  G A = 
    G  
    \begin{bmatrix}
        \mathbf{a}_1 &
        \mathbf{a}_2 &
        \dots&
        \mathbf{a}_n
    \end{bmatrix}
    =
    \begin{bmatrix}
        G\mathbf{a}_1 &
        G\mathbf{a}_2 &
        \dots&
        G\mathbf{a}_n
    \end{bmatrix}$$

where $G$ is a nonsingular square matrix that
represented the combined effect of all the elementary row operations. As
stated previously, the linear independence among columns is indeed
preserved.

Full rank square matrices {#full-rank-square-matrices}
-------------------------

For a square matrix $A$, $A$ is invertible if and only if it is
full-rank (full column rank or full row rank, since these are equivalent
in this case where $A$ is square).
Again, we can understand how/why this works
by looking the the process of computing the RREF of the matrix.

Rank-one matrices {#rank-one-matrices}
-----------------

An $m \times n$ matrix $A$ of rank *one* can always be written as

$$A = \mathbf{u} \mathbf{v}^\top$$

for some column vectors
$\mathbf{u} \in \mathbb{R}^m$ and $\mathbf{v} \in \mathbb{R}^n$. Such
rank-one matrices can be considered as the building blocks of all
matrices. Indeed, *every* matrix is a sum of rank-one matrices. This
idea will lead to the important theory of "singular value
decomposition".
