FROM node:12-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN npm run build
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]