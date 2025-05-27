import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blogs List</h1>
      <ul>
        <li>
          <Link href="/blogs/exploring-paris">Exploring Paris</Link>
        </li>
        <li>
          <Link href="/blogs/budget-bali-trip">Budget Bali Trip</Link>
        </li>
      </ul>
    </div>
  );
}
