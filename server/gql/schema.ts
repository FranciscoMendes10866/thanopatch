import { GarphSchema } from "garph";

export const g = new GarphSchema();

export const TodoGQL = g.type("Todo", {
  id: g.int(),
  title: g.string(),
  createdAt: g.int(),
});

export const queryType = g.type("Query", {
  getTodos: g.ref(TodoGQL).list().description("Gets an array of todos"),
});

export const mutationType = g.type("Mutation", {
  addTodo: g
    .ref(TodoGQL)
    .args({
      title: g.string(),
    })
    .description("Adds a new todo"),
  removeTodo: g
    .ref(TodoGQL)
    .optional()
    .args({
      id: g.int(),
    })
    .description("Adds a new todo"),
});
