---
title: "From Haskell to a New Structured Combinator Processor"
collection: publications
category: conferences
excerpt: 'A new hardware architecture and compiler back-end for a structured combinator-based graph reduction machine'
date: 2025-01-01
venue: Trends in Functional Programming (accepted; awaiting publication)'
paperurl: 'https://trendsfp.github.io/'
citation: 'Yukang Xie, Craig Ramsay, Robert Stewart, Hans-Wolfgang Loidl'
---

This paper presents KappaMutor, a new graph reduction processor, along with its
Haskell compiler. KappaMutor is based on structured combinators, a recently
proposed combinator encoding, which is more flexible and efficient than
fine-grained SKI combinators. The processor exploits parallel memories to enable
single-cycle reduction of structured combinators while maintaining good
compactness, utilising less than 1% of the logical resources on a modern FPGA.
Its Haskell compiler implements novel code generation strategies designed to
minimise combinator usage and achieve full laziness — the first such
implementation for structured combinators, to the best of our knowledge. Based
on our measurements, structured combinators can reduce runtimes by 9% to 58%,
compared to running equivalent SKI combinator programs on KappaMutor.
