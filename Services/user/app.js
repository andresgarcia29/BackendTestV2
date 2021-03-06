const grpc = require('grpc');
const { join } = require('path');


const proto = grpc.load(join(__dirname, 'Api/Protos/user.proto')).user;
const protoOrder = grpc.load(join(__dirname, 'Api/Protos/order.proto')).order;

const UserController = require('./Api/Controllers/user');
const OrderController = require('./Api/Controllers/order');

const server = new grpc.Server();

server.addProtoService(proto.User.service, UserController);
server.addProtoService(protoOrder.Order.service, OrderController);

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
