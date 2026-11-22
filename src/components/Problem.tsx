import { FileText, CircleHelp, FileWarning, RefreshCw } from 'lucide-react'
import SectionHeading from './SectionHeading'
import type { IconCard } from '../types'

const PROBLEMS: IconCard[] = [
  {
    icon: FileText,
    title: 'Long, complex tender documents',
    text: 'Requirements are spread across several PDFs and written in financial, legal and technical language.',
  },
  {
    icon: CircleHelp,
    title: 'Unclear eligibility',
    text: 'Working out turnover averages, experience rules or CIDA grades by hand is slow and easy to get wrong.',
  },
  {
    icon: FileWarning,
    title: 'Missing or expired documents',
    text: 'A missing certificate or out-of-date financial statement is often discovered just before the deadline.',
  },
  {
    icon: RefreshCw,
    title: 'Requirements that change',
    text: 'Amendments and clarifications can change who qualifies, and they are easy to overlook.',
  },
]

function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="problem-title"
          eyebrow="The problem"
          title="Preparing for a tender shouldn't need a consultant"
          description="Most SMEs don't have procurement officers, accountants or legal experts reviewing every opportunity. So good opportunities are missed, or time is wasted on bids that were never eligible."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card p-6">
              <span className="icon-tile">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
