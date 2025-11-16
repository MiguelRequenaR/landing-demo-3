import { Star } from "lucide-react";

const testimonies = [
  {
    id: 1,
    name: "John D.",
    rating: 5,
    comment: "Alojarme en Oz Resort fue un placer absoluto. El personal fue increíblemente acogedor y las habitaciones estaban impecables. ¡No puedo esperar para volver!",
  },
  {
    id: 2,
    name: "Emily P.",
    rating: 5,
    comment: "Desde las lujosas comodidades hasta las vistas impresionantes, Oz Resort es un lugar que realmente vale la pena.",
  },
  {
    id: 3,
    name: "Michael S.",
    rating: 5,
    comment: "El servicio en Oz Resort fue impecable. El personal hizo todo lo posible para asegurar que nuestra estancia fuera cómoda y perfecta.",
  },
  {
    id: 4,
    name: "Olivia R.",
    rating: 5,
    comment: "La experiencia en Oz Resort fue más allá de lo que esperaba. Las habitaciones eran increíbles y la atención del personal fue excepcional.",
  },
  {
    id: 5,
    name: "William J.",
    rating: 5,
    comment: "La ubicación del resort es perfecta, cerca de la playa y del centro de la ciudad. Las habitaciones son cómodas y limpias. El personal es muy amable y atención.",
  }
]

export default function TestimonyHome() {
  return (
    <main className="py-20 mx-4 md:mx-30">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3" data-aos="fade-up">
          <h2 className="text-3xl md:text-[44px] uppercase text-primary text-center md:text-left">
            Lo que nuestros huéspedes dicen
          </h2>
        </div>
        <div className="md:w-2/3 space-y-10">
          {testimonies.map((testimony) => (
            <div key={testimony.id}>
              <h4 className="text-xl md:text-[32px] text-primary uppercase" data-aos="fade-up" data-aos-delay="100">
                "{testimony.comment}"
              </h4>
              <span className="text-lg md:text-[24px] text-primary flex items-center gap-2 mt-5" data-aos="fade-up" data-aos-delay="200">
                {testimony.name} -
                {Array.from({ length: testimony.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary" />
                ))}
                {testimony.rating}
              </span>
              <hr className="w-full border-primary mt-5" data-aos="fade-up" data-aos-delay="300" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
