---
layout: default
title: Facets and facet subgraphs of symmetric edge polytopes
---

# Main results

<div class="border" markdown="1">
**Theorem 3**. *Let $H$ be a nontrivial connected subgraph of $G$.*

1.  *$H$ is a face subgraph of $G$ if and only if it is a maximal
    bipartite subgraph of $G[\mathcal{V}(H)]$.*
2.  *$H$ is a facet subgraph of $G$ if and only if it is a maximal
    bipartite subgraph of $G$.*
</div>

# Introduction

For a simple connected graph $G$ with nodes
$\mathcal{V}(G) = \{1,\dots,N\}$ and edge set $\mathcal{E}(G)$, its
*symmetric edge polytope* [@Matsui2011Roots] (a.k.a. PV-type *adjacency
polytope* [@Chen2019Unmixing]) is the convex polytope
$\mathop{\mathrm{conv}}\{ \pm(\mathbf{e}_i - \mathbf{e}_j) \mid \{i,j\} \in \mathcal{E}(G) \}$
where $\mathbf{e}_0 = \mathbf{0}$ and $\mathbf{e}_i$ is the $i^{th}$
standard basis. In the context of Kuramoto models [@Kuramoto1975Self],
the geometric structure of such polytopes has been instrumental in
understanding the root count for algebraic Kuramoto equations
[@ChenDavisNODY; @ChenDavisMehta2018Counting; @Kuramoto1975Self]. In the
broader context, they have been studied by number theorists,
combinatorialists, and discrete geometers motivated by several seemingly
independent problems
[@DelucchiHoessly; @higashitani2019ARITHMETIC; @HKMInterlacing; @Matsui2011Roots; @ohsugi2014; @OhsugiShibata2012Smooth; @Rodriguez2002].
These viewpoints are consolidated in recent work by D'Alì, Delucchi, and
Michałek [@DAliDelucchiMichalek2022Many] which, among other
contributions, sheds new light on the structure of symmetric edge
polytopes of bipartite graphs, cycles, wheels, and graphs consisting of
two subgraphs sharing a single edge. Using Gröbner basis methods, they
provided explicit formulae for the number of facets and the volume of
the symmetric edge polytopes associated with several classes of graphs.

One recurring theme in these recent works is the symmetry between the
geometric structure of symmetric edge polytopes and topological
structure of the underlying graphs. In particular, the concept of
"facet/face subgraphs" is defined and studied
[@Chen2019Directed; @DAliDelucchiMichalek2022Many]. The present work is
a continuation along this line of research. The main contributions of
this paper include the following descriptions of the correspondence
between faces of a symmetric edge polytope and face subgraphs of the
underlying connected simple graph:

-   Connected face subgraphs are exactly the maximal bipartite subgraphs
    in their corresponding induced subgraphs.
    ([3](#thm: facets are max bipartite){reference-type="ref+Label"
    reference="thm: facets are max bipartite"} part (1))

-   Facet subgraphs are exactly the maximal bipartite subgraphs.
    ([3](#thm: facets are max bipartite){reference-type="ref+Label"
    reference="thm: facets are max bipartite"} part (2))

-   The map from facets to facet subgraphs is surjective but not
    injective: each facet subgraph corresponds to an equivalence class
    of facets and each can be described as an assignment of edge
    orientations for the cut-set induced by the bipartite facet
    subgraph. From the view point of cut-set vectors, we provide a
    complete description of the equivalence class of facets
    corresponding to a given facet of the symmetric edge polytope, i.e.,
    the fiber over a given facet subgraph.
    ([9](#thm: facet parametrization){reference-type="ref+Label"
    reference="thm: facet parametrization"})

-   We establish equivalences between geometric properties of faces and
    topological properties of the corresponding face subgraphs.
    ([12](#thm: face properties){reference-type="ref+Label"
    reference="thm: face properties"})

-   Armed with these results, we compute the number of facets of a
    symmetric edge polytope derived from a graph formed by joining an
    even and an odd cycle along a shared edge, generalizing a recent
    result of D'Alì, Delucchi, and Michałek
    [@DAliDelucchiMichalek2022Many].

<!-- # Preliminaries and notation {#sec:prelim}

All graphs we consider will be simple.
For a graph $G$, let $\mathcal{V}(G)$ and $\mathcal{E}(G)$ denote
its sets of nodes and edges respectively.
We say $G$ is *trivial* if $|\mathcal{V}(G)| \le 1$.
A graph $H$ is a *subgraph* of $G$, and use the notation $H \le G$, if
$\mathcal{V}(H) \subseteq \mathcal{V}(G)$ and
$\mathcal{E}(H) \subseteq \mathcal{E}(G)$.
The edge connecting $i$ and $j$ is denoted $\{i,j\}$ or $i \leftrightarrow j$.
A graph is *bipartite* if it is $2$-colorable;
equivalently, if it has no odd cycles.
By a *maximal* bipartite subgraph $H$ of $G$,
we mean a subgraph of $G$ that is bipartite and inclusion-maximal.
Such subgraphs are
necessarily connected and *spanning* (i.e.,
$\mathcal{V}(H) = \mathcal{V}(G)$). For a subset
$V \subseteq \mathcal{V}(G)$, the induced subgraph $G[V]$ is the
subgraph consisting of all edges $\{i,j\} \in \mathcal{E}(G)$ where both
$i,j \in V$. With respect to a spanning tree $T$ of a connected graph
$G$, a *fundamental cycle* of $G$ is the unique cycle formed by an edge
outside $T$ and a path in $T$. For a digraph $\vec{G}$, the arrowhead
emphasizes the distinction between $\vec{G}$ and its underlying
undirected graph $G$. A directed edge, called an *arc*, from $i$ to $j$
is denoted $(i,j)$, and we use the notation $(i,j)^{-1} = (j,i)$. The
*converse* of $\vec{G}$, which reverses the orientation of all its
edges, is denoted $\vec{G}^{-1}$.

