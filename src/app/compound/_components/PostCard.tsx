"use client";

import { createContext, useContext } from "react";

type PostCardContextType = {
  post: Post;
};

const PostCardContext = createContext<PostCardContextType | undefined>(
  undefined,
);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCardContext");
  }
  return context;
}

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = {
  post: Post;
  children: React.ReactNode;
};

export function PostCard({ post, children }: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-50 p-2">
        {children}
      </div>
    </PostCardContext.Provider>
  );
}

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <h2 className="text-lg font-semibold">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <p className="text-sm">{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p className="text-sm text-gray-500">{post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded"
        type="button"
      >
        Read More
      </button>
      <button className="bg-red-500 text-white px-2 py-1 rounded" type="button">
        Comments
      </button>
    </div>
  );
};

// we use compound components pattern when we want to use component in different places with different elemnet
