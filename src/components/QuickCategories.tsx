const categories = [
  {
    name: 'A2 Desi Cow Milk',
    description: 'Daily fresh, doorstep delivery',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
    emoji: '🥛',
  },
  {
    name: 'Curd (Dahi)',
    description: 'Cultured, creamy, natural',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    emoji: '🍶',
  },
  {
    name: 'Paneer',
    description: 'Soft, fresh, high-protein',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
    emoji: '🧀',
  },
  {
    name: 'A2 Ghee',
    description: 'Traditional bilona method',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
    emoji: '🫙',
  },
]

export default function QuickCategories() {
  return (
    <section id="products" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark">
            Explore Quick Categories
          </h2>
          <a href="#" className="text-farm-red font-semibold hover:text-farm-red-dark transition-colors flex items-center gap-1">
            See All
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative rounded-2xl overflow-hidden bg-farm-warm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-2xl mb-2 block">{cat.emoji}</span>
                <h3 className="font-serif font-semibold text-lg text-farm-red-dark">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
