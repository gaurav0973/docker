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

