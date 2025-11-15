"use client";

import { useState } from "react";

export default function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a simulated error from the component!");
  }

  return (
    <div className="bg-blue-100 border border-blue-400 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">
        Buggy Component
      </h3>
      <p className="text-blue-600 mb-4">
        Click the button below to trigger an error that will be caught by the
        Error Boundary.
      </p>
      <button
        onClick={() => setShouldThrow(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Trigger Error
      </button>
    </div>
  );
}
