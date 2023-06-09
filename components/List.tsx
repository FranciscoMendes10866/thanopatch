import type { Infer } from "garph";

import { resolve } from "../utils/gqty";
import { TodoGQL } from "../server/schema";

type Todos = Array<Infer<typeof TodoGQL>>;

export const prepare = (todos: Todos) => todos.map((todo) => todo.title);

export default async function List() {
  const data = await resolve(({ query: { getTodos } }) => prepare(getTodos));

  return (
    <ul>
      {data?.map((todo, index) => (
        <li
          className="card w-96 bg-base-100 shadow-xl cursor-pointer"
          key={index}
        >
          <div className="card-body">
            <p>{todo}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
