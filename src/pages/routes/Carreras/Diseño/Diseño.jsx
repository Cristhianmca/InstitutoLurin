
import Nav from '../../../../pages/Inicio/Header/Nav'
import Background from '../../../../Background/Backgound'
import Carrucel from '../../../Inicio/Carrucel/Carrucel'


const Diseño = ({images}) => {
  
  return (
    <div>
        {/* <Background/> */}
        <Nav/>
        <Carrucel images ={images}/>
          <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
          showThumbnails={false}
          
    </div>
  )
}

export default Diseño
