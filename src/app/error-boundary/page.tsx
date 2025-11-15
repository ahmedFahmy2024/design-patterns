"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import BuggyComponent from "./_components/BuggyComponent";

export default function ErrorBoundaryPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Error Boundary Pattern</h1>
      <p className="text-gray-600 mb-8">
        The Error Boundary Pattern is a React class component that catches
        JavaScript errors anywhere in the component tree, logs those errors, and
        displays a fallback UI instead of crashing the entire app.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Example:</h2>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              Catches errors during rendering, lifecycle methods, and
              constructors
            </li>
            <li>Prevents entire app from crashing</li>
            <li>Logs error details for debugging</li>
            <li>Shows fallback UI to users</li>
            <li>Provides recovery mechanism</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
