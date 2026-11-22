/*
  Waitlist form settings.

  The form is currently a DEMO: it does not send or store any data.

  To make it work later:
  1. Create a free form at https://formspree.io using the team's official email.
  2. Copy the form ID (the part after /f/ in the endpoint, e.g. "xyzabcd").
  3. Paste it into FORMSPREE_FORM_ID below and set WAITLIST_ENABLED to true.
  4. Update the privacy notice (PrivacyNotice.tsx) with the team's contact email.
*/

export const WAITLIST_ENABLED: boolean = false

export const FORMSPREE_FORM_ID: string = ''

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`
