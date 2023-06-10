"use client";

import { useQuery } from "../utils/gqty";

export default function List() {
  const { getTodos } = useQuery({ suspense: true });

  return (
    <ul className="space-y-4">
      {getTodos?.map((todo, index) => {
        if (!todo.title) return null;

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
