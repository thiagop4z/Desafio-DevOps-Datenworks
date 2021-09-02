#Docker image to use
FROM node:latest

#make dir
RUN mkdir -p /usr/src/app

#set workdir
WORKDIR /usr/src/app

#copy package.json
COPY package.json /usr/src/app/

RUN npm install

#copy files to workdir
COPY . /usr/src/app

#open port 3000
EXPOSE 3000

#start api
CMD ["npm", "start"]
