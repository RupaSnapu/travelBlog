import HeroSection from "../components/HeroSection";
import BlogContent from "../components/BlogContent";
import RelatedPosts from "../components/RelatedPosts";

export default function HomePage() {
  const related = [
    { title: "Backpacking Europe", description: "Tips for low-budget travel across Europe." },
    { title: "Best Hostels in Asia", description: "Affordable places to stay." },
  ];

  return (
    <>
      <HeroSection />
      <BlogContent />
      <RelatedPosts posts={related} />
    </>
  );
}
