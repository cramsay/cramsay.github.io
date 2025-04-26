---
title: "Cloaca: A Concurrent Hardware Garbage Collector for Non-strict Functional"
collection: publications
category: conferences
excerpt: 'A simple yet effective hardware garbage collector from the HAFLANG project.'
date: 2024-02-01
permalink: publications/cloaca
venue: Haskell Symposium'
slidesurl: '/files/cloaca_slides.pdf'
paperurl: 'https://researchportal.hw.ac.uk/en/publications/cloaca-a-concurrent-hardware-garbage-collector-for-non-strict-fun'
citation: 'Craig Ramsay, Robert Stewart'
---

Most functional language runtime systems context switch between executing user code and a non-concurrent garbage collector (GC), exposing GC latency to overall wall-clock time. Recent concurrent software-based GCs reduce these latencies, but wall-clock times are instead increased due to their synchronisation and write barrier overheads, by as much as 21%. This GC overhead is exacerbated further for pure non-strict languages like Haskell, due to the abundance of allocations for storing immutable data structures and closures. This paper presents Cloaca, an FPGA-based hardware implementation of a concurrent, hybrid GC for a pure non-strict functional language. It combines mark-and-sweep tracing and one-bit reference counting. It traces live heap data using hardware-level synchronisation and write barriers, without damaging graph reduction performance. To ensure the correctness of Cloaca, three invariants of its Haskell-based implementation are verified with property-based testing. Despite GHC running on an Intel i7 CPU operating at a x25 higher clock frequency than Cloaca; Cloaca takes, on average, 4.1% of GHC's GC wall-clock time across 14 of 15 benchmarks.
