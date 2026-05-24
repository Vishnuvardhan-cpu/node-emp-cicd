FROM node:18-alpine
WORKDIR /app
RUN npm install express
COPY server.js .
CMD ["node", "server.js"]
