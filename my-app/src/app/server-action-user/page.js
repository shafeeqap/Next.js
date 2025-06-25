import { updateUser } from "./actions";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function UserServerAction() {
  const authDetails = await auth();
  const userDetails = await currentUser();
  
  console.log(authDetails);
  console.log(userDetails);
  
  

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    "https://685945e5138a18086dfdcad9.mockapi.io/users"
  );
  const users = await response.json();

  return (
    <div>
      <form
        action={updateUser}
        className="w-96 bg-slate-300 shadow-lg rounded-lg p-6 border border-gray-300 my-5"
      >
        <div className="flex-col items-center gap-4 mb-4">
          <label className="text-gray-700 font-medium w-20">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="flex p-2 border border-gray-300 rounded-lg focus:outline bg-white my-3"
          />
          <button
            type="submit"
            className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
      <h1>Users List (Server Component)</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-blue-100 border border-blue-300 p-2.5"
          >
            <strong className="text-blue-700">{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
