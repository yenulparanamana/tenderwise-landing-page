import { Check, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading'

// true = yes, false = no, a string = a short answer such as "Some"
type CellValue = boolean | string

interface ComparisonRow {
  label: string
  typical: CellValue
  tenderwise: CellValue
  tenderwiseNote?: string
}

interface CellProps {
  value: CellValue
  note?: string
}

/*
  Comparison based on the team's competitor analysis.
  It describes "typical" tender platforms in general, without naming
  specific products, because their full capabilities could not be verified.
*/
const ROWS: ComparisonRow[] = [
  { label: 'Find and track tender notices', typical: true, tenderwise: false, tenderwiseNote: 'Upload tenders you find anywhere' },
  { label: 'AI summaries of tenders', typical: true, tenderwise: true },
  { label: 'Check requirements against your own documents', typical: 'Some', tenderwise: true },
  { label: 'Show the evidence and page behind every result', typical: false, tenderwise: true },
  { label: 'Turn gaps into preparation tasks', typical: false, tenderwise: true },
  { label: 'Re-check automatically when evidence changes', typical: false, tenderwise: true },
]

function Cell({ value, note }: CellProps) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-status-met">
        <Check size={18} aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex flex-col items-center text-slate-500">
        <Minus size={18} aria-hidden="true" />
        <span className="sr-only">No</span>
        {note && <span className="mt-1 text-xs text-slate-400">{note}</span>}
      </span>
    )
  }
  return <span className="text-sm text-slate-300">{value}</span>
}

function WhyTenderWise() {
  return (
    <section id="why-tenderwise" aria-labelledby="why-title" className="section">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="why-title"
          eyebrow="Why TenderWise"
          title="Most tools help you find tenders. TenderWise helps you prepare for them."
          description="TenderWise is not a replacement for official procurement systems. It helps you get ready before you submit through them."
        />

        <div className="glass overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[560px] text-left">
            <caption className="sr-only">Comparison of typical tender platforms and TenderWise</caption>
            <thead>
              <tr className="border-b border-white/10">
                <th scope="col" className="px-6 py-5 text-sm font-semibold text-slate-300">Capability</th>
                <th scope="col" className="px-6 py-5 text-center text-sm font-semibold text-slate-300">Typical tender platforms</th>
                <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-electric-light">TenderWise</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-0">
                  <th scope="row" className="px-6 py-4 text-sm font-medium text-white">{row.label}</th>
                  <td className="px-6 py-4 text-center"><Cell value={row.typical} /></td>
                  <td className="bg-electric/[0.06] px-6 py-4 text-center"><Cell value={row.tenderwise} note={row.tenderwiseNote} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default WhyTenderWise
