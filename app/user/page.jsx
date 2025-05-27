import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="p-6 text-red-500">You must be logged in.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p>Welcome {session.user.name}!</p>
    </div>
  );
}
