FROM node:16-alpine

WORKDIR /usr/src/car-app
COPY . .

CMD ["node", "src/app.js"]