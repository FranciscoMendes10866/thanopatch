import { Infer, InferResolvers } from "garph";
import { YogaInitialContext } from "graphql-yoga";
import delay from "delay";
import cuid from "cuid";

import { TodoGQL, mutationType, queryType } from "./schema";

const mockedDB: Infer<typeof TodoGQL>[] = [];

export const resolvers: InferResolvers<
  { Query: typeof queryType; Mutation: typeof mutationType },
  { context: YogaInitialContext }
> = {
  Query: {
    getTodos: async (_, __, ctx) => {
      await delay(1_200);
      return mockedDB;
    },
  },
  Mutation: {
    addTodo: async (_, { title }, ctx) => {
      await delay(1_000);
      const item = { id: cuid(), title };
      mockedDB.push(item);
      return item;
    },
  },
};
