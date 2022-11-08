FROM node:16

WORKDIR /usr/src/app

RUN apt update -y
RUN apt install -y chromium-browser

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]