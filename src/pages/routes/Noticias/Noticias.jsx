import { Helmet } from 'react-helmet'; // Importa Helmet
import { useState } from "react";
import PropTypes from "prop-types"; 
import Nav from "../../Inicio/Header/Nav";
import Footer from "../../Inicio/Footer/Footer";
import "./Noticias.css";


const ImageGallery = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="image-gallery">
          <img
            src={images[currentImageIndex]}
            alt="Imagen de galería"
            className="gallery-image"
          />
        </div>
        <button className="gallery-nav gallery-prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="gallery-nav gallery-next" onClick={handleNext}>
          &#10095;
        </button>
        <div className="gallery-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired, 
};

export default function Noticias() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const imagesCard1 = [
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261386/005_omdkll.png",
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261387/009_ejp7fg.png",
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261386/007_ra1s3t.png",
  ];

  const imagesCard2 = [
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261387/010_ujf0ho.jpg",
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261388/014_rfdkp2.png",
    "https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261387/012_prbhyo.png",
  ];

  const openGallery = (images) => {
    setSelectedImages(images); 
    setIsGalleryOpen(true);
  };

  return (
    <>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Noticias - IESTP Lurín</title>
        <meta name="description" content="Mantente informado sobre las últimas noticias y eventos del IESTP Lurín, incluyendo actividades deportivas y logros estudiantiles." />
        <meta name="keywords" content="Noticias, IESTP Lurín, Semana Deportiva, logros estudiantiles, actividades deportivas, eventos" />
      </Helmet>

      <Nav />
      <div className="contenedor">
        
        <section className="evento">
          <img
            src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261386/004_utwknp.png"
            alt="Desfile por Fiestas Patrias"
            className="imagen"
          />
          <div className="contenido">
            <h2 className="titulo">Semana Deportiva</h2>
            <p className="descripcion">
            Del 09 al 13 de setiembre se llevó a cabo la Semana Deportiva del
        instituto, con diversas actividades y competencias para fomentar el
        deporte y la vida saludable entre nuestros estudiantes. 
            </p>
            <button className="boton" onClick={() => openGallery(imagesCard1)}>
              Ver más
            </button>
          </div>
        </section>

        <section className="evento evento-invertido">
          <img
            src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261387/011_vcvqwk.jpg"
            alt="Entrega de Donaciones"
            className="imagen"
          />
          <div className="contenido">
            <h2 className="titulo">Equipo Femenino de Vóley</h2>
            <p className="descripcion">
            Nuestro equipo de vóley femenino se consagró campeón del torneo
        interuniversitario, demostrando su talento y dedicación en cada
        partido. ¡Felicitaciones a nuestras deportistas por este gran
        logro!
            </p>
            <button className="boton" onClick={() => openGallery(imagesCard2)}>
              Ver más
            </button>
          </div>
        </section>

        {isGalleryOpen && (
          <ImageGallery
            images={selectedImages}
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
