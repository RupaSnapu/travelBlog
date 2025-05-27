'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CountriesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Countries</h1>
      <p className="mb-4">Welcome, {session.user.name} 👋</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">France</h2>
          <p>Explore the Eiffel Tower and Parisian cafés.</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Japan</h2>
          <p>Visit Tokyo, Kyoto, and Mount Fuji.</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Brazil</h2>
          <p>Discover Rio Carnival and Amazon Rainforest.</p>
        </div>
      </div>
    </div>
  );
}




// 'use client';
// import { useEffect, useState } from 'react';

// export default function CountrySlideshow({ countries }) {
//   const [index, setIndex] = useState(0);
//   const [stopped, setStopped] = useState(false);

//   useEffect(() => {
//     if (stopped) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => {
//         if (prev + 1 >= countries.length) {
//           setStopped(true); // stop at last
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 500);

//     return () => clearInterval(interval);
//   }, [stopped, countries.length]);

//   const restart = () => {
//     setIndex(0);
//     setStopped(false);
//   };

//   const country = countries[index];

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg text-center transition-all">
//       <h1 className="text-3xl font-bold mb-6">Country Slideshow for Exploer</h1>

//       <img
//         src={country.flags.svg}
//         alt={`Flag of ${country.name.common}`}
//         className="w-64 h-40 object-contain mx-auto mb-4 rounded border"
//       />

//       <h2 className="text-2xl font-semibold">{country.name.common}</h2>
//       <p className="text-gray-600">Capital: {country.capital?.[0] || 'N/A'}</p>
//       <p className="text-gray-600">Region: {country.region}</p>
//       <p className="text-gray-600 mb-4">Population: {country.population.toLocaleString()}</p>

//       {!stopped ? (
//         <p className="text-sm text-gray-400">Auto-rotating every 0.5 seconds</p>
//       ) : (
//         <div className="mt-4">
//           <p className="text-lg text-green-600 font-medium mb-2">
//             ✅ All countries displayed!
//           </p>
//           <button
//             onClick={restart}
//             className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             🔁 Restart Slideshow
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
