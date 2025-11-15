"use client";

import UserContainer from "./_components/UserContainer";

export default function ContainerPatternPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Container Pattern</h1>
      <p className="text-gray-600 mb-8">
        The Container Pattern separates data fetching and logic (smart/container
        components) from presentation (dumb/presentational components). This
        promotes reusability and testability.
      </p>
      <UserContainer />
    </div>
  );
}
