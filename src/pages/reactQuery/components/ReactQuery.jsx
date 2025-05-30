import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
const POSTS = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function ReactQuery() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });
  if (postsQuery.isLoading) return <h1>Loading ...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
