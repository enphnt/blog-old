webpackJsonp([0xca43e4bf588d],{338:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Google Cloud Platform honestly has too many features for me to keep up with. This feature called Datastore is quite useful for storage in creating highly scalable apps.</p>\n<h4>What is it?</h4>\n<p>It\'s a NoSQL style database. It automatically handles things like <a href="https://en.wikipedia.org/wiki/Shard_(database_architecture)">sharding</a> and replication and so its highly available, durable and will automatically scale to handle the realtime load of an app. It offers a few ways of doing business like SQL-like querying, <a href="https://en.wikipedia.org/wiki/ACID">ACID</a> (atomic, consistent, isolated, durable) transactions, and indexes.</p>\n<div class="note">\n  <strong>Note:</strong> Datastore is already on the way out! Soon all datastores will be automatically upgraded to Firestore, a faster more consistent solution.\n</div>\n<h4>How to use it: A simple node.js example</h4>\n<ol>\n<li>\n<p>Clone the example app and <code>cd</code> into it:</p>\n<ul>\n<li><code>git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples</code></li>\n<li><code>cd nodejs-docs-samples/appengine/datastore</code></li>\n</ul>\n</li>\n<li>Add the <code>@google-cloud/datastore</code> dependency to the <code>package.json</code></li>\n</ol>\n<pre>\n"dependencies": {\n  "@google-cloud/datastore": "^6.0.0",\n  "express": "^4.16.4"\n}\n</pre>\n<ol start="3">\n<li>\n<p>Get a grip on the App code:</p>\n<ul>\n<li>This <a href="https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/f04f6c62ca54fe07d6eadde92902dc2bfdb0a9fa/appengine/datastore/app.js">sample app code</a> will log, retrieve, and display visitor IP addresses.</li>\n<li>Each log entry is a 2-field class that\'s given the type <code>visit</code>.</li>\n<li>Log entries are saved to Datastore using the <a href="https://googleapis.dev/nodejs/datastore/latest/Datastore.html#save"><code>save</code> command</a>.</li>\n<li>The 10 most recent visits are retrieved in descending order using the Dataset <a href="https://googleapis.dev/nodejs/datastore/latest/Datastore.html#runQuery"><code>runQuery</code> command</a>.</li>\n</ul>\n</li>\n<li>\n<p>Deploy the App:</p>\n<ul>\n<li>I needed to copy the <code>app.yaml</code> files from the <code>hello-world</code> standard example into this project first... 🤷‍♂️ (no idea why its not included here by default)</li>\n<li>In GCP console, add a project to use.</li>\n<li>set the current active project to use the new project:\n<code>gcloud config set project [project_id]</code></li>\n<li>run <code>gcloud app deploy</code></li>\n</ul>\n</li>\n<li>Browse your new app: <code>gcloud app browse</code></li>\n</ol>\n<p><img src="static/images/gcloud-app-browse-datastore.png" alt="gcloud-app-browse-datastore.png"></p>\n<ol start="6">\n<li>\n<p>Inspect the Datastore via the console:</p>\n<ul>\n<li>Navigate to your project in GCP.</li>\n<li>Note the latest build status by going to the Cloud Build section of GCP.</li>\n<li>Check out the latest Datastore entries added:</li>\n</ul>\n</li>\n</ol>\n<p><img src="static/images/datastore-entities.png" alt="datastore-entities.png"></p>',frontmatter:{date:"July 06, 2021",path:"/gcp-datastore",title:"Build scalably with GCP Datastore"}}},pathContext:{}}}});
//# sourceMappingURL=path---gcp-datastore-887fad5c20fb0f2e1149.js.map