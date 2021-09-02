# Rubble Tech

Repo for CFC 2021 Project

The application hosted in IBMCloud http://169.51.204.190:31111/

### Short Description

This app aims to increase awareness of disposal techniques for different types of wastes, promotes recycling, sharing.

### The Architecture

![Architecture](https://github.com/sj-rai/rubbletech/blob/master/public/rubbletech-archi.jpeg?raw=true)

- The app is build on Reactjs using Nextjs framework wrapped in carbon components.
- The app is deployed on Kubernetes using IBM Cloud Container Registry services.
- Watson Discovery is used to crawl through major web sites and provide relevant information. Additionally, it is used to calculate market value of different types of waste items. This predicts approximate costs of selling waste items and encourages users to sell wastes.
- Watson Assistant for quick guidance and to answer quick doubts.
- Twilio for integrating push notifications, reminders for donations happening nearby.

### Demo Video

[<img width="1056" alt="Screenshot 2021-06-23 at 12 14 57 PM" src="https://user-images.githubusercontent.com/40350484/123049027-b3769d00-d41c-11eb-8e59-f7144b08e26a.png">](https://ibm.box.com/s/xbhuybvaz9qbshms7e758zoob9szy6oj)

### Long Description

[More detail is available here](./docs/DESCRIPTION.md)

### Project Roadmap

<img src="https://github.com/sj-rai/rubbletech/blob/master/public/Roadmap.png?raw=true" alt="drawing"/>

- Stage 1: First stage of this project deployed on a free tier IBM Cloud Kubernetes cluster. We aim to deploy with a suitable domain.
- Stage 2: Collaborate and coordinate with external vendors who run businesses to collect garbage.
- Stage 3: Sending reminders, reports, and allowing users to subscribe to get alerted about drives, donation camps, garbage collection services.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### IBM Cloud services used:

- [IBM Cloud Container Registry](https://cloud.ibm.com/docs/containers)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant)
- [Watson Discovery](https://cloud.ibm.com/docs/discovery)


### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.old.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



