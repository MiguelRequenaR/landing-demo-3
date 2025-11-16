import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <main
    className="py-40 bg-[#edf7ef]">
      <div
      className="flex flex-col items-center justify-center gap-8">
        <h2
        className="text-3xl md:text-[48px] uppercase text-primary text-center md:text-left" data-aos="fade-up">
          ¡Escapa al paraíso ahora!
        </h2>
        <p
        className="text-primary" data-aos="fade-up" data-aos-delay="100">
          Encuentra a tus citas perfectas y escapa al paraíso.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <button
          className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group">
            ¡Compruebe la disponibilidad de hoy!
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </main>
  )
}
