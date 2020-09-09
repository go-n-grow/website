#!/bin/sh

yarn install;

# load env files
ENV_FILE="../.env.development"
if [ -f "$ENV_FILE" ]; then
    export $(egrep -v '^#' .env.development | xargs)
fi

# build static site
echo "Running yarn build";
yarn build;