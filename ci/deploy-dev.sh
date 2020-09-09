#!/bin/sh
lftp -e "set ssl:verify-certificate false; set ftp:ssl-allow no; open '$FTP_DEV_DOMAIN'; user '$FTP_DEV_USER_NAME' '$FTP_DEV_USER_PASS'; mirror -X .* -X .*/ --reverse --verbose --delete public/ $FTP_DEV_REMOTE_DIR; bye"