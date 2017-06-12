#!/bin/bash

cd ~/code/github/mygroveryboy/

tab=" --tab"
options=()

title[1]="mongo db"
cmds[1]="mongod --dbpath data/"

title[2]="nodemon watch"
cmds[2]="nodemon dist/server.js"

title[3]="tsc watch"
cmds[3]="tsc --watch"

title[4]="ng build watch"
cmds[4]="cd dist/public && ng build --watch"

for i in 1 2 3 4; do
options+=($tab -e "bash -c '${cmds[i]} ; bash'" -t "${title[i]}")
done

gnome-terminal "${options[@]}"

exit 0