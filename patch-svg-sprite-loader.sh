#!/bin/bash -e
patch -p1 -d node_modules/svg-sprite-loader < fixUndefinedOptions.patch
