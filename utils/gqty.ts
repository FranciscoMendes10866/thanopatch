import { createClient, InferClient } from "@garph/gqty";
import {
  createGeneratedSchema,
  createScalarsEnumsHash,
} from "@garph/gqty/dist/utils";

import type { queryType, mutationType } from "../server/schema";
import { schema } from "../server";

type ClientTypes = InferClient<{
  query: typeof queryType;
  mutation: typeof mutationType;
}>;

export const { useQuery, useMutation, query, mutation, resolve } =
  createClient<ClientTypes>({
    generatedSchema: createGeneratedSchema(schema),
    scalarsEnumsHash: createScalarsEnumsHash(schema),
    url:
      process.env.NODE_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
        : "http://localhost:3000/api/graphql",
  });

// Needed for the babel plugin
export { schema as compiledSchema };
