import serviceexLogo from '../assets/clients/serviceex.png'
import lagalerieeLogo from '../assets/clients/lagaleriee.png'
import desertfoxegyptLogo from '../assets/clients/desertfoxegypt.png'

type Testimonial = {
  name: string
  quote: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    name: 'ServiceeX',
    quote:
      'Aenigma Solutions delivered exactly what we needed, on time and with great attention to detail.',
    logo: serviceexLogo,
  },
  {
    name: 'lagaleriee',
    quote:
      'A reliable team that understood our vision and turned it into a polished product.',
    logo: lagalerieeLogo,
  },
  {
    name: 'Desertfoxegypt',
    quote:
      'Great communication throughout the project and a final result that exceeded our expectations.',
    logo: desertfoxegyptLogo,
  },
]

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy dark:text-white">
            What our clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-400">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-medium text-brand-navy dark:text-white">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
