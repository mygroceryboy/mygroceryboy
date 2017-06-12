#!/bin/bash

cd ~/code/github/mygroveryboy/

tab=" --tab"
options=()

cmds[1]="mongod --dbpath data/"

cmds[2]="nodemon dist/server.js"

cmds[3]="tsc --watch"

cmds[4]="cd dist/public && ng build --watch"

for i in 1 2 3 4; do
options+=($tab -e "bash -c '${cmds[i]} ; bash'" )
done

gnome-terminal "${options[@]}"

exit 0