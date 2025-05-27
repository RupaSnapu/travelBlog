import TipCard from "./TipCard";

export default function RelatedPosts({ posts }) {
  return (
    <section className="p-4">
      <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <TipCard key={idx} title={post.title} description={post.description} />
        ))}
      </div>
    </section>
  );
}
