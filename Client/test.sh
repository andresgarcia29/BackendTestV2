#!/bin/bash

set -e

while ! nc -z -v -w30 api 4000;
do
echo "Waiting for api to start..."
  sleep 5
done

npm run testrun