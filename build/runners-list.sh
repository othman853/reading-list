#! /bin/bash

NODE_PIDS=$(ps aux | grep "[n]ode ./dist" | awk '{print $2}')
NODEMON_PIDS=$(ps aux | grep [n]odemon | awk '{print $2}')

[[ $NODE_PIDS ]] && NODE_STATUS="Node: $NODE_PIDS" || NODE_STATUS="No Node running"
[[ $NODEMON_PIDS ]] && NODEMON_STATUS="Nodemon: $NODEMON_PIDS" || NODEMON_STATUS="No Nodemon running"

echo $NODE_STATUS
echo $NODEMON_STATUS
