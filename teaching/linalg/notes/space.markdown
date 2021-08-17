---
layout: lecturenote
title: Subspace of the Euclidean vector spaces
---

We have used the word "space" in our previous discussion.
In particular, we mentioned the concept of "row space" and "column space"
associated with a matrix.
These are examples of "subspaces" of $\mathbb{R}^n$,
which are themselves examples of vector spaces
(a more general subject that we will explore soon).

<!-- We will not define the concept "vector space" formally at this moment. -->
<!-- For now, this is
simply to be understood as a set of objects, called *vectors*, together
with a rule for vector-vector addition and scalar product. This agrees
with our understanding $\mathbb{R}^n$ as well as the space of free
geometric vectors. -->

## Definition of subspaces of $\mathbb{R}^n$ {#subspaces-of-mathbbrn}

<!-- One important type of objects in linear algebra is "subspaces".
They are subsets of a "vector space", say $\mathbb{R}^n$,
that behaves much like a
potentially smaller version of the vector space. -->

A subset $V$ of $\mathbb{R}^n$ is called a **subspace** of
$\mathbb{R}^n$ if $V$ is *nonempty* and $V$ is closed under linear
combination, i.e., for any $\mathbf{u},\mathbf{v} \in V$ and
$a,b \in \mathbb{R}$, the linear combination
$a \mathbf{u} + b \mathbf{v}$ remains in $V$.

Another equivalent definition for a subset $V$ being a subspace is that

- $V$ contains the zero vector $\mathbf{0}$.
- $V$ is closed under vector addition, i.e., if
  $\mathbf{u},\mathbf{v} \in V$, then $\mathbf{u} + \mathbf{v} \in V$.
- $V$ is closed under scalar multiplication, i.e., if
  $\mathbf{v} \in V$ and $r \in \mathbb{R}$, then
  $r \mathbf{v} \in V$.

Here, being "closed" under certain operations means starting from
elements from the set and applying these operations,
we will never leave the set.

**Exercise.**
Determine if the following sets form subspaces of $\mathbb{R}^2$,
and explain your reasoning.

$$  \begin{aligned}
        S_1 &= \left\{ 
            \begin{bmatrix}
                0 \\ 0
            \end{bmatrix}
            \right\}
            &
        S_3 &= \left\{ 
            \begin{bmatrix}
                a \\ 2a
            \end{bmatrix}
            \;\mid\;
            a \in \mathbb{R}
            \right\}
            \\
        S_2 &= \left\{ 
            \begin{bmatrix}
                1 \\ 2
            \end{bmatrix}
            \right\}
            &
        S_4 &= \left\{ 
            \begin{bmatrix}
                a \\ 7
            \end{bmatrix}
            \;\mid\;
            a \in \mathbb{R}
            \right\}
            \\
        S_5 &= \left\{ 
            \;
            \right\}
            &
        S_6 &= \left\{ 
            \begin{bmatrix}
                3a \\ 2b
            \end{bmatrix}
            \;\mid\;
            a,b \in \mathbb{R}
            \right\}
    \end{aligned}$$

<!-- In our discussions, we use the terms "subspace", "vector space", "linear
space" and "space" interchangeably as they have the same meaning here. -->

## Span of vectors as subspaces

In this course, most of the subspaces of $\mathbb{R}^n$ we will see
are created as spans of sets of vectors.

One important fact is that
given any set $S \subset \mathbb{R}^n$,
the span of $S$ is a subspace of $\mathbb{R}^n$.

In this case, we say the resulting subspace space
is the *vector space spanned by* $S$.
It is easy to verify that $\operatorname{span} S$ is
the *smallest* vector space that contains $S$.

## A word about vector spaces

So far, we have been careful using the term "subspace of $\mathbb{R}^n$"
instead of the more familiar term "vector space".
All the subspaces we mentioned are indeed vector spaces,
but vector spaces are much more general concepts.
Simply put, all subspaces of $\mathbb{R}^n$
are indeed vector spaces,
but not all vector spaces are subspaces of $\mathbb{R}^n$.

In the next sections, we will see more abstract vector spaces
whose elements cannot be written as row or column vectors.