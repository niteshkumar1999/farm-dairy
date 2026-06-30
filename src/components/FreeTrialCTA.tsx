export default function FreeTrialCTA() {
  return (
    <section id="free-trial" className="py-16 lg:py-20 bg-gradient-to-r from-farm-gold/20 via-farm-warm to-farm-gold/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14 border border-red-100">
          <span className="inline-block text-5xl mb-4">🥛</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-red-dark mb-4">
            Try Desi Cow Milk FREE for 5 Days!
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Experience the pure taste of farm-fresh Nannu milk delivered to your doorstep every morning.
          </p>
          <a
            href="#app"
            className="inline-flex items-center gap-2 bg-farm-red hover:bg-farm-red-dark text-white font-bold px-10 py-4 rounded-full transition-colors shadow-lg text-lg"
          >
            Claim Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
