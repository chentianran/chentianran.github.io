---
layout: default
title: libtropicon - the mathematical theory
---

libtropicon: the mathematical theory
===============================================================================

A tropical polynomial is a piecewise linear function given by the
minimum of several linear polymomials in several real variables.
The set of points where the minimum is attained simultaneously by
two or more linear polynomials is called the tropical hypersurface 
defined by that polynomial.
_libtropicon_ computes the 
__intersection points of several generic tropical hypersurfaces__.

Background
-------------------------------------------------------------------------------

Finding common solutions to a multivariate nonlinear polynomial system
is a fundamental problem in computational mathematics with a great variety of
important applications.
While the most meaningful space for searching for such common solutions is the
field of complex numbers $$\mathbb{C}$$ due to the rather special feature of
being _algebraic closed_,
the vastness of $$\mathbb{C}$$, however, poses challenges for computer programs.
For instance, from a measure theory point of view, almost no complex number
can be represented exactly using floating point numbers.
In this light, the ``tropical intersection problem'' can be viewed as
a particularly attractive discretization of this problem.
In this tropical version, $$\mathbb{C}$$ is replaced by a _tropical semiring_
which is the extended real numbers with the addition and multiplication
operations defined as minimum and addition respectively.
The notion of polynomial functions and their zero sets can be extended
to this semiring,
and we thus have the "tropicalized" problem of finding intersections of
zero sets for multivariate nonlinear polynomial systems in this context.
Among several different computational aspects in this rich framework,
_libtropicon_ focuses on the problem of computing "generic intersections".
The finite and combinatorial nature of the generic intersection problem
make it particularly suitable for numerical computation
(using floating point arithmetic).
Yet great deal of information of about the original algebraic problems can be
uncovered from these tropical intersections.
For instance, generic root count (intersection number) of a given
polynomial system can be directly extracted from tropical intersections.
More importantly, from a computational view point,
the rich data structures produced by such tropical intersection points
are also the necessary ingredient for constructing a
_polyhedral homotopy method_ for numerically locating all complex roots 
of the original polynomial system.

Three formulation of the problem
-------------------------------------------------------------------------------

The mathematical problem that _libtropicon_ solves is
the computation of intersection points of generic tropical hypersurfaces.
Interestingly, this problem coincide with several different problems with
seemingly very different origins.

### Tropical formulation

Consider the _tropical semiring_
$$\mathbb{T} = (\mathbb{R} \cup \{ \infty \}, \oplus, \odot)$$ with
$$a \oplus b = \min(a,b)$$ and $$a \odot  b = a + b$$.
Given a Laurent polynomial (a polynomial with potentially negative exponents)
$$p(\mathbf{x}) = \sum_{\mathbf{a} \in S} c_{\mathbf{a}} \mathbf{x}^{\mathbf{a}}$$
where $$\mathbf{x}^{\mathbf{a}} = (x_1,\ldots,x_n)^{(a_1,\ldots,a_n)^\top} = x_1^{a_1} \cdots x_n^{a_n}$$,
it gives rise to the piecewise linear function
<p>
\[
    L(\mathbf{x}) = 
    \min \;\{ 
        c_{\mathbf{a}} + \langle \mathbf{a}, \mathbf{x} \rangle \,\mid\, \mathbf{a} \in S 
    \},
\]
</p>
if addition and multiplication are to be interpreted as the tropical operations.
The ``zero set'' $$\mathcal{V}(p)$$ of $$p$$ over $$\mathbb{T}$$ is then defined to be
the set of points where $L$ is not differentiable,
i.e., points where two or more linear pieces of $$L(\mathbf{x})$$ meet.
Following the terminology from algebraic geometry (over $$\mathbb{C}$$),
such a zero set will be known as a _tropical hyper-surface_
when it is of codimension one.

**Problem Statement**
Given sets of monomials $$M_1,\ldots,M_r \subset \mathbb{R}[x_1^\pm,\ldots,x_n^\pm]$$,
we consider generic Laurent polynomials $$p_1,\ldots,p_r$$ in these
sets of monomials, i.e., each $$p_k$$ is a linear combination of monomials
in $$M_k$$ with generic (nonzero) real coefficients.
We want to find the intersection of the tropical hyper-surface
$$\bigcap_{k=1}^r \mathcal{V}(p_k)$$.

### Mixed cells formulation

The above problem has a nearly equivalent formulation rooted from
generalized coherent subdivision problem for point configurations:
Given finite sets $$S_1,\ldots,S_r \subset \mathbb{R}^n$$,
an $$r$$-tuple $$(t_1,\ldots,t_r) \in (\mathbb{Z}^+)^r$$ with $$\sum_{k=1}^r t_k = n$$, 
and functions $$\omega_1,\ldots,\omega_r$$ with each $$\omega_k : S_k \to \mathbb{R}$$ 
having generic images, we define
$$\hat{S}_k = \{ (\mathbf{a},\omega_k(\mathbf{a})) \mid \mathbf{a} \in S_k \} \subset \mathbb{R}^{n+1}$$
for $$k=1,\ldots,r$$.
The main problem is to find all the $$r$$-tuple of faces of
$$\mathrm{conv}(\hat{S}_1),\ldots,\mathrm{conv}(\hat{S}_r)$$ matching the dimensions
given by $$(t_1,\ldots,t_r)$$ that can share the same ``upward pointing''
inner normal vector:

