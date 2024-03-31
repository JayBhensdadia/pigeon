FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install && npm install -g ts-node

EXPOSE 8888

CMD npx prisma db push && npx prisma generate && ts-node ./src/setup.ts && npm run dev 
