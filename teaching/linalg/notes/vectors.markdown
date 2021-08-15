---
layout: lecturenote
title: Vectors
---

Vectors are elements of vector spaces,
which are set of object equipped with special algebraic operations
such as addition and scaling.
We will define these abstract concepts rigorously very soon,
but we will start from more intuitive setting.

Coordinate vectors in $\mathbb{R}^2$
------------------------------------

One of the most fundamental example are vectors formed by pairs of real
numbers. We write them as

$$  \begin{bmatrix}
        a \\ b
    \end{bmatrix}, $$

where $a$ and $b$ are real numbers.
They are called **column vectors**.
The collection of all such vectors is denoted by $\mathbb{R}^2$ (read as "R-two").
Two vectors are considered the same if and only if
the corresponding entries are the same, i.e.,

$$  \begin{bmatrix}
        a \\ b
    \end{bmatrix}
    =
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \quad\Longleftrightarrow\quad
    a = x \quad\text{and}\quad
    b = y.$$
    
We use the notation

$$ \mathbf{0} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}, $$

which is not to be confused with the real number 0.

Vector sums and differences
---------------------------

We can add two vectors simply by adding the corresponding entries.
Subtraction works in a similar way:

$$  \begin{aligned}
        \begin{bmatrix}
            a \\ b
        \end{bmatrix}
        +
        \begin{bmatrix}
            x \\ y
        \end{bmatrix}
        &=
        \begin{bmatrix}
            a + x \\ b + y
        \end{bmatrix}
        &&\text{and} &
        \begin{bmatrix}
            a \\ b
        \end{bmatrix}
        -
        \begin{bmatrix}
            x \\ y
        \end{bmatrix}
        &=
        \begin{bmatrix}
            a - x \\ b - y
        \end{bmatrix}.
    \end{aligned}$$

Scalar multiples of a vector
----------------------------

We can also multiply a vector by a (real) number

$$  a \,
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    \begin{bmatrix}
        ax \\ ay
    \end{bmatrix}. $$

Such an expression is known as a **scalar multiple** of a vector.
It is also known as **scalar product**.
As usual, for a vector $\mathbf{x} \in \mathbb{R}^2$,

$$ -\mathbf{x} = (-1) \, \mathbf{x}.$$

With these definitions,
we can see that familiar algebraic properties remain valid:
For vectors $\mathbf{x},\mathbf{y} \in \mathbb{R}^2$ and real numbers $a,b$,

$$  \begin{aligned}
        0 \mathbf{x} &= \mathbf{0}
        &
        -\mathbf{x} + \mathbf{x} &= \mathbf{0}
        &
        a (\mathbf{x} + \mathbf{y}) &= a\mathbf{x} + a\mathbf{y}
        \\
        1 \mathbf{x} &= \mathbf{x}
        &
        a(b(\mathbf{x})) &= (ab) \mathbf{x}
        &
        (a+b) \mathbf{x} &= a\mathbf{x} + b \mathbf{x}.
    \end{aligned}$$

Dot products
------------

There are several different types of "products" between vectors
that one could define.
The **dot product** is of particular importance in our
context, and it is defined as

$$  \begin{bmatrix}
        a \\ b 
    \end{bmatrix}
    \;\cdot\;
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    =
    ax + by .$$

It is important to understand
that the dot product produces a scalar rather than a vector.
It is an example of the more general concept of *inner product*,
which we will study later.
The " $\cdot$ " in dot products is necessary.
Omitting the " $\cdot$ " could change the meaning of an expression.

Norm of vectors
---------------

For a vector
$\mathbf{x} = \left[ \begin{smallmatrix} a \\ b \end{smallmatrix} \right]$
in $\mathbb{R}^2$, we define its **norm** to be

$$  \| \mathbf{x} \| = \sqrt{ a^2 + b^2 }.$$

This can be interpreted as the "length" of the vector.
Clearly, the norm is always nonnegative, and the only vector
that has norm 0 is the zero vector.
We can easily verify that the norm can also be expressed in terms
of dot product: For a vector
$\mathbf{x} \in \mathbb{R}^2$,

$$\| \mathbf{x} \| = \sqrt{ \mathbf{x} \cdot \mathbf{x} }.$$

Generalization to $\mathbb{R}^n$
--------------------------------

The concepts and operations listed above generalize directly to the
collection of column vectors with $n$ entries which we call
$\mathbb{R}^n$.

$$  \begin{aligned}
        \begin{bmatrix}
            x_1 \\ \vdots \\ x_n
        \end{bmatrix}
        +
        \begin{bmatrix}
            y_1 \\ \vdots \\ y_n
        \end{bmatrix}
        &=
        \begin{bmatrix}
            x_1 + y_1 \\ \vdots \\ x_n + y_n
        \end{bmatrix}
        &&\text{and} &
        \begin{bmatrix}
            x_1 \\ \vdots \\ x_n
        \end{bmatrix}
        -
        \begin{bmatrix}
            y_1 \\ \vdots \\ y_n
        \end{bmatrix}
        &=
        \begin{bmatrix}
            x_1 - y_1 \\ \vdots \\ x_n - y_n
        \end{bmatrix}.
    \end{aligned}$$

Similarly,

$$  \begin{aligned}
        \begin{bmatrix}
            x_1 \\ \vdots \\ x_n
        \end{bmatrix}
        \cdot
        \begin{bmatrix}
            y_1 \\ \vdots \\ y_n
        \end{bmatrix}
        &=
        x_1 y_1 + \cdots + x_n y_n
    \end{aligned}. $$

And for a column vector $\mathbf{x} \in \mathbb{R}^n$,
the expression

$$ \| \mathbf{x} \| = \sqrt{ \mathbf{x} \cdot \mathbf{x} } $$

for the norm of $\mathbf{x}$ remains valid.

Row vectors
-----------

We can also write entries in a row:

$$  \mathbf{x} =
    \begin{bmatrix}
        a & b
    \end{bmatrix}$$

or

$$  \mathbf{x} =
    \begin{bmatrix}
        x_1 & \cdots & x_n
    \end{bmatrix}$$

in general.
All the algebraic operations we described above
apply here as well.

The collection of all such **row vectors** form a different vector space.
In general, we distinguish row vectors and column vectors.
That is, we consider

$$  \begin{bmatrix}
        1 \\ 2
    \end{bmatrix}
    \;\ne\;
    \begin{bmatrix}
        1 & 2
    \end{bmatrix}.$$

<!-- Free geometric vectors {#free-geometric-vectors .unnumbered}
----------------------

Another example of vectors are "free geometric" vectors (which are
usually just called vectors). They are quantities that has both
direction and magnitude. On a 2-dimensional plane, we can represent such
a vector as a directed line segment. The scalar product of such a vector
is simply the result of (signed) scaling of the vector, and the sum of
two vectors follows the familiar "parallelogram rule". -->