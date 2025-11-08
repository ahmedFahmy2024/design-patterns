import { useEffect, useState } from "react";

type comments = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export default function useFetchComments() {
  const [comments, setComments] = useState<comments[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { comments, loading, error };
}
