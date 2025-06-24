
import { revalidatePath } from "next/cache";


export async function updateUser(formData) {
  "use server"; // directive


  const name = formData.get("name");

  const response = await fetch(
    "https://685945e5138a18086dfdcad9.mockapi.io/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }
  );

  revalidatePath("/users") // If you want the new user to appear after submission, you can call
}
