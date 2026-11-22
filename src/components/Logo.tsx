/* TenderWise mark: a document with a check, representing verified requirements. */
interface LogoProps {
  size?: number
  showText?: boolean
  textClassName?: string
}

function Logo({ size = 32, showText = true, textClassName = 'text-xl' }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="tenderwise-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7cc6ff" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
        </defs>
        <rect x="24" y="13" width="72" height="94" rx="15" fill="url(#tenderwise-logo-gradient)" />
        <path d="M39 37 H79 M39 51 H68" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="7" strokeLinecap="round" />
        <path d="M38 75 L52 88 L83 57" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {showText && <span className={`font-extrabold tracking-wide text-white ${textClassName}`}>TenderWise</span>}
    </span>
  )
}

export default Logo
