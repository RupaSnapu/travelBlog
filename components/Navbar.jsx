
// 'use client';

// import { useSession, signIn, signOut } from 'next-auth/react';

// export default function Navbar() {
//   const { data: session, status } = useSession();

//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Travel Blog</h1>

//       {status === 'loading' ? (
//         <p>Loading...</p>
//       ) : session ? (
//         <div className="flex items-center gap-4">
//           <a href="/blogs">Blogs</a>
//           <a href="/budget">Budget Travel</a>
//           <a href="/countries">Countries</a>
//           <button
//             onClick={() => signOut()}
//             className="bg-red-600 px-3 py-1 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={() => signIn('github')}
//           className="bg-blue-600 px-3 py-1 rounded"
//         >
//           Login
//         </button>
//       )}
//     </nav>
//   );
// }



'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession();

  // While session is loading, don't show anything
  if (status === 'loading') {
    return null;
  }

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Travel Blog</h1>

      {session ? (
        <div className="flex items-center gap-4">
          <Link href="/blogs">Blogs</Link>
          <Link href="/budget">Budget Travel</Link>
          <Link href="/countries">Countries</Link>
          <button
            onClick={() => signOut()}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn('github')}
          className="bg-blue-600 px-3 py-1 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
}
