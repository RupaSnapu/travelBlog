// 'use client';

// import { signIn, signOut, useSession } from 'next-auth/react';

// export default function AuthButton() {
//   const { data: session, status } = useSession();

//   if (status === 'loading') {
//     return <p className="text-sm text-gray-500">Loading...</p>;
//   }

//   if (session) {
//     return (
//       <div className="flex items-center gap-4">
//         <p className="text-gray-800 text-sm">Hello, {session.user.name}</p>
//         <button
//           onClick={() => signOut()}
//           className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//         >
//           Logout
//         </button>
//       </div>
//     );
//   }

//   return (
//     <button
//       onClick={() => signIn()}
//       className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
//     >
//       Login
//     </button>
//   );
// }

'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  if (session) {
    return (
      <div>
        <p>Hello {session.user.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Login</button>;
}
