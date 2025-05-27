import TipCard from "../../components/TipCard";

export default function TravelOnBudgetPage() {
  const tips = [
    { title: "Use Local Transport", description: "Buses and trains are cheaper than taxis." },
    { title: "Eat Street Food", description: "Affordable and authentic meals." },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Travel on a Budget</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {tips.map((tip, i) => (
          <TipCard key={i} title={tip.title} description={tip.description} />
        ))}
      </div>
    </div>
  );
}