**Problem Statement 2**
Given $$S_1,\ldots,S_r$$ and $$\omega_1,\ldots,\omega_r$$ described above,
we want to find _all_ possible $$r$$-tuples
$$( \{\mathbf{a}_{i_{1,0}},\ldots,\mathbf{a}_{i_{1,t_1}}\} , \ldots,
    \{\mathbf{a}_{i_{r,0}},\ldots,\mathbf{a}_{i_{r,t_r}}\} )$$
of subsets of $$\hat{S}_1,\ldots,\hat{S}_r$$ respectively for which there exists an
$$\alpha \in \mathbb{R}^n$$ such that for each $k=1,\ldots,r$
<p>
\[
\begin{aligned}
    \langle \mathbf{a}_{i_{k,0}} , \alpha \rangle + \omega_{k}(\mathbf{a}_{i_{k,0}} ) &=
    \langle \mathbf{a}_{i_{k,j}} , \alpha \rangle + \omega_{k}(\mathbf{a}_{i_{k,j}} )
    &&\text{for}\; j = 1,\ldots,t_k \\
    \langle \mathbf{a}_{i_{k,1}} , \alpha \rangle + \omega_{k}(\mathbf{a}_{i_{k,1}} ) &<
    \langle\,\mathbf{a} \,       , \alpha \rangle + \omega_{k}(\mathbf{a} )
    &&\text{for}\; \mathbf{a} \in S_k \setminus \{ \mathbf{a}_{i_{k,0}}, \ldots, \mathbf{a}_{i_{k,t_k}} \}.
\end{aligned}
\]
</p>

It can be verified that in the $$r = n$$ case,
this formulation is equivalent to the first formulation.
The $$r$$-tuples of points are known as __mixed cells__
of type $$(t_1,\ldots,t_r)$$, and they play a crucial role in the construction of
polyhedral homotopies for solving a Laurent polynomial system.

### Incremental Cayley's trick formulation}

Yet another formulation of this problem is connected to the well known
_Cayley's trick_ and the _phase one problem_ in linear programming.
By introducing a new set of variables
$$h_k := \langle \mathbf{a}_{i_{k,0}}, \alpha \rangle + \omega_k(\mathbf{a}_{i_{k,0}})$$
for $$k=1,\ldots,r$$ as in the previous problem formulation, 
we obtain the equivalent system
<p>
\[
\begin{eqnarray}
    \langle \mathbf{a}_{i_{k,j}} , \alpha \rangle - h_k  &=& -\omega_k(\mathbf{a}_{i_{k,j}})
    \quad\mathrm{for}\ j=1,\ldots,t_k \\
    \langle \,\mathbf{a}\, , \,\alpha\, \rangle -h_k &>& -\omega_k(\mathbf{a})
    \quad\mathrm{for}\ \mathbf{a} \in S_k \setminus \{ \mathbf{a}_{i_{k,1}}, \mathbf{a}_{i_{k,2}} \},
\end{eqnarray}
\]
</p>
With this, we get a reformulation of Problem Statement 2 that resembles a
generalized "Phase One" problem in linear programming:

**Problem Statement 3**
Given $$S_1,\ldots,S_r$$, $$(t_1,\ldots,t_r)$$, and $$\omega_1,\ldots,\omega_r$$ 
described above,
let $$\check{A}_k$$ be the matrix whose rows are $$(\mathbf{a},-1)$$ for points
$$\mathbf{a} \in S_k$$,
and let $$\mathbf{c}_k$$ be the column vector with corresponding entries of
$$-\omega_k(\mathbf{a})$$ for $$\mathbf{a} \in S_k$$.
We want to find _all_ possible $$(\alpha,h_1,\ldots,h_r)$$ such that
<p>
\[
    \check{A}_k
    \left[
    \begin{array}{@{}c@{}}
        \alpha \\ h_k
    \end{array}
    \right]
    \ge \mathbf{c}_k
    \; \mathrm{with\ } t_k \mathrm{\ equalities\ hold,\ for\ each\ } k=1,\ldots,r.
\]
</p>

Here, the term "incremental" Cayley's trick refers to the fact that each group 
of inequality in the above system is embedded into $$\mathbb{R}^{n+1}$$ separately.
Note that for each $$k$$, the above system is a generalized version of the
Phase-One problem in linear programming.
Therefore, in this formulation, the main problem is a problem of simultaneous 
Phase-One problem:
it requires the solutions $$(\alpha,h_1),\ldots,(\alpha,h_r)$$ to the $$r$$
different generalized Phase-One problem to share the same projection onto
the first $$n$$ coordinates.