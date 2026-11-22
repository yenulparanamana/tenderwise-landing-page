import { ArrowRight, Sparkles } from 'lucide-react'
import DashboardPreview from './DashboardPreview'

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative px-4 pb-24 pt-36 sm:pt-44">
      {/* Background lighting */}
      <div className="grid-texture" aria-hidden="true" />
      <div className="light-beam" aria-hidden="true" />
      <div className="light-beam-core" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow fade-up">
          <Sparkles size={15} aria-hidden="true" />
          AI-powered tender eligibility for Sri Lankan SMEs
        </span>

        <h1
          id="hero-title"
          className="fade-up delay-1 mt-7 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Know if you qualify
          <span className="text-gradient block">before you bid</span>
        </h1>

        <p className="fade-up delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          TenderWise reads government tender documents, checks every requirement against your company&apos;s
          own evidence, explains each result, and turns gaps into a clear preparation plan before the
          deadline.
        </p>

        <div className="fade-up delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 font-semibold text-white transition-colors hover:bg-electric-light"
          >
            Join the waitlist
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#how-it-works"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="fade-up delay-4 relative mx-auto mt-20 max-w-6xl sm:mt-24">
        <div className="light-pool" aria-hidden="true" />
        <DashboardPreview />
      </div>
    </section>
  )
}

export default Hero
