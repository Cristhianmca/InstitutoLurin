import { Helmet } from 'react-helmet'; // Importa Helmet
import Nav from "../../../../pages/Inicio/Header/Nav";
import "./Diseño.css";

const Diseño = () => {
  return (
    <div>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Diseño y Desarrollo Web - IESTP Lurín</title>
        <meta name="description" content="Descubre la carrera de Diseño y Desarrollo Web en el IESTP Lurín. Aprende las herramientas y tecnologías necesarias para crear sitios web dinámicos y funcionales." />
        <meta name="keywords" content="Diseño, Desarrollo Web, IESTP Lurín, carrera de diseño, desarrollo web, HTML, CSS, JavaScript, educación técnica" />
      </Helmet>

      <Nav />
      <div className="container_carreras">
        <img className="image_carreras" src="https://i.postimg.cc/d3czrJgs/Agregar-un-subt-tulo-1.png" alt="imagen de diseño" />
      </div>

      <section className="container_principal">
        <div className="sub_container_carreras">
          <div className="container-tex">
            <p>¿Te interesa el mundo del diseño y el desarrollo web?</p>
            <h2>La carrera de Diseño es ideal para ti.</h2>
            <p>
              La carrera de Diseño te permitirá adquirir conocimientos y habilidades para la creación y gestión de sitios web dinámicos, con un enfoque en diseño gráfico, experiencia de usuario (UX), y desarrollo frontend y backend.
            </p>
            <button className="boton-contabilidad">CONOCER MÁS...</button>
            <hr className="borde_derecha" />
          </div>

          <div className="container_sub_img">
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen diseño web 1" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen diseño web 2" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen diseño web 3" />
          </div>
        </div>
      </section>

      {/* ---------------Conoce la carrera---------------------------- */}
      <section className="container_principal_02">
        <div className="sub_container_principal_02">
          {/* Conoce la carrera */}
          <div className="conoce_la_carrera">
            <h2>Conoce <br /> la carrera</h2>
            <p>
              El profesional técnico de diseño y desarrollo web es capaz de implementar sitios web siguiendo estándares de diseño y usabilidad. Aprenderás a crear experiencias digitales innovadoras con tecnologías modernas.
            </p>
          </div>

          {/* Lo que necesitas saber */}
          <div className="nececitas_saber">
            <div>
              <hr className="borde_izquierda" />
              <h2>Lo que necesitas saber</h2>
              <h4>CARRERA</h4>
              <p>Diseño y Desarrollo Web</p>
              <h4>DURACIÓN</h4>
              <p>3 años</p>
              <h4>TITULACIÓN</h4>
              <p>Profesional Técnico en Diseño y Desarrollo Web</p>
              <h4>FORMATO</h4>
              <button className="boton_2">PRESENCIAL</button>
              <h4>GRADO OBTENIDO</h4>
              <p>Bachiller técnico en Diseño y Desarrollo Web</p>
              <hr className="borde_derecha" />
            </div>
          </div>

          {/* ¿Qué aprenderás? */}
          <div className="container_aprenderas">
            <div>
              <h2 className="aprenderas_tex">¿Qué aprenderás?</h2>
              <p>
                Aprenderás a desarrollar sitios web desde cero utilizando tecnologías como HTML, CSS, JavaScript, y frameworks modernos como React. Además, dominarás conceptos de diseño gráfico y experiencia de usuario (UX).
              </p>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="certificaciones">
            <div>
              <hr className="borde_izquierda" />
              <h2>Certificaciones</h2>
              <p>Al culminar tu carrera, podrás obtener las siguientes certificaciones:</p>
              <ul>
                <li>Diseño y desarrollo de sitios web</li>
                <li>Implementación de sistemas web</li>
                <li>Gestión de proyectos de desarrollo web</li>
              </ul>
            </div>
            <img src="https://i.postimg.cc/KvptbpDV/images.jpg" alt="certificado" />
          </div>
        </div>

        {/* Convenios */}
        <div className="container_convenios">
          <hr className="borde_derecha" />
          <div>
            <h2>Principales Convenios</h2>
            <div>
              <img src="https://i.postimg.cc/CMDYWyM0/images-1.jpg" alt="cisco" />
              <img src="https://i.postimg.cc/9Mw46x0k/8867-Microsoft-5-F00-Logo-2-D00-fo.jpg" alt="microsoft" />
              <img src="https://i.postimg.cc/yd6K9W4y/images-2.jpg" alt="oracle" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diseño;
