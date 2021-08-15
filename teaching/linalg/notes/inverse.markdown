---
layout: lecturenote
title: Matrix inverse
---

Inverse of a matrix {#inverse-of-a-matrix}
-------------------

For a *square* matrix $$A$$, if there is a matrix $$B$$ of the same size
such that

$$  \begin{aligned}
        AB &= I
        &&\text{and} &
        BA &= I
    \end{aligned},$$

then $$B$$ is called an **inverse matrix** of $$A$$
(or simply an **inverse** of $$A$$).
It is important to note that some matrix
may not have an inverse at all.

**Important non-example.**
Prove that the matrix

$$  A =
    \begin{bmatrix}
        1 & 0 \\
        0 & 0
    \end{bmatrix}$$

has no inverse.

If an inverse of a matrix does exist, then it must be unique.
Therefore we say it is *the* inverse of that matrix.
For a square matrix $$A$$,
we use the notation $$A^{-1}$$ for the inverse of $$A$$, if exists.
In this case, we say $A$ is **invertible** (or **nonsingular**).
The following table shows equivalent terms we use:

| has an inverse  |  is invertible    | is nonsingular |
|  has no inverse | is not invertible |  is singular   |

It is straightforward to verify the following:

$$  \begin{aligned}
        (A^{-1})^{-1} &= A &
        (A^\top)^{-1} &= (A^{-1})^\top \\
        (AB)^{-1} &= B^{-1} A^{-1} &
        (A^n)^{-1} &= (A^{-1})^n.
    \end{aligned}$$

Determine if the following matrices are invertible.
If yes, find the inverse matrices.

$$\begin{aligned}
            A &=
            \begin{bmatrix}
                1 & 0 \\
                0 & 3
            \end{bmatrix}
            &
            B &=
            \begin{bmatrix}
                1 & 1 \\
                0 & 1
            \end{bmatrix}
            &
            C &=
            \begin{bmatrix}
                1 & 1 \\
                2 & 2
            \end{bmatrix}
        \end{aligned}$$

**Exercise.**
The definition of matrix inverse requires us to check both
$$AB = I$$ and $$BA = I$$ before we declare $$B$$ to be the inverse of $$A$$.
Do we have to check both directions?
Or will $$AB = I$$ automatically imply $$BA = I$$? Explain why.

Inverse matrix and inverse function {#inverse-matrix-and-inverse-function}
-----------------------------------

For an $$n \times n$$ matrix $$A$$,
we can consider the linear function
$$f : \mathbb{R}^n \to \mathbb{R}^n$$ given by $$f(\mathbf{x}) = A \mathbf{x}$$.
If $$A$$ has an inverse $$A^{-1}$$,
then it is easy to verify that $f$ also has an inverse *function*,
and this inverse function is given by $$f^{-1}(\mathbf{x}) = A^{-1} \mathbf{x}$$.

Inverse matrices and linear systems {#inverse-matrices-and-linear-systems}
-----------------------------------

Recall that we can always write a linear system as a single equations
involving matrix-vector product. In particular, a linear system of $n$
equations in $n$ variables (so called "square system") can be written as

$$A \mathbf{x} = \mathbf{b}$$

where $A$ is an $n \times n$ matrix collecting all the coefficients,
$$\mathbf{x}$$ contains all the unknowns, and $$\mathbf{b} \in \mathbb{R}^n$$
represents the constant terms on the right hand side.

In this context, $$A$$ is invertible *if and only if* the linear system
has a unique solution which is

$$\mathbf{x} = A^{-1} \mathbf{b}.$$
