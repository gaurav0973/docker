FROM node:20.17.0-alpine3.19

# copying the source code to docker image
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

# my working directory
WORKDIR /home/app
RUN npm install

CMD [ "npm", "run", "dev" ]
