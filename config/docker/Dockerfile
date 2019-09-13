# mock server service image (ms-service)
FROM ms-alpine:latest

ENV MS_RELEASE 1.0.1
ENV MS_REPO https://github.com/Ginioo/mock-server.git

RUN git clone --branch $MS_RELEASE --depth 1 $MS_REPO
