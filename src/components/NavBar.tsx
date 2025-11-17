import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Habitaciones",
      href: "/habitaciones",
    }
  ];

  return (
    <header className="bg-white fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        <div>
          <a href="/" 
          className="flex items-center gap-2">
            <img src="/logoOZP.png" alt="logo" className="w-10 h-10" />
            <h1
              className="text-2xl font-extralight text-primary">Oz Resort</h1>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <nav>
            <ul className="text-gray-600 flex gap-20 font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`
                     transition-colors duration-500 cursor-pointer
                     hover:underline underline-offset-8 decoration-primary font-light
                     ${location.pathname === link.href ? 'text-primary font-light' : ''}
                   `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contacto">
            <button
              className="relative overflow-hidden bg-transparent px-6 py-2 uppercase cursor-pointer border border-primary group transition-colors rounded-full duration-500 hover:text-white text-sm text-primary"
            >
              <span
                className="
                  absolute inset-0 
                  bg-primary
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
              />
              <span
                className="relative z-10 transition-colors duration-500"
              >
                Contáctanos
              </span>
            </button>
          </Link>
        </div>
        <button
          className="md:hidden flex items-center justify-center text-gray-800 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile - Overlay */}
      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-primary z-40 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-5">
          <h1 className="text-2xl font-extralight text-white">Oz Resort</h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Mobile nav */}
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-2xl font-extralight">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`
                  cursor-pointer transition-colors duration-300
                  hover:text-secondary 
                  ${location.pathname === link.href ? 'text-secondary' : ''}
                `}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pb-8">
          <Link to="/contacto">
            <button
              className="relative overflow-hidden bg-secondary px-8 py-3 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white text-base rounded-full text-primary"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="
                  absolute inset-0 
                  bg-primary
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
              />
              <span
                className="relative z-10 transition-colors duration-500"
              >
                Contáctanos
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
