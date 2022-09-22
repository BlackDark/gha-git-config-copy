#!/bin/sh
set -e

BASE64_TOKEN=$(echo -n "x-access-token:$INPUT_TOKEN" | base64)

git config --global "$INPUT_GITCONFIGPATH" "AUTHORIZATION: basic $BASE64_TOKEN"