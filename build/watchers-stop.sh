#! /bin/bash

WEBPACK_WATCHER_PIDS=$(ps aux | grep [w]ebpack | awk '{print $2}')
BABEL_WATCHER_PIDS=$(ps aux | grep [b]abel | awk '{print $2}')

if [[ $WEBPACK_WATCHER_PIDS ]]; then
  kill -9 $WEBPACK_WATCHER_PIDS
fi

if [[ $BABEL_WATCHER_PIDS ]]; then
  kill -9 $BABEL_WATCHER_PIDS
fi
