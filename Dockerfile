FROM ruby:4 AS build

ENV JEKYLL_ENV: production
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN bundle install && \
    bundle exec jekyll build -d public -c _local.yml

FROM nginx:1-alpine

COPY --from=build /usr/src/app/public/ /usr/share/nginx/html/
