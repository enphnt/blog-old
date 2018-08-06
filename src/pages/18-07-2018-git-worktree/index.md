---
path: "/git-into-testing-with-worktree"
date: "2017-07-12T17:12:33.962Z"
title: "Git into testing with worktree"
---
Git can sometimes make your head spin. i know I am safe in assuming that im not alone in the feeling because sites like this exist: https://ohshitgit.com.

![ohshitgit.com](./static/images/ohshitgit.JPG)

Time travel is often a reference point for git's complexity but I'd argue that its rich command options make it quite robust for handling all sorts of situations. Git is fast, scalable, and distributed so its awesomw for projects from tiny to quite large (its not super performant for repos >1gb or files >100mb).

one very handy git command that i have omly recently comd to appreciate is:

`git worktree add [branchName] [targetDir]`

this command lets us manage multiple working trees (think, multiple local clones) attached to the same repository.

The utility of the command is in allowing you to locally check out more than one branch at a time. A new working tree is created in the directory specified in the command and associated it's with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" resulting from "git init" or "git clone". every git repository has one "main" working tree association (assuming it's not a special case like a bare repository) and any number (0-whatever) associated "linked" working trees.



