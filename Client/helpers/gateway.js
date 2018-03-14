const fs = require('fs');
const path = require('path');
const protosPath = path.resolve('./lib/protos');
const grpc = require('grpc');

class Gateway {
  constructor() {
    const credentials = grpc.credentials.createInsecure();
    const directories = this.getDirectories(protosPath);

    directories.forEach((e) => {
      const proto = grpc.load({
        root: protosPath,
        file: `${e}.proto`,
      })[e];
      const convert = `${e.charAt(0).toLocaleUpperCase()}${e.slice(1)}`
      this[e] = new proto[convert]('user:50050', credentials);
    });
  }

  request(client, method, data) {
    client = client.charAt(0).toLocaleLowerCase() + client.slice(1);

    return new Promise((resolve, reject) => {
      this[client][method](data, (error, result) => {
        if (error) {
          let parsedError;

          try {
            parsedError = JSON.parse(error.message);
          } catch (e) {
            parsedError = {
              path: 'Internal server error',
              message: error
            };
          }

          return reject(parsedError);
        }
        return resolve(result);
      });
    });
  }

  getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
      .map(file => {
        if (!fs.statSync(path.join(srcpath, file)).isDirectory()) {
          return file.replace('.proto', '');
        }
      });
  }

  sendUser(service, method, data) {
    return this.request(service, method, data);
  }
}

module.exports = new Gateway();
