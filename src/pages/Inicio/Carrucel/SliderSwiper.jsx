
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
      showIndicators ={true}
    
    >
      <div>
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720292271/qghz54utluk14uiitvj4.jpg" alt="Slide 1" />
        
      </div>
      <div>
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720292271/qghz54utluk14uiitvj4.jpg" alt="Slide 2" />
        
      </div>
      <div>
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720292271/qghz54utluk14uiitvj4.jpg" alt="Slide 3" />
        
      </div>
    </Carousel>
  </div>
);

export default MyCarousel;
