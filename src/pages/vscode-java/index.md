---
path: "/vscode-java"
date: "2021-02-20T10:16:53.962Z"
title: "VSCode for Java Projects"
---

Short answer: Yes, you can!

There are some additional extensions that you must install and you must be using java version 11 or higher.

Extensions required to use VSCode for Java projects are actually all bundled in an extension pack: [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack). Basically, install that and then open up a Java project. You're now able to operate like you would in IntelliJ or eclipse but without all your fans running at full blast (at least that's been my experience). Also, the setup is painfully simple compared to other IDEs I've attempted to setup in the past (Not to mention this is all free 🤑).

I work with gradle so that requires another extension: [Gradle Tasks](https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle). This extension will let you run all your gradle defined tasks

<div class="note">
  <strong>Note:</strong> I kept hitting an annoying error: <pre>java import ... cannot be resolved</pre> but I performed `java: clean` from the command pallette and everything was back in action again.
</div>
