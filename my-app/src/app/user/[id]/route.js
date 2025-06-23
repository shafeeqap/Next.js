const { users } = require("../route");

export async function GET(req, { params }) {
  const { id } = await params;

  const user = users.find((user) => user.id == parseInt(id));

  return Response.json(user);
}
