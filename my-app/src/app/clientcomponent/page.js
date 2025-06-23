"use client"; // This makes it a client component

export default function ClientComponent() {
  console.log("Client Rendering...");

  return (
    <div>
      <h1>Hello from Client Component</h1>
      <button
        onClick={() => alert("Clicked!")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
}
