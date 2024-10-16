import { Helmet } from 'react-helmet'; // Importa Helmet
import Footer from "../../Inicio/Footer/Footer";
import Nav from "../../Inicio/Header/Nav";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros_container">
      {/* Helmet para SEO */}
      <Helmet>
        <title>Nosotros - IESTP Lurín</title>
        <meta name="description" content="Conoce al IESTP Lurín. Nuestra misión es formar profesionales técnicos altamente capacitados con valores éticos, preparados para enfrentar los retos del futuro." />
        <meta name="keywords" content="Nosotros, IESTP Lurín, misión, visión, formación técnica, educación de calidad, valores éticos, innovación, desarrollo tecnológico" />
      </Helmet>

      <Nav />
      <div className="wrapper">
        <div className="arrow-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div>
          <h1 className="iestp">IESTP LURIN</h1>
        </div>
      </div>

      <div className="container_nosotros">
        <div className="nosotros_mision">
          <h2>Misión</h2>
          <p>
            Proveer una educación técnica de alta calidad que combine
            conocimientos científicos y tecnológicos con valores éticos,
            fomentando el desarrollo integral de nuestros estudiantes. Nuestra
            misión es preparar profesionales altamente capacitados para
            satisfacer las demandas del mercado laboral, contribuir al bienestar
            de la sociedad y promover la innovación y el emprendimiento en todos
            los sectores productivos.
          </p>
        </div>

        <div className="nosotros_video">
          <video
            className="video_nosotros"
            src="https://res.cloudinary.com/dxhcv6buy/video/upload/v1728161110/video_2024-10-05_15-40-01_gptt88.mp4"
            controls
            width="500" 
            height="100" 
            style={{ maxWidth: "40%", height: "auto" }}
          >
            Tu navegador no soporta el elemento <code>video</code>.
          </video>
        </div>

        <div className="nosotros_vision">
          <h2>Visión</h2>
          <p>
            Ser una institución líder en la formación técnica superior,
            reconocida a nivel nacional e internacional por la calidad de sus
            egresados, quienes serán protagonistas del desarrollo tecnológico,
            social y económico de la región. Aspiramos a formar profesionales
            innovadores y comprometidos con el desarrollo sostenible, capaces de
            enfrentar los retos del futuro con soluciones creativas y
            tecnológicas.
          </p>
        </div>

        <div className="nosotros_somos">
          <h2>Somos</h2>
          <p>
            En el Instituto de Educación Superior Tecnológico Público Lurín,
            formamos profesionales técnicos altamente capacitados y
            comprometidos con el desarrollo económico y social de la región.
            Nuestra institución se destaca por su excelencia académica, el uso
            de tecnología avanzada y la integración de valores éticos y humanos
            en cada aspecto de la educación.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
