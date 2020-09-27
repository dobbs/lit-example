#!/bin/bash
set -euo pipefail
IFS=$'\n\r\t'

npx create-snowpack-app ./tmp --template @snowpack/app-template-lit-element
cd tmp
npm install --save-dev @snowpack/plugin-optimize
mv snowpack.config.json snowpack.config.orig.json
jq '.plugins[0] = ["@snowpack/plugin-optimize"]' snowpack.config.orig.json > snowpack.config.json
npm run build
mv build/web_modules/* ..
