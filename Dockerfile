FROM node:18

WORKDIR /app

COPY . .

RUN npm install --frozen-lock

CMD [ "npm", "run", "dev" ]