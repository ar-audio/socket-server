FROM node:9.3-alpine

ARG ENV

# Create our app directory in the container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# only copy package.json so install results can be cached when package.json is unchanged
COPY package.json package-lock.json /usr/src/app/
RUN npm i --production

# Copy remaining files
COPY . /usr/src/app
