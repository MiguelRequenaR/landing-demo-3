import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { rooms } from "@/features/rooms/data/roomsData"

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
        {rooms.slice(0, 3).map((room) => (
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
                <Link 
                  to={`/habitaciones/${room.slug}`}
                  className="uppercase flex items-center text-primary border border-primary rounded-full px-20 md:px-10 py-3 md:py-5 group-hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group"
                  style={{ transitionProperty: 'background,color,padding' }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
                </Link>
              </div>
            </div>
            <hr className="w-full border-[#c1bea3]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20" data-aos="fade-up" data-aos-delay="500">
        <Link to="/habitaciones"
          className="uppercase flex items-center gap-2 text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:bg-primary hover:px-20 hover:text-white transition-all duration-700 ease-in-out cursor-pointer group"
        >
          Ver todas las habitaciones
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
        </Link>
      </div>
    </main>
  )
}
