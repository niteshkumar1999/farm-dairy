export default function About() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d647d02?w=800&q=80"
              alt="Our Farm"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark mb-6">
              About Nannu Farm
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our cows graze freely on natural fodder, ensuring purity and vitality in every drop
              of milk. Every product is crafted in small batches to maintain authenticity and
              freshness. We uphold eco-friendly practices, minimizing waste and honoring
              nature&apos;s cycle. More than just milk, we bring the wholesome spirit of the farm
              directly to your home.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-farm-red font-semibold hover:text-farm-red-dark transition-colors"
            >
              Read our story
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
