---
layout: default
title: Mixed volume
---

What is mixed volume
====================

The short answer is: _I honestly do not know_.  
After spending many years with this concept, I can manipulate and compute mixed volumes
with my eyes closed.  However, I must confess that it is still not completely clear to 
me what it is supposed to measure and what it is supposed to mean.
Here, let me just list what I do know.


Minkowski sums of convex bodies
-------------------------------

The Minkowski sum of a curve and a two dimensional shape is fairly easy
to understand in an intuitive sense.


Mixed volume: the definition
----------------------------

Given \\(n\\) convex bodies (nonempty convex sets) \\(A_1,\ldots,A_n\\) in \\(\mathbb{R}^n\\),
we consider their scaled versions \\(\lambda_1 A_1, \ldots, \lambda_n A_n\\) by positive
scaling factors \\(\lambda_1,\ldots,\lambda_n\\).
<div>
\[
    \text{Vol}_n(\lambda_1 \, A_1 \, + \, \cdots \, + \, \lambda_n \, A_n)
\]
</div>
is a homogeneous polynomial in the variables \\(\lambda_1,\ldots,\lambda_n\\).
This is the contend of the Minkowki Theorem and essence of mixed volume.
This polynomial contains almost everything one needs to understand the concept
of mixed volume.


Simple case: mixed area
-----------------------
It is perhaps best to start with the simplest case: the mixed area.


A functional point of view
--------------------------

It turns out mixed volume, as a function on several convex bodies, is uniquely
characterized by some of its properties:

- MVol is symmetric, i.e., its value is invariant under any permutation of the arguments;
- MVol is additive with respect to the Minkowski sum;
- \\(\operatorname{MVol}(A,\ldots,A) = n! \, \operatorname{Vol}_n(A) \\)
