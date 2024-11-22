import aguaImg from "/agua.svg";
import caloriaImg from "/calorias.svg";
import estomagoImg from "/estomago.svg";

export default function Seccion2() {
  return (
    <section className="text-white">

        <h2 className="text-center text-3xl font-bold font-oswald mb-5">! Mi Problema con el <span className="text-8xl">PEPINO¡</span></h2>
        <p className="text-xl text-center">Tal vez suena raro pero me gusta comer pepino mientras práctico la guitarra.</p>
        <p className="text-xl text-center mt-5">Estos son algunos de los puntos por los cuales amo los pepinos:</p>


        <h3 className="text-3xl font-bold uppercase font-oswald mt-12 mb-12 text-center">Ventajas</h3>

        <div className="grid grid-cols-3 gap-36">
            <div className="p-4 border-4 border-white rounded-md hover:scale-125 transform transition duration-300">
                  <h4 className="text-center text-2xl font-bold font-oswald">Hidratación</h4>
                  <img width={150} className="mx-auto mt-8" src={aguaImg} alt="Agua imagen" />
                  <div className="mt-8">
                    <p className="text-xl text-center">Al ser rico en agua (aproximadamente 95%), ayuda a mantener el cuerpo hidratado y fresco.</p>
                  </div>
            </div>
            <div className="p-4 border-4 border-white rounded-md hover:scale-125 transform transition duration-300">
                  <h4 className="text-center text-2xl font-bold font-oswald">Bajo en Calorías</h4>
                  <img width={150} className="mx-auto mt-8" src={caloriaImg} alt="Agua imagen" />
                  <div className="mt-8">
                    <p className="text-xl text-center">Ideal para dietas, ya que tiene muy pocas calorías y es un excelente snack saludable.</p>
                  </div>
            </div>
            <div className="p-4 border-4 border-white rounded-md hover:scale-125 transform transition duration-300">
                  <h4 className="text-center text-2xl font-bold font-oswald">Mejora la Digestión</h4>
                  <img width={150} className="mx-auto mt-8" src={estomagoImg} alt="Agua imagen" />
                  <div className="mt-8">
                    <p className="text-xl text-center">Su contenido de fibra, especialmente en la cáscara, promueve un tránsito intestinal saludable.</p>
                  </div>
            </div>
          
        </div>

    </section>
  )
}
