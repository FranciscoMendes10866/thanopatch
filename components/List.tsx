import { Infer } from "garph";
import { request, gql } from "graphql-request";
import { TodoGQL } from "../server/schema";

const document = gql`
  query getTodos {
    getTodos {
      id
      title
    }
  }
`;

interface Data {
  getTodos: Array<Infer<typeof TodoGQL>>;
}

export default async function List() {
  const data = await request<Data>(
    "http://localhost:3000/api/graphql",
    document
  );

  return (
    <ul className="space-y-4">
      {data?.getTodos?.map((todo, index) => {
        return (
          <li
            className="card w-96 bg-base-100 shadow-xl cursor-pointer"
            key={index}
          >
            <div className="card-body">
              <p>{todo.title}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
