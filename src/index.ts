import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './lib/api/graphql';

new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url} 🚀 `);
});
