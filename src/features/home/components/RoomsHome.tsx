import { ArrowRight } from "lucide-react"

const rooms = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Habitación Deluxe",
    description: "Habitación Deluxe con un servicio relajante y una hermosa vista al mar.",
    info: "2 Dormitorios - $800/NOCHE",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Suite Familiar",
    description: "Amplia suite para familias, completamente equipada y vista directa a la playa.",
    info: "3 Dormitorios - $1200/NOCHE",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Habitación Estándar",
    description: "Cómoda habitación para parejas, diseño moderno y elegante.",
    info: "1 Dormitorio - $550/NOCHE",
  }
]

export default function RoomsHome() {
  return (
    <main className="py-20 mx-4 md:mx-30">
      <div
      className="space-y-5"
      data-aos="fade-up">
        <h2 className="text-2xl md:text-[44px] uppercase text-primary text-center md:text-left">
          Despierta con vistas al paraíso
        </h2>
        <p
        className="text-primary text-center md:text-left"
        >
          Escuche el relajante sonido de las olas, construya castillos de arena con los niños y disfrute de impresionantes puestas al sol.
        </p>
      </div>
      <div>
        {rooms.map((room) => (
          <div key={room.id}>
            <div className="flex flex-col md:flex-row gap-10 items-center py-10 group cursor-pointer">
              <img
                src={room.image}
                alt="rooms-home"
                className="w-full md:w-1/3 h-full object-cover"
                data-aos="fade-right" data-aos-delay="100"
              />
              <div className="space-y-5 text-primary">
                <h3 className="text-2xl md:text-[32px] text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
                  {room.title}
                </h3>
                <p className="md:text-[20px] text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
                  {room.description}
                </p>
                <h4 className="md:text-[24px] text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
                  {room.info}
                </h4>
              </div>
              <div className="flex-1 flex justify-end" data-aos="fade-up" data-aos-delay="400">
                <button
                  className="uppercase flex items-center text-primary border border-primary rounded-full px-20 md:px-10 py-3 md:py-5 group-hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group"
                  style={{ transitionProperty: 'background,color,padding' }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
                </button>
              </div>
            </div>
            <hr className="w-full border-[#c1bea3]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20" data-aos="fade-up" data-aos-delay="500">
        <button
          className="uppercase flex items-center gap-2 text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:bg-primary hover:px-20 hover:text-white transition-all duration-700 ease-in-out cursor-pointer group"
        >
          Ver todas las habitaciones
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
        </button>
      </div>
    </main>
  )
}
