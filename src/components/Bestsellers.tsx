const products = [
  {
    name: 'Desi Cow Milk',
    subtitle: '1L Daily Subscription',
    price: '₹45 / 500ml',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
  },
  {
    name: 'Curd (Dahi)',
    subtitle: '500g Cup',
    price: '₹65 / 400g',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
  },
  {
    name: 'Paneer',
    subtitle: '200g Pack',
    price: '₹129 / 200g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
  },
  {
    name: 'Desi Cow Ghee',
    subtitle: '500ml Jar',
    price: '₹1199 / 500g',
    image: '//https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  },
]

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark">
            Bestsellers
          </h2>
          <a href="#" className="text-farm-red font-semibold hover:text-farm-red-dark transition-colors">
            See all
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group bg-farm-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-semibold text-lg text-farm-red-dark">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{product.subtitle}</p>
                <p className="mt-3 font-bold text-farm-red text-lg">{product.price}</p>
                <button
                  type="button"
                  className="mt-4 w-full bg-farm-red hover:bg-farm-red-dark text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
