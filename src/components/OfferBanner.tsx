export default function OfferBanner() {
  return (
    <div id="offers" className="bg-farm-red text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-center">
        <span>
          <span className="inline-block bg-farm-gold text-farm-red-dark text-xs font-bold px-2 py-0.5 rounded mr-2">
            Offer
          </span>
          Try <strong>Nannu Milk FREE for 5 Days</strong> — freshness delivered daily.
        </span>
        <a
          href="#free-trial"
          className="inline-flex items-center gap-1 font-semibold text-farm-gold-light hover:text-white transition-colors whitespace-nowrap"
        >
          View Offers
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
