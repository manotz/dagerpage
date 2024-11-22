import imgFrase from "/frase.png";

export default function Frase() {
  return (
    <section className="mt-20">
        <h2 className="text-white text-center text-4xl font-oswald font-bold mb-10">Frases Celebres</h2>
      <div className="flex justify-center gap-12 text-white ">
        <div className="w-1/2">
          <img src={imgFrase} className="rounded-md" alt="imagen frase" />
        </div>
        <div className="w-1/2 flex flex-col justify-center ">
          <p className="text-2xl font-semibold font-oswald text-center">
            "Un Gran Poder Conlleva una Gran Responsabilidad"
          </p>
          <div>
            <p className="text-end text-sm mt-4 font-roboto">
              -Cosas que dager nunca dijo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
