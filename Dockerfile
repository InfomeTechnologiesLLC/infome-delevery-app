FROM node:18-alpine

WORKDIR /delivery-app

COPY package.json .

RUN 

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8080

# CMD [ "npm", "run", "dev" ]
CMD [ "serve", "-s", "dist" ]