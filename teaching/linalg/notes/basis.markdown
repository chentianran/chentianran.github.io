---
layout: lecturenote
title: Basis and dimension
---

A common theme in the discussions in the previous sections
is the extraction of linearly independent vector in a subspace
that contains enough information to represent the subspace as a whole.
See for example the discussion of column rank.
These are example of "basis".
We will define this concept more precisely here.

A by-product is the concept of "dimension".
Intuitively, $\mathbb{R}^1$ (the real line) should 1-dimensional,
and $\mathbb{R}^2$ should be 2-dimensional.
We will also give this term a precise meaning.

## A basis of the plane

It is easy to see that in $\mathbb{R}^2$ we can find an
linearly *independent* set

$$  \left\{
        \begin{bmatrix}
            1 \\ 0
        \end{bmatrix}
        \,,\,
        \begin{bmatrix}
            0 \\ 1
        \end{bmatrix}
    \right\}$$

which contains exactly two vectors.
Moreover, this also form a "spanning set" of $\mathbb{R}^2$
in the sense that $\mathbb{R}^2$ is the span of this set
--- every vector can be written as a linear combination of this set.
This set is certainly not the only
set that has these properties.

**Exercise.**
Show the two sets

$$  \begin{aligned}
        \mathcal{B}_1 &= 
        \left\{
            \left[
            \begin{smallmatrix}
                1 \\ 0
            \end{smallmatrix}
            \right]
            ,
            \left[
            \begin{smallmatrix}
                1 \\ 1
            \end{smallmatrix}
            \right]
        \right\}
        &
        \mathcal{B}_2 &= 
        \left\{
            \left[
            \begin{smallmatrix}
                1 \\ 2
            \end{smallmatrix}
            \right]
            ,
            \left[
            \begin{smallmatrix}
                3 \\ 5
            \end{smallmatrix}
            \right]
        \right\}.
    \end{aligned}$$

are both linearly independent,
and they both spanning sets of $\mathbb{R}^2$.

These are examples of basis.

## Basis

For a subspace $V$ of $\mathbb{R}^n$,
a subset $B$ of $V$ is said to be a **basis** of $V$ if

- $B$ is linearly independent, and
- $V = \operatorname{span}(B)$.

The **dimension** of $V$ is the number of elements in a basis of $V$ and
is denoted by $\dim V$.

Implicit in this statement is the fact that any two basis for $V$
must be of the exact same size.
Stated more precisely,
if $B_1$ and $B_2$ are both bases of a subspace $V$ of $\mathbb{R}^n$,
then $| B_1 | = | B_2 |$.
This fact is not completely obvious.
Indeed, it is a part of the "Basis Theorem".
One intuitive explanation of this important fact is that
a basis has to be of just the "right size".
A basis of a subspace has to be large enough to span that subspace
yet not too large that it becomes linearly dependent.

**Exercise.**
Can you prove the above proposition.
(If the general case is too difficult, try the special case of $n=2$)

We can push this intuitive idea of bases having just the "right size" further.
Recall that a basis of a subspace is both linearly independent and spanning.
We can show that adding any element will make it linearly dependent,
and removing any element will make it no longer a spanning set:

Let $B$ be a basis of a subspace $V$ of $\mathbb{R}^n$, then

- For any $\mathbf{v} \in V \setminus B$, $B \cup \{ \mathbf{v} \}$ is linearly *dependent*.
- For any $\mathbf{v} \in B$, the set $B \setminus \{ \mathbf{v} \}$ is *not* a spanning set of $V$.

## Finding a basis of a span using RREF {#finding-a-basis-of-a-span-using-rref}

The method we used to compute the column rank of a matrix
can be used to find a basis of any subspace of $\mathbb{R}^n$.
We start with the easy task of finding a basis for the subspace spanned
by a given set of vectors.

Suppose we have a subset

$$\{ \mathbf{v}_1, \dots, \mathbf{v}_\ell \} \subset \mathbb{R}^n,$$

and we want to find a basis for the subspace

$$V = \operatorname{span} \{ \mathbf{v}_1, \dots, \mathbf{v}_\ell \}.$$

Since we already know the vector $\mathbf{v}_1,\ldots,\mathbf{v}_l$
spans $V$ (by assumption), half of the work is ready done.
We simply need to select a linear independent subset from

$$\{ \mathbf{v}_1, \dots, \mathbf{v}_\ell \}.$$

Not surprisingly, this can be done by computing the RREF of a certain matrix.

Let

$$  A = 
    \begin{bmatrix}
        \mathbf{v}_1 &
        \cdots &
        \mathbf{v}_\ell
    \end{bmatrix},$$

and let $B$ be the subset of the columns of
$A$ that correspond to pivot columns of the RREF of $A$,
then $B$ is a basis for the subspace $V$.

Keep in mind, $B$ must be selected from the original list of vectors,
*not* the columns of the RREF.

## Rank and dimension

From the point of view, we can see that for a matrix $A$,

- The column rank of $A$ is the dimension of the column space of $A$;
- The row    rank of $A$ is the dimension of the row    space of $A$;
- The nullity     of $A$ is the dimension of the null   space of $A$.
