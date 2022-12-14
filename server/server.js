const express = require('express');
const path = require('path');
// ApolloServer imports
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas');

const {authMiddleware} = require('./utils/auth');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// creates new Apollo server and passes in schema data
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  await server.start();
  server.applyMiddleware({app});
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};
// applo function here
startServer()


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
