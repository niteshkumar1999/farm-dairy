const steps = [
  {
    number: '1',
    title: 'Download the App',
    description: 'Create your account in seconds.',
    icon: '📱',
  },
  {
    number: '2',
    title: 'Choose / Subscribe',
    description: 'Pick products or start a subscription.',
    icon: '🛒',
  },
  {
    number: '3',
    title: 'Fresh Morning Delivery',
    description: 'Right to your doorstep.',
    icon: '🚚',
  },
]

export default function HowItWorks() {
  return (
    <section id="app" className="py-16 lg:py-20 bg-farm-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-farm-green-dark text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-green-200" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-farm-green text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg relative z-10 mb-6">
                {step.number}
              </div>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-serif font-semibold text-xl text-farm-green-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-farm-green hover:bg-farm-green-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            Download the App
          </a>
        </div>
      </div>
    </section>
  )
}
