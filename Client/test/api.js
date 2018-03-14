const request = require('superagent');
const seeds = require('./seeds/seed');

class CreatePetition{
  constructor(url) {
    seeds;
    this.endPoint = 'http://localhost:4000/graphql';
    this.build = '';
    this.request = request;
    this.urlFind = url || '';
    this.obj = '';
    this.need = '';
    this.state = '';
    this.result = {};
  }
  async buildMutation(name, payload, fields){
    this.state = 'mutation';
    await this.parseAll(payload, fields)
    this.build = `
        mutation {
          ${name} (input: {
            ${this.obj}
          }) {
            ${this.need}
          }
        }
    `
  }
  async buildQuery(name, payload, fields){
    this.state = 'query';
    await this.parseAll(payload, fields)
    this.build = `
      query {
        ${name}(input: {
          ${this.obj}
        }) {
          ${this.need}
        }
      }
    `
  }
  async parsePayload(payload) {
    if (this.state == 'query') {
      for (let x in payload) {
        this.obj += x + ': ' + payload[x] + ',\n';
      }
    } else if (this.state = 'mutation') {
      for (let x in payload) {
        typeof (payload[x]) === 'number' ? this.obj += x + ': ' + payload[x] + ',\n' : false;
        typeof (payload[x]) === 'string' ? this.obj += x + ': "' + payload[x] + '",\n' : false;
        typeof (payload[x]) === 'boolean' ? this.obj += x + ': ' + payload[x] + ',\n' : false;
      }
    }
  }
  async parseField(fields) {
    this.need = fields.map(e => e + ',\n');
  }
  async parseAll(payload, fields) {
    await this.parsePayload(payload);
    await this.parseField(fields);
  }
  async clear() {
    this.obj = '';
    this.need = '';
  }
  async execute() {
    await this.request
      .post(this.endPoint + this.urlFind)
      .send(JSON.stringify({ query: this.build }))
      .set('Content-type', 'application/json')
      .then(res => {
        this.result = JSON.parse(res.text);
      })
      .catch(err => {
        this.result = err;
      });
    this.clear();
  }
}

module.exports = new CreatePetition();
