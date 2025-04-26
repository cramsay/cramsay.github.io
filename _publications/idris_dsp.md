---
title: "On Applications of Dependent Types to Parameterised Digital Signal Processing Circuits"
collection: publications
category: conferences
excerpt: 'We advocate for the use of dependently typed languages in hardware description, leaving an implementation later (See [totaie](/publication/toatie))'
date: 2021-01-01
venue: 'IEEE International Midwest Symposium on Circuits and Systems, MWSCAS 2021'
permalink: /publications/mwscas_21
slidesurl: '/files/mwscas_slides.pdf'
paperurl: 'https://pureportal.strath.ac.uk/en/publications/on-applications-of-dependent-types-to-parameterised-digital-signa'
citation: 'Craig Ramsay, Louise Crockett, Bob Stewart'
---

We explore the use of dependent types to address the disparity between the theory and the practical hardware description of DSP circuits. After discussing an approach to modeling synchronous circuit behaviour in Idris (a pure functional language with dependent types), two DSP case studies are introduced — an FIR filter with optimal wordlengths and a CIC decimator with register pruning. Both of these scenarios prove difficult to describe in a parameterised fashion using traditional HDLs and, as such, many implementations rely on ad hoc circuit generators which are challenging to test and evaluate. This work demonstrates that such circuits are readily described in an environment with dependent types. Dependent types can also encode various contracts between the IP designer and its user. These contracts are automatically verified by the Idris type checker before compilation, precluding many common mistakes in IP development and evaluation.
