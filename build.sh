#!/bin/bash
if [ -z "$VERSION" ]
      then
      VERSION=`jq -r '.version' package.json`
      
fi
set -x
docker build \
        --build-arg VCS_REF=`git rev-parse --short HEAD` \
        --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
        -t juanitomint/express-jwt:$VERSION . | tee build.log
set +x