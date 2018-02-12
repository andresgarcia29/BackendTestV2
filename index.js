const express = require('express');
const bodyParser = require('express');
const morgan = require('morgan');
const models = require('./database/models/index');
const cors = require('cors');
const passport = require('passport');

const app = express();

process.env.NODE_ENV = 'development';

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

models.sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`API running on ${app.get('port')} port`);
  });
});
