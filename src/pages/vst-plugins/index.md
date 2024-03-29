---
path: "/vst-plugins"
date: "2021-06-05T10:12:33.962Z"
title: "How to DIY VST Plugins?"
---

A Virtual Studio Technology (VST) is just an application. These applications are typically capable of either producing a sound, sometimes called 'instrument' VSTs, or processing some sound source, which are typically called 'effects' VSTs. The lines are blurry and often a single VST will do both.

While it may sometimes be useful to run a VST in standalone mode without a Digital Audio Workstation (DAW), it's not very useful on its own. Typically, VST software is opened inside of a DAW so that it can be combined with other VSTs, recorded, and otherwise integrated with features of the DAW.

I use Logic for my own music/noise creations and have grown familiar with a range of VST instruments and plugins. Now, I'm curious about how these things are actually built.

In my short research stint, I learned that most VSTs are built in C++. As mostly a js/frontend dev, this seemed like a major hurtle for me personally. But then I stumbled upon Faust and Juce.

# Faust
According to the course available from Stanford, via Kadenze, Faust is a programming language that "provides a generic way to implement signal processing algorithms for sound synthesis and processing towards professional audio applications. Thanks to its architecture system, Faust can be used to generate a wide range of ready-to-use elements such as audio plug-ins (e.g., VST, AU, etc.), externals for other computer music environments (e.g., ChucK, Max/MSP, PD, CSOUND, SuperCollider, etc.), standalone applications, mobile apps, web apps, etc. Additionally, it is a great tool to make DSP engines embeddable in larger projects."

