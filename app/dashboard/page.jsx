// app/dashboard/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect to login
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 font-bold">Access denied. Please login first.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p>Your email: {session.user.email}</p>
    </div>
  );
}
