const items = ['Diya', 'Ladoo', 'Rangoli', 'Gift']

const festivalImages = [
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80',
  'https://images.unsplash.com/photo-1607927149226-66e8753e2f9a?w=400&q=80',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
  'https://images.unsplash.com/photo-1513558161293-2ff289012a0c?w=400&q=80',
]

export default function FestivalSpecials() {
  return (
    <section id="catalog" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={item}
                className={`rounded-2xl overflow-hidden aspect-square ${
                  i % 2 === 0 ? 'mt-8' : ''
                }`}
              >
                <img
                  src={festivalImages[i]}
                  alt={item}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark mb-4">
              Festival Specials
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Celebrate with Ganesh Chaturthi sweets & Diwali gifting.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-farm-warm text-farm-red-dark font-medium px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-farm-red hover:bg-farm-red-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Browse Seasonal Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
