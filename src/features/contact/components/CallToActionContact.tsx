import { ArrowRight, MapPin } from "lucide-react"

export default function CallToActionContact() {
  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        <div className="overflow-hidden shadow-lg" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ubicación Oz Resort"
            className="w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-8 px-2">
          <h2 className="text-3xl md:text-[48px] font-light uppercase text-primary leading-tight" data-aos="fade-up">
            Descubre nuestra ubicación privilegiada
          </h2>
          <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="100">
            <MapPin className="text-primary w-7 h-7" />
            <span className="text-lg md:text-xl text-gray-600">Av. del Mar 1234, Máncora, Perú</span>
          </div>
          <p className="text-lg text-gray-700" data-aos="fade-up" data-aos-delay="200">
            Disfruta y explora las atracciones cercanas. Nuestra ubicación combina la serenidad junto al mar con el acceso a actividades locales, asegurando que cada momento de tu estadía sea realmente especial.
          </p>
          <a
            href="https://www.google.com/maps/place/M%C3%A1ncora"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit"
            data-aos="fade-up" data-aos-delay="300"
          >
            <button
              className="uppercase flex items-center gap-2 text-primary border border-primary rounded-full px-10 hover:px-15 py-4 text-base md:text-lg bg-transparent hover:bg-primary hover:text-white transition-all duration-500 ease-in-out group cursor-pointer"
            >
              Ver en el mapa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-500" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
