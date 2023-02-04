---
path: "/gcp-nodejs-hello-world"
date: "2021-06-02T11:11:33.962Z"
title: "node.js on GCP"
---

So, it's the first step in any new development environment: HELLO WORLD! 🙌

Deploying a node.js app on GCP standard environment is actually incredibly easy.

#### Prereq steps:
1. install and initiallize `gcloud`
1. login to gcloud
1. have billing enabled on your gcloud account 🤑
1. have a node.js app that runs :)
1. enable the [Cloud Build API](https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com)

#### Steps to Deploy:
1. Create the Project - via the terminal with `gcloud app create --project=[PROJECT_ID]`

1. Go to the node.js code directory or clone the google example: `git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples`

1. Navigate to the Hello World app: `cd nodejs-docs-samples/appengine/hello-world/standard`

1. Install and Run the app locally: `npm install && npm start`

1. Deploy the app! - from the same root directory of the app, run: `gcloud app deploy` then follow the prompts to select region, etc.
![gcloud-deploy](images/gcloud-deploy.png)
1. View the app once it finished deploying: `gcloud app browse`
![gcloud-app-browse](images/gcloud-app-browse.png)

<div class="note">
  <strong>Note:</strong> The default location for a deployment is: <pre>https://PROJECT_ID.REGION_ID.r.appspot.com</pre> Alternatively, you can use: <pre>gcloud app browse</pre> to have the page open for you.
</div>

And you are done! Yes, it was actually that easy. Now, lets look into some additional features/capabilities of GCP + Node.js, like [GCP Datastore](../gcp-datastore/).