"use client";
import { PostCard } from "./_components/PostCard";

export default function CompoundPage() {
  return (
    <main className="container mx-auto flex flex-col gap-6 items-center justify-center h-screen ">
      <PostCard
        post={{
          id: 1,
          title: "Hello World",
          content: "This is the first post on our new blog.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>

      <PostCard
        post={{
          id: 1,
          title: "Hello World",
          content: "This is the first post on our new blog.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
      </PostCard>

      <PostCard
        post={{
          id: 1,
          title: "Hello World",
          content: "This is the first post on our new blog.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.User />
      </PostCard>
    </main>
  );
}
