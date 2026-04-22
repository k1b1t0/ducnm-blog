#!/bin/bash

if [ -z "$1" ]; then
    echo "Need title"
    exit 1
fi

TITLE=$1
# Convert title to filename (slug)
FILENAME=$(echo "$TITLE" | iconv -t ascii//TRANSLIT | tr -dc '[:alnum:] ' | tr ' ' '-' | tr '[:upper:]' '[:lower:]').md

DATE=$(date +"%Y-%m-%dT%H:%M:%S%:z")

cat <<EOF > "content/blog/$FILENAME"
---
title: "$TITLE"
date: "$DATE"
--- 

EOF

code "content/blog/$FILENAME"
echo "Post created: content/blog/$FILENAME"