#1. base image
FROM ubuntu:latest

#2. installing nodejs
RUN apt-get update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_25.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

#3. copying source code to docker image
COPY index.js home/app/index.js
COPY package.json home/app/package.json
COPY package-lock.json home/app/package-lock.json

#4. Working directory   
WORKDIR /home/app

RUN npm install







