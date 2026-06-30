const posts = [
  {
    title: 'Why Nannu Milk is Healthier than other Milk',
    description: 'Understand the difference and benefits.',
    image: 'https://images.unsplash.com/photo-1550583724-db269cb88161?w=600&q=80',
  },
  {
    title: 'Traditional Ghee Making',
    description: 'The traditional way of making ghee explained.',
    image: '//https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80',
  },
  {
    title: 'Nannu\'s Desi Cow Paneer: The Taste of Tradition and Health',
    description: 'Understand why Desi Cow Paneer is the heathiest choice for protein',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
  },
]

export default function Blog() {
  return (
    <section className="py-16 lg:py-20 bg-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark mb-10">
          From the Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-farm-red-dark mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{post.description}</p>
                <a
                  href="#"
                  className="text-farm-red font-semibold text-sm hover:text-farm-red-dark transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
