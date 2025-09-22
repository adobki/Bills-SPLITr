import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">Go Home</Link>
    </main>
  );
}
