const models = require('../../../database/models/index');
const getTotally = require('./Helper');

module.exports = {
  create: async (req, res) => {
    if (!req.body) return res.status(200).send({ message: 'Empty data' });
    req.body.user = req.user.id;
    req.body.createdAt = new Date(Date.now());
    await models.Order.create(req.body).then((order) => {
      res.send({
        data: order,
      });
    }).catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
  },
  viewOne: async (req, res) => {
    if (!req.params._id) return res.status(200).send({ message: 'Empty data' });
    await models.Order.findById(req.params._id, {
      include: [
        {
          model: models.User,
          as: 'users',
        },
        {
          model: models.OrderProduct,
          as: 'product_order',
          include: [{
            model: models.Product,
            as: 'product_order',
          }],
        },
      ],
    }).then((order) => {
      if (!order) return res.status(202).send({ message: "This order doesn't exist" });
      res.status(200).send({
        data: order,
      });
    }).catch((err) => {
      res.status(500).send({
        message: `Error ${err}`,
      });
    });
  },
  viewUser: async (req, res) => {
    await models.User.findAll({
      where: {
        email: req.user.email,
      },
      include: [
        {
          model: models.Order,
          as: 'orders',
          include: [{
            model: models.OrderProduct,
            as: 'product_order',
            include: [{
              model: models.Product,
              as: 'product_order',
            }],
          }],
        },
      ],
    }).then((order) => {
      if (!order) return res.status(404).send({ message: "This order doesn't exist" });
      res.status(200).send({
        data: order,
      });
    }).catch(() => {
      res.status(500).send({
        message: 'Error',
      });
    });
  },
  addProduct: async (req, res) => {
    if (!req.params._id || !req.body.product) return res.status(200).send({ message: 'Empty data' });
    const body = {
      orderId: req.params._id,
      productId: req.body.product,
    };
    await models.Order.findById(req.params._id).then((ord) => {
      if (ord.user !== req.user.id) return res.status(200).send({ message: 'You are not the owner for this order' });
    }).then(async () => {
      await models.Product.findById(body.productId).then((product) => {
        if (!product) return res.status(200).send({ message: "This product doesn't exist" });
        models.OrderProduct.create(body).then(() => {
          res.status(200).send({
            message: 'The product has been added',
          });
        }).catch((err) => {
          res.status(500).send({
            message: `Error ${err}`,
          });
        });
      }).catch((err) => {
        res.status(500).send({
          message: `Error ${err}`,
        });
      });
    }).catch((err) => {
      res.status(500).send({
        message: `Error ${err}`,
      });
    });
  },
  checkOut: async (req, res) => {
    if (!req.params._id) return res.status(200).send({ message: 'Empty data' });
    await models.Order.findById(req.params._id, {
      include: [
        {
          model: models.User,
          as: 'users',
        },
        {
          model: models.OrderProduct,
          as: 'product_order',
          include: [{
            model: models.Product,
            as: 'product_order',
          }],
        },
      ],
    }).then((order) => {
      if (!order) return res.status(404).send({ message: "This order doesn't exist" });
      const products = order.product_order;
      const totally = getTotally(products);
      res.status(200).send({
        data: totally,
      });
    }).catch(() => {
      res.status(500).send({
        message: 'Error',
      });
    });
  },
};
