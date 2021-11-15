# # This file is part of [Your application name]
# #
# # (c) 2020 Youverify Inc <identity@youverify.co]>
# # Unauthorized copying of this file, via any medium is strictly prohibited
# #
# # ------------------------------------------------------------------------
# #
# # Proprietary and confidential
# #
# # @module Dockerfile
# # @author [Ehichioya Prior Famous] <[famous@youverify.co]>
# #

FROM node:12.18.3-alpine as base

FROM base as builder

# deps for post-install scripts
RUN apk add --update --no-cache \
    python \
    make \
    git \
    g++

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

FROM base


WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

ARG BASE_URL=some_default_value 
ENV BASE_URL=${BASE_URL}

RUN NODE_ENV=production yarn build

EXPOSE 30079

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=30079

# start the application
CMD [ "yarn", "start" ]

# Trigger build 
