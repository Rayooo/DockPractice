FROM hub.c.163.com/library/node:7.10.0-alpine
RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm install  --registry https://registry.npm.taobao.org
EXPOSE 3001
CMD node index.js
