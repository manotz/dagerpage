import Footer from "./components/Footer"
import Frase from "./components/Frase"
import Galeria from "./components/Galeria"
import Header from "./components/Header"
import Introduccion from "./components/Introduccion"
import Seccion2 from "./components/Seccion2"


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

       <Footer/>
    </>
  )
}

export default App
