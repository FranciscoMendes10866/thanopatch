import { InferResolvers } from "garph";
import { YogaInitialContext } from "graphql-yoga";

import { mutationType, queryType } from "./schema";

export const resolvers: InferResolvers<
  { Query: typeof queryType; Mutation: typeof mutationType },
  { context: YogaInitialContext }
> = {
  Query: {
    getTodos: (_, __, ctx) => [],
  },
  Mutation: {
    addTodo: (_, args, ctx) => {
      return { id: "", title: "" };
    },
  },
};
