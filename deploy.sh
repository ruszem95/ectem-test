#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:ruszem95/ectem-test.git master:gh-pages

cd -