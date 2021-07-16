---
path: "/internet-speed"
date: "2021-05-17T10:12:33.962Z"
title: "This is your internet speed"
---

This will be quick! Well, I guess that depends on your connection.

While its currently only an experimental feature, there is actually a handy way to check your internet connection speed directly in the browser. No, you don't need to navigate to a 'speed-test' site.

At the moment, both Chrome and Edge browsers have enabled this capability by default but, for now, Firefox only works if you manually enable (as of FF 90).

So if you are on Chrome or Edge, open the console and type the following:
`navigator.connection.downlink`

For example, in my current location, I was able to see that my internet downlink speed currently sits at 1.6Mbps:

<div style="text-align:center">
  <img src="static/images/downlink.png" alt="downlink" width="500px">
</div>
