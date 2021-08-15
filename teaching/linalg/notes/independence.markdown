---
layout: lecturenote
title: Span and linear independence
---

## Review: linear combination {#review}

Recall that a *linear combination* of two vectors
$\mathbf{v}_2$ and $\mathbf{v}_2$ is an expression of the form

$$ a \mathbf{v}_1 + b \mathbf{v}_2 $$

where $a$ and $b$ are scalars (numbers).
Expressions like this are also called weighted sums.

This of course can be generalized to any number of vectors.
A *linear combination* of a set $S$ of vectors
$$\{ \mathbf{v}_1, \dots, \mathbf{v}_n \}$$
is an expression of the form

$$c_1 \, \mathbf{v}_1 + \dots + c_n \, \mathbf{v}_n,$$

where $c_1,\dots,c_n$ are scalars known as coefficients.

## Span of vectors

The set of all linear combinations of $S$ is its **span**.

**Exercise.**
Consider the two vectors

$$  \begin{aligned}
        \mathbf{e}_1 &=
        \begin{bmatrix}
            1 \\ 0
        \end{bmatrix}
        &
        \mathbf{e}_2 &=
        \begin{bmatrix}
            0 \\ 1
        \end{bmatrix}
    \end{aligned}.$$

What is the span of the set $$\{ \mathbf{e}_1, \mathbf{e}_2 \}$$?

Not all spans are created equal.
The linear combinations of a set of two vectors may not actually fill a
2-dimensional space.The condition that determines this case is called
"linear independence" --- the span of two vectors will only fill a
2-dimensional space if they form a "linearly independent" set.

Linear dependence/independence (set of 2) {#linear-dependenceindependence-set-of-2 .unnumbered}
-----------------------------------------

A set of *two* vectors is said to be **linearly dependent** if one of
them is a *scalar multiple* of the other, including the cases where one
or both are zero.

Conversely, a set of *two* vectors is **linearly independent** if
neither is a multiple of the other. In other words, a set $S$ of two is
linearly independent if it is *not* linearly dependent. Equivalently,
$S$ is linearly dependent if it is *not* linearly independent.

Intuitively, the span of a set of two vectors can be "2-dimensional" if
and only if this set is linearly independent. Of course, we are yet to
define the concept of dimension rigorously. Indeed, "dimension" is
defined in terms of linear independence.

Determine if the following sets are linearly independent or linearly
dependent. $$\begin{aligned}
            \left\{
                \begin{bmatrix}
                    1 \\ 2 \\ 3
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    3 \\ 2 \\ 1
                \end{bmatrix}
            \right\}
            &&
            \left\{
                \begin{bmatrix}
                    1 \\ 2 \\ 3
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    0 \\ 0 \\ 0
                \end{bmatrix}
            \right\}
            &&
            \left\{
                \begin{bmatrix}
                    1 \\ 2 \\ 1
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    -3 \\ -6 \\ -3
                \end{bmatrix}
            \right\}
            % &&
        \end{aligned}$$

Linear dependence/independence (general) {#linear-dependenceindependence-general .unnumbered}
----------------------------------------

Algebraically, this is equivalent to the condition that one could select
coefficients, not all zero, so that a linear combination can be the zero
vector.

A *nonempty* set of vector $\{ \mathbf{v}_1, \dots, \mathbf{v}_m \}$ is
said to be **linearly dependent** if there are real numbers
$c_1,\dots,c_m$, *not all zero*, such that
$$c_1 \mathbf{v}_1 + \cdots + c_m \mathbf{v}_m
            = \mathbf{0}.$$

A set that is not linearly dependent is said to be linearly independent.
Stated more explicitly:

A set of vector $\{ \mathbf{v}_1, \dots, \mathbf{v}_m \}$ is said to be
**linearly independent** if the equation
$$c_1 \mathbf{v}_1 + \cdots + c_m \mathbf{v}_m
            = \mathbf{0}.$$ for real numbers $c_1,\dots,c_m$ implies
that $$c_1 = \cdots = c_m = 0.$$

That is, for a linearly independent set of vectors, the only way to
create $\mathbf{0}$ as a linear combination of this set is to use *all*
zero coefficients.

Invariance under linear transformations {#invariance-under-linear-transformations .unnumbered}
---------------------------------------

Suppose $\{ \mathbf{v}_1, \dots, \mathbf{v}_m \} \subset \mathbb{R}^n$
is linearly independent, the for any nonsingular matrix $A$, the set
$\{ A \mathbf{v}_1, \dots, A \mathbf{v}_m \} \subset \mathbb{R}^n$ is
also linearly independent.

The case of the empty set {#the-case-of-the-empty-set .unnumbered}
-------------------------

In the definition of linear dependence, we specifically required the set
to be nonempty. So one question remains: "what about $\{ \, \}$?" Should
$\{ \, \}$ be considered linearly dependent or independent. This may
looks like a rather meaningless question. Yet, the answer does factor
into other definitions. Moreover, since $\{ \, \}$ is often used as the
base case in induction-type proofs, so the specification here does have
consequences.

The empty set $\varnothing = \{\,\}$ is linearly *independent*.

This is actually consistent with and implied by the definition of linear
independence stated above.

Determining linear independence (equation) {#determining-linear-independence-equation .unnumbered}
------------------------------------------

Following directly from definition of linear independence we have the
following direct method:

A set of $n$ vectors $S = \{ \mathbf{v}_1, \cdots, \mathbf{v}_n \}$, is
linearly independent if and only if $x_1 = \cdots = x_n = 0$ is the
*only* solution to $$x_1 \mathbf{v}_1 + \cdots + x_n \mathbf{v}_n
            = \mathbf{0}$$

Determining linear independence (RREF) {#determining-linear-independence-rref .unnumbered}
--------------------------------------

Gauss-Jordan elimination and the resulting RREF also provide a simple
algorithm.

Given a set of $n$ column vectors
$S = \{ \mathbf{v}_1, \cdots, \mathbf{v}_n \}$,

1.  Form the matrix
    $A = [ \, \mathbf{v}_1 \; \cdots \; \mathbf{v}_n \, ]$.

2.  Compute the RREF of $A$.

3.  If the resulting RREF has $n$ (n.o. columns) leading 1's, then $S$
    is linearly independent.

Determine if the following sets are linearly independent or linearly
dependent. $$\begin{aligned}
            \left\{
                \begin{bmatrix}
                    0 \\ 1 \\ 2 \\ 3
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    0 \\ 3 \\ 2 \\ 1
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    0 \\ 1 \\ 1 \\ 1
                \end{bmatrix}
            \right\}
            &&
            \left\{
                \begin{bmatrix}
                    1 \\ 2 \\ 3 \\ 0
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    0 \\ 1 \\ 2 \\ 3
                \end{bmatrix}
                ,
                \begin{bmatrix}
                    3 \\ 0 \\ 1 \\ 2 
                \end{bmatrix}
            \right\}
        \end{aligned}$$

Explain why does this work.