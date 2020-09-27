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


# write php variables into config.php
CONFIG="<?php
	\$MAIL_HOST = '$MAIL_HOST';
	\$MAIL_ADDRESS = '$MAIL_ADDRESS';
	\$MAIL_ADDRESS_NAME = '$MAIL_ADDRESS_NAME';
	\$MAIL_SMTP_PORT = $MAIL_SMTP_PORT;
	\$MAIL_PASSWORD = '$MAIL_PASSWORD';
"
echo "$CONFIG" > "$(pwd)/public/php/config.php";