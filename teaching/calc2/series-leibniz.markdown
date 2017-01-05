---
layout: default
title: Leibniz series
---

# Leibniz series

The Leibniz series (named after Gottfried Leibniz, obviously)
is very similar to the alternating harmonic series
except the denominators of the terms run through only the odd integers.
We write it as $$\sum_{n=1}^{\infty} (-1)^{n-1} \frac{c}{2n-1}$$
where the power of $$(-1)$$ is used to express the alternating sign
and $$c$$ is a fixed positive integer usually set to 1 or 4.
The demo below shows how the partial sum $$S$$ of this series with
$$c=4$$ grows as $$n \to \infty$$.

<div id="sketch-holder">
  <!-- Our sketch will go here! -->
</div>

Can you tell if it converges to a number?
And what will that number be?


<script language="javascript" type="text/javascript" src="/js/p5.min.js"></script>
<script language="javascript" type="text/javascript" src="/js/series-leibniz.js"></script>
