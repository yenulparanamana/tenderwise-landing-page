import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { ArrowRight, Info, Mail } from 'lucide-react'
import { WAITLIST_ENABLED, FORMSPREE_ENDPOINT } from '../config/waitlist'

/*
  Waitlist form + contact block.

  While WAITLIST_ENABLED is false (see src/config/waitlist.ts), the form is a
  DEMO: nothing is sent or stored, and the user is told this honestly.
  When it is enabled, the form posts to Formspree and shows the real result.
*/

interface WaitlistForm {
  name: string
  email: string
  company: string
  consent: boolean
}

// What the form is currently doing
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'demo'

const INITIAL_FORM: WaitlistForm = { name: '', email: '', company: '', consent: false }

function Waitlist() {
  const [form, setForm] = useState<WaitlistForm>(INITIAL_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Demo mode: do not pretend the sign-up was saved
    if (!WAITLIST_ENABLED) {
      setStatus('demo')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, company: form.company }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="section">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="glass-strong glow-border rounded-3xl p-6 sm:p-10 lg:col-span-3">
          <div className="text-left">
            <span className="eyebrow">Early access</span>
            <h2 id="waitlist-title" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the TenderWise waitlist
            </h2>
            <p className="mt-3 text-slate-300">
              Be among the first Sri Lankan SMEs to try TenderWise when the first version is ready.
            </p>
          </div>

          {!WAITLIST_ENABLED && (
            <p className="mt-6 flex items-start gap-2 rounded-2xl border border-status-missing/40 bg-status-missing/10 p-4 text-sm text-amber-100">
              <Info size={18} className="mt-0.5 shrink-0 text-status-missing" aria-hidden="true" />
              Coming soon: this form is a preview and is not collecting sign-ups yet. No information you
              enter is sent or stored.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wl-name" className="mb-1.5 block text-sm font-medium text-slate-200">
                Full name
              </label>
              <input
                id="wl-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                className="input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-slate-200">
                Email address
              </label>
              <input
                id="wl-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="input"
                placeholder="you@company.lk"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="wl-company" className="mb-1.5 block text-sm font-medium text-slate-200">
                Company name <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                id="wl-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
                className="input"
                placeholder="Your business"
              />
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <input
                id="wl-consent"
                name="consent"
                type="checkbox"
                required
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 h-5 w-5 shrink-0 accent-electric"
              />
              <label htmlFor="wl-consent" className="text-sm leading-relaxed text-slate-300">
                I agree that the TenderWise team may use these details to contact me about early access, as
                described in the{' '}
                <a href="#privacy" className="font-semibold text-electric-light underline underline-offset-2">
                  privacy notice
                </a>
                .
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 font-semibold text-white transition-colors hover:bg-electric-light disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Honest feedback messages, announced to screen readers */}
          <div aria-live="polite" className="mt-4 text-sm">
            {status === 'demo' && (
              <p className="text-amber-100">
                Thanks for your interest. The waitlist isn&apos;t open yet, so your details were not
                saved. Please check back soon.
              </p>
            )}
            {status === 'success' && (
              <p className="text-status-met">You&apos;re on the list. We&apos;ll be in touch about early access.</p>
            )}
            {status === 'error' && (
              <p className="text-status-notmet">Something went wrong and your details were not sent. Please try again later.</p>
            )}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="card flex flex-col justify-center p-6 sm:p-10 lg:col-span-2">
          <span className="icon-tile">
            <Mail size={22} aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-white">Contact us</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Have a question about TenderWise, or want to share how your business prepares tenders today?
            Email our project team directly.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            <a href="mailto:tenderwise.team@gmail.com" className="font-semibold text-electric-light underline underline-offset-2">tenderwise.team@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Waitlist
