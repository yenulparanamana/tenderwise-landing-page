import {
  ShieldCheck,
  SearchCheck,
  ListTodo,
  RefreshCw,
  GitCompare,
  LayoutDashboard,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import type { IconCard } from '../types'

// A feature card; "highlight" marks TenderWise's novelty features
interface Feature extends IconCard {
  highlight?: boolean
}

interface StatusLabel {
  label: string
  className: string
}

const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Company Evidence Passport',
    text: 'A secure, reusable profile of your company documents, with expiry dates tracked so nothing goes out of date unnoticed.',
  },
  {
    icon: SearchCheck,
    title: 'Explainable eligibility checks',
    text: 'Every result links the tender clause, the evidence used and the reason. Turnover averages and date checks are calculated by programmed rules, not guessed by AI.',
    highlight: true,
  },
  {
    icon: ListTodo,
    title: 'Gap-to-Action tasks',
    text: 'Missing or expired evidence is turned into preparation tasks with priorities and deadlines.',
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: 'Continuous reassessment',
    text: 'Upload new evidence and only the affected requirements are re-checked, so your report stays current.',
    highlight: true,
  },
  {
    icon: GitCompare,
    title: 'Tender amendment analysis',
    text: 'Upload a revised tender and see which changes affect your eligibility. Planned as an advanced feature.',
  },
  {
    icon: LayoutDashboard,
    title: 'Bid readiness dashboard',
    text: 'Track opportunities, deadlines and outstanding tasks in one place before submitting through the official system.',
  },
]

const STATUSES: StatusLabel[] = [
  { label: 'Met', className: 'bg-status-met/15 text-status-met' },
  { label: 'Not met', className: 'bg-status-notmet/15 text-status-notmet' },
  { label: 'Missing evidence', className: 'bg-status-missing/15 text-status-missing' },
  { label: 'Manual review', className: 'bg-status-review/15 text-status-review' },
]

function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything you need to prepare a confident bid"
          description="TenderWise uses AI to read tender documents and find evidence, and programmed rules to make the final eligibility decision."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2" aria-label="The four eligibility statuses">
          {STATUSES.map((status) => (
            <span key={status.label} className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${status.className}`}>
              {status.label}
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text, highlight }) => (
            <article
              key={title}
              className={`card p-6 ${highlight ? 'glow-soft border-electric/40' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="icon-tile">
                  <Icon size={22} aria-hidden="true" />
                </span>
                {highlight && (
                  <span className="rounded-full bg-electric/15 px-2.5 py-1 text-xs font-semibold text-electric-light">
                    What makes TenderWise different
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
