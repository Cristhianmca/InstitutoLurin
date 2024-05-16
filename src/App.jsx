import Blog from './Blog/Blog'

import Nav from './pages/Header/Nav'

import Inicio from './pages/Inicio/Inicio'
// import Scarreras from './pages/SectionCarreras/Scarreras'
import Background from './Background/Backgound'
import Parallax from './Parallax/Parallax'


function App() {
 

  return (
    <>
    <Background/>
     <Nav/>
      <Inicio/>
      <Parallax/>
      {/* <Scarreras/> */}
      <Blog/>
      {/* <Carrucel/>
      <Banner/> */}
     
      
    </>
  )
}

export default App
