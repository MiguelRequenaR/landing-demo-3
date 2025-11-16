import { ArrowRight } from "lucide-react";

export default function ServiceHome() {
  return (
    <main
      className="py-20 mx-4 md:mx-30">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div
          className="space-y-5">
          <h2
            className="text-2xl md:text-[40px] uppercase text-primary text-center md:text-left" data-aos="fade-up">
            Relájese y rejuvenezca en nuestro lujoso spa
          </h2>
          <p
            className="text-primary text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
            Despierte tus sentidos con viajes de spa personalizados.
          </p>
          <img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="service-home" className="w-full h-96 object-cover"
            data-aos="fade-up" data-aos-delay="200"
          />
          <div data-aos="fade-up" data-aos-delay="300">
            <button
              className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer hover:px-15 group">
              Aprenda más
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
            </button>
          </div>
        </div>
        <div
          className="space-y-5">
          <h2
            className="text-2xl md:text-[40px] uppercase text-primary text-center md:text-left" data-aos="fade-up">
            Experimente delicias en nuestro restaurante
          </h2>
          <p
            className="text-primary text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
            Saborea sabores locales frescos con impresionantes vistas al mar.
          </p>
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="service-home" className="w-full h-96 object-cover"
            data-aos="fade-up" data-aos-delay="200"
          />
          <div data-aos="fade-up" data-aos-delay="300">
            <button
              className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer hover:px-15 group">
              Ver menú
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
