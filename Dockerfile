FROM node:16-alpine3.13

LABEL version="1.0"

WORKDIR /usr/src/server

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD ["sh", "-c", "yarn start:prod"]
