
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import './carrucel.css'; // Asegúrate de importar tus estilos personalizados

const Carrucel = () => {

  const images = [
    {
      original: "https://res.cloudinary.com/dxhcv6buy/image/upload/v1717117516/institutocarrucel_zidp3s.png",
      originalClass: 'custom-image'
    },
    {
      original: "https://res.cloudinary.com/dxhcv6buy/image/upload/v1717117516/institutocarrucel_zidp3s.png",
      originalClass: 'custom-image'
    },
    {
      original: "https://res.cloudinary.com/dxhcv6buy/image/upload/v1717117516/institutocarrucel_zidp3s.png",
      originalClass: 'custom-image'
    },
  ];

  return (
    <div className="carrucel">
      <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
          showThumbnails={false}
      />
    </div>
  );
}

export default Carrucel;
