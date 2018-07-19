FROM node:7.10
EXPOSE 3000

WORKDIR /app

ADD package.json /app/
RUN npm install && \
    npm run build:prod && \
    npm run build:dev


ADD . /app

ENV NODE_ENV production