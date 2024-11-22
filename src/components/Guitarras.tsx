import guitarra1 from "/guitarra_04.webp";
import guitarra2 from "/guitarra_06.webp";
import guitarra3 from "/guitarra_10.webp";

export default function Guitarras() {
  return (
    <section className="text-white">
      <h2 className="text-center text-4xl font-oswald font-bold mt-20 mb-10">
        Mis Guitarras Favoritas
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border-2 border-white rounded-md">
          <div className="w-full h-[500px] bg-white">
            <img src={guitarra1} className="w-full h-full bg-center object-contain" alt="guitarra1" />
          </div>
          <div className="p-2 mb-2">
            <h4 className="text-center my-4 text-4xl font-oswald font-bold">Vader</h4>
            <h5 className="text-start my-4 text-xl font-oswald font-semibold">Características:</h5>
            <ul className="list-disc pl-6 text-base ml-8">
              <li>
                Pastillas dobles humbucker para un sonido potente y sin ruido.
              </li>
              <li>Cuerpo sólido de caoba para un tono cálido y resonante.</li>
              <li>
                Diapasón de palisandro para mayor comodidad y durabilidad.
              </li>
              <li>
                Ideal para estilos como rock y metal gracias a su gran sustain y
                salida potente.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-white rounded-md">
          <div className="w-full h-[500px] bg-white">
            <img src={guitarra2} className="w-full h-full bg-center object-contain" alt="guitarra1" />
          </div>
          <div className="p-2 mb-2">
            <h4 className="text-center my-4 text-4xl font-oswald font-bold">SkyWalker</h4>
            <h5 className="text-start my-4 text-xl font-oswald  font-semibold">Características:</h5>
            <ul className="list-disc pl-6 text-base ml-8">
              <li>
                Pastillas simples (single coil) para tonos brillantes y definidos.
              </li>
              <li>Puente tremolo para realizar efectos de vibrato.</li>
              <li>
                Cuerpo de aliso ligero y cómodo para largas sesiones de práctica.
              </li>
              <li>
                Perfecta para blues y funk, con un sonido cristalino y dinámico.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-white rounded-md">
          <div className="w-full h-[500px] bg-white">
            <img src={guitarra3} className="w-full h-full bg-center object-contain" alt="guitarra1" />
          </div>
          <div className="p-2 mb-2">
            <h4 className="text-center my-4 text-4xl font-oswald font-bold">Cobain</h4>
            <h5 className="text-start my-4 text-xl font-oswald  font-semibold">Características:</h5>
            <ul className="list-disc pl-6 text-base ml-8">
              <li>
              Configuración HSS (humbucker-single-single) para versatilidad tonal.
              </li>
              <li>Acabado brillante que resiste rayones.</li>
              <li>
                 Clavijas de afinación bloqueables para mayor estabilidad.
              </li>
              <li>
                Versátil para cualquier género musical, desde pop hasta hard rock.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
