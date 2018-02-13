const models = require('../../database/models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../../config/JWTOptions');

module.exports = {
  signUp: async (req, res) => {
    if (!req.body) return res.status(200).send({ message: 'Empty data' });
    await models.User.create(req.body).then(() => {
      res.status(200).send({
        message: 'User was created correctly',
      });
    }).catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
  },

  signIn: async (req, res) => {
    if (!req.body) return res.status(200).send({ message: 'Empty data' });
    await models.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((data) => {
      if (!data) return res.status(200).send({ message: 'User not found' });
      const user = data.dataValues;
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const payload = { user: user.id };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.status(200).send({
          token,
        });
      } else {
        return res.status(200).send({ message: 'The password is incorrect' });
      }
    }).catch(() => {
      res.status(500).send({
        message: 'Errror',
      });
    });
  },

};
