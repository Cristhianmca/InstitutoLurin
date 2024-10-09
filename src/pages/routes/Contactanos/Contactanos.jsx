import { Helmet } from 'react-helmet'; // Importa Helmet
import Nav from "../../../pages/Inicio/Header/Nav";
import Footer from "../../Inicio/Footer/Footer";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="contactanos_container">
      {/* Helmet para SEO */}
      <Helmet>
        <title>Contáctanos - IESTP Lurín</title>
        <meta name="description" content="Contáctanos en IESTP Lurín. Información de contacto, admisión, servicios al estudiante, ubicación y horarios de atención." />
        <meta name="keywords" content="contáctanos, IESTP Lurín, admisión, servicios al estudiante, ubicación, atención, horarios" />
      </Helmet>

      <Nav />
      <div>
        <img
          className="contactanos_img"
          src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728165367/COTACTENOS_qmkghx.jpg"
          alt="imagen de contáctanos"
        />
      </div>
      <div className="container_contactanos">
        <div className="contactanos_admision">
          <h2>Admisión</h2>
          <p>Lima - Lurín</p>
          <p>Central Telefónica: (01) 500-6177 anexo 2802</p>
          <p>Vía WhatsApp: +51 999-999-999</p>
        </div>

        <div className="contactanos_servicio">
          <h2>Servicio al Estudiante</h2>
          <p>Central Telefónica: (01) 500-6177 anexo 2802</p>
          <p>Vía WhatsApp: +51 999-999-999</p>
          <p>Vía E-mail: informes@iestplurin.edu.pe</p>
        </div>

        <div className="contactanos_horario">
          <h2>Horario de atención</h2>
          <p>Atención al Estudiante:</p>
          <p>Lunes a Viernes: 08:00 – 13:00 y 14:00 – 21:00</p>
        </div>

        <div className="contactanos_ubicacion">
          <h2>Ubicación</h2>
          <p>
            Av. San Pedro 1234, Lurín 15823, Perú
            <a target="_blank" href="https://maps.app.goo.gl/LicQTD8PFPDB2iXs5">
              <i className="fa-duotone fa-location-dot"></i>
            </a>
            <a href="https://maps.app.goo.gl/fizGT5RoFp3TYDj29" target="_blank" >
              <img
                className="image_mapa"
                src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728353936/Captura_de_pantalla_2024-10-07_211835_sbzv0w.png"
                alt="Mapa de ubicación"
              />{" "}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactanos;
