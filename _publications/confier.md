---
title: "Low-cost, high-speed parallel FIR filters for RFSoC front-ends enabled by CλaSH"
collection: publications
category: conferences
excerpt: 'An exploration of a family of filtering circuits, challenging to express in many hardware description languages, using a Haskell-based toolchain.'
date: 2021-10-01
permalink: /publications/conifer
venue: 'IEEE International Midwest Symposium on Circuits and Systems'
slidesurl: '/files/conifer_slides.pdf'
paperurl: 'https://pureportal.strath.ac.uk/en/publications/low-cost-high-speed-parallel-fir-filters-for-rfsoc-front-ends-ena'
citation: 'Craig Ramsay, Louise Crockett, Bob Stewart'
---

We present a new low-cost, high-speed parallel FIR filter generator targeting the Xilinx Radio Frequency System on Chip (RFSoC) and direct RF sampling applications. We compose two existing approaches in a novel hierarchy: efficient parallelism with Fast FIR Algorithm (FFA) structures, and efficient multiplierless FIR implementations with Hcub. The resource usage advantages (in both area and type) are compared with similar output from the traditional architecture, exemplified by vendor tools, as well as the Hcub-based filters without the FFA optimisation. Although these techniques are well studied individually in the literature, they have not enjoyed mainstream use as their structural complexity proves awkward to capture with traditional Hardware Description Languages (HDLs). This work continues a discussion of the use of functional programming techniques in hardware description, highlighting the benefits of having easily composable circuit generators.

Supporting poster available [here](/files/conifer_poster.pdf).
