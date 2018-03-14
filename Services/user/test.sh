#!/bin/bash

set -e

while ! nc -z user 50050;
do
echo "Waiting for user to start..."
  sleep 5
done

npm run testrun