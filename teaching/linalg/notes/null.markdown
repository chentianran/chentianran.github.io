---
layout: lecturenote
title: Null space of a matrix
---

For a given $m \times n$ matrix $A$,
the set of vectors $\mathbf{x} \in \mathbb{R}^n$ such that
$A \mathbf{x} = \mathbf{0}$
is known as the **null space** of $A$.

It is easy to verify that the null space of $A$
is indeed a subspace of $\mathbb{R}^n$.

**Exercise.**
Prove the null space of an $m \times n$ matrix $A$
is a subspace of $\mathbb{R}^n$ by showing

- the zero vector is in the null space;
- the null space is closed under linear combination;

## Connection to homogeneous linear systems

We can see that, by definition, the elements of the null space of a matrix $A$
are exactly the solutions to the homogeneous system $A \mathbf{x} = \mathbf{0}$.
So in that sense, this is a familiar object,
and the problem of describing the null space of a matrix
is exactly the problem of solving the corresponding homogeneous system.

When we use the term "null space",
we are emphasizing that the solution set to $A \mathbf{x} = \mathbf{0}$
has the additional algebraic structure of a subspace:
It is closed under the operation of linear combination.

## Nullity

Just like we use column rank and row rank to measure the "size"
of the column and row spaces of a matrix,
we can come up with a quantity to measure the "size" of the null space as well.
This quantity is known as the "nullity" of the matrix,
and it is defined to be the maximum number of linear independent vectors
we can find in the null space.
Recall, from early sections, that this is exactly the same as
the number of free variables,
i.e., the number of (nonzero) columns without leading 1's in the RREF of the matrix.