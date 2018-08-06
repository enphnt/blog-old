webpackJsonp([0x711f3ddc11be],{332:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Git can sometimes make your head spin. I know I am safe in assuming that im not alone in the feeling because of the fact that sites like <a href="https://ohshitgit.com">Oh Shit Git</a> exist.</p>\n<div style="text-align:center">\n  <img src="../images/ohshitgit.jpg" alt="ohshitgit.com" width="500px">\n</div>\n<p>Git is fast, scalable, and distributed so its awesome for projects from tiny to quite large (note that its not super performant for repos >1gb or files >100mb).</p>\n<p>Time travel is often a reference point for <code>git</code>\'s complexity but I\'d argue that its rich command options make it quite robust for handling all sorts of situations. But it is quite true that with <code>git</code>, we are given the ability to time travel. We can checkout any point in time that was tracked by a <code>git</code> commit. And since around 2015, we\'ve had an often unnoticed additional ability: to checkout two points in time simultaneously.</p>\n<p>I am referring to:</p>\n<p><code>git worktree add [branchName] [targetDir]</code></p>\n<p>This command lets us manage multiple working trees (think, multiple local clones) attached to the same repository.</p>\n<p>The utility of the command is in allowing you to locally check out more than one branch at a time. A new working tree is created in the directory specified in the command and associated it\'s with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" resulting from "git init" or "git clone". every git repository has one "main" working tree association (assuming it\'s not a special case like a bare repository) and any number (0-whatever) associated "linked" working trees.</p>\n<div style="text-align:center">\n  <img src="../images/brace.jpg" alt="brace-yourself">\n</div>\n<p>So, when your testing some bug fix or new feature, you may find it useful to compare the software behaviour before and after the fix was applied. Similarly, this can be quite useful for developers to make tweaks and ensure no regression is introduced inadvertently.</p>\n<p>The basic worflow I find myself using is:</p>\n<pre><code># Checkout new feature branch\n$ git checkout origin/feature/thingy\n\n# Build and start, and test new feature\n\n$ git worktree add -b feature/thingy/old-behaviour ..thingy origin/master\n\n$ cd ../thingy\n# Switched to a new branch \'feature/thingy/old-behaviour\'\n\n# Build and start, and test using the new feature branch for comparison\n</code></pre>\n<p>I find that I typically spend most of my time comparing (step 6). However, sometimes urgent issues or \'hot-fixes\' are sent my way. In those cases, I use git worktree for both the feature branch under test as well as the "previous-behavour" branch. This is great because it allows me to context switch with less frustration, no stashing, temp commits, aborting merge conflicts, etc.</p>\n<p>Developers also can use <code>git worktree</code> for quick reacting to production issues or other urgent matters requiring a hot-fix. This workflow illustrates how that is accomplished:</p>\n<pre><code>$ git worktree add -b hotfix ../hotfix origin/master\n\n# Enter ../hotfix (identifier hotfix)\n# Branch hotfix set up to track remote branch master from origin.\n\n$ cd ../hotfix\n# Switched to a new branch \'hotfix\'\n</code></pre>\n<p>In summary, multiple worktrees let us multitask across different versions of a project seamlessly. I hope you can find some benefits from this helpful command.</p>',frontmatter:{date:"July 06, 2018",path:"/git-into-testing-with-worktree",title:"Git into testing with `git worktree`"}}},pathContext:{}}}});
//# sourceMappingURL=path---git-into-testing-with-worktree-941a4a47f9fd5a3c11b0.js.map