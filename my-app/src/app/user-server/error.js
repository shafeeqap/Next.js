// app/users/error.js
"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.log("Error fetching users:", error);
  }, [error]);


  
  return (
    <div>
      <h2>❌ Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>🔃 Try Again</button>
    </div>
  );
}
