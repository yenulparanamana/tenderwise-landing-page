import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WhyTenderWise from './components/WhyTenderWise'
import Team from './components/Team'
import Waitlist from './components/Waitlist'
import PrivacyNotice from './components/PrivacyNotice'
import Footer from './components/Footer'

/*
  TenderWise landing page.
  App.tsx only puts the sections together; each section lives in its own
  component inside src/components so the team can work on them separately.
*/
function App() {
  return (
    <div className="aurora-bg min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhyTenderWise />
        <Team />
        <Waitlist />
        <PrivacyNotice />
      </main>

      <Footer />
    </div>
  )
}

export default App
