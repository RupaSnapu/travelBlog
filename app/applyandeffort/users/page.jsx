// // app/users/page.jsx
// export default async function UsersPage() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users', {
//     next: { revalidate: 60 }, // Optional caching
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch users');
//   }

//   const users = await res.json();

//   return (
//     <main>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} style={{ marginBottom: '10px' }}>
//             <strong>{user.name}</strong> – {user.email}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🧠 Concept: useEffect for data fetching
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // 🛑 Handle non-OK responses
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // 🔄 Show loading state
  if (loading) {
    return <p className="text-blue-500">Loading users...</p>;
  }

  // ❌ Show error state
  if (error) {
    return (
      <div className="text-red-600">
        <h2>Error fetching users</h2>
        <p>{error}</p>
      </div>
    );
  }

  // ✅ Show user list
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
