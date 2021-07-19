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

#### When to use it
