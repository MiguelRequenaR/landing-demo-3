import { ArrowRight } from "lucide-react"

export default function AboutHome() {
  return (
    <main
    className="bg-bg-primary py-20">
      <div
      className="mx-4 md:mx-30">
        <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
          className="space-y-5" data-aos="fade-right">
            <h2
            className="text-2xl md:text-[44px] uppercase text-primary text-center md:text-left">
              Experimenta nuestra combinación perfecta de vivienda moderna y paisaje natural
            </h2>
            <div
            className="flex justify-center md:justify-start">
              <button
              className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group mt-5 md:mt-20">
                Sobre Nosotros
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-primary text-[40px]">
                100+
              </h3>
              <span className="text-primary text-[20px]">
                Total de habitaciones
              </span>
            </div>
            <hr className="w-full border-primary" data-aos="fade-up" data-aos-delay="150" />
            <div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-primary text-[40px]">
                7
              </h3>
              <span className="text-primary text-[20px]">
                Categorías de habitaciones
              </span>
            </div>
            <hr className="w-full border-primary" data-aos="fade-up" data-aos-delay="250" />
            <div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-primary text-[40px]">
                10+
              </h3>
              <span className="text-primary text-[20px]">
                Experiencias
              </span>
            </div>
            <hr className="w-full border-primary" data-aos="fade-up" data-aos-delay="350" />
            <div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-primary text-[40px]">
                150+
              </h3>
              <span className="text-primary text-[20px]">
                Personal profesional
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
