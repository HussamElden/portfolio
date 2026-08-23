import logo from '../assets/logo/aenigma-solutions-logo.png'
import logoDark from '../assets/logo/aenigma-solutions-logo-dark.png'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="Aenigma Solutions"
            className="h-24 w-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="Aenigma Solutions"
            className="hidden h-24 w-auto dark:block"
          />
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300 sm:flex">
          <a href="#services" className="transition hover:text-brand-purple">
            Services
          </a>
          <a href="#testimonials" className="transition hover:text-brand-purple">
            Testimonials
          </a>
          <a href="#contact" className="transition hover:text-brand-purple">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
