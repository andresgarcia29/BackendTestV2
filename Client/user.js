const grpc = require('grpc');
const path = require('path');

const protoPath = path.resolve('../Services/user/Api/Protos');
const proto = grpc.load({ root: protoPath, file: 'user.proto' }).user;

const client = new proto.User('localhost:50050', grpc.credentials.createInsecure());

const user = {
  email: 'fsdfsdf',
  firstName: 'sdfsdf',
  lastName: 'sdfsdf',
  password: 'sdfsf',
};

const userUpdate = {
  id: 15,
  email: 'Me Actualice',
  firstName: 'Me Actualice',
  lastName: 'Me Actualice',
};

const userId = {
  id: 15,
};

client.createUser(user, (err, response) => {
  if (!err) {
    console.log(response);
  } else {
    console.log(err);
  }
});

// client.getUser(userId, (err, response) => {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err);
//   }
// });

// client.UpdateUser(userUpdate, (err, response) => {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log(err);
//   }
// });
