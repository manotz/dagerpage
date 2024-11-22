import imgFrase from "/frase.png";
import imgSenior from "/programador.jpg";

export default function Frase() {
  return (
    <section className="mt-20">
        <h3 className="text-white text-center text-4xl font-oswald font-bold mb-10">Frases Celebres</h3>
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
        <h3 className="text-white text-center text-4xl font-oswald font-bold mt-20 mb-10">Programador Senior con 20 Años de Experiencia</h3>
        <img className="rounded-md w-3/4 mx-auto" src={imgSenior} alt="Imagen programador" />

    </section>
  );
}
