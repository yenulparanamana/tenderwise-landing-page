import SectionHeading from './SectionHeading'

const TEAM: string[] = ['Vathishi Kiyara', 'Kushan Hevavitharana', 'Yenul Paranamana', 'Dulina Hesara']

// "Vathishi Kiyara" -> "VK"
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="section">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="team-title"
          eyebrow="Team"
          title="The people building TenderWise"
          description="Four undergraduate computing students building TenderWise as our Agile Team Project."
        />

        <ul className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {TEAM.map((name) => (
            <li key={name} className="card flex flex-col items-center p-6 text-center">
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-electric-light to-electric text-2xl font-bold text-white shadow-[0_0_30px_rgba(0,136,255,0.4)]"
                aria-hidden="true"
              >
                {getInitials(name)}
              </span>
              <p className="mt-4 font-semibold text-white">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Team
