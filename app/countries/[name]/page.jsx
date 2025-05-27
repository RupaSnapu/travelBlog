async function getCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}

export default async function CountryPage({ params }) {
  const countries = await getCountries();
  const nameFromUrl = params.name.replace(/-/g, ' ').toLowerCase();

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === nameFromUrl
  );

  if (!country) {
    return <p className="p-6">Country not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
      <img src={country.flags.svg} alt="flag" className="h-48 mb-4" />
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
    </div>
  );
}
