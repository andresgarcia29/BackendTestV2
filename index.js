const express = require('express');
const bodyParser = require('express');
const morgan = require('morgan');
const sequilize = require('sequelize');
const cors = require('cors');
const passport = require('passport');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
  console.log("API running");
});