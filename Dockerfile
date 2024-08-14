# => Build container
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

## => Run container
FROM nginx:1.27.0-alpine
WORKDIR /usr/share/nginx/html

## Copy build files to container
COPY --from=builder /app/build .

# Default port exposure
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
