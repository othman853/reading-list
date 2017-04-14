#! /bin/bash

WEBPACK_PIDS=$(ps aux | grep [w]ebpack | awk '{print $2}')
BABEL_PIDS=$(ps aux | grep [b]abel | awk '{print $2}')

[[ $WEBPACK_PIDS ]] && WEBPACK_STATUS="Webpack: $WEBPACK_PIDS" || WEBPACK_STATUS="No Webpack running"
[[ $BABEL_PIDS ]] && BABEL_STATUS="Babel: $BABEL_PIDS" || BABEL_STATUS="No Babel running"

echo $WEBPACK_STATUS
echo $BABEL_STATUS
