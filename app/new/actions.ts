"use server";

import { GraphQLClient, gql } from "graphql-request";

const mutation = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      id
    }
  }
`;

export async function addTodo(title: string) {
  const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
  await graphQLClient.request(mutation, { title });
}
