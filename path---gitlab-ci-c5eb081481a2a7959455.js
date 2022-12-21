webpackJsonp([42577969893322],{344:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Before attempting to use <code>gitlab.yml</code>, a few things must be in place:</p>\n<ul>\n<li>gitlab instance</li>\n<li>gitlab runner registered to the instance</li>\n<li>you are a \'maintainer\' for the project you want to setup</li>\n</ul>\n<p> Before you start, I recommend watching this video:\n<a href="https://www.youtube.com/watch?v=kTNfi5z6Uvk&#x26;t=553s"><img src="https://img.youtube.com/vi/kTNfi5z6Uvk/0.jpg" alt="youtube - gitlab CI intro"></a></p>\n<p>Basically, you\'ll want to clone a simple project in a tech stack that you\'re already familiar with. I will use a node.js app to demonstrate.</p>\n<p>Because we build this app using the <code>npm build</code> command, that is used by the <code>gitlab.yml</code> script so that CI will build the same way. Essentially, if Gitlab CI can\'t build successfully (ie. if it hits any errors) then you will be notified and no be able to proceed with the MR until errors are rectified.</p>\n<p>This is a great way to get simple automatic feedback mechanism you can use to speed up development. The most basic <code>gitlab.yml</code> file for a node.js project could be super simple:</p>\n<pre><code>image: node:14.2.2\n\ndependencies:\n  script:\n  - npm install\n\nbuild:\n  script\n  - npm run build\n</code></pre>\n<p>Optionally, speed things up by adding the cache paths to <code>node_modules</code> folder.</p>\n<pre><code>image: node:14.2.2\ncache:\n  paths:\n  - node_modules/\n\ndependencies:\n  script:\n  - npm install\n\nbuild:\n  script\n  - npm run build\n</code></pre>\n<h1>Trigger the Pipeline on opening a Merge Request</h1>\n<p>All you need to do is add a commit which puts this new file, <code>gitlab.yml</code>, in the root directory of your project. Gitlab will now create a pipeline and tell you the result.</p>\n<p>Hopefully, this helps you to leverage the power of automation.</p>',frontmatter:{date:"October 10, 2018",path:"/gitlab-ci",title:"Getting started with gitlab-ci.yml"}}},pathContext:{}}}});
//# sourceMappingURL=path---gitlab-ci-c5eb081481a2a7959455.js.map