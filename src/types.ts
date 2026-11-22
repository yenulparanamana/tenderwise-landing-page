import type { LucideIcon } from 'lucide-react'

/*
  Shared TypeScript types used by several landing page sections.
*/

// A card with an icon, a title and a short text (Problem, How it works, Features)
export interface IconCard {
  icon: LucideIcon
  title: string
  text: string
}

// A link in the navbar or footer
export interface NavLink {
  label: string
  href: string
}

// The four eligibility statuses used across TenderWise
export type EligibilityStatus = 'met' | 'notMet' | 'missing' | 'review'
