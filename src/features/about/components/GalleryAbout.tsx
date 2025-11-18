
const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creando una experiencia costera inolvidable con pasión y excelencia",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creando una experiencia costera inolvidable con pasión y excelencia",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creando una experiencia costera inolvidable con pasión y excelencia",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creando una experiencia costera inolvidable con pasión y excelencia",
  },
]

export default function GalleryAbout() {
  return (
    <main
      className="py-20 bg-[#fbf9e9]">
      <div
        className="mx-4 md:mx-30">
        <div className="space-y-5">
          <h3 className="text-2xl md:text-[40px] uppercase text-primary text-center md:text-left"
          data-aos="fade-up">
            <span className="md:inline">
              Creando una experiencia
              <span className="hidden md:inline"><br /></span>
            </span>
            <span className="md:inline">
              &nbsp;costera inolvidable con
              <span className="hidden md:inline"><br /></span>
            </span>
            <span className="md:inline">
              &nbsp;pasión y excelencia
            </span>
          </h3>
          <p className="text-primary text-center md:text-left"
          data-aos="fade-up" data-aos-delay="100">
            <span className="md:inline">
              Fundado con una pasión por la hospitalidad excepcional, Oz Resort ha pasado
              <span className="hidden md:inline"><br /></span>
            </span>
            <span className="md:inline">
              de ser un sueño a convertirse en un refugio de primera en la playa. Nuestro enfoque
              <span className="hidden md:inline"><br /></span>
            </span>
            <span className="md:inline">
              en el servicio personalizado y la atención al detalle garantiza que cada estancia 
              <span className="hidden md:inline"><br /></span>
            </span>
            <span className="md:inline">
              sea memorable y única.
            </span>
          </p>
        </div>
        <div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10"
        data-aos="fade-up" data-aos-delay="200">
          {
            gallery.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer" />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
