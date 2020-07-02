FROM node:10.15.2

RUN npm install -g serverless
RUN curl -fsSL https://clis.ng.bluemix.net/install/linux | sh
RUN ibmcloud plugin install Cloud-Functions -r Bluemix

WORKDIR /src/app
COPY ./app .