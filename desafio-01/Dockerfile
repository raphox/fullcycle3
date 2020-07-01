FROM golang:1.14 as build

WORKDIR /tmp/app
COPY hello.go /tmp/app
RUN go build hello.go

FROM alpine:3.12

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY --from=build /tmp/app/hello /opt/app
CMD ["./hello"]
