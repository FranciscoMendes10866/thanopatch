import Link from "next/link";
import { redirect } from "next/navigation";
import { GraphQLClient, gql } from "graphql-request";
import { z } from "zod";

const mutation = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      id
    }
  }
`;

const formValuesSchema = z.object({
  title: z.string().min(3),
});

async function addTodo(formData: FormData) {
  "use server";

  const formValues = {} as any;
  for (const [key, value] of [...formData.entries()]) {
    if (key.includes("ACTION_ID")) continue;
    formValues[key] = value.valueOf();
  }

  const parsed = await formValuesSchema.parseAsync(formValues);
  const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
  await graphQLClient.request(mutation, parsed);
  redirect("/");
}

export default function Page() {
  return (
    <div className="max-w-xs space-y-6">
      <Link href=".." className="btn btn-ghost">
        Go back
      </Link>

      <form action={addTodo} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Task title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here..."
            className="input input-bordered w-full max-w-xs"
            required
            minLength={3}
          />
        </div>

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
