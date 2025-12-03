FROM alpine:3.20 AS builder

RUN apk add --no-cache \
    curl \
    bash \
    libc6-compat \
    git \
    nodejs \
    npm

RUN npm i -g pnpm@10.22.0

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm back:build

EXPOSE 8080

CMD ["node", "apps/back-blog/dist/index.js"]