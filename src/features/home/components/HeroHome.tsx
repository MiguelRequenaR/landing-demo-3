import { ArrowDown } from "lucide-react"

export default function HeroHome() {

  const handleExploreClick = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(window.scrollY + window.innerHeight * 0.8, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth',
      })
    }
  };

  return (
    <main className="h-screen flex flex-col">
      <div
        className="h-1/2 flex flex-col md:flex-row justify-center items-center px-4 md:px-30">
        <div className="md:w-2/3 space-y-5 pt-20 md:pt-0" data-aos="fade-right">
          <h1
            className="text-4xl md:text-[60px] uppercase text-primary text-center md:text-left">
            Tu puerta al <br /> paraiso
          </h1>
          <p
          className="text-primary text-center md:text-left">
            Escuche el relajante sonido de las olas, construya castillos de arena con los niños y <br /> disfrute de impresionantes puestas al sol.
          </p>
        </div>
        <div className="md:w-1/3 group pt-5 md:pt-50" data-aos="fade-up">
          <button
            className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-3 md:py-5 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
            onClick={handleExploreClick}
          >
            Explorar más
            <ArrowDown className="w-7 h-7 group-hover:translate-y-1 transition-all duration-700 ease-in-out" />
          </button>
        </div>
      </div>
      <div
        className="h-1/2 w-full">
        <img
          src="https://images.unsplash.com/photo-1623812314861-80b860283143?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero-home"
          className="w-full h-full object-cover" />
      </div>
    </main>
  )
}
