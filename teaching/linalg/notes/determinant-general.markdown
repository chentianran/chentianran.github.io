---
layout: lecturenote
title: General matrix determinant
---

It is natural to ask if the construction of matrix determinant for the
$3 \times 3$ cases can be generalized to $n \times n$ cases.
As we will see, both the cofactor expansion formula and the Leibniz formula
can be generalized nicely for formulae for computing determinants
of $n \times n$ square matrices.

## Cofactor expansion (Laplace's formula) {#cofactor-expansion}

For $n \times n$ matrices, we define their minors and cofactors in the
same way we define them in the $3 \times 3$ cases.

For an $n \times n$ matrix $A$, the $(i,j)$-**minor** of $A$ is the
determinant of the submatrix formed by deleting the $i$-th row and
$j$-th column of $A$. The $(i,j)$-**cofactor** of $A$ is the
$(i,j)$-minor times $(-1)^{i+j}$.

That is, if we use the notations $M_{i,j}$ and $C_{i,j}$ for the
$(i,j)$-minor and $(i,j)$-cofactor respectively,
then

$$C_{i,j} = (-1)^{i+j} \, M_{i,j}.$$ 

Minors and cofactors are important tools for extracting information
out of a matrix.
They are generally useful in reducing a problem of a larger matrix
into similar problems about smaller matrices.
In particular, they provide us a simple formula
for computing matrix determinant.

For an $n \times n$ matrix $A = [a_{ij}]$,
the cofactor expansion formula for $\det A$ along the $i$-th row is

$$\det A = a_{i1} C_{i1} + a_{i2} C_{i2} + \cdots + a_{in} C_{in}$$

where $C_{ij}$ is the $(i,j)$-cofactor of $A$.
The cofactor expansion along the $j$-th column is

$$\det A = a_{1j} C_{1j} + a_{2j} C_{2j} + \cdots + a_{nj} C_{nj}$$

As before, when applied to the same matrix, the cofactor expansion formulae
always yield the same answer regardless the row or column along
which the expansion is carried out.

## Leibniz formula {#leibniz-formula}

An alternative, yet equivalent, formula for matrix determinant is the
Leibnize formula which is given in terms of permutations.

For an $n \times n$ matrix $A = [a_{ij}]$,

$$  \det A = 
    \sum_{\sigma \in S_n}
    \left(
        \operatorname{sgn}(\sigma) 
        \prod_{i=1}^n a_{i,\sigma(i)}
    \right)$$

where $S_n$ is the symmetric group on $n$ elements
(all the permutations of $n$ objects).

It is certainly not at all obvious that this formula would produce the
same result as the cofactor expansion formula shown above,
but this turns out to be true.
That is, the different formula for determinant always produce the
same result for the same matrix.

## Properties {#properties}

We can show that the determinant function has the following properties.

- $\det I_n = 1$
- $\det$ is a linear function in each column (or row) separately
- exchanging two columns (or rows) in a matrix will alter the sign of
  its determinant
- $\det A = 0$ if and only if $A$ has no inverse

It turns out these properties completely characterize the determinant function. 
That is, it is the only function that has these properties.
It is useful to remember some additional properties:

- $\det (A^\top) = \det(A)$
- $\det (A^{-1}) = \frac{1}{\det A}$ if $A^{-1}$ exists
- $\det (AB) = \det(A) \det(B)$
- $\det (r A) = r^n \det(A)$ is $r \in \mathbb{R}$ and $A$ is an
  $n \times n$ matrix.

There are, of course, many more useful properties.

## Cofactor matrix and adjugate matrix {#cofactor-and-adjugate}

Another important construction is the transpose-pair of
cofactor and adjugate matrix
(a pair of matrices that are the transpose of each other).

For an $n \times n$ matrix $A$, its **cofactor matrix** is an
$n \times n$ matrix $C = [C_{i,j}]$ where $C_{i,j}$ is the
$(i,j)$-cofactor of $A$.

With that, we define the **adjugate matrix** of
$A$ to be $\operatorname{adj} A = C^\top.$

Some authors also use the term "adjoint matrix" for this concept,
although that usage is less common nowadays among mathematicians.

This construction is particularly useful in providing a compact
expression for matrix inverse.

For an $n \times n$ matrix $A$, if $\det A \ne 0$, then
$A^{-1} = \frac{1}{\det A} \operatorname{adj} A.$

Note that in practice, this formula is an extremely inefficient way for
computing the inverse of large matrices. Its value lies more in the
theoretical elegance then practical computation. We will study a much
more efficient method next time.

**Exercise.**
For the cases of $n=2$ and $n=3$,
explain why the formula

$$A^{-1} = \frac{1}{\det A} \operatorname{adj} A$$

is correct.
