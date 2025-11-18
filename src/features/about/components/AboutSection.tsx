import ParallaxAbout from "./ParallaxAbout";

export default function AboutSection() {
  return (
    <main
      className="py-20 mt-10">
      <div
        className="text-center mx-4 md:mx-30 mb-10" data-aos="fade-up">
        <h2
          className="text-2xl md:text-[60px] uppercase text-primary">
          Sobre Nosotros
        </h2>
        <p
          className="text-primary mx-4 md:mx-0">
          Escucha el sonido relajante de las olas, construye castillos de arena con los niños y disfruta de impresionantes puestas al sol.
        </p>
      </div>
      <ParallaxAbout />
      <div
        className="mx-4 md:mx-30 py-10 md:py-20" data-aos="fade-up" data-aos-delay="100">
        <h2
        className="text-2xl md:text-[40px] uppercase text-primary text-center md:text-left">
          Nuestro Compromiso
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-10">
          <div>
            <h3
            className="text-xl md:text-2xl uppercase text-primary text-center md:text-left">
              Dedicado al lujo la comodidad y prácticas sostenibles para una estancia excepcional
            </h3>
          </div>
          <div>
            <p
            className="text-primary text-center md:text-left">
              En Oz Resort, estamos dedicados a ofrecer una combinación perfecta de lujo, confort y responsabilidad medioambiental. Nuestro equipo está comprometido a ofrecer un servicio atento y personalizado, asegurando que cada huésped se sienta querido y cuidado durante toda su estancia. Priorizamos la sostenibilidad mediante prácticas ecológicas y apoyo a las comunidades locales, reflejando nuestro compromiso con la preservación de la belleza natural que nos rodea. Desde nuestros alojamientos cuidadosamente diseñados hasta nuestras opciones gastronómicas inspiradas localmente, nos esforzamos por crear una experiencia enriquecedora que respete tanto a nuestros huéspedes como a nuestro entorno
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
