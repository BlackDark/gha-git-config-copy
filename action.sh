#!/bin/sh
set -e

git config --global credential.helper "cache --timeout=21600"

git ls-remote $CACHE_URL --quiet
