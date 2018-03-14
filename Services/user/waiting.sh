#!/bin/bash

set -e

npm install -g nc
npm install -g sequelize-cli
npm install sequelize

while ! nc -z -v -w30 db 5432;
do
echo "Waiting for db to start..."
  sleep 5
done

if [ ${NODE_ENV} = "development" ];
then

  cd ./database
  sequelize db:create database_development
  sequelize db:migrate
  sequelize db:seed:all

  cd ..
  node app.js
fi

sh test.sh

cd ./database
sequelize db:create database_test_3
cd ..
node app.js