"use client";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserDisplayProps {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export default function UserDisplay({
  user,
  loading,
  error,
}: UserDisplayProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        No user data available
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">ID:</span> {user.id}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}