A *point configuration*
$X = \{ \mathbf{x}_1,\dots,\mathbf{x}_m \} \subset \mathbb{R}^n$ is a
finite collection of distinct points. Its (affine) *dimension* is the
dimension of the smallest affine subspace containing $X$. A nonempty
*face* of $X$ is a subset of $X$ for which a linear functional
$\langle \,\cdot\,,\, \boldsymbol{\alpha}\, \rangle$ is minimized. In
this case, $\boldsymbol{\alpha}$ is an *inner normal* of the face. The
emptyset $\varnothing$ is also a face of $X$. Note that faces are
themselves point configurations. The $0$-dimensional faces are
*vertices* and maximal proper faces are *facets*. The set of all facets
of $X$ is denoted by $\mathcal{F}(X)$. We say $X$ is *(affinely)
dependent* if there are $\lambda_1,\dots,\lambda_m \in \mathbb{R}$, not
all zero, with $\sum_{i=1}^m \lambda_i = 0$ such that
$\sum_{i=1}^m \lambda_i \mathbf{x}_i = \mathbf{0}$. Otherwise, it is
*(affinely) independent*. Call $X$ a *simplex* if $|X| = \dim(X) + 1$
and a *circuit* if it is an inclusion-minimal dependent set. Its
*corank*[^1] is $|X| - \dim(X) - 1$; Its convex hull
$\mathop{\mathrm{conv}}(X) = 
    \left\{
        \sum_{i=1}^m \lambda_i\mathbf{x}_i \mid \lambda_1,\dots,\lambda_m \geq 0, \, \sum_{i=1}^m \lambda_i = 1\right
    \}$ is a *convex polytope*. -->

# Symmetric edge polytopes {#sec:adjpol}

For a connected graph $G$ with nodes $\mathcal{V}(G) = \{1,\dots,N\}$,
its *symmetric edge
polytope [@DAliDelucchiMichalek2022Many; @Matsui2011Roots]* is the
convex polytope
$\mathop{\mathrm{conv}}\{ \pm(\mathbf{e}_{i} - \mathbf{e}_{j}) \mid \{i,j\} \in \mathcal{E}(G) \} \subset \mathbb{R}^N$,
where $\mathbf{e}_i \in \mathbb{R}^N$ is the vector with 1 in the $i$-th
entry and zero elsewhere. Since we are mostly interested in
combinatorial aspects of symmetric edge polytopes, it is more convenient
to focus on the underlying point configuration. We define
$$\begin{aligned}
    \check{\nabla}_G &=
    \{ \pm( \mathbf{e}_{i-1} - \mathbf{e}_{j-1}) \mid \{i,j\} \in \mathcal{E}(G) \}
    \subset \mathbb{R}^n = \mathbb{R}^{N-1}
    \quad\text{and}
    \\
    \bar{\nabla}_G &=
    \{ \pm( \mathbf{e}_i - \mathbf{e}_j) \mid \{i,j\} \in \mathcal{E}(G) \}
    \subset \mathbb{R}^{N}
\end{aligned}$$ with the convention that $\mathbf{e}_0 = \mathbf{0}$.
These two point configurations have the same intrinsic geometric
properties, and they only differ in the ambient space in which they are
embedded: $\check{\nabla}_G$ is a full-dimensional point configuration
in $\mathbb{R}^{N-1}$ whereas $\bar{\nabla}_G$ is a codimension-1 point
configuration in $\mathbb{R}^N$, and $\check{\nabla}_G$ is precisely the
projection of $\bar{\nabla}_G$ onto the last $N-1$ coordinates. The
check mark notation in $\check{\nabla}_G$ is a reminder that it is a
projection to a lower-dimensional subspace. We also extend this notation
to their subsets, e.g., we identify any subset
$X \subseteq \bar{\nabla}_G$ with its projection
$\check{X} \subseteq \check{\nabla}_G$. When describing subsets of
$\check{\nabla}_G$ or $\bar{\nabla}_G$, the "codimension" of a subset
always refers to the codimension relative to $\check{\nabla}_G$ or
$\bar{\nabla}_G$ themselves, regardless of the ambient space. The
projection that maps $\bar{\nabla}_G$ to $\check{\nabla}_G$ is a
unimodular equivalence between the two configurations, and the two are
simply different embeddings of the same polytope into the Euclidean
space. The distinction between the two will not be relevant when
referencing intrinsic geometric properties, in which case we will simply
use $\nabla_G$.

In Ref. [@Higashitani2015Smooth2], Higashitani extended this
construction to digraphs: for a digraph $\vec{G}$, we define
$$\begin{aligned}
    \check{\nabla}_{\vec{G}} &= 
    \{ \mathbf{e}_{i-1} - \mathbf{e}_{j-1} \mid (i,j) \in \mathcal{E}(\vec{G}) \} \subset \mathbb{R}^{N-1}
    \quad\text{and}
    \\
    \bar{\nabla}_{\vec{G}} &= 
    \{ \mathbf{e}_{i} - \mathbf{e}_{j} \mid (i,j) \in \mathcal{E}(\vec{G}) \} \subset \mathbb{R}^N.
\end{aligned}$$ Here,
$\mathbf{e}_i - \mathbf{e}_j \in \bar{\nabla}_{\vec{G}}$ no longer
implies $\mathbf{e}_j - \mathbf{e}_i \in \bar{\nabla}_{\vec{G}}$, thus
$\mathop{\mathrm{conv}}(\bar{\nabla}_{\vec{G}})$ may not be a symmetric
edge polytope. The notation $\check{\nabla}_G,\bar{\nabla}_G$ and
$\check{\nabla}_{\vec{G}},\bar{\nabla}_{\vec{G}}$ extend naturally to
subgraphs of $G$ and subdigraphs of a digraph $\vec{G}$, respectively,
by restriction.

