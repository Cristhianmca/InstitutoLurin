
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
        <img src="https://res.cloudinary.com/dqwksoy7s/image/upload/v1720591673/mercadoshop_venta_de_productos_promociones_tecnologia_negro_fmusbp.png


" />
        
      </div>
      <div>
        <img src="https://res.cloudinary.com/dqwksoy7s/image/upload/v1720591673/mercadoshop_venta_de_productos_promociones_tecnologia_negro_fmusbp.png" />
        
      </div>
      <div>
        <img src="https://res.cloudinary.com/dqwksoy7s/image/upload/v1720591673/mercadoshop_venta_de_productos_promociones_tecnologia_negro_fmusbp.png" alt="Slide 3" />
        
      </div>
      <div>
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720292271/qghz54utluk14uiitvj4.jpg" alt="Slide 3" />
        
      </div>
    </Carousel>
  </div>
);

export default MyCarousel;
