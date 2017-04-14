#! /bin/bash

NODE_BINS=./node_modules/.bin
BABEL=$NODE_BINS/babel
WEBPACK=$NODE_BINS/webpack

rm -rf ./dist/
mkdir -p ./dist/client/static

echo 'Watch: Babel: Server'
$BABEL -w app/server -d dist/server&

echo 'Watch: Babel: Client'
$BABEL -w app/client --ignore components -d dist/client&

cp -R ./app/client/static/ ./dist/client/static

echo 'Watch: Webpack: Client'
$WEBPACK -w --config ./build/webpack.client.config.js&
