FROM node:12-slim

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]