import Blog from './pages/Inicio/Noticias/Blog'

import Nav from './pages/Inicio/Header/Nav'

// import Inicio from './pages/Inicio/Inicio'
 import Scarreras from './pages/Inicio/Carreras/Scarreras'
//import Background from './Background/Backgound'
// import Parallax from './Parallax/Parallax'
import Carrucel from './pages/Inicio/Carrucel/Carrucel'
// import VideoFondo from './pages/Inicio/VideoFondo'
import Footer from './pages/Inicio/Footer/Footer'
import Develops from './pages/Inicio/Develops/Develops'
import Slider from './pages/Inicio/Carrucel/SliderSwiper'
import Noticias from './pages/Inicio/Noticias/Noticias'






function App() {
 

  return (
    <>
    {/* <Background/> */}
      <Nav/>
     <Slider/>

      {/* <Inicio/> */}
      {/* <VideoFondo/> */}
   
      {/* <Carrucel/> */}
      {/* <Parallax/> */}
      <Scarreras/> 
      {/* <Blog/> */}
     <Noticias/>


      <Develops/>
      <Footer/>
      {/* <Carrucel/>
      <Banner/> */}

     
      
    </>
  )
}

export default App
