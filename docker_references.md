# Docker common references

Here are some common docker commands for quick reference

## REFERENCES

### 1. Create a Dockerfile in the local project directory
Example:

FROM node:18-alpine

WORKDIR /app

COPY build/ /app/build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000

### 2. Create a docker image
Example:
#### `docker image build -t shivang-vora-portfolio:1.0.1 .`

### 3. Run a docker image as a container
Example:
#### `docker run -p 3000:3000 shivang-vora-portfolio:1.0.1`

------------ These were the steps required for a basic docker based implemetation of creating a dockerfile, building an image and run a container -------------

### Pushing an image to Docker Hub

#### 1. Create a docker hub account
#### 2. Create a repo on docker hub
#### 2.5. If you haven't previously run docker login on your system you need to run it
Example:
#### `docker login`

#### 3. After building the image on your local system tag it with your username/repo:tag
Example:
#### `docker image tag shivang-vora-portfolio:1.0.1 uchihaitachi12/shivang-vora-portfolio:1.0.1`

#### 4.Push the image to hub 
Example:
#### `docker image push uchihaitachi12/shivang-vora-portfolio:1.0.1`

--------- These were the steps required for pushing your image to your repo on Docker Hub --------

### Pulling an image from Docker Hub

#### 1. Pull an image from docker hub
Example:
#### `docker pull uchihaitachi12/shivang-vora-portfolio:1.0.0`

#### 2. Runs the docker container and map any local port to the port you exposed in your docker file
Example:
#### `docker run  -p 3000:3000 -d uchihaitachi12/shivang-vora-portfolio:1.0.0`
Here, in `-p 3000:3000` the first port number indicates a port of your local system and \
the second port indicates the port of the docker container that you want to connect to.
We want to connect to the port of the container that is exposed (written in the docker file) and expecting a connection.
