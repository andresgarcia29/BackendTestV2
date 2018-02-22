const grpc = require('grpc');
const path = require('path');

const protoPath = path.resolve('../Services/Api/Protos/');
const proto = grpc.load({ root: protoPath, file: 'user.proto' }).user;

const client = new proto.User('localhost:50050', grpc.credentials.createInsecure());

const user = {
  email: 'estoeselCliente',
  firstName: 'holamundo',
  lastName: 'holamundo',
  password: 'holamundo',
};

client.createUser(user, (err, response) => {
  if (!err) {
    console.log("No hay error");
  } else {
    console.log(err);
  }
});
