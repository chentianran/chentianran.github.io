---
layout: default
title: Projects
---

# {{ page.title }}

## Infinite series

### [A] Leibniz series
__(5pt)__ Compute or estimate the value of the convergent infinite series
<p>
\[ \sum_{k=1} (-1)^{k-1} \frac{4}{2k-1} \]
</p>
(You should be able to get a good estimate by adding a large number of terms)

__(++5pt)__ If you can compute (or guess) the exact value of the above series,
explain why it converges to that value.

### [B] Exponential function
__(5pt)__ We have learned that the function $$e^x$$ has a Taylor series expansion
of the form
<p>
\[ \sum_{k=0} \frac{x^k}{k!}. \]
</p>
Use the "ratio test" or "root test", to show this series converges.

__(5pt)__ The number $$e$$ can be computed as $$e^1$$.
Use at least 20 terms from the above series to approximate the value at $$x=1$$.

__(**5pt)__ Use _Taylor Theorem_ to show that the above series agree with the
function $$e^x$$ for any $$x$$.

### The sine function as a power series

__(5pt)__ Verify that the Taylor series expansion of the function
$$f(x) = \sin(x)$$ is
<p>
\[ \sum_{k=1}^{\infty} (-1)^{k-1} \frac{x^k}{(2k-1)!} \]
</p>
You should show the computation for at least 9 terms
and explain why the general pattern holds.

__(5pt)__ Find the derivative of each term.
Show your computation.
What do these tell you about the derivative of the sine function?

__(5pt)__ Find the antiderivative of each term.
Show your computation.
What do these tell you about the antiderivative of the sine function?

## Polar coordinates

## Differential equations

### [A] Falling objects

__(5pt)__ For this part, let us assume that there is no air resistance.
(i.e., we will only consider the influence of gravitational pull).
Compute the trajectory of an object fell from a height of 100 meters.
That is, solve the system of differential equations
<p>
  \[
  \begin{cases}
  \ddot{y}(t) = -9.8
  \end{cases}
  \]
</p>
using the initial conditions
<p>
  \begin{cases}
  y(0) = 100 \\
  \dot{y}(0) = 0.
  \end{cases}
</p>
Note that here $$-9.8m/s^2$$ is the gravitational acceleration.

__(++5pt)__ The "linear resistance" model assumes the force from air resistance
is proportional to the velocity.
Under this assumption, the system of differential equations will become
<p>
  \[
  \begin{cases}
  \ddot{y}(t) = -9.8 - k \dot{y}(t)
  \end{cases}
  \]
</p>
Solve this system using the same initial conditions used above.


### [B] Trajectory of a basket ball

__(5pt)__ For this part, let us assume that there is no air resistance.
(i.e., we will only consider the influence of gravitational pull).
Compute the trajectory of a basket ball begin thrown with initial
horizontal and vertical velocity of $$v_x$$ and $$v_y$$ respectively
and from a height of 2 meters.
That is, solve the system of differential equations
<p>
  \[
  \begin{cases}
  \ddot{x}(t) = 0 \\
  \ddot{y}(t) = -9.8
  \end{cases}
  \]
</p>
using the initial conditions
<p>
  \begin{cases}
  x(0) = 0 \\
  y(0) = 2 \\
  \dot{x}(0) = v_x \\
  \dot{y}(0) = v_y.
  \end{cases}
</p>
Note that here $$-9.8m/s^2$$ is the gravitational acceleration.

__(++5pt)__ Suppose a player stands 5 meters from the hoop (horizontal distance),
which is just outside the free throw line, and throws the ball from a height
of 2 meters (vertical height).
The standard NBA hoop is about 3 meters from the floor.
Calculate the vertical and horizontal velocity required to make such a free throw.


__(++5pt)__ The "linear resistance" model assumes the force from air resistance
is proportional to the velocity.
Under this assumption, the system of differential equations will become
<p>
  \[
  \begin{cases}
  \ddot{x}(t) = -k\dot{x}(t) \\
  \ddot{y}(t) = -9.8 - k \dot{y}(t)
  \end{cases}
  \]
</p>
Solve this system using the same initial conditions used above.


### Radar tracking

### Drop a bomb

### Lead your target
