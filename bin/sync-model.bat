#!/bin/bash

#update this directory path as per your code base location
rm -rf server/models
cp ui/src/app/models -R server/

exit 0