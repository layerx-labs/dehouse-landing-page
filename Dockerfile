FROM node:18.16.0-alpine3.18 AS builder
WORKDIR /app
RUN apk update
COPY package.json ./
RUN npm  install --no-audit
COPY .env .env
COPY . .
RUN npm run keystone:build
RUN npm run build

FROM node:18.16.0-alpine3.18 AS release

WORKDIR /app
COPY package.json ./
COPY . .
RUN mkdir -p logs
RUN npm install --only=production --no-audit
COPY --from=builder /app/.next .next
COPY --from=builder /app/.keystone .keystone
CMD npm run start