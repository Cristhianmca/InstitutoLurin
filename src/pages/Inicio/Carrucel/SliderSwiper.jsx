
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './SliderS.css';

const MyCarousel = () => (
  <div className="carousel-container">
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      showStatus={false} 
      autoPlay={true} 
      interval={3000}
      showIndicators ={false}/*linea que cubre todo*/
    
    >
      <div>
        <img src="https://i.postimg.cc/3RNMYLmh/Agregar-un-subt-tulo.png


" />
        
      </div>
      <div>
        <img src="https://i.postimg.cc/d3czrJgs/Agregar-un-subt-tulo-1.png" /> /*diseño web 2*/
        
      </div>
      <div>
        <img src="https://i.postimg.cc/J4q9HVx8/CONTABILIDAD.png" /> /*contabilidad*/
        
      </div>
      <div>
        <img src="https://i.postimg.cc/JhGVW6bL/PROTESIS-DENTAL.png" /> /*dental 4*/
        
      </div>
    </Carousel>
  </div>
);

export default MyCarousel;
