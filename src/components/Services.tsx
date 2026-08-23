import type { ReactNode } from 'react'

type Service = {
  title: string
  description: string
  color: 'purple' | 'teal' | 'orange'
  icon: ReactNode
}

const colorClasses = {
  purple: 'bg-brand-purple/10 text-brand-purple',
  teal: 'bg-brand-teal/10 text-brand-teal',
  orange: 'bg-brand-orange/10 text-brand-orange',
} as const

const borderColorClasses = {
  purple: 'hover:border-brand-purple/50',
  teal: 'hover:border-brand-teal/50',
  orange: 'hover:border-brand-orange/50',
} as const

const services: Service[] = [
  {
    title: 'Web',
    description:
      'Fast, responsive websites and web applications built for reliability and scale.',
    color: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.5 8.5H21.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="5.5" cy="6.5" r="0.75" fill="currentColor" />
        <circle cx="7.5" cy="6.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Mobile',
    description:
      'Native and cross-platform mobile apps for iOS and Android that users love.',
    color: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="6.5"
          y="2.5"
          width="11"
          height="19"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10.5 18.5H13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Desktop',
    description:
      'Cross-platform desktop applications for Windows, macOS, and Linux.',
    color: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="2.5"
          y="4"
          width="19"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 21H15.5M12 17V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy dark:text-white">
          What we do
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          We design and build web, mobile, and desktop software end to end.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className={`rounded-2xl border border-neutral-200 p-6 transition hover:shadow-lg dark:border-neutral-800 ${borderColorClasses[service.color]}`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses[service.color]}`}
            >
              {service.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
