import Header from './components/Header'
import OfferBanner from './components/OfferBanner'
import Hero from './components/Hero'
import QuickCategories from './components/QuickCategories'
import WhyChoose from './components/WhyChoose'
import Bestsellers from './components/Bestsellers'
import Subscription from './components/Subscription'
import Reviews from './components/Reviews'
import FestivalSpecials from './components/FestivalSpecials'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import FreeTrialCTA from './components/FreeTrialCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <OfferBanner />
        <Hero />
        <QuickCategories />
        <WhyChoose />
        <Bestsellers />
        <Subscription />
        <Reviews />
        <FestivalSpecials />
        <HowItWorks />
        <About />
        <Blog />
        <Newsletter />
        <FreeTrialCTA />
      </main>
      <Footer />
    </>
  )
}
