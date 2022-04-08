FROM node:latest

USER root

COPY . /var/www/api-sell/

WORKDIR /var/www/api-sell/

RUN npm install

CMD [ "npm", "run", "dev" ]
