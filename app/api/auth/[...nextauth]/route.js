// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// const handler = NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };







import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };










// 'use client'; // if you are using Next.js 13+ app directory with client components

// import Navbar from "@/components/Navbar";
// import { useSession, signIn, signOut } from "next-auth/react";

// import Link from "next/link";

// export default function HomePage() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (!session) {
//     return (
//       <div style={{ textAlign: "center", marginTop: 50 }}>
//         <h2>Please sign in to continue</h2>
//         <button onClick={() => signIn("github")}>Sign in with GitHub</button>
//       </div>
//     );
//   }

//   // If logged in, show your components
//   return (
//     <div style={{ padding: 20 }}>
//       <header>
//         <h1>Welcome, {session.user.name}</h1>
//         <button onClick={() => signOut()}>Sign out</button>
//       </header>
//            <Navbar/>
//     </div>
//   );
// }
