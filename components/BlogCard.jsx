export default function BlogCard({ title, excerpt }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  );
}
