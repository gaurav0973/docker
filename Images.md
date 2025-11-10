# Docker Images Guide 🐳

This document provides a comprehensive overview of Docker images and hands-on practice routines for our projects.

![](./Images/docker_images.png)

## Overview

Docker images are lightweight, standalone, executable packages that include everything needed to run a piece of software, including code, runtime, system tools, system libraries, and settings.

## 🚀 Quick Practice Routine

Here's a complete hands-on exercise to master Docker image management using modern syntax:

### 1️⃣ Pull a Base Image

```bash
docker image pull ubuntu:latest
```

### 2️⃣ Create a Dockerfile

```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl
CMD ["bash"]
```

### 3️⃣ Build Your Custom Image

```bash
docker image build -t gaurav/ubuntu-curl:v1 .
```

### 4️⃣ List and Inspect Images

```bash
# List all images
docker image ls

# Inspect image details
docker image inspect gaurav/ubuntu-curl:v1
```

### 5️⃣ Tag and Push Images

```bash
# Tag the image
docker image tag gaurav/ubuntu-curl:v1 gaurav/ubuntu-curl:latest

# Push to registry
docker image push gaurav/ubuntu-curl:latest
```

### 6️⃣ Save and Remove Images

```bash
# Save image to tar file
docker image save -o ubuntu-curl.tar gaurav/ubuntu-curl:v1

# Remove local image
docker image rm gaurav/ubuntu-curl:v1
```

### 7️⃣ Load and Clean Up

```bash
# Load image from tar file
docker image load -i ubuntu-curl.tar

# Clean up unused images
docker image prune -af
```

## 📋 Command Cheat Sheet

| Command              | Description                     |
| -------------------- | ------------------------------- |
| docker image pull    | Download an image from registry |
| docker image build   | Build an image from Dockerfile  |
| docker image ls      | List all local images           |
| docker image inspect | Show detailed image information |
| docker image tag     | Tag an image with a new name    |
| docker image push    | Push image to registry          |
| docker image save    | Save image to tar archive       |
| docker image rm      | Remove one or more images       |
| docker image load    | Load image from tar archive     |
| docker image prune   | Remove unused images            |

## 🛠 Best Practices

- Use specific tags instead of latest for production
- Keep images small by using multi-stage builds
- Scan images regularly for vulnerabilities
- Use .dockerignore to exclude unnecessary files
- Leverage layer caching for faster builds

## 📁 Project Structure

```text
docker-project/
├── Dockerfile
├── .dockerignore
├── Images/
│   └── docker_images.png
└── README.md
```

Happy Dockering! 🎉

This guide provides essential Docker image operations for development and production workflows.
