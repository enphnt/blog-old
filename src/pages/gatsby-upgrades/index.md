---
path: "/gatsby-upgrades"
date: "2023-02-02T12:12:33.962Z"
title: "Uprading this very Gatsby blog (v1 => v4)"
---

First off, I'm using such an old of a version of `gatsy` that I can't currently leverage gatsby's newest features. I'll need to upgrade to minimum version of `gatsby@4.19.0` in order to use SEO tooling.

This post is just my notes from performing the upgrade. I'm dog sitting this weekend so will be doing this with my partner, Pickle, today. Pickle is an extremely needy dachshund. She needs pats and stimulation constantly much like this blog needs posts and upgrades today.

### v1 to v2 upgrade
I'll try just setting package.json version to 2.0.0:
```
"dependencies": {
  "gatsby": "^2.0.0",
}
```

After running `npm i`, I needed to update all the peers of gatsby to a higher version too. After doing that, `react` and `react-dom` packages were added because in v1 these were bundled inside gatsby but no longer are.

I was able to finish the install of new packages and render the site successfully using my package script: `npm run develop`

However, now I see massive layout issues and I will move on to restructuring my react components so that they no longer use the `layout.js` as a root component.

After the following steps, which are thankfully documented in the  <a target="_blank" href="https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/">migration guide</a>, I'm up and running again. Had to do the following steps.

  1. Convert layout's children from render prop to normal prop (required)
  2. Mv layouts/index.js to src/components/layout.js (optional, but recommended)
  3. Import then wrap pages with layout component
  4. Pass history, location, and match props to layout (didn't do this actually)
  5. Change the query to use StaticQuery (now getting false pos warn about 'maxWidth' in query)

#### v2 Done
We made it. Things so far have remained straightforward. Next I'll continue upgrading to v4 now from v2.

### v2 to v4 upgrade
For this migration, I skipped 3 altogether as I saw few breaking changes that would affect me. In fact, it looks like none! Even further migrating to v4 shows no apparent breaking changes i'll need to address.

I updated the package.json to the latest release for v4 according to npm:
```
    "gatsby": "4.25.2",
```

After that, I updated all the gatsby plugin and peers to their latest v4 versions (using npm versions page as my reference):
```
    "gatsby-plugin-catch-links": "^4.25.0",
    "gatsby-plugin-react-helmet": "5.25.0",
    "gatsby-source-filesystem": "^4.25.0",
    "gatsby-transformer-remark": "^5.25.1",
```
Luckily, not too many packages.

On installing, I faced nothing major except a few warnings. I ended up facing more issues when I tried to run `gatsby develop`. Errors looked like:
<div style="max-height:500px; overflow-y: scroll; overflow-x: visible">
  <code>
failed Building production JavaScript and CSS bundles - 4.511s

ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve '@gatsbyjs/reach-router/lib/utils' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that '@gatsbyjs/reach-router/lib/utils' is installed. If you're trying to use a local
file make sure that the path is correct.

File: .cache/find-path.js:1:0


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve 'gatsby-react-router-scroll' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that 'gatsby-react-router-scroll' is installed. If you're trying to use a local file
make sure that the path is correct.

File: .cache/gatsby-browser-entry.js:1:504


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve 'gatsby-link' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that 'gatsby-link' is installed. If you're trying to use a local file make sure that
the path is correct.

File: .cache/gatsby-browser-entry.js:1:565


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve 'gatsby-script' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that 'gatsby-script' is installed. If you're trying to use a local file make sure that
the path is correct.

File: .cache/gatsby-browser-entry.js:1:784


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve '@gatsbyjs/reach-router' in '/Users/nathanphennel/Projects/blog/.cache/head'

If you're trying to use a package make sure that '@gatsbyjs/reach-router' is installed. If you're trying to use a local file make
sure that the path is correct.

File: .cache/head/head-export-handler-for-browser.js:1:1158


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve '@gatsbyjs/reach-router' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that '@gatsbyjs/reach-router' is installed. If you're trying to use a local file make
sure that the path is correct.

File: .cache/navigation.js:1:332


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve '@gatsbyjs/reach-router/lib/history' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that '@gatsbyjs/reach-router/lib/history' is installed. If you're trying to use a
local file make sure that the path is correct.

File: .cache/navigation.js:1:394


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve 'gatsby-link' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that 'gatsby-link' is installed. If you're trying to use a local file make sure that
the path is correct.

File: .cache/navigation.js:1:456


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve '@gatsbyjs/reach-router' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that '@gatsbyjs/reach-router' is installed. If you're trying to use a local file make
sure that the path is correct.

File: .cache/production-app.js:1:153


ERROR #98124  WEBPACK

Generating JavaScript bundles failed

Can't resolve 'gatsby-react-router-scroll' in '/Users/nathanphennel/Projects/blog/.cache'

If you're trying to use a package make sure that 'gatsby-react-router-scroll' is installed. If you're trying to use a local file
make sure that the path is correct.

File: .cache/production-app.js:1:226
  </code>
</div>

To overcome these, I found that its necessary to add gatsby peer deps to the `package.json` for some unknown reason. I saw there was a bit of chatter about deps issues on gatsby's github <a target="_blank" href="https://github.com/gatsbyjs/gatsby/discussions/35313">issues</a>. <a target="_blank" href="https://github.com/gatsbyjs/gatsby/issues/25708">Here</a> I saw I could just bypass issues with the transient deps and just specify compatible versions myself in the `package.json` like so:

```
"gatsby-link": "^4.25.0",
"gatsby-react-router-scroll": "^5.25.0",
"@gatsbyjs/reach-router": "1.3.9",
"gatsby-script": "^1.10.0",
```

After this update, I ran the following:
```
 rm -rf node_modules/
 rm package-lock.json
 rm -rf .cache
 npm i
 npm run clean
 npm i
 npm run develop
```

Upon completely reseting all the deps for v4, things were back up and running. Only one small issue noticeable in the terminal remains when running `gatsby develop`:
```
warn Warning: there are unknown plugin options for "gatsby-source-filesystem": fastHash
Please open an issue at https://ghub.io/gatsby-source-filesystem if you believe this option is valid.
```

Turns out, this is now handled automatically by the plugin. I don't need to specify `fastHash` for detecting changes to images any longer. Nice! Now I'm running with no noticeable issues and no major terminal warning.

# Conclusion
Gatsby seems to have some growing pains but nothing out of the ordinary. In fact, the upgrade to v4 was surprisingly smooth. Next, i'll actually move on to implementing some of the SEO tools that gatsby has to offer and testing that things are working when I google myself.

I'm now off to play with Pickle. Until next time.