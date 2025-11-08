"use client";

import useFetchComments from "@/hooks/useFetchComments";

export default function CustomHooksPage() {
  const { comments, loading, error } = useFetchComments();
  console.log("comments", comments);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="container mx-auto flex flex-col gap-6 items-center justify-center ">
      {comments.map((comment) => (
        <div key={comment.id}>{comment.id}</div>
      ))}
    </main>
  );
}
