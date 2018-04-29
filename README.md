## Base Container for Express serving static content with NodeJS

This is image will be published to andyianriley/static-express-server.

To use this image locally build the image.
```
docker-compose build
```
Then you will be able to reference it in other dockerfiles, see example for react application.
You can set environment variables for BASE_URI and PORT, they default to '/' and 8080.

```
# Stage 1 - the build process
FROM node:9.11 as build-deps
COPY . /app
WORKDIR /app/
RUN cd /app && \
    yarn install && \
    yarn build

# Stage 2 - the production environment
FROM andyianriley/static-express-server:latest
COPY --from=build-deps /app/build /server/static
EXPOSE 8080
CMD ["yarn", "start"]
```
