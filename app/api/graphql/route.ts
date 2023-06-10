import { createYoga } from "graphql-yoga";

import { schema } from "../../../server/gql";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response }
});

export { handleRequest as GET, handleRequest as POST }
