import { ApolloServer } from 'apollo-server';
import typeDefs from './src/schema.js';
import productResolvers from './src/resolvers/products.js';
import userResolvers from './src/resolvers/users.js';
import ProductAPI from './src/datasources/products.js';
import UserAPI from './src/datasources/users.js';

const resolvers = {
  Query: Object.assign({}, productResolvers.Query, userResolvers.Query),
  Mutation: Object.assign({}, productResolvers.Mutation, userResolvers.Mutation),
  User: Object.assign({}, userResolvers.User),
  Meal: Object.assign({}, userResolvers.Meal),
};

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        productAPI: new ProductAPI(),
        userAPI: new UserAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
