FROM node:8-jessie
EXPOSE 8080
WORKDIR /app
RUN npm install express mjpeg-proxy
COPY example.js proxy.js
ENTRYPOINT node proxy.js
