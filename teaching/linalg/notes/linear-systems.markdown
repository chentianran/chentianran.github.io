---
layout: lecturenote
title: Systems of linear equations
---

Systems of linear equations (or simply **linear systems**) are among the most
basic computational problems, and they appear naturally in many applications.

A linear system is a system of simultaneous equations
involving one or more **unknowns**
(which are also called **variables** or **indeterminates**)
where each equation only involve addition and
products between constants (numbers) and unknowns.
For example,

$$ \left\{
    \begin{aligned}
        3x + 5y &= 6 \\
        6x - y  &= 1
    \end{aligned}
    \right. $$

is a system of two linear equations in
the two unknowns $x$ and $y$.

Terms involving products of unknowns
(e.g., $xy$, $x^2$, $x^3 y^4$)
or nonlinear functions of unknowns
(e.g., $\sin(x)$, $\cos(x)$, $e^x$, $\frac{1}{x}$)
*cannot* appear in a linear system.

**Exercise.**
Can you come up with examples of systems that are not linear systems?

Make sure you can identify the different parts of a linear system:

- Unknowns/variables/indeterminates (usually clear from context)
- Coefficients (numbers multiplied to unknowns)
- Constant terms (numbers by themselves)

The values for the unknowns that will balance *all* equations (at the same time) 
in a system is a **solution**,
and the set of all solutions is the **solution set**.
To *solve* a linear system means to find the set of *all* solutions.

Our goal is to learn how to solve a linear system.
Along the way, we will pick up a few useful mathematical tools.

General form
------------

When we want to express a general system of $m$ linear equations in $n$ unknowns,
we will often write something like this

$$ \left\{
    \begin{aligned}
        a_{11} x_1 + \cdots + a_{1n} x_n &= b_1 \\
        &\vdots \\
        a_{m1} x_1 + \cdots + a_{mn} x_n &= b_m
    \end{aligned}
    \right. $$

Here, $a_{ij}$'s are the coefficients (and are considered to be known numbers),
$$b_1,\dots,b_m$$ are the constant terms (also considered to be known numbers),
and $$x_1,\dots,x_n$$ are the unknowns.
In this situation, we have to rely on context to distinguish
known quantities (coefficients and constant terms) from unknowns.

Homogeneous linear systems
--------------------------

One special class of linear systems known as "homogeneous linear system"
is of great importance in our further discussions
(and hence deserves a name).

We say a linear system is **homogeneous** if the only constant term
on each equation is zero.
For example, the linear system

$$ \left\{
    \begin{aligned}
        3x + 5y &= 0 \\
        6x - y  &= 0
    \end{aligned}
    \right. $$

is a homogeneous linear system.
In general, a homogeneous system of $m$ linear equations
in the $n$ unknowns $$x_1,\dots,x_n$$ can be written in the form

$$ \left\{
    \begin{aligned}
        a_{11} x_1 + \cdots + a_{1n} x_n &= 0 \\
        &\vdots \\
        a_{m1} x_1 + \cdots + a_{mn} x_n &= 0
    \end{aligned}
    \right. $$

where $a_{ij}$'s are the coefficients.

One special property we can immediately see is that
a homogeneous linear system always has a solution:
setting $$x_1,\dots,x_n$$ to be zero will certainly produce a solution.

Solving 2x2 linear systems
--------------------------

Let us start with linear systems of 2 equations in 2 unknowns
(or simply $2 \times 2$ linear systems).

**Simple example 1.**
We should test ourselves first.
Can we find a solution (i.e., a choice of the values of $x$ and $y$)
to the linear system

$$  \left\{
    \begin{aligned}
        x + y &= 5 \\
        x - y &= 1 ?
    \end{aligned}
    \right. $$

Please do give it a try.
It is very likely you can find it without any outside help.

Note that the same system may be arranged differently.
For example, there may be multiple similar terms in one equation
or terms are arranged in different order between equations.
The system above, for instance, can also be written as

$$  \left\{
    \begin{aligned}
        y + 2x &= 5 + x \\
        x - y - 1 &= 0,
    \end{aligned}
    \right. $$

which is equivalent to the above system.
For simplicity, we should always rearrange and combine the terms
before we try to solve them.

**Simple example 2.**
See if we can guess a solution to the linear system

$$ \left\{
    \begin{aligned}
        2x + y &= 8 \\
        x - 2y &= -6 .
    \end{aligned}
    \right. $$

This one may require some work/guessing,
but try your best!

*Hints:*

- You may want to focus on one equation at a time.
    For instance, what does the second equation tell you about $x$?
    What if we pretend, for a moment, $y$ is a number?
- Alternative, what if we double both sides of the first equation?

Three basic operations
----------------------

Three basic operations can be used to systematically eliminate unknowns
from equations until we can see the solutions easily.

1. Swapping two equations
2. Replacing an equation by a nonzero multiple of itself (both sides)
3. Replacing an equation by the sum of itself and a multiple of another

These operations do not alter the solution set.
Can you see why?
Note that *multiplying an equation by 0 is not allowed*
as that could change the solution set
(you are basically discarding an equation at that point).
Similarly, *adding a multiple of an equation to itself
is not allowed* in general, for the same reason.

Using these operations, can we reduce one of the equation
in the following system into an equation in one variable only?

$$ \left\{
    \begin{aligned}
        2x +  y &=  4 \\
        4x - 2y &= -4 .
    \end{aligned}
    \right. $$

It is easy to see how this idea can be applied to
linear systems of many more equations in many more variables.
We will soon see a more concise way of carrying out such calculations.

Number of solutions
-------------------

Before we try to solve larger linear systems,
it is important to notice some potential complications.

For example, can we find a solution to the linear system

$$  \left\{
    \begin{aligned}
         x +  y &= 5 \\
        2x + 2y &= 6 ?
    \end{aligned}
    \right. $$

Do you notice something special?

What about this one?
What will be the solution set to the system

$$  \left\{
    \begin{aligned}
         x + y  &= 3 \\
        2x + 2y &= 6 ?
    \end{aligned}
    \right.$$

These two examples are of particular importance,
as they shows us we cannot always expect a linear system to have unique solution.
Indeed, we can see at least three different situations in terms
of the number of solutions a linear system has.

- A unique solution
- Infinitely many solutions
- No solutions at all

To distinguish the first situation from the last two
(which is something you probably want to do before trying to solve a linear system),
we can use something called *determinant*.

Determinant
-----------

For the linear system

$$  \left\{
    \begin{aligned}
        a x + b y &= \alpha \\
        c x + d y &= \beta
    \end{aligned}
    \right.$$

in the unknowns $x$ and $y$, its **determinant** is the expression

$$ ad - bc,$$

and it tells us if the system has a unique solution:

- If the determinant is nonzero,
  then the linear system has a unique solution (exactly one solution).
- If the determinant is zero,
  the system either has infinitely many solutions or no solutions at all.

It is important to note that the value of the determinant does not
directly distinguish between the cases of
infinite and empty solution sets.

Determinant is an important but confusing tool in mathematics.
We will learn much more about it soon.
For convenience, we use
the notation

$$  \left|
    \begin{smallmatrix}
        a & b \\
        c & d
    \end{smallmatrix}
    \right|
    \; = \;
    ad - bc.$$

Cramer's rule
-------------

When the determinant of a linear system is nonzero,
we can actually express the solution in terms of determinants.
For the system

$$  \left\{
    \begin{aligned}
        a x + b y &= \alpha \\
        c x + d y &= \beta,
    \end{aligned}
    \right.$$

the unique solution is given by

$$  \begin{aligned}
        x &= \frac{
            \left|
            \begin{smallmatrix}
                \alpha & b \\
                \beta  & d
            \end{smallmatrix}
            \right|
        }{
            \left|
            \begin{smallmatrix}
                a & b \\
                c & d
            \end{smallmatrix}
            \right|
        }
        &
        y &= \frac{
            \left|
            \begin{smallmatrix}
                a & \alpha \\
                c & \beta
            \end{smallmatrix}
            \right|
        }{
            \left|
            \begin{smallmatrix}
                a & b \\
                c & d
            \end{smallmatrix}
            \right|
        }.
    \end{aligned}$$

Though this is not particularly useful in actual computation,
we have much better ways for solving linear systems
in most situations.
It is nonetheless an important theoretical tool
for expressing solutions to linear systems in a special form.
