import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-16 lg:py-20 bg-farm-red">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
          Get Healthy Living Tips & Festive Offers
        </h2>
        <p className="text-red-100 mb-8">
          Join our newsletter for seasonal updates and special deals.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-farm-gold"
          />
          <button
            type="submit"
            className="bg-farm-gold hover:bg-farm-gold-light text-farm-red-dark font-bold px-8 py-3.5 rounded-full transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
