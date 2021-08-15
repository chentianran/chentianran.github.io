---
layout: lecturenote
title: Augmented matrices and elementary row operations
---

In the previous section,
we introduced the idea of solving linear system
via systematic elimination of unknowns.
This procedure can be organized in a neat way
if we express everything in the form of "augmented matrices".

Linear system and augmented matrices
------------------------------------

In writing down a linear system,
as long as the ordering of the unknowns are fixed,
we can drop their names as well as the "$+$" and "$=$" signs.
For example, if we write

$$  3x + 4y = 2
    \quad\longrightarrow\quad
    \left[\begin{array}{rr|r}
            3 & 4 & 2
    \end{array}\right]. $$

No information as lost, as long as the names of the unknowns
are clear from context.
The vertical bar "$\mid$" is important here,
as it reminds us as the "$=$"-sign.

In general, we can write down multiple linear equations
as multiple rows of numbers, one for each equation.
The result is a "matrix" ---
the **augmented matrix** of the linear system.
For example, we can write

$$  \left\{
    \begin{aligned}
        3x + 4y = 2 \\
        1x + 1y = 3
    \end{aligned}
    \right.
    \quad\longrightarrow\quad
    \left[\begin{array}{cc|c}
            3 & 4 & 2 \\
            1 & 1 & 3
    \end{array}\right]. $$

**Exercise.**
Write down the augmented matrix for the following linear system

$$  \left\{
    \begin{aligned}
         x + 2y -  z &= 1 \\
        2x +  y - 2z &= -4 \\
         x +  y +  z &= 7.
    \end{aligned}
    \right. $$

With this notation, operations on equations becomes operations on rows
of augmented matrices.

Elementary row operations
-------------------------

Recall that there were three basic operations on linear systems
that will not alter the solution set.
These operations can all be understood as
operations on rows of augmented matrices.
We call them **elementary row operations**,
and they include

- **Row swapping:**
  A row can be swapped with another row.
- **Row scaling:**
  A row can be replaced by a nonzero multiple of itself.
- **Row addition:**
  A row can be replace by the sum of that row and a multiple of another.

Using these operations, an augmented matrix can be reduced to simpler
forms while still representing equivalent linear systems. The goal is to
reach a special form from which solutions to the linear system can be
extracted easily.

Write down the augmented matrix for the linear system in the previous
problem and reduce the matrix into a form from which the solutions can
be extracted easily.

If (that's a big if) we can reduce an augmented matrix into the form

$$  \left[\begin{array}{ccc|c}
            1 &        &   & * \\
              & \ddots &   & \vdots \\
              &        & 1 & *
    \end{array}\right]$$

(the diagonal entries of the augmented matrix are 1's)
then the unique solution is found
("\*" stands for arbitrary numbers, and empty entries are 0's).

It turns out this is not always possible.
We shall study various "canonical forms" that
we can reduce a matrix into.

Row echelon form
----------------

The goal is to use repeated elementary row operations to eventually
reduce the augmented matrix into a simple form from which important
information about the linear system can be extracted easily. One
important form is the **row echelon form**, which is a form of matrices
that satisfies two conditions:

- All nonzero rows are above any zero rows.
- The nonzero leading entry (pivot) of a nonzero row
  is strictly to the right of the nonzero leading entry
  of the row above it.

Here, a **leading entry** of a row is the left-most
*nonzero* entry on this row.
We will still say "nonzero leading entry"
when we want to emphasize this fact.

These two conditions above implies that any entry
below a leading entry must be zero.

This special form reveals important information about the linear system.
In particular, once an augmented matrix is reduced to its row echelon
form, the solution of the corresponding linear system, if unique, can be
found easily via an algorithm known as *backward substitution*.

**Exercise.**
The following matrix (array of numbers) is the augmented matrix
of a linear system in the unknowns $x,y,z$,
and it is in row echelon form.

$$  \left[
    \begin{array}{ccc|c}
                2 & 1 & 1 & 7 \\
                0 & 1 & 2 & 6 \\
                0 & 0 & 3 & 6
    \end{array}
    \right]. $$

Can we see what the solution should be?

**Hints:** Start from the last row.
Can you translate the last row back to an equation?
If yes, what does that tell us about the valu of $z$?

Gaussian elimination
--------------------

The process of repeated row operations to reach the row echelon form is
known as **Gaussian elimination**. This is a rather flexible algorithm
that involves many choices --- different choices may lead to different
intermediate or end results.

**Exercise.**
Using Gaussian elimination to reduce the following (augmented) matrix
into a row echelon form.

$$  A =
    \left[\begin{array}{ccc|c}
        1 &  1 & 0 & 2 \\
        2 & -1 & 3 & -2 \\
        0 &  3 & 1 & -4
    \end{array}\right]. $$

Reduced row echelon form
------------------------

While the row echelon form is sufficient for certain purpose,
it is, however, not unique.
That is, different choices one made in the process
of computing the row echelon form may produce different
(but equally valid) results.
Often time, a unique and even simpler form is desired.

If a matrix satisfies

- The matrix is in row echelon form.
- The (nonzero) leading entry of each nonzero row is 1
- Each leading 1 is the only nonzero entry in its column.

then we say it is in **reduced row echelon form** (RREF). The reduced
row echelon form of a matrix is indeed unique (we will see why soon).

The reduced row echelon form of a matrix can be obtained by applying
additional elementary row operations on its row echelon form. This
process is known as the **Gauss-Jordan elimination**.

**Exercise.**
Compute the RREF of the following (augmented) matrix,
which is already in row echelon form
(but not reduced row echelon form).

$$  \left[
    \begin{array}{ccc|c}
        2 & 1 & 1 & 7 \\
        0 & 1 & 2 & 6 \\
        0 & 0 & 3 & 6
    \end{array}\right]. $$
