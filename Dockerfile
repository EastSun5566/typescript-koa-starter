FROM node:12-slim

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm ci

COPY ./src ./src
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]