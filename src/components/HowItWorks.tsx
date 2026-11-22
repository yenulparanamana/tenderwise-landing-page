import { FolderOpen, Upload, ClipboardCheck, ListChecks } from 'lucide-react'
import SectionHeading from './SectionHeading'
import type { IconCard } from '../types'

const STEPS: IconCard[] = [
  {
    icon: FolderOpen,
    title: 'Build your Evidence Passport',
    text: 'Upload your registration, financial statements, certificates and past project records once. TenderWise reuses them for every tender.',
  },
  {
    icon: Upload,
    title: 'Upload a tender',
    text: 'Add the tender PDFs. TenderWise extracts the financial, legal, technical and document requirements, with page references.',
  },
  {
    icon: ClipboardCheck,
    title: 'Get an explained report',
    text: 'Each requirement is marked Met, Not met, Missing evidence or Manual review, with the evidence and calculation behind it.',
  },
  {
    icon: ListChecks,
    title: 'Close the gaps',
    text: 'Gaps become preparation tasks with deadlines. Upload new evidence and TenderWise re-checks only the affected requirements.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From tender PDF to bid-ready in four steps"
        />

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="card relative p-6">
              <span className="absolute right-5 top-5 text-4xl font-extrabold text-white/10" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="icon-tile">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                <span className="sr-only">Step {index + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
