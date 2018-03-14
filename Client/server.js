const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/');

const PORT = 4000;

const app = express();

app.use('/graphql', bodyParser.json(), bodyParser.urlencoded({extended: true}), graphqlExpress({ schema: schema }));

app.use('/api/v1/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.get('/healthz', (req, res) => {
  res.status(200).send({
    status: 200
  });
});

app.listen(PORT, () => {
  console.log('Server running here');
});
