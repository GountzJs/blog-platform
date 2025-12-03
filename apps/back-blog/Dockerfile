FROM blog-deps AS build

WORKDIR /app

RUN pnpm --filter back-blog build

EXPOSE 8080

CMD ["pnpm", "back:start"]