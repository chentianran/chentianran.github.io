---
layout: default
title: The Kuramoto model
---

# {{ page.title }}

The *Kuramoto model* emerged from the study of
the synchronization among coupled oscillators.
It has long been know that when
When simple harmonic oscillators are coupled with one another,
complicated collective behaviors emerge.
The simplest example is the
"odd kind of sympathy" between pendulum clocks
described by Huygens in 1673.
More complicated biological examples range from
pacemaker cells in the heart
to the formation of circadian rhythm in the brain
to synchronized flashing of fireflies.
It has since found many other interesting applications
that fueled several decades of active research.

A network of oscillators can be modeled as a swarm of points
on 2-dimensional plane circling the origin
while pulling and pushing on one another.
It models a wide range of physical systems in science and engineering,
and was first studied by Wiener in the 1950s
Two important simplifications enabled
several decades of active research that followed.

<iframe src="/research/kuramoto/sim2.html" width="550" height="420"></iframe>

First, Winfree noted, based on intuition,
that for weakly coupled and nearly identical oscillators,
there is a a natural separation of timescales:
On the short timescale,
oscillators are closely approximated by their limit cycles
and thus can be represented by their phases.
Kuramoto derived the system of differential equations

$$
  \dot{\theta}_i = \omega_i -
  \sum_{j=0}^n \Gamma_{ij}(\theta_i - \theta_j)
  \quad\text{for } i = 0,\ldots,n
$$

governing the network of $n+1$ oscillators,
in which $\theta_i \in [0,2\pi)$
represent the phases of the oscillators,
$\omega_i$ are their natural frequencies (i.e., their limit cycle frequencies),
and the interaction function $\Gamma_{ij}$
keeps track of the nonlinear interactions among the original limit cycles.

The second simplification came when 
Kuramoto singled out the simplest case
with
$\Gamma_{ij} (\theta_i - \theta_j) = \frac{K}{n+1} \sin(\theta_i - \theta_j)$
for a constant $K$ that quantifies the coupling strength,
which produces the further simplified model
governed by equations

$$
  \dot{\theta}_i =
  \omega_i -
  \frac{K}{n+1} \sum_{j=0}^n \sin(\theta_i - \theta_j)
  \quad\text{for } i = 0,\ldots,n,
$$

This is the Kuramoto model.

This model is simple enough to be analyzed in detail
yet exhibit interesting emergent behaviors,
and thus kick-started an active research field.

## Sparse and non-uniform couplings

The original Kuramoto model only considers
uniform and all-to-all coupling,
i.e., cases where the underlying graph is the complete graph
One generalization is to consider
potentially sparse or non-uniform couplings,
which can be modeled as a weighted graph $G = (V,E,K)$,
where the vertices $V$ and edges $E$
represent the oscillators and their connections, respectively,
and symmetric weights $K = \{k_{ij}\}$ encodes the coupling strengths.
With this, we get the generalized model

$$
   \dot{\theta}_i =
   \omega_i -
   \sum_{j \in \mathcal{N}_G(i)} k_{ij} \sin(\theta_i - \theta_j)
   \quad\text{for } i = 0,\ldots,n,
$$

where $\mathcal{N}_G(i)$ is the set of vertices adjacent to $i$ in the graph $G$.

## Phase delays

Another well-studied generalization is the Kuramoto model
with phase delays, given by the differential equations

$$
   \dot{\theta}_i =
   \omega_i -
   \sum_{j \in \mathcal{N}_G(i)} k_{ij} \sin(\theta_i - \theta_j + \delta_{ij})
   \quad\text{for } i = 0,\ldots,n.
$$

In this, each oscillator $i$ is influences by a delayed phase $\theta_j - \delta_{ji}$
for each of its connected oscillator $j$.

## Frequency synchronization configurations

One core problem that can be studied algebraically
is the analysis of "*frequency synchronization*"
(not to be confused with "*phase synchronization*" or "*phase cohesion*").
Frequency synchronization is achieved
when the tendency of oscillators relaxing to their limit cycles
and the influence of their neighbors reach an equilibrium,
and the oscillators are all tuned to their mean frequency.
That is, a *frequency synchronization configuration*
is a configuration at which
$\dot{\theta}_i = \overline{\omega}$
Such a synchronization configuration correspond to
an equivalent class of solutions
to the nonlinear system of equations

$$
  \overline{\omega}
  =
  \omega_i -
  \sum_{j \in \mathcal{N}_G(i)} k_{ij} 
      \sin(
          \theta_{i} - \theta_{j}
          + \delta_{ij}
      ),
  \quad\text{for } i = 0,\dots,n.
$$

The problem of finding synchronization configurations
is thus reduced to the problem of solving this nonlinear system.

## Connections to other problems

Interestingly, even though this system is derived from a
simplification of the oscillators model,
its usefulness extends far beyond
this narrow setting.
In electric engineering, for example,
it coincide with a special case of the ``power flow'' equations,
derived from % Ampère's and Kirchhoff's
laws of AC circuits
which governs the interactions of alternating-current circuits

## Algebraic formulation

Though the equilibrium equations are not algebraic,
it can be made algebraic through a change of variables.
For example, through the substitutions
$x_i = e^{\mathfrak{i} \theta_i}$ the systems of equations above
can be transformed into the system of Laurent polynomials

$$
     \overline{\omega}
     =
     \omega_i -
     \sum_{j \in \mathcal{N}_G(i)}
     \frac{k_{ij}}{2 \mathfrak{i}}
     \left(
         x_i x_j^{-1} -
         x_j x_i^{-1}
     \right)
     \quad\text{for } i = 0,\ldots,n.
$$

