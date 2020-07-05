FROM node:12.18-alpine3.9 as builder

RUN npm install -g @nestjs/cli@7.4.1

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY ./app/package*.json /usr/src/app/

RUN npm install --only=development

COPY ./app /usr/src/app/

CMD ["npm", "run", "start:dev"]

# RUN npm run build

# FROM node:12.18-alpine3.9

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY ./app/package*.json /usr/src/app/

# RUN npm install --only=production

# COPY ./app /usr/src/app/

# COPY --from=builder /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]