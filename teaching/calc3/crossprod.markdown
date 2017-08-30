---
layout: default
title: Cross product
---

# {{ page.title }}

The cross product between two vectors in the three-dimensional space is
a fundamental operation in multivariable calculus.
It is used to construct many vector-field operations.
Note that it is only defined in the three-dimensional space.

For two vectors $$\vec{u}$$ and $$\vec{v}$$ in the three-dimensional space,
their cross product is denoted by $$\vec{u} \times \vec{v}$$.
It is itself a vector in the three-dimensional space that is perpendicular
to both $$\vec{u}$$ and $$\vec{v}$$.
More precisely, it is defined by the formula:

<p>
\[
    \vec{u} \times \vec{v}
    =
    \| \vec{u} \| \| \vec{v} \| \sin(\theta) \vec{n}
\]
</p>
where $$\theta$$ is the angle between $$\vec{u}$$ and $$\vec{v}$$
and $$\vec{n}$$ is the unit vector given by the _right-hand rule_.

## Anti-commutativity
It is important to remember that the cross product is not commutative.
Indeed, it is anti-commutative in the sense that
$$\vec{v} \times \vec{u} = - (\vec{u} \times \vec{v})$$.
This tells us that the cross product also encodes the information about
the orientation.

## Computation using determinant
In the Cartesian coordinate system, we can also compute the cross product
using a (formal) 3x3 matrix determinant.
<p>
\[
    \begin{bmatrix}
        u_1 \\ u_2 \\ u_3
    \end{bmatrix}
    \times
    \begin{bmatrix}
        v_1 \\ v_2 \\ v_3
    \end{bmatrix}
    =
    \det
    \begin{bmatrix}
        \vec{i} & \vec{j} & \vec{k} \\
        u_1     & u_2     & u_3 \\
        v_1     & v_2     & v_3
    \end{bmatrix}
\]
</p>
Here, $$\vec{i},\vec{j},\vec{k}$$ are the standard basis vectors
(unit vectors pointing in the $$x,y,z$$ directions respectively).

## Geometric interpretation
Using a basic trigonometry, we can verify that the magnitude of the cross product
of two vectors is precisely the area of the parallelogram spanned by the two vectors
(homework).
