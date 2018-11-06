FROM node:alpine

WORKDIR /usr/docker-noderedis-tutorial

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]