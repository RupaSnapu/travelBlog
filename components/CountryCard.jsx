'use client'
import Link from 'next/link';

export default function CountryCard({ name, capital, flag, slug }) {
  return (
    <Link href={`/countries/${slug}`}>
      <div className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white cursor-pointer">
        <img src={flag} alt={`${name} flag`} className="h-32 w-full object-cover rounded mb-4" />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Capital: {capital || 'N/A'}</p>
      </div>
    </Link>
  );
}
