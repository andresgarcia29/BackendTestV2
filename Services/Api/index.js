const grpc = require('grpc');
const path = require('path');

const protoUser = grpc.load(path.resolve('./Protos/user.proto'));
const protoOrder = grpc.load(path.resolve('./Protos/order.proto'));
const { User } = require('../../database/models');

const server = new grpc.Server();

server.addProtoService(protoUser.user.UserControllerService.service, {
  createUser(call, callback) {
    // call.request = req.body
    console.log(call.request);
  },
});
