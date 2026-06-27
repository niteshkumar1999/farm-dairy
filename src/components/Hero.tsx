export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-farm-warm via-farm-cream to-green-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-farm-green-dark leading-tight">
              Pure{' '}
              <span className="text-farm-green">A2 Desi Cow Milk</span>
              {' '}& Farm-Fresh Products, Delivered Daily in Bangalore.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              No Adulteration. No Hormones. Just Freshness.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#app"
                className="inline-flex items-center gap-2 bg-farm-green hover:bg-farm-green-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/20"
              >
                Download Our App
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 border-2 border-farm-green text-farm-green hover:bg-farm-green hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Explore Products
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80"
                alt="A2 Desi Cow Milk"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-farm-green-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-white/95 text-farm-green font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                  🥛 A2 Milk
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 hidden sm:block">
              <p className="text-2xl font-bold text-farm-green">1000+</p>
              <p className="text-sm text-gray-500">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
