FROM node:18-alpine

WORKDIR /app

COPY build/ /app/build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000

