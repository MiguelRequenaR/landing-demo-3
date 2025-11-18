export default function ParallaxAbout() {
  return (
    <section
      className="w-full flex flex-wrap justify-center gap-6 px-4 py-20 md:py-60 relative bg-scroll md:bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="inset-0 absolute bg-primary/50"></div>
    </section>
  )
}
