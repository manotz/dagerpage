import perfilImg from "/perfil.png";

export default function Introduccion() {
  return (
<main className="h-5/6 flex items-center justify-center my-10">
  <section className="text-center flex items-center justify-center gap-16">
      <div className="text-white">
        <div className="flex justify-center">
          <h3 className="text-4xl font-roboto font-semibold flex leading-none gap-4">
            Soy 
            <span className="text-8xl font-oswald font-semibold flex flex-col text-start">
              Dot <span className="ml-8">Dager</span>
            </span>
          </h3>
        </div>

        <div className="mt-16">
          <p className="text-2xl font-semibold">
            Amante del pepino, programador de profesión, los gatos son mi diversión.
          </p>
        </div>
      </div>
      <div>
        <img className="rounded-full" src={perfilImg} alt="Foto perfil" />
      </div>
  </section>
</main>

  )
}

