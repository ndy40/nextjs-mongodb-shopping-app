FROM node:20-buster
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY home_shopping/package.json home_shopping/package-lock.json /opt/app/
RUN npm install
COPY home_shopping/ .
EXPOSE 3000
CMD ["npm", "run", "dev"]
