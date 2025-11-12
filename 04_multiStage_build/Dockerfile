#1. base image
FROM node:alpine

WORKDIR /home/app

# static files first for caching
COPY package*.json .
RUN npm install

# application files
COPY index.js .


CMD ["npm", "start"]







