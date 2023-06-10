"use client";

import { LiHTMLAttributes } from "react";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  todoId: number;
  title: string;
  removeItem: (id: number) => void;
}

export default function ListItem({ todoId, title, removeItem, ...rest }: Props) {
  return (
    <li
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      {...rest}
      onClick={() => removeItem(todoId)}
    >
      <div className="card-body">
        <p>{title}</p>
      </div>
    </li>
  );
}
