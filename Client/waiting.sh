#!/bin/bash

set -e

npm install -g nc

while ! nc -z -v -w30 user 50050;
do
echo "Waiting for user to start..."
  sleep 5
done

if [ ${NODE_ENV} = "development" ];
then
  node server.js
fi


sh test.sh
node server.js