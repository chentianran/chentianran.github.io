---
layout: lecturenote
title: Matrices, linear systems, and linear transformations
---

Connections to linear systems
-----------------------------

We can now view a linear system as a single equation
involving a matrix-vector product:

$$  \left\{
        \begin{aligned}
            a x + b y &= \alpha \\
            c x + d y &= \beta \\
        \end{aligned}
    \right.
    \quad\Leftrightarrow\quad
    \begin{bmatrix}
        a & b \\
        c & d 
    \end{bmatrix}
    \,
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \;=\;
    \begin{bmatrix}
        \alpha \\
        \beta
    \end{bmatrix}.$$

In general, a system of $m$ equations involving $n$ unknowns
can be written as a compact equation

$$A \mathbf{x} = \mathbf{b}$$

where $A$ is an $m \times n$ matrix that collects all the coefficients,
$\mathbf{x}$ is a column vector containing $n$ entries
$x_1,\dots,x_n$, each representing an unknown,
and $\mathbf{b}$ is a column vector containing $m$ entries
that are the right-hand-sides of the equations.

Matrix-vector products as transformations
-----------------------------------------

For a given $2 \times 2$ matrix $A$, the function
$\mathbf{v} \mapsto A \mathbf{v}$ can be considered as a transformation
of vectors in $\mathbb{R}^2$.
That is, the function $f : \mathbb{R}^2 \to \mathbb{R}^2$ given by
$f(\mathbf{v}) = A \mathbf{v}$ is defined everywhere in $\mathbb{R}^2$
and sends vectors in $\mathbb{R}^2$ to vectors in $\mathbb{R}^2$.

**Exercise.** Consider matrices

$$  \begin{aligned}
        A &= 
        \begin{bmatrix}
            1 & 0 \\
            0 & -1
        \end{bmatrix}
        &
        B &= 
        \begin{bmatrix}
            2 & 0 \\
            0 & 3
        \end{bmatrix}
        &
        C &= 
        \begin{bmatrix}
            0 & -1 \\
            1 &  0
        \end{bmatrix}
    \end{aligned}$$

What are the geometric interpretations of the
transformation $\mathbf{v} \mapsto A \mathbf{v}$,
$\mathbf{v} \mapsto B \mathbf{v}$, and
$\mathbf{v} \mapsto C \mathbf{v}$?

In general, given a $m \times n$ matrix $A$, the function
$f(\mathbf{v}) = A \mathbf{v}$ is a function
$f : \mathbb{R}^n \to \mathbb{R}^m$. That is, the domain if $f$ is
$\mathbb{R}^n$ and its codomain is $\mathbb{R}^m$ (the range may *not*
be the entire $\mathbb{R}^m$).

Linearity
---------

For a $m \times n$ matrix $A$, a vector $\mathbf{v} \in \mathbb{R}^n$,
and a real number $r$, it is easy to verify that

$$  \begin{aligned}
        A (r \, \mathbf{v}) &= r \, A \, \mathbf{v}
    \end{aligned}$$

Similarly, for a $m \times n$ matrix $A$ and two vectors
$\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$,
we can also verify that

$$  \begin{aligned}
        A (\mathbf{u} + \mathbf{v}) &= A \, \mathbf{u} \, + \, A \, \mathbf{v}
    \end{aligned}$$

Therefore, for a given $m \times n$ matrix $A$,
the function $\mathbf{v} \mapsto A \mathbf{v}$
*preserves vector addition and scalar multiplication*
and is hence called a **linear function**.

It is also easy to verify that for two $m \times n$ matrices $A$ and $B$
and a vector $\mathbf{v} \in \mathbb{R}^n$,

$$  (A+B) \mathbf{v} = A \mathbf{v} + B \mathbf{v}.$$
