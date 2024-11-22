import tikImg from "/tik.svg";
import instagramImg from "/instagram.svg";
import youtubeImg from "/youtube.svg";
import gitImg from "/git.svg";

export default function Footer() {
  return (
    <footer className="p-4  container w-full bg-primaryColor">
        <div className="flex items-center justify-between">
           <div className="hover:scale-125 transform transition duration-300 cursor-pointer">
             <h2 className="text-white text-3xl font-oswald font-bold leading-none">Dot</h2>
             <h2 className="text-white text-3xl font-oswald font-bold leading-none ml-4">Dager</h2>
           </div>
      
           <nav className="flex gap-4">
            <a href="tiktok.com/@elantrodedager" className="hover:scale-125 transform transition duration-300" target="_blank">
                <img width={30} src={tikImg} alt="icono tik tok" />
            </a>
            <a href="https://www.instagram.com/dager.32/" className="hover:scale-125 transform transition duration-300" target="_blank">
                <img width={30} src={instagramImg} alt="icono instagram" />
            </a>
            <a href="https://www.youtube.com/@DotDager" className="hover:scale-125 transform transition duration-300" target="_blank">
                <img width={30} src={youtubeImg} alt="icono youtube" />
            </a>
            <a href="https://github.com/MarianoVilla" className="hover:scale-125 transform transition duration-300" target="_blank">
                <img width={30} src={gitImg} alt="icono github" />
            </a>
        </nav>
        </div>
        
        <p className="text-white text-center">&copy; {new Date().getFullYear()} Dot Dager. Todos los Derechos Reservados</p>

    </footer>
  )
}
