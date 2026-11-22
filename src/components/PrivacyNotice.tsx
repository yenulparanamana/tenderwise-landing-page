import { Lock } from 'lucide-react'
import { WAITLIST_ENABLED } from '../config/waitlist'

/*
  Short privacy notice for the waitlist form.
  Update this text (especially the contact line) before the form goes live.
*/
function PrivacyNotice() {
  return (
    <section id="privacy" aria-labelledby="privacy-title" className="px-5 pb-20 md:px-8">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
        <h2 id="privacy-title" className="flex items-center gap-2 text-xl font-bold text-white">
          <Lock size={20} className="text-electric-light" aria-hidden="true" />
          Privacy notice
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
          {!WAITLIST_ENABLED && (
            <p className="font-semibold text-amber-100">
              The waitlist form is not active yet, so no personal data is currently being collected on this
              website.
            </p>
          )}
          <p>
            When the waitlist opens, we will collect only your name, email address and (optionally) your
            company name. We will use them only to contact you about early access to TenderWise.
          </p>
          <p>
            Your details will not be sold or shared with third parties for marketing. They will be stored
            securely by our form provider, kept only for the duration of the project, and deleted on request.
          </p>
          <p>
            We aim to handle personal data in line with Sri Lanka&apos;s Personal Data Protection Act, No. 9 of
            2022. For privacy questions, contact{' '}
            <a href="mailto:tenderwise.team@gmail.com" className="font-semibold text-electric-light underline underline-offset-2">tenderwise.team@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyNotice
