import { ArrowRight } from "lucide-react"

const rooms = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Suite Panorámica",
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
    title: "Terraza del Amanacer",
    description: "Disfrute de un desayuno en la terraza del amanecer, con una vistahtaking.",
    info: "2 Dormitorio - $750/NOCHE",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Panorama Suite Tres",
    description: "Suite para familias, completamente equipada y vista directa a la playa.",
    info: "3 Dormitorios - $1200/NOCHE",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Escondite de Moonlite Cove",
    description: "Escondite para parejas, diseño moderno y elegante.",
    info: "1 Dormitorio - $650/NOCHE",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    title: "Stargazer Suite",
    description: "Destaca la vista del cielo nocturno y sus lujosas características.",
    info: "2 Dormitorios - $800/NOCHE",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Vista al Océano",
    description: "Disfrute de una vista al océano, con una vistahtaking.",
    info: "3 Dormitorios - $1200/NOCHE",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1746549844299-2867f09c9a37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sala Whirlpool Vista",
    description: "Capture una amplia vista desde la sala.",
    info: "2 Dormitorios - $800/NOCHE",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Habitación Estándar",
    description: "Amplia habitación con un diseño moderno y elegante.",
    info: "1 Dormitorio - $550/NOCHE",
  },
]

export default function Rooms() {
  return (
    <main className="bg-[#fbf9e9]">
      <div
      className="py-20 mx-4 md:mx-30">
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
                  <h3 className="text-2xl md:text-[32px] uppercase text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
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
      </div>
    </main>
  )
}
