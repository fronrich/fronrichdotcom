# hosts a pre-built svelte app

FROM node:18
WORKDIR /usr/src/app

# I need package.json to install dependencies
COPY package*.json ./

# add serve to the machine globally to host the webpage
RUN yarn global add serve
COPY ./dist /usr/src/app


# make HOST publically availible on the machine
ENV HOST=0.0.0.0

ENV PORT=80
EXPOSE 80

CMD ["serve", "-l", "tcp://0.0.0.0:80"]