FROM node:alpine

WORKDIR /usr/docker-node-app1

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]