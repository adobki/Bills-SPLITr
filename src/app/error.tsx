import React from "react";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
        <p className="mt-2 text-gray-500">{error.message || "An unexpected error occurred."}</p>
      </div>
    </main>
  );
}
