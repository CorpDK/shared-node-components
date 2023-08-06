FROM node:16-alpine

ARG BIT_VERSION

RUN apk update && apk upgrade && apk add bash git && apk cache clean

SHELL ["bash", "-c"]

RUN npm i -g @teambit/bvm && bvm install ${BIT_VERSION} && npm r -g @teambit/bvm

ADD docker-start.bash /
RUN chmod +x /docker-start.bash

WORKDIR /code

EXPOSE 3000

ENTRYPOINT ["bash", "/docker-start.bash"]
