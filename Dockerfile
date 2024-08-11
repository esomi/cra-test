# => Build container
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# 환경 변수 파일 생성 및 내용 추가
RUN echo "PUBLIC_URL=%PUBLIC_URL%" > .env.production.local
RUN npm run build

## => Run container
FROM nginx:1.27.0-alpine
WORKDIR /usr/share/nginx/html

## Copy build files to container
COPY --from=builder /app/build .

# Copy Nginx configuration file
# COPY conf /etc/nginx

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx
COPY ./env.sh .

# Default port exposure
EXPOSE 80

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/env.sh && nginx -g \"daemon off;\""]
