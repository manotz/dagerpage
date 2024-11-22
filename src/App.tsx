import Footer from "./components/Footer"
import Frase from "./components/Frase"
import Galeria from "./components/Galeria"
import Guitarras from "./components/Guitarras"
import Header from "./components/Header"
import Introduccion from "./components/Introduccion"
import Seccion2 from "./components/Seccion2"
import UltimaParte from "./components/UltimaParte"


function App() {


  return (
    <>
       <Header/>
      <section className="h-screen">


            <Introduccion/>

      </section>

            <Seccion2 />
            <Galeria />

            <Frase/>

            <Guitarras/>

            <UltimaParte/>

       <Footer/>
    </>
  )
}

export default App
