import Blog from './Blog/Blog'

import Nav from './pages/Header/Nav'

import Inicio from './pages/Inicio/Inicio'
// import Scarreras from './pages/SectionCarreras/Scarreras'
import Background from './Background/Backgound'
import Parallax from './Parallax/Parallax'
import VideoFondo from './pages/Inicio/VideoFondo'




function App() {
 

  return (
    <>
    <Background/>
     <Nav/>

      {/* <Inicio/> */}
      <VideoFondo/>
   

      <Parallax/>
      {/* <Scarreras/> */}
      <Blog/>
      {/* <Carrucel/>
      <Banner/> */}
     
      
    </>
  )
}

export default App
