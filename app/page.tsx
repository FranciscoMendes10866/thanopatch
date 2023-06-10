import React, { Suspense } from "react";
import Link from "next/link";
import dayjs from "dayjs";

import List from "../components/List";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-row items-start justify-between max-w-xl">
        <span className="space-y-2">
          <h1 className="text-3xl text-primary-content">Today&apos;s tasks</h1>
          <p className="text-lg">{dayjs().format("dddd, D MMM")}</p>
        </span>
        <Link className="btn" href="/new">
          New Task
        </Link>
      </div>

      <Suspense fallback={<span className="loading loading-ring loading-lg" />}>
        <List />
      </Suspense>
    </div>
  );
}
