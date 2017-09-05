---
layout: default
title: The Kuramoto model
---

# {{ page.title }}

The study of synchronization in networks of coupled oscillators
is a particularly pervasive subject in a wide range of independent fields of study
in biology, physics, chemistry, engineering, and social science.
The simplest mechanical analog of the coupled oscillator model
is a spring network, shown in Figure~\ref{fig:spring-network},
that consists of a set of weightless particles constrained to move on the
unit circle without friction or collision.
Mathematically, a network of $$N=n+1$$ oscillators can be described
by a weighted graph $$G = (V,E,A)$$ in which vertices $$V = \{0,\dots,n\}$$
represent the oscillators, edges $$E$$ represent their connections, and
weights $$A = \{a_{ij}\}$$ represent the _coupling strength_ along edges.
In isolation, the oscillators have their own natural frequency
$$\omega_0,\dots,\omega_n$$.
That is, for each $$i=0,\dots,n$$ there is a constant $$\omega_i$$
such that $$\frac{d\theta_i}{dt} = \omega_i$$ if the $$i$$-th oscillator is
disconnected from a network.
However, in a network of oscillators the tug of war between the oscillators'
tendency to oscillate in their own natural frequencies and the influence of
their neighbors gives rise to rich and complicated phenomenon.
This is captured by the Kuramoto model:
<p>
\[
    \frac{d \theta_i}{dt} =
    \omega_i -
    \sum_{j \in \mathcal{N}_G(i)} a_{ij} \sin(\theta_{i}-\theta_{j})
    \quad \text{ for } i = 0,\dots,n
\]
</p>
where each $$\theta_i \in [0,2\pi)$$ is the phase angle that
describes the status of the $$i$$-th oscillator,
and $$\mathcal{N}_G(i)$$ is the set of neighbors of the $$i$$-th vertex.
(Here, the coupling strength $$a_{ij} > 0$$ characterizes the stiffness
of the spring connecting particles $$i$$ and $$j$$,
and $$\frac{d\theta_i}{dt}$$ represents the angular velocity
(or equivalently, frequency) of the $$i$$-th particle.)
Of great interest is the configuration in which the angular velocity of
_all_ particles can become perfectly aligned, known as
_frequency synchronization_.
That is, $$\frac{d\theta_i}{dt} = c$$ for $$i=0,\dots,n$$ and a constant $$c$$.
Adopting a rotational frame of reference, we can always assume $$c = 0$$.
That is, frequency synchronization configurations are equivalent to equilibria
of the system of differential equation above.
Despite its mechanical origin, the frequency synchronization configurations
naturally appears in a long list of seemingly unrelated fields,
including electrical power networks,
flocking behavior in biology and control theory,
and decentralized clock synchronization.

The interactive animation below shows the complicated interaction of five
oscillators each having their own (randomly assigned) natural frequency.
Initially, they are marching in the own pace.
Click on __couple__ to enable the spring coupling.
The coupling strength can also be adjusted.

<div id="sketch-holder" class="text-center" style="position: relative;">
  <!-- Our sketch will go here! -->
</div>

In the 3x3 case:
<p>
\[
    \begin{bmatrix}
        a & b & c \\
        d & e & f \\
        g & h & i
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x \\ y \\ z
    \end{bmatrix}
    =
    \begin{bmatrix}
        a x + b y + c z \\
        d x + e y + f z \\
        g x + h y + i z
    \end{bmatrix}
\]
</p>

Of course the matrix does not need to be square.
When it is not square, the input vector and the output vector have different dimensions.
In that case, the matrix represents a
_linear transformation between two different spaces_.
For example, for a 2x3 matrix:
<p>
\[
    \begin{bmatrix}
        a & b & c \\
        d & e & f
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x \\ y \\ z
    \end{bmatrix}
    =
    \begin{bmatrix}
        a x + b y + c z \\
        d x + e y + f z
    \end{bmatrix}
\]
</p>

In general the matrix-vector between an $$m \times n$$ matrix
and an $$n \times 1$$ vector is defined to be
<p>
\[
    \begin{bmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        a_{21} & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{bmatrix}
    \cdot
    \begin{bmatrix}
        x_1 \\ x_2 \\ \vdots \\ x_n
    \end{bmatrix}
    =
    \begin{bmatrix}
        a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n \\
        a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n \\
        \vdots \\
        a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n   
    \end{bmatrix}
\]
</p>

Note that the result is an $$m \times 1$$ vector.

<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/p5.dom.js"></script>
<script language="javascript" type="text/javascript" src="/js/kuramoto.js"></script>
