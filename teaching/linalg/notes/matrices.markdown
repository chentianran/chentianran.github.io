---
layout: lecturenote
title: Matrices
---

In general, a **matrix** simply a rectangular array of numbers.
A matrix that has $m$ rows and $n$ columns is called a $m \times n$ matrix.
That is, we all always follow the "rows-by-columns" convention
when describing the size (a.k.a. dimension) of a matrix.
For example, the matrix

$$  \begin{bmatrix}
        1 & 2 & 3 \\
        4 & 5 & 6
    \end{bmatrix}$$

is a $2 \times 3$ matrix.
When we need to use symbols to represent entries in a matrix,
we will write something like

$$  \begin{bmatrix}
        a_{11} & a_{12} & a_{13} \\
        a_{21} & a_{22} & a_{23}
    \end{bmatrix}$$

Note that the ordering in the subscripts (indices) is important:
$a_{12}$ and $a_{21}$ represents two different entries.

If the number of rows and columns in a matrix are the same,
then the matrix is called a **square matrix**.

As we shall see,
as far as algebra is concerned,
matrices of only one column look and behave just like column vectors.
And similarly, matrices of only one row look and behave just like row vectors.

Matrix sum
----------

When adding matrices *of the same size*,
we simply add the corresponding entries together.
For example

$$  \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    +
    \begin{bmatrix}
        x & y \\
        z & w
    \end{bmatrix}
    =
    \begin{bmatrix}
        a+x & b+y \\
        c+z & d+w
    \end{bmatrix}.$$

We do *not* allow matrices of difference sizes to be added together
(as far as this course is concerned).

The zero matrix
---------------

The zero matrix, of any given size,
is the matrix consists of zero entries, i.e.,

$$  \begin{bmatrix}
        0      & \cdots & 0      \\
        \vdots & \ddots & \vdots \\
        0      & \cdots & 0
    \end{bmatrix}.$$

The dimension is usually clear from context
It is easy to see that the sum of the zero matrix
with any matrix $A$ of the same size is still $A$.
So it really behave like the number "0" in the world of matrices.

Scalar multiples of matrices
----------------------------

We handle multiplications between scalars (i.e., numbers) and matrices
the same way we multiply scalars and vectors:
For any (real) number $r$,

$$  r \cdot
    \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}
    =
    \begin{bmatrix}
        ra & rb \\
        rc & rd
    \end{bmatrix}.$$

The same rule applies to matrices of any size:
the product of a number and a matrix is
a matrix of the same size whose entries are
simply the multiples of entries in the original matrix.

Matrix transpose
----------------

This is an operation that reflect entries of a matrix
along the main diagonal (the upper left to lower right diagonl):

$$  \begin{bmatrix}
        a & b \\
        c & d
    \end{bmatrix}^\top
    \;=\;
    \begin{bmatrix}
        a & c \\
        b & d
    \end{bmatrix}.$$

Similarly,

$$  \begin{bmatrix}
        a_{11} & a_{12} & a_{13} \\
        a_{21} & a_{22} & a_{23} \\
    \end{bmatrix}^\top
    \;=\;
    \begin{bmatrix}
        a_{11} & a_{21} \\
        a_{12} & a_{22} \\
        a_{13} & a_{23} \\
    \end{bmatrix}.$$

This operation simply turns rows into columns.
In general, the **transpose** of a $m \times n$ matrix $A$
is an $n \times m$ matrix denoted by $A^\top$.
It is easy to verify that $(A^\top)^\top = A$.

Matrix-vector product
---------------------

When multiplying a matrix and a vector together,
we do *not* perform entry-wise multiplication.
Instead, the multiplication is a generalization of the dot product:

$$  \begin{bmatrix}
        a & b \\
        c & d 
    \end{bmatrix}
    \,
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \;=\;
    \begin{bmatrix}
        ax + by \\
        cx + dy
    \end{bmatrix}.$$

In general, we can multiply an $m \times n$ matrix (on the left)
with a column vector in $\mathbb{R}^n$ (on the right)
via the formula

$$  \begin{bmatrix}
        a_{11} & \cdots & a_{1n} \\
        \vdots & \ddots & \vdots \\
        a_{m1} & \cdots & a_{mn} 
    \end{bmatrix}
    \begin{bmatrix}
        x_1 \\ 
        \vdots \\
        x_n
    \end{bmatrix}
    =
    \begin{bmatrix}
        a_{11} x_1 + \cdots + a_{1n} x_n \\
        \vdots \\
        a_{m1} x_1 + \cdots + a_{mn} x_n \\
    \end{bmatrix}$$

Note that the result is a column vector in $\mathbb{R}^m$,
and this multiplication (matrix on the left; column vector on the right)
is only possible when the number of columns the matrix has (on the left)
matches the number of entries in the vector (on the right).

We can see the similarity to dot products.
Indeed, the entries of the resulting vectors are exactly dot products between
rows of the matrix and the column vector.

This definition may seem strange in first glance,
but once we see how matrices show up naturally in
[other contexts](../matrix-connections/),
we will understand the reason behind this definition.

Identity matrix
---------------

The $n \times n$ **identity matrix** $I_n$ is a very special matrix
that is defined to be

$$  I_n = 
    \begin{bmatrix}
        1 &        & \\
          & \ddots & \\
          &        & 1
    \end{bmatrix}.$$

(missing entries are $0$'s)
That is, the $n \times n$ identity matrix has $1$'s on the main diagonal
and $0$'s elsewhere.

It has the property that

$$I_n \, \mathbf{v} = \mathbf{v}$$

for *all* $\mathbf{v} \in \mathbb{R}^n$.
It plays the role of "1", in matrix-vector products.
Whenever the dimension is clear from the context,
we simply use $I = I_n$,
an it is always assumed to be square.
