import LandingGeoHero from './components/LandingGeoHero'
import FeaturesSection from './components/FeaturesSection'
import AppScreenshotCarousel from './components/AppScreenshotCarousel'
import { PricingSection } from './components/PricingSection'
import { FAQSection } from './components/FAQSection'

function App() {
  return (
    <main>
      <LandingGeoHero />
      <AppScreenshotCarousel />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </main>
  )
}

export default App
