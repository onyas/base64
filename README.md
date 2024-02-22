# Base64 encode decode tool

https://onyas.github.io/base64/

## Available Scripts

### npm run deploy
deploy to remote once changes are made.

## Learn More
Add following changes to package.json
```
"homepage": "https://onyas.github.io/base64",

"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
