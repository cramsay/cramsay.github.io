---
title: "Heron: Modern Hardware Graph Reduction"
collection: publications
category: conferences
excerpt: 'The first HAFLANG paper, discussing our single-core graph reduction processor.'
date: 2024-01-01
permalink: publications/ifl_23
venue: 'Symposium on Implementation and Application of Functional Languages'
paperurl: 'https://researchportal.hw.ac.uk/en/publications/heron-modern-hardware-graph-reduction'
citation: 'Craig Ramsay, Robert Stewart'
---

This paper presents Heron, an FPGA-based special purpose processor core for pure, non-strict functional languages. We co-design its language semantics and parametrised design, gaining a high reductions-per-cycle performance metric. The Heron core is energy efficient, performing up to six times as many reductions per cycle as GHC. Despite its infancy, a 193 MHz Heron core outperforms wall-clock time for a mid-range Intel i3 1.9 GHz mobile CPU for 5 of these benchmarks and is competitive with an Alder Lake Intel i7 CPU. Its performance-per-Watt shows that the Heron core is a compelling solution for embedded applications. The simplicity of Heron's design results in just 2% FPGA resource usage, paving the way for future single-chip parallelism, further improving absolute performance.
