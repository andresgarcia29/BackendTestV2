FROM node:8.9.4

RUN mkdir -p /opt/app

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=50050
ENV PORT $PORT
EXPOSE $PORT 80 5858 9229

HEALTHCHECK CMD curl -fs http://localhost:4000/healthz || exit 1

WORKDIR /opt
COPY ./Client/package.json ./Client/package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY ./var /opt/app
COPY ./Client /opt/app

RUN chmod +x waiting.sh
RUN chmod +x test.sh

ENTRYPOINT [ "./waiting.sh" ]