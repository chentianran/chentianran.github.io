---
layout: default
title: libtropicon
---

libtropicon
===========

The computation of intersection points of generic tropical hyper-surfaces is a
fundamental problem in computational algebraic geometry.
An efficient algorithm for solving this problem will be a basic building block
in many higher level algorithms for studying tropical varieties,
computing mixed volume, enumerating mixed cells, constructing polyhedral homotopies, etc.
_libtropicon_ is a library for computing intersection points of
generic tropical hyper-surfaces.
The core algorithm is designed to be naturally parallel and highly scalable.

Downloads
-------------------------------------------------------------------------------

_libtropicon_ is still a work in progress.
As the implementation matures, stable versions will be released.
For now, following experimental versions ("alpha" versions) are available: 

- __v0.30__ (April 2018)
    This version relies on Intel TBB (not the open sourced TBB) for 
    carrying out parallel computation.
    It will still run on systems without Intel TBB,
    but it will only run in serial mode in that case.
    - Ubuntu 16.04 [ [DEB](tropicon-v0.3.deb) ]

What does it compute?
-------------------------------------------------------------------------------

A tropical polynomial is a piecewise linear function given by the
minimum of several linear polynomials in several real variables.
The set of points where the minimum is attained simultaneously by
two or more linear polynomials is called the tropical hypersurface 
defined by that polynomial.
_libtropicon_ computes the 
__intersection points of several generic tropical hypersurfaces__.
In the case where the number of polynomials match the dimension,
this problem is equivalent to the problem of finding all 
__mixed cells__ of several polytopes.
In this case, it also computes, as a byproduct, 
the __mixed volume__ of these polytopes.

How does it work?
-------------------------------------------------------------------------------

- [Mathematical theory](theory/)
- Algorithms
- Parallel computation
    - Shared-memory systems
    - Computer clusters
    - GPU devices
