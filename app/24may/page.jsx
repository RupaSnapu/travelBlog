export default function HomePage() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/image.png')] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-white text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mb-6">
          Build Modern Interfaces with Tailwind CSS
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Responsive, utility-first design system integrated with Next.js and App Router.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-sm sm:text-base"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="border border-white hover:border-blue-300 text-white hover:text-blue-300 px-6 py-3 rounded-md transition duration-300 text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
