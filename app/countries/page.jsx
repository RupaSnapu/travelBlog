// // import CountryCard from '../../components/CountryCard';

// // async function getCountries() {
// //   const res = await fetch('https://restcountries.com/v3.1/all');
// //   return res.json();
// // }

// // export default async function CountriesPage() {
// //   const countries = await getCountries();

// //   return (
// //     <div className="max-w-6xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Explore Countries</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {countries.slice(0, 20).map((country) => (
// //           <CountryCard
// //             key={country.cca3}
// //             name={country.name.common}
// //             capital={country.capital?.[0]}
// //             flag={country.flags.svg}
// //             slug={country.name.common.toLowerCase().replace(/\s+/g, '-')}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import CountryCard from '../../components/CountryCard';

// async function fetchCountries() {
//   const res = await fetch('https://restcountries.com/v3.1/all');
//   if (!res.ok) throw new Error('Failed to fetch countries');
//   return res.json();
// }

// export default async function CountriesPage() {
//   const countries = await fetchCountries();

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Explore Countries</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {countries.slice(0, 20).map((country) => (
//           <CountryCard
//             key={country.cca3}
//             name={country.name.common}
//             capital={country.capital?.[0]}
//             flag={country.flags.svg}
//             slug={country.name.common.toLowerCase().replace(/\s+/g, '-')}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// 'use client'
// import { useState, useEffect } from 'react';

// export default function CountriesPage() {
//   const [countries, setCountries] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchCountries() {
//       try {
//         const res = await fetch('https://restcountries.com/v3.1/all');
//         if (!res.ok) throw new Error('Failed to fetch countries');
//         const data = await res.json();
//         setCountries(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     }

//     fetchCountries();
//   }, []);

//   if (loading) return <p className="text-blue-500 p-4">Loading...</p>;
//   if (error) return <p className="text-red-500 p-4">Error: {error}</p>;

//   const country = countries[currentIndex];

//   const next = () => {
//     if (currentIndex < countries.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
//       <h1 className="text-3xl font-bold mb-6">Country Viewer</h1>

//       <img src={country.flags.svg} alt="flag" className="w-64 mx-auto mb-4 rounded shadow" />
//       <h2 className="text-2xl font-semibold">{country.name.common}</h2>
//       <p className="text-gray-600 mb-2">Capital: {country.capital?.[0] || 'N/A'}</p>
//       <p className="text-gray-600 mb-2">Region: {country.region}</p>
//       <p className="text-gray-600 mb-4">Population: {country.population.toLocaleString()}</p>

//       <div className="flex justify-between">
//         <button
//           onClick={prev}
//           disabled={currentIndex === 0}
//           className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={next}
//           disabled={currentIndex === countries.length - 1}
//           className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


// This runs on the server side during SSR
// import CountrySlideshow from './CountrySlideshow';

// export default async function CountriesPage() {
//   const res = await fetch('https://restcountries.com/v3.1/all');

//   if (!res.ok) {
//     throw new Error('Failed to fetch countries');
//   }

//   const countries = await res.json();

//   // Optional: sort by name for consistency
//   countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

//   return <CountrySlideshow countries={countries} />;
// }

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
  if (!session) return null; // Prevent flash of content while redirecting

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Explore Countries</h1>
      <p className="mb-6">Welcome, {session.user.name}!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CountryCard 
          name="France" 
          description="Explore the Eiffel Tower and Parisian cafés." 
        />
        <CountryCard 
          name="Japan" 
          description="Visit Tokyo, Kyoto, and Mount Fuji." 
        />
        <CountryCard 
          name="Brazil" 
          description="Discover Rio Carnival and Amazon Rainforest." 
        />
      </div>
    </div>
  );
}

function CountryCard({ name, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
