# base stage
FROM node:12-slim as base

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

EXPOSE 8000

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

# dev stage
FROM base as dev

CMD ["npm", "run", "start:dev"]

# prod stage
FROM source as prod

ENV NODE_ENV=production
RUN npm run build

ENTRYPOINT ["/tini", "--"]
CMD ["node", "dist"]