> Demo for https://stackoverflow.com/questions/51996170/could-not-build-project-with-vue-cli-3-template-due-to-svg-in-css

This project demonstrates a build error and its workaround in a Vue project that:

  * contains a CSS file that imports an SVG file
  * uses [`postcss-import`](https://github.com/postcss/postcss-import)

#### Steps to reproduce

 1. Install Node modules:

        npm install

 2. Patch `svg-sprite-loader` to workaround [`svg-sprite-loader` Issue 271](https://github.com/kisenka/svg-sprite-loader/issues/271):

        ./patch-svg-sprite-loader.sh

 3. Checkout commit [`c552fc6`](https://github.com/tony19-sandbox/vue-svg-css-buid-issue/commit/c552fc668066f94da3cef9b5d858f0fc8baea52e) to demo the broken build:

        git checkout c552fc6

 3. Start a build (and observe a build error: `ReferenceError: navigator is not defined`):

        npm run build

 4. Checkout the tip of `master` ([`6d2e8a3`](https://github.com/tony19-sandbox/vue-svg-css-buid-issue/commit/6d2e8a396b99ec5c0fe9202deffa5dcfd5c6b3e7)) to demo the workaround:

        git checkout master

 5. Start a build (and observe no build errors):

        npm run build
