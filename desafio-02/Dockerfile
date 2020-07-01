FROM golang:1.14 as build

EXPOSE 3000

ENV GOPROXY=https://proxy.golang.org
ENV GO111MODULE=on

RUN go version

RUN apt-get update

# Installing Node 12
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get update && apt-get install nodejs

# Installing yarn
RUN npm install -g --no-progress yarn \
    && yarn config set yarn-offline-mirror /npm-packages-offline-cache \
    && yarn config set yarn-offline-mirror-pruning true

# Install golangci
RUN curl -sfL https://install.goreleaser.com/github.com/golangci/golangci-lint.sh | sh -s -- -b $(go env GOPATH)/bin v1.24.0

# Pulling docker binary from releases
RUN wget https://github.com/gobuffalo/buffalo/releases/download/v0.16.10/buffalo_0.16.10_Linux_x86_64.tar.gz \
    && tar -xzf buffalo_0.16.10_Linux_x86_64.tar.gz \
    && mv buffalo $(go env GOPATH)/bin/buffalo

RUN buffalo version

RUN mkdir /src
WORKDIR /src

COPY ./app .

RUN buffalo build --static -o /bin/app

FROM alpine:3.12

WORKDIR /bin/

COPY --from=build /bin/app .

ENV ADDR=0.0.0.0

# Uncomment to run the migrations before running the binary:
# CMD /bin/app migrate; /bin/app

CMD exec /bin/app