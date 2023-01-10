# Blerdeblurb

## About Blerdeblurb

Blerdeblurb was created by Elwyn Palmerton in 2020 as project for learning and practicing React. It was was modeled roughly after Twitter and designed to have a similar functionality with its own style. In 2022 it was redeployed on AWS.

## Tech Stack

### Frontend

The Blerdeblurb frontend was created with React, Material-UI, and Redux. It uses JWT's for login and authentication.

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

# Running Blerdeblurb

_Blerdeblurb_ can be run locally with or without docker.

## To run Blerdeblurb _with_ docker and docker-compose

NOTE: To run locally with docker you need to have docker installed. Consult the [docker documentation](https://docs.docker.com/get-docker/) for more information.

1. Clone both repos into the same folder so that the folder structure looks like this:

Blerdeblurb <br>
├── API <br>
├── client

Clone frontend: `git clone https://github.com/ElwynPalmerton/Blerdeblerb-client.git` <br>
Clone backend: `git clone https://github.com/ElwynPalmerton/Blerdeblerb-API.git` <br>
  
(NOTE: the spelling of the repo names (blerdeblerb) is different than the URL )

2. Navigate into the root level folder for the API repo

3. Run `docker-compose up -d --build` from the command line.

4. To stop: run `docker-compose stop`

## Run locally (without Docker)

To run Blerdeblurb locally, you need to clone and run both repos:

**Running the frontend:**

1. Run `git clone https://github.com/ElwynPalmerton/Blerdeblerb-client.git` from the command line.
2. `cd` into the root level of the repo and run `npm install`.
3. Run `npm start`.

**backend:**

1. Run `git clone https://github.com/ElwynPalmerton/Blerdeblerb-API.git` from the command line.
2. Run `npm start` from inside the root level of the repo.

**MongoDB:**

_You also need to install MongoDB locally to run Blerdeblurb._

1. Check to see if you have mongoDB installed locally by running `mongo --version`.
2. If you need to install mongoDB please consult the [MongoDB Documentation](https://www.mongodb.com/docs/manual/installation/)
3. Start mongoDB by running `mongod`.
