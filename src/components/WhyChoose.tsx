const features = [
  {
    icon: '🌅',
    title: 'Farm Fresh, Every Morning',
    description: 'Milk sourced & delivered daily.',
  },
  {
    icon: '🌿',
    title: '100% Natural',
    description: 'No preservatives. No hormones.',
  },
  {
    icon: '🐄',
    title: 'A2 Desi Breeds',
    description: 'Traditional Indian cows.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Trusted by 1000+ Families',
    description: 'Across Bangalore.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-20 bg-farm-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark text-center mb-12">
          Why Choose Nannu Farm?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-serif font-semibold text-lg text-farm-red-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
