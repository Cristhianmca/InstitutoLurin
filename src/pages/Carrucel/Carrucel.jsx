
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'


const Carrucel = () => {

  const images = [
    //imagenes del slaider
    {
      original: "https://i.postimg.cc/SNQnYLZZ/lurinslider.jpg",
    },

    {
      original: "https://i.postimg.cc/L6yntqwm/lurinslider3.jpg",
    },
    
    {
      original: "https://i.postimg.cc/y6yJNpTg/luroinslider2.jpg",
    },
  ];

 
  return (
    <div className="carrucel">
      <ImageGallery 

          items ={images}

          //muestra el boton de play
          showPlayButton={false}

          //muestra el boton de maximizar
          showFullscreenButton={false}

          //muestra los puntos de navegacion
          showBullets={true}

          //autoPlay
          autoPlay={true}

          //duracion de cada imagen
          slideInterval={5000}

          //duracion al pasar de una imagen a otra
          slideDuration={1000}

          //muestra las miniaturas
          showThumbnails={false}
        
      />

 

    </div>
  )
  }
  
    
  

export default Carrucel
