FROM node:22-alpine3.19

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

EXPOSE 5174

RUN npm install vite --save-dev

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]