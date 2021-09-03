# Desafio DevOps Datenworks :: Thiago Paz #

#Docker image to use
FROM node:latest

#Make dir
RUN mkdir -p /usr/src/app

#Set workdir
WORKDIR /usr/src/app

#Copy package.json to app dir
COPY package.json /usr/src/app/

#Install dependencies
RUN npm install

#Copy files to app dir
COPY . /usr/src/app

#open port 3000
EXPOSE 3000

#start api
CMD [ "node", "index.js" ]
