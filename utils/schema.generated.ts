/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  ID: true,
  String: true,
};
export const generatedSchema = {
  Todo: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    addTodo: { __type: "Todo!", __args: { title: "String!" } },
  },
  query: {
    __typename: { __type: "String!" },
    getTodos: { __type: "[Todo!]!" },
  },
  subscription: {},
} as const;

export interface Todo {
  __typename?: "Todo";
  id: ScalarsEnums["ID"];
  title: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
  /**
   * Adds a new todo
   */
  addTodo: (args: { title: Scalars["String"] }) => Todo;
}

export interface Query {
  __typename?: "Query";
  /**
   * Gets an array of todos
   */
  getTodos: Array<Todo>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
