FROM node:14.15.4

# nginx install 필요

RUN mkdir /www
COPY ./react/board_app /www
WORKDIR /www
RUN npm install
