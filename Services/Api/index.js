const grpc = require('grpc');
const path = require('path');

const proto = grpc.load(path.resolve('./Protos/user.proto')).user;

const UserController = require('./Controllers/user');

const server = new grpc.Server();

server.addProtoService(proto.User.service, UserController);

server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
