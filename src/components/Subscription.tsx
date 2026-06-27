const benefits = [
  'Order once. Get milk delivered fresh every morning.',
  'Pause or skip anytime.',
  'Recharge wallet and manage deliveries in the app.',
]

export default function Subscription() {
  return (
    <section className="py-16 lg:py-20 bg-farm-green text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Milk Subscription — Simple & Flexible
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-farm-gold flex items-center justify-center text-farm-green-dark text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-green-100 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="#app"
              className="inline-flex mt-8 bg-farm-gold hover:bg-farm-gold-light text-farm-green-dark font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Start Your Subscription Today
            </a>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1550583724-db269cb88161?w=800&q=80"
                alt="Milk Subscription"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-farm-gold text-farm-green-dark font-bold px-5 py-3 rounded-2xl shadow-xl text-sm">
              Daily Delivery 🚚
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
