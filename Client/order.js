const grpc = require('grpc');
const path = require('path');

const protoPath = path.resolve('../Services/user/Api/Protos');
const proto = grpc.load({ root: protoPath, file: 'order.proto' }).order;

const client = new proto.Order('localhost:50050', grpc.credentials.createInsecure());

const orderId = {
  id: 1,
};

const order = {
};

const addProduct = {
  idOrder: 1,
  idProduct: 3,
};

const orderNew = {
  payed: false,
  user: 3,
};

// client.createOrder(orderNew, (err, response) => {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err);
//   }
// });

// client.getOrder(orderId, (err, response) => {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err);
//   }
// });

client.addProduct(addProduct, (err, response) => {
  if (!err) {
    console.log(response);
  } else {
    console.log(err);
  }
});


// client.UpdateUser(userUpdate, (err, response) => {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err);
//   }
// });
