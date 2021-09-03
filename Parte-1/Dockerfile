# Desafio DevOps Datenworks :: Thiago Paz #

#Docker image to use
FROM node:latest

#Make dir
RUN mkdir -p /usr/src/app

#Set workdir
WORKDIR /usr/src/app

#Copy package.json
COPY package.json /usr/src/app/

#Update npm
RUN npm install -g npm@latest

#Install dependencies
RUN npm install

#copy files to workdir
COPY . /usr/src/app

#open port 3000
EXPOSE 3000

#start api
CMD ["npm", "start"]
