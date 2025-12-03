FROM blog-deps AS build

WORKDIR /app

RUN pnpm --filter web-blog build

FROM nginx:alpine

COPY --from=build /app/apps/web-blog/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]