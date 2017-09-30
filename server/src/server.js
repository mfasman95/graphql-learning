const express = require('express');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyparser = require('body-parser');
const { schema } = require('./schema.js');

const PORT = process.env.PORT || process.env.NODE_PORT || 4000;
const server = express();

server.get('/', (req, res) => res.send('Hello World!'));
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
server.use('/graphql', bodyparser.json(), graphqlExpress({ schema }));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`))