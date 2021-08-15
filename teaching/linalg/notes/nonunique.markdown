---
layout: lecturenote
title: Linear systems with no solutions or infinitely many solutions
---

Inconsistent systems
--------------------

Recall that it is possible for a linear system to have no solution at all.
E.g., the system

$$  \left\{
    \begin{aligned}
        x + y &= 3 \\
        x + y &= 4 .
    \end{aligned} \right.$$

has no solution.
Can you see why?

In general, we say a linear system is **inconsistent**
if it has no solution.
One benefit of the reduced row echelon form is that we can
determine if a system is inconsistent quite easily:
A linear system is inconsistent if and only if
one row of the reduced row echelon form of
the corresponding augmented matrix is

$$  \left[\begin{array}{ccc|c}
        0 & \cdots & 0 & 1
    \end{array}\right],$$

which is equivalent to the equation "$0 = 1$".

**Exercise.**
Compute the RREF of the augmented matrix of the following linear system
and determine if it is consistent.

$$  \left\{
    \begin{aligned}
        x + y &= 3 \\
        x + y &= 4 .
    \end{aligned} \right.$$

**Exercise.**
Compute the RREF of the augmented matrix of the following linear system
and determine if it is consistent.

$$  \left\{
    \begin{aligned}
        1x + 2y +  z &= 3 \\
        1x + 1y + 0z &= 4 \\
        0x + 1y + 1z &= 2
    \end{aligned} \right. $$

Basic vs. free variables
------------------------

In the RREF of an augmented matrix, a column that contains a leading 1
is called a **pivot column**.

A variable corresponding to a pivot column is called a
**basic variable**.
Other variables (corresponding to columns that do not have leading 1's)
are called **free variables**.
Free variables act as "parameters" when we want to describe
infinite solution sets.
It is important to note here that the classification of
basic vs. free variables depends on the ordering of the variables.
We can only distinguish basic and free variables once we fix the variable order.

Describing infinite solution sets using free variables
------------------------------------------------------

If the linear system is consistent but the solution is not unique,
then we must have an infinite solution set.
In this case, the **dimension** of the solution set is the
number of free variables, and we can describe the solution set
by expressing the basic variables as functions of the free variables.

**Exercise.**
Consider the linear system in the variables $(x_1,x_2,x_3)$
whose augmented matrix has the following RREF

$$  \left[
    \begin{array}{ccc|c}
        1 & 0 & -1 & 3 \\
        0 & 1 &  2 & 4 \\
        0 & 0 &  0 & 0
    \end{array}\right]. $$

Determine the dimension of the solution set and describe the
solution in terms of the free variables.

**Hint:**
You may want to try rewrite the first and second rows as equations
and see what that tells you about $x_1$ and $x_2$.
In particular, can you solve $x_1$ and $x_2$ in terms of $x_3$
(pretend $x_3$ is a number).

**Exercise.**
Do the same for the linear system represented by the augmented matrix

$$  \left[
    \begin{array}{ccccc|c}
        1 & 0 &   3 & 2 & 1 & 3 \\
        0 & 1 &  -2 & 4 & 0 & 7
    \end{array}\right]. $$

**Exercise.**
Do the same for the linear system represented by the augmented matrix

$$  \left[
    \begin{array}{ccccc|c}
        1 & 0 &  1 & 0 & 1 & 3 \\
        0 & 1 &  2 & 0 & 2 & 7 \\
        0 & 0 &  0 & 1 & 4 & 6
    \end{array}\right].$$

Parametrize infinite solution sets
----------------------------------

In many situations, it is preferred to describe infinite solution sets
in their "parametric form".
That is, we introduce new variables, called "parameters",
so that we can express all unknowns in terms these new parameters.

**Example.**
Consider the linear system, in the unknowns $$(x_1,x_2,x_3,x_4,x_5)$$,
represented by the augmented matrix

$$  \left[
    \begin{array}{ccccc|c}
        1 & 0 &  2 & 0 & -2 & 1 \\
        0 & 1 &  3 & 0 &  4 & 2 \\
        0 & 0 &  0 & 1 & -2 & 3
    \end{array}\right].$$

We can see that there are 2 free variables
(corresponding to the third and fifth columns).
While this is equivalent to

$$  \begin{aligned}
        x_1 &= 1 - 2x_3 + 2x_5 \\
        x_2 &= 2 - 3x_3 - 4x_5 \\
        x_4 &= 3 + 2x_5.
    \end{aligned} $$

In many situtations, it is much preferred to introduce additional parameters
$t_1, t_2$ (for the two free variables $x_3, x_5$)
so that we have the equivalent description

$$  \begin{aligned}
        x_1 &= 1 - 2t_1 + 2t_2 \\
        x_2 &= 2 - 3t_1 - 4t_2 \\
        x_3 &= t_1 \\
        x_4 &= 3 + 2t_2 \\
        x_5 &= t_2
    \end{aligned} $$

That is, we can express all unknowns as functions of
the new parameters $t_1$ and $t_2$.
Even though this form appears to be more complicated,
as we will see soon, there are good reasons for preferring this form.