This, of course, is not the only way to transform
the Kuramoto equations into an algebraic system.

<!-- % Other algebraic formulations and variations
% have also been used in recent studies
% \cite{???}.
Numerical nonlinear algebra has been used to solve this
and related families of equations
and find synchronization configurations
that cannot be found by simulations or symbolic computation.
For example, the ``IEEE 14 bus'' system
from electric engineering 
is a well studied test case in the field,
yet, its full set of solutions remained unknown
until it was computed using
total degree and polyhedral homotopy methods
by Mehta, Nguyen, and Turitsyn in the 2010s \cite{MehtaNguyenTuritsyn2016Numerical}
(via \textsf{Bertini} \cite{Bertini} and \textsf{HOM4PS-2.0} \cite{LeeLiTsai2008HOM4PS}).

In the special case of ``rank one'' coupling,
Coss, Hauenstein, Hong, and Molzahn
discovered that the equilibrium equation of \eqref{equ: generalized kuramoto}
can be reformulated as a set of decoupled univariate radical equations
\cite{CossHauensteinHongMolzahn2018Locating},
which are easy to solve.

Root counting, in this context,
is another question that has attracted the attention
of the nonlinear algebra community.
In the 1980s, %using Morse theory and B\'ezout theorems,
Baillieul and Byrnes
showed that for a complete network of 3 oscillators,
\eqref{equ: generalized kuramoto} has at most 6 complex equilibria
(i.e., complex solutions to the equilibrium equations),
% i.e., synchronization configurations,
and all of them can be real \cite{BaillieulByrnes1982Geometric}.
For a complete network of 4 oscillators,
they were able to construct 14 real equilibria.
The complex equilibria count in this case, however, is 20.
They then left the question
whether all complex equilibria may be real.
Little progress were made toward this question
in the next 20 years.
In the 2010s,
Molzahn, Niemerg, Mehta, and Hauenstein
found a choice of coefficients that produces 16 real equilibria.
In 2020,
Lindberg, Zachariah, Boston, and Lesieutre
further improved the real equilibria count to 18,
inching closer to the upper bound of 20.
This long line of research employed tools
described in the previous sections
(e.g., B\'ezout bound, homotopy methods, monodromy methods, etc.),
and as of today, it remains unknown if
the 20 complex roots from a complete network of 4 oscillators
can all be real.

We have a much more complete answer
for the question of the generic (and maximum) complex equilibria count,
thanks to the powerful tools
%developed in the field of nonlinear algebra, which are
reviewed in the previous sections.
By considering the bi-homogeneous B\'ezout bound of
an algebraic formulation of the equilibrium equations of \eqref{equ: generalized kuramoto},
Baillieul and Byrnes showed that for a network of $n+1$ oscillators,
there are at most $\binom{2n}{n}$ complex equilibria.
This upper bound is indeed attainable
when parameters $\{\omega_i\}$ and $\{ k_{ij} \}$
are chosen generically and the network is complete. -->

<!-- For sparse networks, this bi-homogeneous B\'ezout bound
is not attainable regardless of the choices of the coefficients.
More refined bound must take into consideration
the network topology.
Bernstein's theorem (\Cref{thm: Bernstein})
was used to exploit the sparsity structure
and improve this bound \cite{MehtaNguyenTuritsyn2016Numerical}.

A more streamlined answer can be stated in terms of the normalized volumes
of a well studied family of polytopes.
For a connected graph $G = (V,E)$,
generic $\omega_i$'s, and
generic but symmetric nonzero $k_{ij}$,
the number of complex equilibria for \eqref{equ: generalized kuramoto}
is exactly the normalized volume of the polytope
\begin{equation}\label{equ: AP bound}
    \nabla_G = \conv \{ \pm (e_i - e_j) \mid ij \in E \}
    \quad\cite{ChenKorchevskaiaLindberg2022Typical}.
\end{equation}
\Cref{fig: kuramoto k3} shows $\nabla_{K_3}$ and $\nabla_{T_3}$
associated with a complete and a tree networks with 3 oscillators, respectively.
The sparsity of the tree network is reflected in
the geometry of its corresponding polytope.
% This is also an upper bound on the
% isolated complex zero count for \eqref{equ: laurent kuramoto}.
The normalized volumes of these two polytopes are 6 and 4, respectively,
and they correspond to the generic number of complex equilibria
for \eqref{equ: generalized kuramoto}.

The polytope $\nabla_G$ turns out to be the ``symmetric edge polytope''
studied by geometers and number theorists
motivated by completely independent problems \cite{DAliDelucchiMichalek2022Many}.
\Cref{tab: kuramoto root count} shows examples
of the root counting results 
discovered by the broader community through this connection.
Finding exact formula for other families of networks
remains an active topic.
% It is easy to show that for a network of $n+1$ oscillators,
% modeled by a connected graph $G$,
% \[
%     2^n
%     \;\le\;
%     \operatorname{Vol}(\nabla_G)
%     \;\le\;
%     \binom{2n}{n}
% \]
% where $n+1$ is the number of oscillators. -->

<!-- Interestingly, for trees and cycle networks,
is is possible for complex equilibria to be real.
It is still unknown if the same holds for other families of networks. -->

<!-- Despite its mechanical origin, the frequency synchronization configurations
naturally appears in a long list of seemingly unrelated fields,
including electrical power networks,
flocking behavior in biology and control theory,
and decentralized clock synchronization.

The interactive animation below shows the complicated interaction of five
oscillators each having their own (randomly assigned) natural frequency.
Initially, they are marching in the own pace.
Click on __couple__ to enable the spring coupling.
The coupling strength can also be adjusted. -->
