FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "start" ]