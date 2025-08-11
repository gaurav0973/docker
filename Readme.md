# Problem Statement
# Possible Solutions 
    - Virtualization
    - Dockerization
# Installing Docker
- [Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
- [MacOS](https://docs.docker.com/desktop/install/mac-install/)
- [Official Doc](https://docs.docker.com/engine/install/)

```bash
docker version
```

# Images and Container
[Images and Containers](https://aws.amazon.com/compare/the-difference-between-docker-images-and-containers/)
- Images are the blueprints of our application, containing everything needed to run it.
- Containers are the running instances of these images, providing a lightweight and isolated environment for our applications.
- 🚀Creating an image

```bash
docker run -it ubuntu
```

- This command pulls the Ubuntu image from Docker Hub and starts a new container in interactive mode. 
### Assignment 
    - Play around this command
    - Explore UI of docker
    - Create two containers and create some files in it




# Docker Command Line Interface

## Common Commands
- `docker run`: Create and start a container
- `docker ps`: List running containers
```bash
docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
NOTE : Explore this command
```bash
docker ps --help
```


- `docker images` : List all images on the local machine
```bash
docker images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
ubuntu       latest    65ae7a6f3544   3 weeks ago    78.1MB
postgres     latest    8663c6099632   2 months ago   438MB
```

NOTE : Explore this command
```bash
docker images --help
```

- `docker stop`: Stop a running container
- `docker rm`: Remove a stopped container

## Managing images with CLI
- `docker pull`: Download an image 
NOTE : Explore this command
```bash
docker image --help
```

- `docker image inspect <image_name/id>` : Get detailed information about a specific image
```bash
docker image inspect ubuntu
```

- `docker image rm <image_name/id>`: Remove an image from the local machine
```bash
docker image rm ubuntu
```
NOTE : If any container is using this image, you need to stop and remove the container first.
```bash
docker container stop <container_id>
docker container rm <container_id>
```

- `docker image prune`: Remove unused images
```bash
docker image prune
```

## Managing containers with CLI

- `docker ps`: List running containers
```bash
docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
NOTE : Explore this command
```bash
docker ps --help
```
NOTE : Similar to previous command
```bash
- docker container ls
- docker container --help
```

- creating a new container
```bash
docker run -it --name my_container_name ubuntu
```

- kill the docker container -> it will be there only gets killed
```bash
docker container kill my_container_name
```

NOTE : Difference between kill and remove
- `kill` stops the container but keeps it in the list of containers (it can be restarted).
- `remove` deletes the container completely.



# Docker Custom Image
## UNOPTIMISED
### Creating a Dockerfile
```bash
touch Dockerfile
```

```dockerfile
FROM ubuntu

# installing nodejs
RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

# copying the source code to docker image
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

# my working directory
WORKDIR /home/app
RUN npm install
```

## Building the Docker Image
```bash
docker build -t my-node-app .
```

Now I can run the application in the container with the command 
```bash
npm run dev
```
this will start the application inside the container but will not expose the port to the host machine. To access the application from the host, I need to modify the Dockerfile to expose the port and then rebuild the image.


### Optimisation -1 :  make the images as small as possible
```Dockerfile
FROM node:20.17.0-alpine3.19

# copying the source code to docker image
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

# my working directory
WORKDIR /home/app
RUN npm install

CMD [ "npm", "start" ]
```

### optimisation -2 :  
 - try to use as few layers as possible
 - order the commands to maximize cache usage

```Dockerfile
FROM node:20.17.0-alpine3.19

WORKDIR /home/app
# copying the source code to docker image
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install


COPY index.js index.js

CMD [ "npm", "start" ]
