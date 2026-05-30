#!/bin/bash

# default config
HAS_FOLDER=false
TITLE=""

# parse args
while [ $# -gt 0 ]; do
    case "$1" in
        -f)
            HAS_FOLDER=true
            shift
            ;;
        *)
            TITLE="$1"
            shift
            ;;
    esac
done

if [ -z "$TITLE" ]; then
    echo "Need title"
    exit 1
fi

# convert title to slug
FOLDERNAME=$(echo "$TITLE" | iconv -t ascii//TRANSLIT | tr -dc '[:alnum:] ' | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
FILENAME="$FOLDERNAME.md"
DATE=$(date +"%Y-%m-%dT%H:%M:%S%:z")

# set destination path
TARGET_DIR="content/blog"

if [ "$HAS_FOLDER" = true ]; then
    TARGET_DIR="content/blog/$FOLDERNAME"
    mkdir -p "$TARGET_DIR" # tao folder neu chua co
fi

FILE_PATH="$TARGET_DIR/$FILENAME"

# write file & open code
cat <<EOF > "$FILE_PATH"
---
title: "$TITLE"
date: "$DATE"
--- 

EOF

code "$FILE_PATH"
echo "Post created: $FILE_PATH"