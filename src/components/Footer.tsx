import Logo from './Logo'
import type { NavLink } from '../types'

const FOOTER_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why TenderWise', href: '#why-tenderwise' },
  { label: 'Team', href: '#team' },
  { label: 'Join waitlist', href: '#waitlist' },
  { label: 'Privacy notice', href: '#privacy' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-deep/80 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo size={32} />
          <p className="mt-3 font-semibold text-white">TenderWise — AI-Powered Tender Eligibility</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Helping Sri Lankan SMEs understand tender requirements, check their eligibility and prepare
            stronger bids.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>© {year} TenderWise — AI-Powered Tender Eligibility. All rights reserved.</p>
        <p>Built as an Agile Team Project (ATP Group CS-80).</p>
      </div>
    </footer>
  )
}

export default Footer