By construction, $\mathbf{0}$ is always an interior point of
$\mathop{\mathrm{conv}}(\check{\nabla}_G)$, which allows the inner
normals to be normalized to the following certain form.

::: {#lem:facet-def .lemma}
**Lemma 1**. For a connected nontrivial graph $G$, a nonempty subset
$F \subsetneq \check{\nabla}_G$ is a face if and only if there is a
nonzero vector $\check{\boldsymbol{\alpha}} \in \mathbb{R}^n$ such that
$$\begin{aligned}
        \langle \, \mathbf{x}\,,\,  \check{\boldsymbol{\alpha}}\, \rangle &=   -1
        \quad\text{for any } \mathbf{x}\in F,\; \text{and}\\
        \langle \, \mathbf{x}\,,\,  \check{\boldsymbol{\alpha}}\, \rangle &> -1
        \quad\text{for any } \mathbf{x}\in \check{\nabla}_G \setminus F
    
\end{aligned}$$
:::

The same description extends to inner normals for faces of
$\bar{\nabla}_G$ since each inner normal of $\bar{\nabla}_G$ projects
down to an inner normal of $\check{\nabla}_G$, and each inner normal of
$\check{\nabla}_G$ lifts to an equivalence class of inner normals of
$\bar{\nabla}_G$.

# Facets, faces, and associated subgraphs {#sec: facets}

Faces and facets of a symmetric edge polytope have been studied from
several different viewpoints [@DAliDelucchiMichalek2022Many]. We
continue this line of inquiry through a graph-theoretical approach. The
central theme of this paper is the interplay between combinatorial
properties of faces of $\nabla_G$ and graph-theoretic properties of
subgraphs of $G$ through the connection of face subgraphs. Throughout
this section, we fix $G$ to be a nontrivial, connected, and simple
graph.

::: {#def:subgraphs .definition}
**Definition 2**. For a nonempty subset $X \subseteq \bar{\nabla}_G$, we
define $\vec{G}_X$ and $G_X$ to be the subgraphs with node and edge sets
$$\begin{aligned}
        \mathcal{V}(\vec{G}_X) &= \{ 
            i \mid 
            \mathbf{e}_i - \mathbf{e}_j \in X
            \text{ or }
            \mathbf{e}_j - \mathbf{e}_i \in X
            \text{ for some } j
        \}
        \\
        \mathcal{E}(\vec{G}_X) &= \{ \; (i,j) \;\mid\; \mathbf{e}_i - \mathbf{e}_j \in X \}
        \\
        \mathcal{V}(G_X) &= \{ 
            i \mid 
            \mathbf{e}_i - \mathbf{e}_j \in X
            \text{ or }
            \mathbf{e}_j - \mathbf{e}_i \in X
            \text{ for some } j
        \}
        \\
        \mathcal{E}(G_X)           &= \{ \; 
            \{ i, j \} 
            \;\mid\; \mathbf{e}_i - \mathbf{e}_j \in X \text{ or } \mathbf{e}_j - \mathbf{e}_i \in X 
        \},
    
\end{aligned}$$ respectively. If $F$ is a face (resp. facet) of
$\nabla_G$, then $\vec{G}_F$ is the *face (resp. facet) subdigraph*
associated with $F$, and $G_F$ is the associated *face (resp. facet)
subgraph*.
:::

These concepts are defined and studied in recent works
[@Chen2019Directed; @DAliDelucchiMichalek2022Many]. The notational
conventions are chosen to mirror the connection between $\vec{G}$ and
$\nabla_{\vec{G}}$, and they interact in an expected way: for any
$X \subseteq \nabla_G$, we have $\nabla_{\vec{G}_X} = X$, and for any
subgraph $\vec{H} \le \vec{G}$, we have
$\vec{G}_{\nabla_{\vec{H}}} = \vec{H}$.

Note that points in $X$ are exactly the columns in the incidence matrix
of $\vec{G}_X$, which will be denoted by $Q(\vec{G}_X)$. The *truncated
incidence* matrix $\check{Q}(\vec{G}_X)$, obtained by removing the first
row of $Q(\vec{G}_X)$, corresponds to points in the projection
$\check{X} \subset \check{\nabla}_G$.

Face and facet subgraphs were studied in
Refs. [@DAliDelucchiMichalek2022Many; @GordonPetrov2017; @higashitani2019ARITHMETIC].
[4.1](#sec: facets review){reference-type="ref+Label"
reference="sec: facets review"} reviews recent results on the interplay
between facets and their corresponding subgraphs. Then, in
[\[sec: face subgraphs,sec: facet constraints,sec: cut-set parametrization,sec: properties\]](#sec: face subgraphs,sec: facet constraints,sec: cut-set parametrization,sec: properties){reference-type="ref+Label"
reference="sec: face subgraphs,sec: facet constraints,sec: cut-set parametrization,sec: properties"},
we develop the main results. In particular, we provide a complete
description of facet and face subgraphs as well as the equivalence
classes of facet subdigraphs. Implications of these results in algebraic
Kuramoto equations are highlighted in
[6](#sec: applications){reference-type="ref+Label"
reference="sec: applications"}.

## Recent results on facets and facet subgraphs {#sec: facets review}

Facets of $\nabla_G$ associated with even cycles are described from the
viewpoint of Ehrhart theory by Ohsugi and
Shibata [@OhsugiShibata2012Smooth] and from the viewpoint of Lipschitz
polytope by Gordon and Petrov [@GordonPetrov2017]. Explicit descriptions
of the facets of $\nabla_G$, when $G$ is a tree or cycle, are also
established [@ChenDavisMehta2018Counting]. Using Gröbner basis methods,
D'Alì, Delucchi, and Michałek [@DAliDelucchiMichalek2022Many] provided
more detailed descriptions for the faces of $\nabla_G$. In particular,
they showed that unimodular simplices contained in a facet
$F \in \mathcal{F}(\nabla_G)$ correspond to spanning trees of $G_F$
[@higashitani2019ARITHMETIC Corollary 3.3], and for a connected
bipartite graph $G$, the total number of facets is bounded by
$2^{|\mathcal{V}(G)|-1}$. This bound is exact if $G$ is a tree. Indeed,
in this special case, the numbers of faces of any dimension are offered
by Delucchi and Hoessly [@DelucchiHoessly]. In
[4.4](#sec: cut-set parametrization){reference-type="ref+Label"
reference="sec: cut-set parametrization"}, we provide graph-theoretic
refinements to these results.

For an even cycle $C_{2k}$, the number of faces of each dimension of
$\nabla_{C_{2k}}$, is also computed in [@DAliDelucchiMichalek2022Many
Proposition 30]. Moreover, if $G_1$ and $G_2$ are both connected
bipartite graphs, and $G$ is formed by identifying an edge of $G_1$ with
an edge of $G_2$, then it has been shown that
$| \mathcal{F}(\nabla_G) | = \frac{1}{2} f_1 f_2$ where
$f_1 = | \mathcal{F}(\nabla_{G_1}) |$ and
$f_2 = | \mathcal{F}(\nabla_{G_2}) |$ [@DAliDelucchiMichalek2022Many
Proposition 37]. This result can be applied recursively and extended to
graphs formed by joining multiple even cycles consecutively by an edge
[@DAliDelucchiMichalek2022Many Corollary 38]. We will extend these to
non-bipartite graphs.

## Characterizing face and facet subgraphs {#sec: face subgraphs}

Our goal is to clarify the structure of the map $F \mapsto G_F$ between
facets and faces of $\nabla_G$ and subgraphs of $G$. We first show that
connected face and facet subgraphs associated with faces and facets of
$\nabla_G$ are exactly the maximal bipartite subgraphs of induced
subgraphs of $G$
([3](#thm: facets are max bipartite){reference-type="ref+Label"
reference="thm: facets are max bipartite"}). In particular, the map
$F \mapsto G_F$ is a surjective map from $\mathcal{F}(\nabla_G)$ to the
set of maximal bipartite subgraphs of $G$.
[4](#cor: face subgraphs components){reference-type="ref+Label"
reference="cor: face subgraphs components"} generalizes this description
to components of face subgraphs.

::: {#thm: facets are max bipartite .theorem}
**Theorem 3**. *Let $H$ be a nontrivial connected subgraph of $G$.*

1.  *$H$ is a face subgraph of $G$ if and only if it is a maximal
    bipartite subgraph of $G[\mathcal{V}(H)]$.*

2.  *$H$ is a facet subgraph of $G$ if and only if it is a maximal
    bipartite subgraph of $G$.*
:::

Note that part (2) of this theorem can be derived from
[@HKMInterlacing Theorem 3.1],
which provides a general description of facet-defining labels for nodes in $G$.
Here, we provide an alternative derivation as a special case of part (1).

The connectedness condition in
[3](#thm: facets are max bipartite){reference-type="ref+Label"
reference="thm: facets are max bipartite"}
is important as disconnected face subgraphs may not be
maximal bipartite subgraph of their associated induced subgraphs.
<!-- For example,
[\[fig: nonmaximal face subgraph\]](#fig: nonmaximal face subgraph){reference-type="ref+Label"
reference="fig: nonmaximal face subgraph"} shows a face subgraph
associated with the 4-cycle $G = C_4$, which is not a maximal bipartite
subgraph of its associated induced subgraph $G[\{1,2,3,4\}] = G$. -->
Nonetheless, the argument still applies to
individual connected components of a face subgraph.
From this observation we can derive the following generalization.

::: {#cor: face subgraphs components .corollary}
**Corollary 4**. *Let $F$ be a face of $\nabla_G$.
Then each connected
component $H$ of $G_F$ is a maximal bipartite subgraph of
$G[\mathcal{V}(H)]$. 0◻*
:::

The proof of
[3](#thm: facets are max bipartite){reference-type="ref+Label"
reference="thm: facets are max bipartite"} also shows that for a maximal
bipartite subgraph, there is a canonical choice of edge orientations
that defines a facet subdigraph and hence a facet.

::: {#cor: canonical facet .corollary}
**Corollary 5**. *For a maximal bipartite subgraph $B \le G$ with the
partition $\mathcal{V}(B) = V_+ \cup V_-$, $$F =
        \{ \mathbf{e}_i - \mathbf{e}_j \mid \{i,j\} \in \mathcal{E}(B), i \in V_- \text{ and } j \in V_+ \}$$
is a facet of $\bar{\nabla}_G$, defined by the facet inner normal
$\boldsymbol{\alpha}= (\alpha_1,\dots,\alpha_N)^\top$ with $$\alpha_i = 
        \begin{cases}
            + 1/2 &\text{if } i \in V_+ \\
            - 1/2 &\text{if } i \in V_- \, ,
        \end{cases}$$ and the associated facet subdigraph is the digraph
with edges set $$\mathcal{E}(\vec{G}_F) =
        \{ (i,j) \mid \{i,j\} \in \mathcal{E}(B), \, i \in V_-, \, j \in V_+ \}.
        % \qed$$*
:::

The choice of the labels $V_+$ and $V_-$ is, of course, arbitrary:
permuting the two will result in the facet $-F$ defined by
$-\boldsymbol{\alpha}$ associated with the facet subdigraph
$\vec{B}^{-1}$. This partition defines a unique *cut-set*, which is the
set of edges that go across the partition. The construction in the above
corollary can be interpreted as a special type of cut-set.

::: {#rmk: canonical orientation .remark}
**Remark 6**. *For a maximal bipartite subgraph $B \le G$, the canonical
choice of edge orientations that produces $\vec{B}$ in
[5](#cor: canonical facet){reference-type="ref+Label"
reference="cor: canonical facet"} are exactly the edge orientation
assignments that ensure the cut-set (which includes all edges in $B$)
has a uniform direction across the cut $(V_+,V_-)$ of $B$, i.e., all
arcs of $\vec{B}$ are from $V_-$ to $V_+$. Such an assignment will be
referred to as a *canonical edge orientation* for $B$ as well as its
spanning subgraphs.*
:::

## Cyclic constraints on facet subdigraphs {#sec: facet constraints}

[3](#thm: facets are max bipartite){reference-type="ref+Label"
reference="thm: facets are max bipartite"} shows that the map
$F \mapsto G_F$ is a surjective map from $\mathcal{F}(\nabla_G)$ to the
set of maximal bipartite subgraphs of $G$. However, this map is not
injective. Indeed, as clarified in
[5](#cor: canonical facet){reference-type="ref+Label"
reference="cor: canonical facet"}, there is at least a pair of canonical
choices of facets $F$ and $-F$ associated with a given maximal bipartite
subgraph $B$ of $G$ which correspond to cut-sets having either of the
two uniform directions. In general, if we let
$V_+ \cup V_- = \mathcal{V}(B) = \mathcal{V}(G)$ be the partition in
$B$, then each facet $F \in \mathcal{F}(\nabla_G)$ such that $G_F = B$
can be described as an assignment of edge orientations for the cut-set
induced by the cut $(V_+,V_-)$ in $B$. However, not every such
assignment will produce a facet of $\nabla_G$. The constraints on such
assignments has been studied in [@GordonPetrov2017 Section 6] from the
viewpoint of metric spaces. In the following, we describe constraints on
the possible choices that will result in facets in terms of *oriented
cycles*: directed cycles in which each node is the head of exactly one
arc and the tail of exactly one arc.

::: {#thm: facets have half and half .theorem}
**Theorem 7**. *If $F$ is a facet of $\nabla_G$, then for any cycle
$\vec{O}$ in $G$ with an assigned orientation,
$$|\mathcal{E}(\vec{G}_F) \cap \mathcal{E}( \vec{O})| = 
            |\mathcal{E}(\vec{G}_F) \cap \mathcal{E}(\vec{O}^{-1})|.$$*
:::

Note that $G_F$ being a maximal bipartite subgraph already implies that
$|\mathcal{E}(G_F) \cap \mathcal{E}(O)|$ is even for any cycle $O$ in
$G$. This theorem states that $\mathcal{E}(\vec{G}_F)$ consists of two
subsets of arcs of equal size having opposite orientations. Later in
this section, we will show that, under an additional dimensional
condition, the converse is also true.

[7](#thm: facets have half and half){reference-type="ref+Label"
reference="thm: facets have half and half"} shows necessary conditions
for a subset $F$ of $\bar{\nabla}_G$ to be a facet: the intersection
between $\vec{G}_F$ and any cycle of $G$ itself must satisfy a balancing
condition, i.e., $|\mathcal{E}(\vec{G}_F) \cap \mathcal{E}( \vec{O})| = 
 |\mathcal{E}(\vec{G}_F) \cap \mathcal{E}(\vec{O}^{-1})|$ for any
oriented cycle $\vec{O}$. By itself, however, this condition is not
sufficient to define a facet. In the following, we will show that under
additional assumptions, this balancing condition is also a sufficient
condition.

::: {#thm: half and half make a facet .theorem}
**Theorem 8**. *Let $F$ be a codimension 1 subset of $\nabla_G$ such
that $\mathbf{0}\not\in \mathop{\mathrm{conv}}(F)$. Then $F$ is a facet
of $\nabla_G$ if, for any oriented cycle $\vec{O}$ in $\vec{G}$,
$$|\mathcal{E}(\vec{G}_F) \cap \mathcal{E}( \vec{O})| = 
        |\mathcal{E}(\vec{G}_F) \cap \mathcal{E}(\vec{O}^{-1})|.$$*
:::

## Parameterizing facets with cut-set vectors {#sec: cut-set parametrization}

Facets of $\nabla_G$ correspond to maximal bipartite subgraphs of $G$
through the map $F \mapsto G_F$. In general, multiple facets will be
mapped to the same facet subgraph.
[\[thm: facets have half and half,thm: half and half make a facet\]](#thm: facets have half and half,thm: half and half make a facet){reference-type="ref+Label"
reference="thm: facets have half and half,thm: half and half make a facet"}
gave necessary and sufficient conditions to identify facets in the fiber
over a given facet subgraph in terms of oriented cycles. In this
section, we refine these constraints into "independent" equations and
thereby provide a complete description of the equivalence class of
facets corresponding to the same facet subgraph. It will form the
foundation for counting and generating facets of $\nabla_G$.

The description makes use of the fundamental cycle vectors and cut-set
vectors. For a facet subgraph $G_F$ and a spanning tree $T$ of $G_F$,
let $\vec{T}$ be the corresponding subdigraph of $\vec{G}_F$. Since a
facet subgraph is necessarily connected and spanning, $T$ is also a
spanning tree of $G$. Any edge
$e \in \mathcal{E}(G) \setminus \mathcal{E}(T)$ induces a fundamental
cycle $O$ with respect to $T$. With an arbitrary choice of the
orientation, the oriented cycle $\vec{O}$ can be expressed as an
incidence vector $\mathbf{c}_{\vec{T}}(e) = (c_1,\dots,c_n)^\top$ with
respect to the ordered list of arcs in $\vec{T}$ so that $\vec{e}^{-1}$
corresponds to the point
$Q(\vec{T}) \mathbf{c}_{\vec{T}}(e) \in \check{\nabla}_G$. In other
words,
$\mathbf{c}_{\vec{T}}(e) \in \{ +1, 0, -1 \}^{|\mathcal{E}(\vec{T})|}$,
with each entry indicating whether the orientation of the corresponding
edge of $\vec{T}$ agrees or disagrees (or is not involved) with the
orientation of $\vec{O}$.

::: {#thm: facet parametrization .theorem}
**Theorem 9**. *For a maximal bipartite subgraph $B \le G$ with
partition $V_+ \cup V_- = \mathcal{V}(B)$, let $T$ be a spanning tree of
$B$ and $\vec{T}$ be the corresponding digraph with canonical
orientations (see
[6](#rmk: canonical orientation){reference-type="ref+Label"
reference="rmk: canonical orientation"}). There is a bijection between
the facets $\{ F \in \mathcal{F}(\check{\nabla}_G) \mid G_F = B \}$ and
the set of cut-set vectors $\mathbf{d} \in \{ \pm 1 \}^n$ of $T$ with
respect to the cut $(V_+,V_-)$ satisfying the system
$$\label{equ: cycle equation}
            \begin{cases}
                \mathbf{c}_{\vec{T}}(e)^\top \mathbf{d} &= \pm 1 
                \quad\text{for } e \in \mathcal{E}(B) \setminus \mathcal{E}(T) \\
                \mathbf{c}_{\vec{T}}(e)^\top \mathbf{d} &= \phantom{\pm} 0
                \quad\text{for } e \in \mathcal{E}(G) \setminus \mathcal{E}(B)
            \end{cases}
            % C(T) \, \mathbf{d} = \boldzero.$$*
:::

Note that the $\pm$ sign is the consequence of the inherent ambiguity in
the orientation assignment for a given fundamental cycle.

D'Alì, Delucchi, and Michałek showed that for a connected bipartite
graph $G$, $|\mathcal{F}(\nabla_G)|$ is bounded by $2^{N-1}$
[@DAliDelucchiMichalek2022Many Corollary 33]. It is then noted that this
upper bound no longer holds when the graph is not bipartite. From the
above proof, we can derive a refinement of this result: this upper bound
always holds for the number of facets in an equivalence class of facets
associated with a given facet subgraph.

::: {#cor: facet class bound .corollary}
**Corollary 10** (A refinement of Corollary 33 of
Ref. [@DAliDelucchiMichalek2022Many]). *For a facet
$F \in \mathcal{F}(\nabla_G)$,
$$| \, \{ F' \in \mathcal{F}(\nabla_G) \mid G_{F'} = G_F \} \, |
            \le 2^{N-1}.$$*
:::

With this, we can derive an upper bound for the total number of facets,
which is a generalization of [@DAliDelucchiMichalek2022Many Corollary
33] to all connected graphs.

::: {#cor: facet total bound .corollary}
**Corollary 11**. *If $\beta$ is the number of maximal bipartite
subgraphs of $G$, then $$| \, \mathcal{F}(\nabla_G) \, |
            \le \beta \cdot 2^{N-1}.$$*
:::

When $G$ is bipartite, the only facet subgraph (the unique maximal
bipartite subgraph) is $G$ itself, and the result reduces to the
previously established upper bound [@DAliDelucchiMichalek2022Many
Corollary 33].

## Properties of faces and their face subgraphs {#sec: properties}

We now establish connections between the geometric properties of faces
of $\nabla_G$ and the graph-theoretical properties of their
corresponding face subgraphs. Recall that the *cyclomatic number* of a
graph $G$ is the minimum number of edges that can be deleted from $G$
such that the resulting graph is acyclic.

::: {#thm: face properties .theorem}
**Theorem 12**. *For a proper face $F$ of $\nabla_G$,*

1.  *[]{#part: independent iff forest
    label="part: independent iff forest"} $F$ is independent if and only
    if $G_F$ is a forest;*

2.  *[]{#part: circuit iff chordless cycle
    label="part: circuit iff chordless cycle"} $F$ is a circuit if and
    only if $G_F$ is a chordless cycle;*

3.  *[]{#part: face dimension label="part: face dimension"}
    $\dim(F) = |\mathcal{V}(G_F)| - k - 1$ where $k$ is the number of
    connected components in $G_F$;*

4.  *[]{#part: face corank label="part: face corank"}
    $\mathop{\mathrm{corank}}(F)$ is the cyclomatic number of $G_F$.*
:::

If $G_F$ is spanning, its Betti numbers are the codimension and corank
of $F$. Some properties have been studied in different context. E.g.,
part
[\[part: face dimension\]](#part: face dimension){reference-type="ref"
reference="part: face dimension"} was established in [@GordonPetrov2017
Lemma 1].

::: remark
**Remark 13**. *[12](#thm: face properties){reference-type="ref+Label"
reference="thm: face properties"} highlights the connection through
which independent faces correspond to forests, dependent faces
correspond to cyclic graphs, and circuit faces correspond to chordless
cycles. The precise description emerges from the viewpoint of matroid
theory [@DelucchiHoessly].*
:::

Combining
[\[thm: facets are max bipartite,thm: face properties\]](#thm: facets are max bipartite,thm: face properties){reference-type="ref+Label"
reference="thm: facets are max bipartite,thm: face properties"} part
[\[part: independent iff forest\]](#part: independent iff forest){reference-type="ref"
reference="part: independent iff forest"}, we get a simple alternative
proof to the fact that $\nabla_G$ is simplicial (i.e., all of its facets
are simplices) if and only if all maximal bipartite subgraphs of $G$ are
trees, which was first established by Higashitani in
[@Higashitani2015Smooth2 Corollary 2.3] and has important consequences
in the study of facet systems of Kuramoto equations (see
[6](#sec: applications){reference-type="ref+Label"
reference="sec: applications"}) and the structure of certain metric
spaces [@GordonPetrov2017].

::: {#cor: simplicial iff no even cycle .corollary}
**Corollary 14** (). *Higashitani2015Smooth2 \] $\nabla_G$ is simplicial
if and only if $G$ has no even cycles. 0◻*
:::

# Case study: Joining two cycles along a shared edge {#sec:examples}

D'Alì, Delucchi, and Michałek showed that for a graph formed by joining
two bipartite graphs along an edge, the number of facets of the
associated symmetric edge polytope is $\frac{1}{2} f_1 f_2$ where $f_1$
and $f_2$ are the number facets in the symmetric edge polytopes
associated with the two bipartite subgraphs respectively
[@DAliDelucchiMichalek2022Many Proposition 37]. In the following we
explore the more general situation in which one of the subgraph is *not*
bipartite.

The running example $G$, from
[1](#fig: just house with garage){reference-type="ref+Label"
reference="fig: just house with garage"}, is a non-bipartite graph
formed by joining a 4-cycle and a 5-cycle along a single shared edge. As
we will calculate, the facet count described above
([@DAliDelucchiMichalek2022Many Proposition 37]) no longer applies, yet
[9](#thm: facet parametrization){reference-type="ref+Label"
reference="thm: facet parametrization"} provides a concrete recipe for
calculating the number of facets and describing their combinatorial
structures.

[7](#fig: house with garage facet graphs){reference-type="ref+Label"
reference="fig: house with garage facet graphs"} shows the seven maximal
bipartite subgraphs of $G$. As established in
[3](#thm: facets are max bipartite){reference-type="ref+Label"
reference="thm: facets are max bipartite"}, they correspond to the five
equivalence classes of facets in $\mathcal{F}(\nabla_G)$. Among these
subgraphs, three of them are trees
([5](#fig: house with garage corank-0 graphs){reference-type="ref+Label"
reference="fig: house with garage corank-0 graphs"}), and, according to
[12](#thm: face properties){reference-type="ref+Label"
reference="thm: face properties"} part
[\[part: independent iff forest\]](#part: independent iff forest){reference-type="ref"
reference="part: independent iff forest"}, they correspond to corank-0
(simplicial) facets. The other four each contain a unique 4-cycle
([6](#fig: house with garage corank-1 graphs){reference-type="ref+Label"
reference="fig: house with garage corank-1 graphs"}), and, according to
[12](#thm: face properties){reference-type="ref+Label"
reference="thm: face properties"} part
[\[part: face corank\]](#part: face corank){reference-type="ref"
reference="part: face corank"}, they correspond to corank-1 facets.

<figure id="fig: house with garage facet graphs">
<figure id="fig: house with garage corank-0 graphs">

<figcaption>Corank-0 facet subgraphs of <span
class="math inline">\(G\)</span></figcaption>
</figure>
<figure id="fig: house with garage corank-1 graphs">

<figcaption>Corank-1 facet subgraphs of <span
class="math inline">\(G\)</span></figcaption>
</figure>
<figcaption>Facet subgraphs (maximal bipartite subgraphs) of <span
class="math inline">\(G\)</span></figcaption>
</figure>

As shown in
[4](#fig: house with garage example){reference-type="ref+Label"
reference="fig: house with garage example"}, we pick a corank-0 facet
subgraph, a spanning tree of this subgraph, and an assignment of edge
orientations. Up to a recording of the edges, the two fundamental cycles
can be expressed as vectors $[+1,-1,+1,-1,+1,-1]$ and
$[0,0,+1,-1,+1,-1]$. Therefore the defining equation
[\[equ: cycle equation\]](#equ: cycle equation){reference-type="eqref"
reference="equ: cycle equation"} in
[9](#thm: facet parametrization){reference-type="ref+Label"
reference="thm: facet parametrization"} for the parametrization of the
facets in this equivalence class is $$\begin{bmatrix}
       +1 & -1 & +1 & -1 & +1 & -1 \\
        0 &  0 & +1 & -1 & +1 & -1     
    \end{bmatrix}
    \mathbf{d}
    =
    \begin{bmatrix}
       0 \\ 0
    \end{bmatrix}$$ in the unknowns
$\mathbf{d} = (d_1,\dots,d_6)^\top \in \{ \pm 1 \}^6$. This equation is
equivalent to $$\begin{bmatrix}
       +1 & -1 &  0 &  0 &  0 &  0 \\
        0 &  0 & +1 & -1 & +1 & -1     
    \end{bmatrix}
    \mathbf{d}
    =
    \begin{bmatrix}
       0 \\ 0
    \end{bmatrix}.$$ From this we can see that $(d_1,d_2)$ and
$(d_3,d_4,d_5)$ can be described independently, and there are two
possible choices for $(d_1,d_2)$, namely $(+1,+1)$ and $(-1,-1)$.
Similarly, there are six possible choices for $(d_3,d_4,d_5,d_6)$:
$$\begin{aligned}
    &(+1,+1,+1,+1) &
    &(+1,+1,-1,-1) &
    &(+1,-1,-1,+1) \\
    &(-1,-1,+1,+1) &
    &(-1,-1,-1,-1) &
    &(-1,+1,+1,-1) .
\end{aligned}$$ Altogether, there are 12 possible choice for the vector
$\mathbf{d} \in \{ \pm 1 \}^6$ for the equation
[\[equ: cycle equation\]](#equ: cycle equation){reference-type="eqref"
reference="equ: cycle equation"}. These produce 12 distinct facets in
the equivalence class of facets corresponding to a corank-0 maximal
bipartite subgraph of $G$ shown in
[5](#fig: house with garage corank-0 graphs){reference-type="ref+Label"
reference="fig: house with garage corank-0 graphs"}.

::: wrapfigure
r0.24
:::

Similarly, we pick a facet subgraph $G_F$ of corank 1 in
[6](#fig: house with garage corank-1 graphs){reference-type="ref+Label"
reference="fig: house with garage corank-1 graphs"}, a spanning tree $T$
of this subgraph, and a canonical assignment of edge orientations
$\vec{T}$ shown in
[\[fig: house with garage corank-1 example\]](#fig: house with garage corank-1 example){reference-type="ref+Label"
reference="fig: house with garage corank-1 example"}, where the dotted
edge is in $\vec{G}_F$ but not in $\vec{T}$. With respect to this
choice, and up to a reordering of the edges in $\vec{T}$, the two
fundamental cycles can be expressed as vectors $[-1,-1,+1,0,0,0]$ and
$[0,0,+1,-1,+1,-1]$. Therefore the fundamental cycle equations are
$$\begin{bmatrix}
       -1 & -1 & +1 &  0 &  0 &  0 \\
        0 &  0 & +1 & -1 & +1 & -1
    \end{bmatrix}
    \mathbf{d}
    =
    \begin{bmatrix}
       \pm 1 \\
       0
    \end{bmatrix}.$$ Through direct calculations we can see there are 18
solutions for $\mathbf{d} \in \{ \pm 1 \}^6$ corresponding to the 18
facets in the equivalence class.

The same argument can be applied to each of the four corank-1 facet
subgraphs in
[6](#fig: house with garage corank-1 graphs){reference-type="ref+Label"
reference="fig: house with garage corank-1 graphs"}. Therefore there are
72 corank-1 facets in $\mathcal{F}(\nabla_G)$. All together there are
$36 + 72 = 108$ facets in $\mathcal{F}(\nabla_G)$. Among them, 36 facets
are simplicial and the remaining 72 facets are (affinely) dependent and
of corank 1.

The calculation shown in this concrete example can be easily generalized
to graphs formed by joining an even cycle and an odd cycle along a
shared edge. The counting argument involved makes use of the following
elementary formulas from combinatorics.

::: {#lem: integer solutions 1 .lemma}
**Lemma 15**. *For a positive integer $n$, there are exactly
$\binom{2n}{n}$ distinct choices of vectors
$\mathbf{d} \in \{ \pm 1 \}^{2n}$ that satisfy the equation
$$\begin{tikzpicture}[ decoration=brace, baseline=(current  bounding  box.center) ]
            \matrix (m) [
                matrix of math nodes,
                left delimiter=[,
                right delimiter={]}
                ] {
                   +1 & \cdots & +1 & -1 & \cdots & -1 \\
                };
            \draw[decorate,transform canvas={yshift=0.5em},thick] 
                (m-1-1.north) -- node[above=2pt] {$n$} (m-1-3.north);
            \draw[decorate,transform canvas={yshift=0.5em},thick] 
                (m-1-4.north) -- node[above=2pt] {$n$}     (m-1-6.north);
            \node [right = 1.5ex of m] (d) 
                {$\mathbf{d} = 0.$};
        \end{tikzpicture}
        % \qed$$*
:::

::: {#lem: integer solutions 2 .lemma}
**Lemma 16**. *For a positive integer $n$, there are exactly
$\binom{2n}{n-1}$ distinct choices of vectors
$\mathbf{d} \in \{ \pm 1 \}^{2n}$ that satisfy the equation
$$\begin{tikzpicture}[ decoration=brace, baseline=(current  bounding  box.center) ]
            \matrix (m) [
                matrix of math nodes,
                left delimiter=[,
                right delimiter={]}
                ] {
                   +1 & \cdots & +1 & -1 & \cdots & -1 \\
                };
            \draw[decorate,transform canvas={yshift=0.5em},thick] 
                (m-1-1.north) -- node[above=2pt] {$n$} (m-1-3.north);
            \draw[decorate,transform canvas={yshift=0.5em},thick] 
                (m-1-4.north) -- node[above=2pt] {$n$}     (m-1-6.north);
            \node [right = 1.5ex of m] (d) 
                {$\mathbf{d} = 2.$};
        \end{tikzpicture}$$*
:::


::: proposition
**Proposition 17**. *Let $G$ be the graph formed by joining two cycles
of size $2m_1$ and $2m_2+1$ respectively along a shared edge. The total
number of facets of $\nabla_G$ is
$$(2m_1-1) \binom{2m_1 - 2}{m_1 - 1} \binom{2m_2}{m_2}   + 
        (2m_2)   \binom{2m_1 - 1}{m_1}     \binom{2m_2}{m_2},
        % \left[
        %     (2m_1-1) \binom{2m_1 - 2}{m_1 - 1} + 
        %     (2m_2)   \binom{2m_1 - 1}{m_1}
        % \right]
        % \binom{2m_2}{m_2}$$ and the two summands are the number of
corank-0 (simplicial) facets and corank-1 facets of $\nabla_G$,
respectively.*
:::

We conclude with an alternative formulation for the facet count provided
by the proposition above, similar to the result established in
[@DAliDelucchiMichalek2022Many Proposition 37]. Ohsugi and Shibata
showed that for an even cycle $C_{2k}$, the number of facets of
$\nabla_{C_{2k}}$ is $\binom{2k}{k}$ [@OhsugiShibata2012Smooth]. Using
this formula, we can relate the facet count presented above and the
facet counts for symmetric edge polytopes associated with even cycles.

::: corollary
**Corollary 18**. *Let $G$ be the graph formed by joining two cycles of
size $2m_1$ and $2m_2 + 1$ respectively along a shared edge. Then
$$| \mathcal{F}(\nabla_G) | =
        \frac{m_1 + 2 m_2}{2}
        \,
        f_{C_{2m_1}} f_{C_{2m_2}},$$ where $f_{C_{2m_1}}$ and
$f_{C_{2m_2}}$ are the number of facets $\nabla_{C_{2m_1}}$ and
$\nabla_{C_{2m_1}}$ have respectively.*
:::
