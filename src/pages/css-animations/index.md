---
path: "/css-animations"
date: "2021-07-16T17:12:33.962Z"
title: "CSS Animations can be mesmerizing"
---

Maybe you already are somewhat aware, maybe not. Alas, CSS can be pretty amazing at producing interesting eye candy.

I wanted to demonstrate one example here:

<div class="css-animation-container">
  <div class="css-animation"></div>
</div>

"What's going on here?", you ask. A few properties are to be noted:
- use a main class on the element which has a fixed height and width
- define some `@keyframes` to define the 'steps' of the animation
- the `@keyframes` have specific colors and border radii that are associated with each frame
- set the duration of the entire animation using `animation-duration` css property
- set the `animation-iteration-count` to `infinite` to make the mesmerizing effect last forever

This is just a super basic example and things can get even more weird. I'll leave it here for now but I think this can be applied to all sorts of things like animating notifications, button clicks (like in Material UI), or even use this when images are lazy loaded when scrolled into view.

<p class="slide-in-text">
  Until next time...
</p>