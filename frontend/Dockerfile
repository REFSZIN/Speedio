
FROM node:16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN mkdir -p /var/www/html

RUN mv dist/* /var/www/html/

EXPOSE 8080

CMD ["npm", "run", "serve"]