---
layout: default
title: Research
---

Research
========

My research revolves around the numerical methods for solving
systems of nonlinear equations (or simply nonlinear systems)
and the applications of these techniques in
physics, chemistry, biology, and engineering.
In the wider context, my research involves many different aspects
in the field of _numerical algebraic geometry_.
<!-- which is an important problem in mathematics -->
<!-- that has a wide range of applications in sciences and engineering. -->
My recent research has been focused on a major class of numerical methods
known as the _homotopy continuation methods_,
which deform the given nonlinear system into a closely related system that is trivial to solve. 
Then continuation methods are applied to track paths 
originating at the known solutions of the trivial system
and ending at the solutions of the given system.
In the last decades, these methods have been proven to be reliable, efficient, and highly parallel.
It is now used as the basic building block for other numerical methods,
such as _numerical irreducible decomposition_ algorithms,
opening up new possibilities.
My work touches many different aspects of this subject
including its theoretical foundation,
the construction of new homotopy methods for solving specific problems,
its application to many different areas of science,
as well as its high performance parallel implementations.

Mixed volume and mixed cells
----------------------------

<!-- Originally developed in the context of convex geometry,  -->
_Mixed volume_ is a way to assign a generalized non-negative volume to a list of convex bodies.
It depends on not only the volume of each individual convex body,
but also their relative positions.
This concept has a wide range of applications in geometry and combinatorics.
In the recent decades, it has found important applications in the study of
system of polynomial equations (i.e. algebraic geometry):
by the Bershtein's theorem, the number of isolated nonzero solutions
a system of polynomial equations has, counting multiplicity,
is bounded by the mixed volume of Newton polytopes of the system.
This bound is usually much tighter than the Bezout number.
_MixedVol-3_ is a software package that computes mixed volume and mixed cells using fast numerical algorithms. 
<!-- It is capable of performing computation in parallel on a variety of parallel computer architectures -->
<!-- including multi-core architecture, NUMA architecture, computer clusters, and distributed environment. -->

[ [More detail here](/research/mvol/) ]

Homotopy continuation methods
-----------------------------

Homotopy continuation methods form a large class of general methods
suitable for solving hard problems like nonlinear systems of equations,
in particular, systems of polynomial equations.
The basic idea behind such methods is to deform a hard problem in to
an easier problem or into a problem whose solutions are already known,
and use the solutions of the easier problem to find those of the harder problem.

Binomial systems
----------------

A _binomial system_ is a polynomial system having exactly two terms on each equation.
Solving such systems is an important step in the _polyhedral homotopy method_,
since our target system is generally deformed into binomial systems. In addition,
they also have a great number of applications, relating to toric algebraic geometry,
particle physics, statistics, and many other subjects.
Basic tools for such computation are generally developed
in the context of _Laurent binomial ideals_
where the problem of solving a binomial system is reduced
to the geometric problem of understanding a corresponding lattice polytope.

Kuramoto model
--------------

The spontaneous synchronization in complex networks
is a ubiquitous phenomenon that natural arise in seemingly
independent systems in biology, chemistry, physics, and engineering.
The Kuramoto model is one of the most successful model
in the mathematical analysis of this phenomenon.
My research focuses on the algebraic aspect of
the _frequency synchronization_ problem for the Kuramoto model.

[ [More detail here.](/research/kuramoto/) ]
