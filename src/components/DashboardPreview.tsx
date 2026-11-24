import {
  CircleCheck,
  CircleX,
  TriangleAlert,
  Eye,
  CalendarClock,
  FileText,
  ListChecks,
  Search,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Logo from './Logo'
import type { EligibilityStatus } from '../types'

/*
  A static preview of what the TenderWise app will show.
  ALL DATA HERE IS SAMPLE DATA – the company and figures are fictional
  and are only used to illustrate the eligibility report.
*/

// How each status looks on screen
interface StatusStyle {
  label: string
  icon: LucideIcon
  text: string
  chip: string
  bar: string
}

interface Requirement {
  name: string
  detail: string
  page: string
  status: EligibilityStatus
}

interface Task {
  title: string
  due: string
  priority: 'High' | 'Medium' | 'Low'
}

// The four eligibility statuses used across TenderWise
const STATUS: Record<EligibilityStatus, StatusStyle> = {
  met: {
    label: 'Met',
    icon: CircleCheck,
    text: 'text-status-met',
    chip: 'bg-status-met/15 text-status-met',
    bar: 'bg-status-met',
  },
  notMet: {
    label: 'Not met',
    icon: CircleX,
    text: 'text-status-notmet',
    chip: 'bg-status-notmet/15 text-status-notmet',
    bar: 'bg-status-notmet',
  },
  missing: {
    label: 'Missing evidence',
    icon: TriangleAlert,
    text: 'text-status-missing',
    chip: 'bg-status-missing/15 text-status-missing',
    bar: 'bg-status-missing',
  },
  review: {
    label: 'Manual review',
    icon: Eye,
    text: 'text-status-review',
    chip: 'bg-status-review/15 text-status-review',
    bar: 'bg-status-review',
  },
}

const SUMMARY: { status: EligibilityStatus; count: number }[] = [
  { status: 'met', count: 7 },
  { status: 'notMet', count: 1 },
  { status: 'missing', count: 3 },
  { status: 'review', count: 1 },
]

const TOTAL = SUMMARY.reduce((sum, item) => sum + item.count, 0)

const REQUIREMENTS: Requirement[] = [
  { name: 'Valid business registration', detail: 'Certificate on file, valid to 2027', page: 'p. 4', status: 'met' },
  { name: 'Average annual turnover ≥ LKR 10M', detail: 'Calculated: LKR 8.83M (3 years)', page: 'p. 12', status: 'notMet' },
  { name: 'ISO 9001 certification', detail: 'No certificate uploaded', page: 'p. 15', status: 'missing' },
  { name: '2 similar completed projects', detail: 'Similarity needs human check', page: 'p. 18', status: 'review' },
]

const TASKS: Task[] = [
  { title: 'Upload ISO 9001 certificate', due: 'Due 25 Nov', priority: 'High' },
  { title: 'Get project completion letter', due: 'Due 28 Nov', priority: 'High' },
  { title: 'Review turnover shortfall', due: 'Due 30 Nov', priority: 'Medium' },
]

const TABS = ['Overview', 'Requirements', 'Tasks', 'Documents']

function StatusChip({ status }: { status: EligibilityStatus }) {
  const s = STATUS[status]
  const Icon = s.icon
  return (
    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${s.chip}`}>
      <Icon size={13} aria-hidden="true" />
      {s.label}
    </span>
  )
}

function DashboardPreview() {
  return (
    <figure
      className="glass-strong glow-border relative overflow-hidden rounded-3xl p-4 text-left sm:p-6"
      aria-label="Preview of the TenderWise eligibility dashboard, using sample data"
    >
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <Logo size={26} />
          <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 lg:flex" aria-hidden="true">
            {TABS.map((tab, i) => (
              <span
                key={tab}
                className={`rounded-full px-4 py-1.5 text-sm ${
                  i === 0 ? 'bg-white font-semibold text-navy' : 'text-slate-300'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-status-missing/40 bg-status-missing/10 px-3 py-1 text-xs font-semibold text-status-missing">
            Sample data
          </span>
          <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 sm:inline-flex" aria-hidden="true">
            <Search size={16} />
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-sm text-slate-200 sm:inline-flex" aria-hidden="true">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
              AS
            </span>
            ABC Solutions
          </span>
        </div>
      </div>

      {/* Tender title */}
      <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">Eligibility report · Sample tender</p>
          <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            Supply &amp; installation of IT equipment
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1.5 text-sm text-electric-light">
          <CalendarClock size={15} aria-hidden="true" />
          Closes 10 Dec 2026
        </span>
      </div>

      {/* Summary numbers */}
      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
        {SUMMARY.map(({ status, count }) => {
          const s = STATUS[status]
          const Icon = s.icon
          return (
            <div key={status} className="bg-navy-deep/90 p-4">
              <p className="flex items-center gap-1.5 text-sm text-slate-400">
                <Icon size={15} className={s.text} aria-hidden="true" />
                {s.label}
              </p>
              <p className="mt-1 text-3xl font-bold text-white">
                {count}
                <span className="ml-1 text-base font-medium text-slate-500">/ {TOTAL}</span>
              </p>
            </div>
          )
        })}
      </div>

      {/* Three panels */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* Breakdown bar */}
        <div className="rounded-2xl border border-white/10 bg-navy-card/70 p-5">
          <p className="flex items-center gap-2 font-semibold text-white">
            <ListChecks size={17} className="text-electric-light" aria-hidden="true" />
            Requirement breakdown
          </p>
          <p className="mt-1 text-sm text-slate-400">{TOTAL} requirements extracted from 3 PDFs</p>

          <div className="mt-6 flex h-36 items-end gap-3" aria-hidden="true">
            {SUMMARY.map(({ status, count }) => (
              <div key={status} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-xs font-semibold text-slate-300">{count}</span>
                <div
                  className={`w-full rounded-t-lg ${STATUS[status].bar}`}
                  style={{ height: `${Math.max((count / 7) * 100, 10)}%`, opacity: 0.85 }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-4 gap-3 text-center text-[11px] text-slate-400" aria-hidden="true">
            <span>Met</span>
            <span>Not met</span>
            <span>Missing</span>
            <span>Review</span>
          </div>
        </div>

        {/* Requirements list */}
        <div className="rounded-2xl border border-white/10 bg-navy-card/70 p-5">
          <p className="flex items-center gap-2 font-semibold text-white">
            <FileText size={17} className="text-electric-light" aria-hidden="true" />
            Key requirements
          </p>
          <ul className="mt-4 space-y-3">
            {REQUIREMENTS.map((req) => (
              <li key={req.name} className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold leading-snug text-white">{req.name}</p>
                  <StatusChip status={req.status} />
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {req.detail} · <span className="text-electric-light">Tender {req.page}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Readiness + tasks */}
        <div className="rounded-2xl border border-white/10 bg-navy-card/70 p-5">
          <p className="font-semibold text-white">Bid readiness</p>
          <div className="mt-3 flex items-end justify-between">
            <p className="text-3xl font-bold text-white">58%</p>
            <p className="text-sm text-slate-400">7 of 12 requirements met</p>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-electric to-electric-light" />
          </div>

          <p className="mt-6 text-sm font-semibold text-slate-200">Preparation tasks</p>
          <ul className="mt-3 space-y-2.5">
            {TASKS.map((task) => (
              <li key={task.title} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-white">{task.title}</p>
                  <p className="text-xs text-slate-400">{task.due}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    task.priority === 'High'
                      ? 'bg-status-notmet/15 text-status-notmet'
                      : 'bg-electric/15 text-electric-light'
                  }`}
                >
                  {task.priority}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-slate-500">
        Illustrative preview with sample data. ABC Solutions (Pvt) Ltd and all figures are fictional.
      </figcaption>
    </figure>
  )
}

export default DashboardPreview
