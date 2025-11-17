import { useNavigate, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { getRoomsBySlug } from "../data/roomsData"
import { Link } from "react-router-dom"

export default function RoomDetail() {

  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const room = getRoomsBySlug(slug || "");

  if (!room) {
    return (
      <main
      className="bg-[#fbf9e9] min-h-screen flex items-center justify-center">
        <div
        className="text-center">
          <h1
          className="text-3xl text-primary uppercase mb-4">
            Habitación no encontrada
          </h1>
          <button
          onClick={() => navigate("/habitaciones")}
          className="uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-10 py-5 hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group mx-4 md:mx-0">
            Volver a habitaciones
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="w-full h-64 md:h-96 object-cover">
        <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
      </div>
      <div className="mx-4 md:mx-30 flex flex-col md:flex-row gap-10 py-10 md:py-20">
        {/* Columna izquierda */}
        <div className="w-full md:w-2/3 space-y-8 md:space-y-10 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-[44px] uppercase text-primary" data-aos="fade-up">
            {room.title}
          </h2>
          <h3 className="text-lg md:text-2xl uppercase text-primary" data-aos="fade-up">
            Descripción
          </h3>
          <p className="text-primary" data-aos="fade-up" data-aos-delay="100">
            {room.fullDescription}
          </p>
          <h3 className="text-lg md:text-2xl uppercase text-primary" data-aos="fade-up" data-aos-delay="200">
            Comodidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
            {room.amenities.map((amenity) => (
              <div key={amenity.name} className="border-[#c1bea3] border p-4 md:p-5 rounded-full">
                <h4 className="text-primary text-lg md:text-xl uppercase">{amenity.name}</h4>
              </div>
            ))}
          </div>
          <h3 className="text-lg md:text-2xl uppercase text-primary" data-aos="fade-up" data-aos-delay="400">
            Limpieza de habitaciones
          </h3>
          <p className="text-primary" data-aos="fade-up" data-aos-delay="500">
            {room.firstService}
          </p>
          <h3 className="text-lg md:text-2xl uppercase text-primary" data-aos="fade-up" data-aos-delay="600">
            Desayuno en la habitación
          </h3>
          <p className="text-primary" data-aos="fade-up" data-aos-delay="700">
            {room.secondService}
          </p>
        </div>
        {/* Columna derecha */}
        <div
          className="w-full md:w-1/3 bg-[#edf7ef] p-6 md:p-10 space-y-8 md:space-y-10 h-fit md:sticky md:top-30"
          data-aos="fade-up"
        >
          <h3 className="text-lg md:text-2xl uppercase text-primary">
            {room.info}
          </h3>
          <p className="text-primary text-base md:text-lg md:text-[20px]">
            {room.description}
          </p>
          <Link
            to="/contacto"
            className="w-fit uppercase flex items-center gap-2 text-sm md:text-[20px] text-primary border border-primary rounded-full px-8 md:px-10 py-4 md:py-5 hover:px-15 hover:bg-primary hover:text-white transition-all duration-700 ease-in-out cursor-pointer group mx-4 md:mx-0"
          >
            Reservar ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
          </Link>
        </div>
      </div>
    </main>
  )
}
