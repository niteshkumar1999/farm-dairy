const reviews = [
  {
    name: 'Priya S.',
    rating: 5,
    text: 'The A2 milk tastes so pure and fresh! My kids love it. Delivery is always on time every morning.',
    source: 'Google Play Store',
  },
  {
    name: 'Rajesh K.',
    rating: 5,
    text: 'Best ghee I have ever tasted. You can tell it is made the traditional way. Highly recommend Vrindavan Farm.',
    source: 'Google Play Store',
  },
  {
    name: 'Ananya M.',
    rating: 5,
    text: 'Switched to Vrindavan Farm 6 months ago and never looked back. The subscription is so convenient.',
    source: 'Google Play Store',
  },
]

export default function Reviews() {
  return (
    <section className="py-16 lg:py-20 bg-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-green-dark text-center mb-4">
          See why 1000+ families trust Vrindavan Farm
        </h2>
        <p className="text-center text-gray-500 mb-12">Review from Google Play Store</p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-farm-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-farm-green-dark">{review.name}</span>
                <span className="text-xs text-gray-400">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
