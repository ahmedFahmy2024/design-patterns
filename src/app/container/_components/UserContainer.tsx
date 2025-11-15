"use client";

import { useState, useEffect } from "react";
import UserDisplay from "./UserDisplay";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserContainer() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser: User = {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
        };

        setUser(mockUser);
        setError(null);
      } catch (err) {
        setError("Failed to load user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return <UserDisplay user={user} loading={loading} error={error} />;
}
