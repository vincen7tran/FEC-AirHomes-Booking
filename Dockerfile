FROM node:8-alpine
RUN mkdir -p /docker/src/app
WORKDIR /docker/src/app
ENV PATH /docker/src/app/node_modules/.bin:$PATH
COPY package-lock.json /docker/src/app/package-lock.json
COPY package.json /docker/src/app/package.json
COPY . /docker/src/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]