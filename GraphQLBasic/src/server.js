import { ApolloServer } from "apollo-server-express";
// import typeDefs from "./schema/typeDefs";
import fs from "fs";
import path from "path";
const typeDefs = fs
  .readFileSync(path.join(__dirname, "./schema/schema.gql"), "utf8")
  .toString();
import resolvers from "./resolvers/";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
