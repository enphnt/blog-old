---
path: "/seo-gatsby"
date: "2023-02-02T12:12:33.962Z"
title: "Setting up SEO for a Gatsby blog"
---

First off, I'm using such an old of a version of `gatsy` that I can't currently leverage gatsby's seo features. So I'll need to upgrade to minimum version of `gatsby@4.19.0`.

I'll try just setting package.json version to 2.0.0:
```
"dependencies": {
  "gatsby": "^2.0.0",
}
```

After running `npm i`, I needed to update all the peers of gatsby to a higher version too. After doing that, `react` and `react-dom` packages were added because in v1 these were bundled inside gatsby but no longer are.

I was able to finish the install of new packages and render the site successfully using my package script: `npm run develop`

However, now I see massive layout issues and I will move on to restructuring my react components so that they no longer use the `layout.js` as a root component.

after the following steps, which are thankfully documented in the  <a target="_blank" href="https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/">migration guide</a>, I'm up and running again. HAd to do the following steps.