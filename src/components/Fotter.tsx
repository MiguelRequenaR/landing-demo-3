import { ArrowRight } from "lucide-react";

export default function Fotter() {
  return (
    <main
    className="py-20 bg-primary">
      <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-80 mx-4 md:mx-30">
        <div
        className="space-y-10">
          <h1
          className="text-white text-4xl md:text-7xl text-center md:text-left" data-aos="fade-up">
            Oz Resort
          </h1>
          <div
          className="text-white text-2xl flex flex-col gap-2 text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
            <span>
              (+51) 987 654 321
            </span>
            <span>
            ozresort@gmail.com
            </span>
          </div>
          <h4
          className="text-white text-2xl md:text-4xl mt-30 text-center md:text-left" data-aos="fade-down" data-aos-delay="200">
            Av. La Victoria 123, Lima, Perú
          </h4>
          <h2
          className="text-white text-2xl text-center md:text-left">Desarrollado por <a href="https://grobles.netlify.app" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Grobles Studio.</a></h2>
        </div>
        <div
        className="space-y-10" data-aos="fade-up">
            <div
            className="bg-[#3f5142] text-white uppercase text-4xl flex justify-between items-center px-10 py-5 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-700 ease-in-out"
            >
              <h4 className="text-3xl">Inicio</h4>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="bg-[#3f5142] text-white uppercase text-4xl flex justify-between items-center px-10 py-5 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-700 ease-in-out"
            >
              <h4 className="text-3xl">Habitaciones</h4>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="bg-[#3f5142] text-white uppercase text-4xl flex justify-between items-center px-10 py-5 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-700 ease-in-out"
            >
              <h4 className="text-3xl">Contacto</h4>
              <ArrowRight className="w-5 h-5" />
            </div>
        </div>
      </div>
    </main>
  )
}
