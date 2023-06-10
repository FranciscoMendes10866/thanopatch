import { InferResolvers } from "garph";
import { YogaInitialContext } from "graphql-yoga";
import { eq } from "drizzle-orm";
import dayjs from "dayjs";

import { mutationType, queryType } from "./schema";
import { db } from "../db/config";
import { todos } from "../db/schema";

type Resolvers = InferResolvers<
  { Query: typeof queryType; Mutation: typeof mutationType },
  { context: YogaInitialContext }
>;

export const resolvers: Resolvers = {
  Query: {
    getTodos: (_, __, ctx) => {
      return db.select().from(todos).all();
    },
  },
  Mutation: {
    addTodo: (_, { title }, ctx) => {
      return db
        .insert(todos)
        .values({
          title,
          createdAt: dayjs().unix(),
        })
        .returning()
        .get();
    },
    removeTodo: (_, { id }, ctx) => {
      return db.delete(todos).where(eq(todos.id, id)).returning().get();
    },
  },
};
