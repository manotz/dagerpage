import img1 from "/01.webp";
import img2 from "/02.webp";
import img3 from "/03.webp";
import img4 from "/04.webp";
import img5 from "/05.webp";

export default function Galeria() {
  return (
    <>
    <h1 className="text-4xl font-bold mb-10 text-center text-white font-oswald mt-20">Galeria Falopa</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <div className="relative hover:scale-105 transform transition duration-300">
        <img src={img1} loading="lazy" alt="Imagen 1" className="w-full h-auto rounded-lg shadow-lg"/>
      </div>

      <div className="relative col-span-2 row-span-2 hover:scale-105 transform transition duration-300">
        <img src={img2} loading="lazy" alt="Imagen 2" className="w-full h-full object-cover rounded-lg shadow-lg"/>
      </div>
   
      <div className="relative hover:scale-105 transform transition duration-300">
        <img src={img3} loading="lazy" alt="Imagen 3" className="w-full h-auto rounded-lg shadow-lg "/>
      </div>

      <div className="relative hover:scale-105 transform transition duration-300">
        <img src={img4} loading="lazy" alt="Imagen 4" className="w-full h-auto rounded-lg shadow-lg"/>
      </div>

      <div className="relative hover:scale-105 transform transition duration-300">
        <img src={img5} loading="lazy" alt="Imagen 5" className="w-full h-auto rounded-lg shadow-lg"/>
      </div>
    </div>
    </>
  )
}
