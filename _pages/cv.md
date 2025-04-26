---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* PhD in Electronic & Electrical Engineering, University of Strathclyde, 2024
  + Despite the EEE banner, this was very much an endeavour in computer science
    research. It culminated in a new [functional programming language for
    hardware
    description](https://pureportal.strath.ac.uk/en/studentTheses/toatie-functional-hardware-description-with-dependent-types),
    including dependent types and staging at the type level.
* BEng (Hons) Computer and Electronic Systems, University of Strathclyde, 2017

Work experience
======

* _2022--2025_ Dependable Systems Group --- Herriot-Watt University
  * Research associate on the [HAFLANG](https://haflang.github.io/) project.
    Designing and evaluating a [custom processor](/publications/ifl_23) for lazy
    functional languages, aiming to improve run-times and energy efficiency.
    Topics have ranged from language design, compiler construction, [garbage
    collection](/publications/cloaca), hardware description, verification, and
    parallel systems.
    
  * Impacts so far include [3 conference papers](/publications), over [8
    talks](/talks), and [a
    workshop](https://haflang.github.io/workshops/hafdal24.html) to help
    consolidate international interest in hardware-accelerated functional
    programming.

* _2019_ AMD/Xilinx Research Labs --- Boulder, Colorado
  * As part of the research labs, I developed support for the flagship [RFSoC
    platform](https://www.amd.com/en/products/adaptive-socs-and-fpgas/soc/zynq-ultrascale-plus-rfsoc.html)
    in the, user and education focused, [PYNQ](http://www.pynq.io/) project.
    This was generally a success, eliciting at least [21 academic
    citations](https://ieeexplore.ieee.org/document/9139483/citations#citations)
    and adoption in projects including work at
    [Fermilab](https://ieeexplore.ieee.org/document/9336352)
  * I was also an important part of writing and delivering a slew of workshops
    targeted at audiences ranging from AMD/Xilinx industry partners to 13 year
    old students.

* _2016--2017_ Fox-IT --- Delft, The Netherlands
  * Performing a research project in a high assurance setting, investigating EM leakages from FPGA and SoC devices.
  * I assessed how information (AES encryption keys, in particular) can be retrieved using measurements with radio hardware, even at significant distance.
  * Established relationships with relevant companies, who continue to work with
    Fox-IT. Published a [white-paper](/files/tempest_whitepaper.pdf) and gave a
    [conference presentation](https://www.youtube.com/watch?v=-oIUKunL0-s) on
    the first public demonstration of such analysis.
    
* _2016--2018_ DSP Enabled Communications Group --- University of Strathclyde
  * Focused mostly on writing a substantial part of the [Exploring Zynq MPSoC
    book](https://www.zynq-mpsoc-book.com/), sponsored by AMD/Xilinx.
    
  * This gained at least [53 academic
    citations](https://scholar.google.com/scholar?cites=13542466655873698020&as_sdt=5,39&sciodt=7,39&hl=nl),
    and
  * Is already in use as course material for more than 5 external university
    courses, including [Rice University](https://www.clear.rice.edu/elec522/),
    [Trinity College
    Dublin](https://www.tcd.ie/media/tcd/engineering/pdfs/current-students/EEU44C01---Integrated-Systems-Design-24.25.pdf),
    [Linköping
    University](file:///home/craig/Downloads/Course%20literature%20TSEA85.pdf).

* _2013--2014_ Cogent Focus --- Perth, Scotland
  * Responsible for engineering Microsoft based web applications from design
    through to maintenance. Working independently, directly with small-business
    clients.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Co-chair, co-organiser, and co-host for a new workshop series,
  [HAFDAL](https://haflang.github.io/workshops/hafdal24.html), with Rob Stewart.
  This re-ignites community spirit around hardware acceleration for functional
  and declarative programming languages. We enjoyed hosting ~30 in-person
  attendees and 9 invited talks (whose
  [recordings](https://www.youtube.com/watch?v=476dsOEJD0g&list=PL7l6O156PEicRgKO98QGvbs0WpTsCQIon)
  have accumulated around 2700 views)
  
* I have reviewed papers for the [IEEE Access](https://ieeeaccess.ieee.org/)
  journal on topics bridging logic programming, artificial intelligence, and
  parallel computing.

* I've had the pleasure of co-supervising a PhD student, [Yukang
  Xie](https://bathtub-01.github.io/), who has had a very successful first 6
  months, including a paper accepted to [TFP
  2025](https://trendsfp.github.io/2025/).
