
import HeroSection from "./_Home-Components/hero"
import Instructor from "./_Home-Components/instructor"
import PremiumService from "./_Home-Components/our-premium-services"
import AboutUs from "./_Home-Components/about"
import Faq from "./_Home-Components/faq"
import Footer from "./_Home-Components/footer"




export default function Home() {
  return (
    <main className="hide-scrollbar">
      <HeroSection />
      <Instructor />
      <PremiumService />
      <AboutUs />
      <Faq />
      <Footer />
    </main>
  )
}
