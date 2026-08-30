# build stage: keep the Hugo version in sync with the version pinned in .hvm
FROM hugomods/hugo:exts-0.165.0 AS build

WORKDIR /src

COPY . /src

RUN hugo --gc --minify -d public

FROM nginx:1-alpine

COPY --from=build /src/public/ /usr/share/nginx/html/
