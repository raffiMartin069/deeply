FROM node:22-alpine3.19

WORKDIR /application/

COPY . /application/

RUN npm i

EXPOSE 5174

CMD ["vite", "build"]