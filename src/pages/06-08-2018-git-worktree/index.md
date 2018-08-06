---
path: "/git-into-testing-with-worktree"
date: "2017-07-12T17:12:33.962Z"
title: "Git into testing with `git worktree`"
---

Git can sometimes make your head spin. I know I am safe in assuming that im not alone in the feeling because of the fact that sites like this exist: https://ohshitgit.comp

<div style="text-align:center">
  <img src="../images/ohshitgit.jpg" alt="ohshitgit.com">
</div>

Git is fast, scalable, and distributed so its awesome for projects from tiny to quite large (note that its not super performant for repos >1gb or files >100mb).

Time travel is often a reference point for `git`'s complexity but I'd argue that its rich command options make it quite robust for handling all sorts of situations. But it is quite true that with `git`, we are given the ability to time travel. We can checkout any point in time that was tracked by a `git` commit. And since around 2015, we've had an often unnoticed additional ability: to checkout two points in time simultaneously.

I am referring to:

`git worktree add [branchName] [targetDir]`

This command lets us manage multiple working trees (think, multiple local clones) attached to the same repository.

The utility of the command is in allowing you to locally check out more than one branch at a time. A new working tree is created in the directory specified in the command and associated it's with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" resulting from "git init" or "git clone". every git repository has one "main" working tree association (assuming it's not a special case like a bare repository) and any number (0-whatever) associated "linked" working trees.

<div style="text-align:center">
  <img src="../images/brace.jpg" alt="brace-yourself">
</div>

So, when your testing some bug fix or new feature, you may find it useful to compare the software behaviour before and after the fix was applied. Similarly, this can be quite useful for developers to make tweaks and ensure no regression is introduced inadvertently.

The basic worflow I find myself using is:

```
# Checkout new feature branch
$ git checkout origin/feature/thingy

# Build and start, and test new feature

$ git worktree add -b feature/thingy/old-behaviour ..thingy origin/master

$ cd ../thingy
# Switched to a new branch 'feature/thingy/old-behaviour'

# Build and start, and test using the new feature branch for comparison
```

I find that I typically spend most of my time comparing (step 6). However, sometimes urgent issues or 'hot-fixes' are sent my way. In those cases, I use git worktree for both the feature branch under test as well as the "previous-behavour" branch. This is great because it allows me to context switch with less frustration, no stashing, temp commits, aborting merge conflicts, etc.

Developers also can use `git worktree` for quick reacting to production issues or other urgent matters requiring a hot-fix. This workflow illustrates how that is accomplished:
```
$ git worktree add -b hotfix ../hotfix origin/master

# Enter ../hotfix (identifier hotfix)
# Branch hotfix set up to track remote branch master from origin.

$ cd ../hotfix
# Switched to a new branch 'hotfix'

```

In summary, multiple worktrees let us multitask across different versions of a project seamlessly. I hope you can find some benefits from this helpful command.
