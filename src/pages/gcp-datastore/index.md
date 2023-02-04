---
path: "/gcp-datastore"
date: "2021-07-06T12:12:33.962Z"
title: "Build scalably with GCP Datastore"
---

Google Cloud Platform honestly has too many features for me to keep up with. This feature called Datastore is quite useful for storage in creating highly scalable apps.

#### What is it?
It's a NoSQL style database. It automatically handles things like [sharding](https://en.wikipedia.org/wiki/Shard_(database_architecture)) and replication and so its highly available, durable and will automatically scale to handle the realtime load of an app. It offers a few ways of doing business like SQL-like querying, [ACID](https://en.wikipedia.org/wiki/ACID) (atomic, consistent, isolated, durable) transactions, and indexes.

<div class="note">
  <strong>Note:</strong> Datastore is already on the way out! Soon all datastores will be automatically upgraded to Firestore, a faster more consistent solution.
</div>

#### How to use it: A simple node.js example
1. Clone the example app and `cd` into it:
    - `git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples`
    - `cd nodejs-docs-samples/appengine/datastore`
2. Add the `@google-cloud/datastore` dependency to the `package.json`

<pre>
"dependencies": {
  "@google-cloud/datastore": "^6.0.0",
  "express": "^4.16.4"
}
</pre>
3. Get a grip on the App code:
    - This [sample app code](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/f04f6c62ca54fe07d6eadde92902dc2bfdb0a9fa/appengine/datastore/app.js) will log, retrieve, and display visitor IP addresses.
    - Each log entry is a 2-field class that's given the type `visit`.
    - Log entries are saved to Datastore using the [`save` command](https://googleapis.dev/nodejs/datastore/latest/Datastore.html#save).
    - The 10 most recent visits are retrieved in descending order using the Dataset [`runQuery` command](https://googleapis.dev/nodejs/datastore/latest/Datastore.html#runQuery).
4. Deploy the App:
    - I needed to copy the `app.yaml` files from the `hello-world` standard example into this project first... 🤷‍♂️ (no idea why its not included here by default)
    - In GCP console, add a project to use.
    - set the current active project to use the new project:
    `gcloud config set project [project_id]`
    - run `gcloud app deploy`
5. Browse your new app: `gcloud app browse`

![gcloud-app-browse-datastore.png](images/gcloud-app-browse-datastore.png)
6. Inspect the Datastore via the console:
    - Navigate to your project in GCP.
    - Note the latest build status by going to the Cloud Build section of GCP.
    - Check out the latest Datastore entries added:

![datastore-entities.png](images/datastore-entities.png)
