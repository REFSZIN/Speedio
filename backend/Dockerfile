
FROM node:18.14.0

WORKDIR /usr/src

COPY . .

RUN npm i

RUN npm run build

CMD ["npm", "start"]