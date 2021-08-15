---
layout: lecturenote
title: 3x3 matrix determinant
---

## The theory {#times-3-determinant-the-theory}

A natural question to ask here is whether or not there is generalized
version of the determinant for $3 \times 3$ matrices that can tell us if
a $3 \times 3$ matrix has an inverse. While there are many quantities
one could compute that will provide such information, there is exactly
one way to do it that will satisfy the following properties

- Scaling one row/column by a factor will scale the determinant by the same factor;
- Permuting any two rows/column will alter the sign of the determinant;
- Adding a multiple of a row/column to another row/column will *not* change the determinant.
- The determinant is zero if and only if the matrix has no inverse.
- The determinant of the identity matrix is 1.

Therefore this quantity is a natural choice for the generalized notion of determinant.

## The cofactor expansion formula {#times-3-determinant-by-cofactor-expansion}

There are several methods for computing the determinant of a
$3 \times 3$ matrix. One straightforward method is the method of
"cofactor expansion" which computes the $3 \times 3$ determinant as a
weighted sum of three $2 \times 2$ determinant.

### Minors and cofactors

For a $3 \times 3$ matrix $A$, the $(i,j)$-**minor** of $A$ is the
determinant of the submatrix formed by deleting the $i$-th row and
$j$-th column of $A$.

Geometrically, we can consider a minor to be a measurement that can
determine if the projection of the columns to certain coordinate planes
are collinear. The algebraic meaning is more complicated, it has
connections to the concept of "multi-linear forms". This leads to the
concept of cofactors.

For a $3 \times 3$ matrix $A$, the $(i,j)$-**cofactor** of $A$ is the
$(i,j)$-minor times $(-1)^{i+j}$.

In most practical situations, we only need to consider cofactors along
the first row or column (i.e., $i=1$ or $j=1$ in most situations this
semester).

### Cofactor expansion formula {#cofactor-expansion}

This formula, also known as formula computes the determinant as a
weighted sum of cofactors. For a $3 \times 3$ matrix $A$, with the first
row being

$$\begin{bmatrix} a_{11} & a_{12} & a_{13} \end{bmatrix},$$

the determinant of $A$ can be computed via
**cofactor expansion formula along the first row** given by

$$\det A = a_{11} C_{11} + a_{12} C_{12} + a_{13} C_{13}$$

where $C_{ij}$ is the $(i,j)$-cofactor of $A$.
In general, the cofactor expansion formula along the $i$-th row is

$$\det A = a_{i1} C_{i1} + a_{i2} C_{i2} + a_{i3} C_{i3}.$$

Similarly, the cofactor expansion formula along the $j$-th column is given by

$$\det A = a_{1j} C_{1j} + a_{2j} C_{2j} + a_{3j} C_{3j}$$

One important fact is that regardless of how we perform the cofactor expansion
(along any row or column), the result is always the same
(see Leibniz formula below).

**Exercise.**
Using the cofactor expansion formula,
compute the determinant of the following matrices

$$  \begin{aligned}
        A &= 
        \begin{bmatrix}
            2 & 3 & 5 \\
            4 & 1 & 2 \\
            1 & 2 & 6 \\
        \end{bmatrix}
        &
        B &= 
        \begin{bmatrix}
            0 & 2 & 4 \\
            5 & 1 & 2 \\
            0 & 4 & 6 \\
        \end{bmatrix}
        &
        C &= 
        \begin{bmatrix}
            1 & 0 & 2 \\
            4 & 2 & 2 \\
            5 & 0 & 6 \\
        \end{bmatrix}
    \end{aligned}$$

## Determinant and invertibility

The most crucial fact, is that

$$  \det A \ne 0 
    \quad\Longleftrightarrow\quad
    A \text{ has an inverse}.$$

This is not easy to prove.
We will study this in the context of adjugate matrix.
<!-- Moreover, one can show that the determinant satisfies all the -->
<!-- properties listed above. -->

## Leibniz formula {#leibniz-formula}

Another formula for the $3 \times 3$ determinant is
defined in terms permutations.
This is the **Leibniz formula**:

$$  \det
    \begin{bmatrix}
        a & b & c \\
        d & e & f \\
        g & h & i \\
    \end{bmatrix}
    = aei + bfg + cdh 
    - ceg - bdi - afh$$

Here, the determinant is expressed as a sum of 6 terms.
Each term has 3 factors, one from each row, and the column
indices corresponding to the 6 permutations.
It is easy to check that
this formula is equivalent to the cofactor expansion formula.
