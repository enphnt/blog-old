---
path: "/gitlab-ci"
date: "2021-07-10T17:12:33.962Z"
title: "Getting started with gitlab-ci.yml"
---

Before attempting to use `gitlab.yml`, a few things must be in place:
 - gitlab instance
 - gitlab runner registered to the instance
 - you are a 'maintainer' for the project you want to setup

 Before you start, I recommend watching this video:
[![youtube - gitlab CI intro](https://img.youtube.com/vi/kTNfi5z6Uvk/0.jpg)](https://www.youtube.com/watch?v=kTNfi5z6Uvk&t=553s)

Basically, you'll want to clone a simple project in a tech stack that you're already familiar with. I will use a node.js app to demonstrate.

Because we build this app using the `npm build` command, that is used by the `gitlab.yml` script so that CI will build the same way. Essentially, if Gitlab CI can't build successfully (ie. if it hits any errors) then you will be notified and no be able to proceed with the MR until errors are rectified.

This is a great way to get simple automatic feedback mechanism you can use to speed up development. The most basic `gitlab.yml` file for a node.js project could be super simple:

    image: node:14.2.2

    dependencies:
      script:
      - npm install

    build:
      script
      - npm run build

Optionally, speed things up by adding the cache paths to `node_modules` folder.

    image: node:14.2.2
    cache:
      paths:
      - node_modules/

    dependencies:
      script:
      - npm install

    build:
      script
      - npm run build

# Trigger the Pipeline on opening a Merge Request

All you need to do is add a commit which puts this new file, `gitlab.yml`, in the root directory of your project. Gitlab will now create a pipeline and tell you the result.

Hopefully, this helps you to leverage the power of automation.
