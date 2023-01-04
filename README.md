# Blerdeblurb

## About Blerdeblurb!

Blerdeblurb was created by Elwyn Palmerton in 2020 as project for learning and practicing React. It was was modeled roughly after Twitter and designed to have a similar functionality with its own style. In 2022 it was redeployed on AWS.

## Tech Stack

### Frontend

The Blerdeblurb frontend was created with React, Material-UI, and Redux. It uses JWT for login and authentication.

### Backend

The Blerdeblurb backend was built with Node.js and MongoDB.

### DevOps

Blerdeblurb is deployed on AWS with the following services

**Frontend:**

- S3
- CodeCommit
- CodeBuild: Builds and deploys the artifact to the S3 bucket
- Route 53
- AWS Certificate Manager
- CloudFront: Caching and SSL certificate.

**Backend:**

- ElasticBeanstalk - deploys to EC2 instances with an Application Load Balancer.
- ACM and Route 53 - for managing SSL and domain name.
- CodeCommit and CodePipeline for deployment.

## Running Blerdeblurb

To run Blerdeblurb locally, you need to clone and run both repos:

**Running the frontend:**

1. Run `git clone https://github.com/ElwynPalmerton/Blerdeblerb-client.git` from the command line.
2. `cd` into the root level of the repo and run `npm install`.
3. Run `npm start`.

**backend:**

1. Run `git clone https://github.com/ElwynPalmerton/Blerdeblerb-API.git' from the command line.
2. Run `npm start` from inside the root level of the repo.

**MongoDB:**
_You also need to MongoDB locally._

1. Check to see if you have mongoDB installed locally by running `mongo --version`.
2. If you need to install mongoDB please consult the documentation at [MongoDB Installation Documentation(https://www.mongodb.com/docs/manual/installation/)]
3. Start mongoDB by running `mongod`.
