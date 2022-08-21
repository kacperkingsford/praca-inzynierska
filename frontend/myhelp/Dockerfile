FROM public.ecr.aws/docker/library/node:14-alpine3.16

WORKDIR '/app'

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM public.ecr.aws/nginx/nginx

EXPOSE 80

COPY --from=0 /app/dist/myhelp /usr/share/nginx/html
