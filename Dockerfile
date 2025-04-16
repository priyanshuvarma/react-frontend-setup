

FROM node:20.17.0-alpine as builder
# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm ci -y && mkdir /react-frontend-setup && mv ./node_modules ./react-frontend-setup
WORKDIR /react-frontend-setup
COPY . .
RUN npm run build


# ----- DOCKER BUILD for production

FROM nginx:alpine
COPY --from=builder /react-frontend-setup/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
