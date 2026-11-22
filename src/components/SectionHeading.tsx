/*
  Reusable heading block used at the top of each section:
  a small pill label, a title and an optional short description.
*/
interface SectionHeadingProps {
  id: string
  title: string
  eyebrow?: string
  description?: string
}

function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        id={id}
        className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
