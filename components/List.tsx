import { Infer } from "garph";
import { request, gql, GraphQLClient } from "graphql-request";

import { TodoGQL } from "../server/gql/schema";
import ListItem from "./ListItem";

const GQL_URL = "http://localhost:3000/api/graphql";

const query = gql`
  query getTodos {
    getTodos {
      id
      title
    }
  }
`;

interface QueryData {
  getTodos: Array<Infer<typeof TodoGQL>>;
}

const mutation = gql`
  mutation removeTodo($id: Int!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

async function removeItem(id: number) {
  "use server";
  const graphQLClient = new GraphQLClient(GQL_URL);
  await graphQLClient.request(mutation, { id });
}

export default async function List() {
  const { getTodos } = await request<QueryData>(GQL_URL, query);

  return (
    <ul className="space-y-4">
      {getTodos?.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            title={todo.title}
            todoId={todo.id}
            removeItem={removeItem}
          />
        );
      })}
    </ul>
  );
}
