// 'use client';
// import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <button
//         onClick={() => signIn("github")}
//         className="bg-black text-white px-6 py-3 rounded-lg"
//       >
//         Sign in with GitHub
//       </button>
//     </div>
//   );
// }

// app/login/page.jsx
'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <p className="text-gray-600 mb-4 text-center">
          Use a provider to sign in
        </p>

        <button
          onClick={() => signIn('github')}
          className="w-full py-2 px-4 mb-4 bg-black text-white rounded hover:bg-gray-900"
        >
          Sign in with GitHub
        </button>

        {/* You can add more providers here */}
      </div>
    </div>
  );
}
