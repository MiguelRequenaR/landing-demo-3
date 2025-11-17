import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function FormContact() {
  return (
    <main
      className="bg-[#fbf9e9] py-20 mt-10">
      <div
        className="text-center" data-aos="fade-up">
        <h2
          className="text-2xl md:text-[60px] uppercase text-primary">
          Contáctanos
        </h2>
        <p
          className="text-primary mx-4 md:mx-0">
          Nuestro equipo de bienvenida está entusiasmado de conectar y escuchar de ti.
        </p>
      </div>
      <div
        className="py-20 mx-4 md:mx-30">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form action=""
              className="space-y-12 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div data-aos="fade-up">
                  <label htmlFor="name">
                    <h3
                      className="text-2xl text-primary font-light uppercase">Nombre</h3>
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-2 mt-2 border-0 border-b text-primary border-[#c1bea3] focus:outline-none transition"
                  />

                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <label htmlFor="lastname">
                    <h3
                      className="text-2xl text-primary font-light uppercase">Apellido</h3>
                  </label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full p-2 mt-2 border-0 border-b text-primary border-[#c1bea3] focus:outline-none transition"
                  />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="email">
                  <h3
                    className="text-2xl text-primary font-light uppercase">Email</h3>
                </label>
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="w-full p-2 mt-2 border-0 border-b text-primary border-[#c1bea3] focus:outline-none transition"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="phone">
                  <h3
                    className="text-2xl text-primary font-light uppercase">Teléfono</h3>
                </label>
                <input
                  type="text"
                  placeholder="+51 987 654 321"
                  className="w-full p-2 mt-2 border-0 border-b text-primary border-[#c1bea3] focus:outline-none transition"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="subject">
                  <h3
                    className="text-2xl text-primary font-light uppercase">Asunto</h3>
                </label>

                <textarea placeholder="Mensaje"
                  className="w-full p-2 mt-2 border-0 border-b text-primary border-[#c1bea3] focus:outline-none transition"
                />
              </div>
              <div
                className="flex justify-center md:justify-start" data-aos="fade-up">
                <button type="submit"
                  className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group">
                  Enviar Mensaje
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
                </button>
              </div>
            </form>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1623812314861-80b860283143?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact-image" className="w-full h-[500px] object-cover" data-aos="zoom-in" data-aos-delay="400" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
              <div
                className="p-10 space-y-5 border border-[#c1bea3] hover:bg-white cursor-pointer transition-all duration-700 ease-in-out rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="border w-fit border-[#c1bea3]  rounded-xl p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl text-primary font-light uppercase">Llámanos a nosotros</h3>
                <span>
                  (+51) 987 654 321
                </span>
              </div>
              <div
                className="p-10 space-y-5 border border-[#c1bea3] hover:bg-white cursor-pointer transition-all duration-700 ease-in-out rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <div
                  className="border w-fit border-[#c1bea3]  rounded-xl p-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl text-primary font-light uppercase">Envíanos un mensaje</h3>
                <span>
                  ozresort@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
