FROM node:12-alpine

# CONSUME BUILD ARGS FOR TRACE
ARG VCS_REF
ARG BUILD_DATE
ARG GIT_USER
ARG GIT_USER_EMAIL
LABEL org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.git_user=$GIT_USER \
      org.label-schema.git_user_email=$GIT_USER_EMAIL

# setup timezone (doesn't work)
# RUN echo "America/Argentina/Cordoba" > /etc/timezone
# RUN dpkg-reconfigure -f noninteractive tzdata

ENV PORT 3000
EXPOSE 3000

# Create app directory
WORKDIR /usr/src/app

# prequisites

# GET files
ADD . /usr/src/app/

# install dependencies
RUN npm install --production


CMD [ "npm", "run", "start" ]

