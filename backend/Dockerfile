# syntax=docker/dockerfile:1

FROM node:22-alpine AS dev-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:22-alpine AS prod-dependencies-env
COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:22-alpine AS build-env
COPY . /app
COPY --from=dev-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:22-alpine
COPY package.json package-lock.json /app/
COPY --from=prod-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/dist /app/dist
WORKDIR /app

EXPOSE 3001

CMD ["node", "dist/main"]