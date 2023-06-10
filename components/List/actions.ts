"use server";

import { revalidatePath } from "next/cache";
import { GraphQLClient, gql } from "graphql-request";

const mutation = gql`
  mutation removeTodo($id: Int!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

export async function removeTodo(id: number) {
  const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
  await graphQLClient.request(mutation, { id });
  revalidatePath("/");
}