<div style="text-align: center">
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" xml:space="preserve" width="164.333328" height="112.414666" viewBox="0 0 64.333327 12.414666"><metadata id="metadata8"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs id="defs6"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath18"><path d="M 0,93.507 H 93.507 V 0 H 0 Z" id="path16"/></clipPath></defs>
<g style="fill:#aaa" id="g10" transform="matrix(1.3333333,0,0,-1.3333333,-31.440266,68.495732)"><g id="g12" style="fill:#aaa"><g id="g14" clip-path="url(#clipPath18)" style="fill:#aaa"><g id="g20" transform="translate(69.0172,49.3868)" style="fill:#aaa"><path d="M 0,0 V -7.026 H -2.017 V 0 H -4.843 V 1.747 H 2.813 V 0 Z m -8.276,-5.615 c -0.176,-0.333 -0.415,-0.62 -0.718,-0.863 -0.302,-0.243 -0.658,-0.433 -1.067,-0.569 -0.409,-0.136 -0.849,-0.204 -1.321,-0.204 -0.435,0 -0.833,0.041 -1.193,0.124 -0.361,0.082 -0.685,0.191 -0.973,0.327 -0.289,0.135 -0.548,0.29 -0.779,0.463 -0.232,0.174 -0.431,0.352 -0.598,0.534 l 1.278,1.384 c 0.115,-0.125 0.248,-0.252 0.4,-0.381 0.152,-0.129 0.321,-0.247 0.509,-0.352 0.187,-0.106 0.392,-0.191 0.614,-0.255 0.221,-0.065 0.46,-0.097 0.716,-0.097 0.15,0 0.3,0.021 0.447,0.064 0.149,0.043 0.285,0.107 0.41,0.191 0.124,0.084 0.223,0.185 0.296,0.303 0.073,0.119 0.11,0.253 0.11,0.404 0,0.327 -0.158,0.581 -0.474,0.762 -0.316,0.181 -0.817,0.36 -1.504,0.536 -0.333,0.078 -0.64,0.192 -0.922,0.342 -0.283,0.151 -0.526,0.332 -0.729,0.543 -0.204,0.211 -0.361,0.453 -0.474,0.726 -0.112,0.274 -0.169,0.578 -0.169,0.914 0,0.368 0.065,0.714 0.195,1.038 0.13,0.325 0.328,0.611 0.595,0.859 0.266,0.247 0.597,0.443 0.993,0.589 0.397,0.145 0.865,0.218 1.406,0.218 0.446,0 0.842,-0.046 1.187,-0.137 0.344,-0.092 0.637,-0.201 0.877,-0.329 0.24,-0.127 0.437,-0.258 0.591,-0.391 0.155,-0.134 0.271,-0.239 0.348,-0.316 l -1.143,-1.266 c -0.099,0.078 -0.212,0.162 -0.338,0.255 -0.127,0.093 -0.268,0.179 -0.425,0.258 -0.156,0.08 -0.33,0.147 -0.521,0.201 -0.19,0.053 -0.391,0.08 -0.601,0.08 -0.142,0 -0.28,-0.022 -0.416,-0.067 -0.135,-0.046 -0.258,-0.105 -0.367,-0.178 -0.11,-0.073 -0.198,-0.161 -0.264,-0.265 -0.066,-0.103 -0.1,-0.211 -0.1,-0.323 0,-0.301 0.159,-0.544 0.477,-0.73 0.318,-0.185 0.753,-0.34 1.307,-0.465 0.327,-0.077 0.645,-0.184 0.955,-0.319 0.311,-0.136 0.588,-0.314 0.832,-0.536 0.244,-0.222 0.441,-0.493 0.591,-0.814 0.15,-0.321 0.225,-0.711 0.225,-1.172 0,-0.392 -0.088,-0.754 -0.263,-1.086 m -10.307,1.854 c 0,-0.527 -0.086,-1.01 -0.257,-1.449 -0.172,-0.439 -0.418,-0.813 -0.74,-1.124 -0.321,-0.31 -0.71,-0.553 -1.167,-0.729 -0.456,-0.175 -0.965,-0.263 -1.526,-0.263 -0.56,0 -1.067,0.086 -1.522,0.257 -0.455,0.171 -0.841,0.414 -1.159,0.729 -0.318,0.315 -0.563,0.691 -0.734,1.13 -0.171,0.439 -0.256,0.922 -0.256,1.449 v 5.446 h 1.985 v -5.271 c 0,-0.295 0.029,-0.56 0.086,-0.795 0.058,-0.235 0.153,-0.437 0.284,-0.606 0.131,-0.169 0.304,-0.301 0.521,-0.394 0.217,-0.094 0.481,-0.14 0.795,-0.14 0.309,0 0.57,0.046 0.785,0.14 0.214,0.093 0.388,0.225 0.521,0.394 0.133,0.169 0.227,0.371 0.283,0.606 0.056,0.235 0.084,0.5 0.084,0.795 v 5.271 h 2.017 z M -30.68,-7.026 c -0.596,0 -1.078,0.482 -1.078,1.077 0,0.595 0.482,1.078 1.078,1.078 0.595,0 1.077,-0.483 1.077,-1.078 0,-0.595 -0.482,-1.077 -1.077,-1.077 m -1.702,3.551 -1.067,3.314 -1.092,-3.314 -0.054,-0.181 h -1.899 l 2.018,5.403 h 2.196 l 1.977,-5.4 -2.023,-0.005 z m -3.708,-3.551 c -0.595,0 -1.078,0.482 -1.078,1.077 0,0.595 0.483,1.078 1.078,1.078 0.595,0 1.078,-0.483 1.078,-1.078 0,-0.595 -0.483,-1.077 -1.078,-1.077 M -39.541,0 h -3.912 v -1.991 h 2.974 v -1.696 h -2.974 v -3.339 h -1.984 v 8.773 h 5.896 z" style="fill:#aaa;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path22"/></g></g></g></g>
</svg>
</div>

I think I will actually take the weekly instructor-led course. The course is hosted here currently:
<div style="text-align:center">
  <a target="_blank" href="https://www.kadenze.com/courses/real-time-audio-signal-processing-in-faust/info">
    <img src="images/stanford.png" alt="stanford-faust-course" width="300px">
  </a>
</div>

# JUCE
JUCE is another tool that's recently gained popularity. It's a somewhat open-source, cross-platform framework in C++, used to develop desktop and mobile applications. JUCE is used in particular for its GUI and plug-ins libraries.

A course from freeCodeCamp (they sometimes produce quality content!) is available right now as a youtube video. It's actually an introduction to modern C++ programming more generally too.

[![youtube - JUCE / C++](https://img.youtube.com/vi/i_Iq4_Kd7Rc/0.jpg)](https://www.youtube.com/watch?v=i_Iq4_Kd7Rc)
