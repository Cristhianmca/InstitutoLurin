import { Helmet } from 'react-helmet'; // Importa Helmet
import Nav from "../../../../pages/Inicio/Header/Nav";
import "./Protesis.css";

const Protesis = () => {
  return (
    <div>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Prótesis Dental - IESTP Lurín</title>
        <meta name="description" content="Descubre la carrera de Prótesis Dental en el IESTP Lurín. Aprende a diseñar, fabricar y ajustar prótesis dentales con alta precisión y tecnología avanzada." />
        <meta name="keywords" content="Prótesis Dental, IESTP Lurín, carrera de prótesis, odontología, salud dental, diseño de prótesis, educación técnica" />
      </Helmet>

      <Nav />
      <div className="container_carreras">
        <img className="image_carreras" src="https://i.postimg.cc/JhGVW6bL/PROTESIS-DENTAL.png" alt="imagen de prótesis dental" />
      </div>

      <section className="container_principal">
        <div className="sub_container_carreras">
          <div className="container-tex">
            <p>¿Te interesa el mundo de la odontología y la salud bucal?</p>
            <h2>La carrera de Prótesis Dental es ideal para ti.</h2>
            <p>
              La carrera de Prótesis Dental te preparará para diseñar, fabricar y ajustar prótesis dentales que mejoren la salud bucal y la estética de los pacientes. Aprenderás a trabajar con tecnología avanzada y materiales especializados, garantizando un trabajo preciso y de alta calidad.
            </p>
            <button className="boton-contabilidad">CONOCER MÁS...</button>
            <hr className="borde_derecha" />
          </div>

          <div className="container_sub_img">
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen de prótesis dental 1" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen de prótesis dental 2" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="imagen de prótesis dental 3" />
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
              El profesional técnico en Prótesis Dental será capaz de diseñar y elaborar prótesis dentales personalizadas utilizando tecnología moderna, mejorando la salud bucal y estética de los pacientes.
            </p>
          </div>

          {/* Lo que necesitas saber */}
          <div className="nececitas_saber">
            <div>
              <hr className="borde_izquierda" />
              <h2>Lo que necesitas saber</h2>
              <h4>CARRERA</h4>
              <p>Prótesis Dental</p>
              <h4>DURACIÓN</h4>
              <p>2 años</p>
              <h4>TITULACIÓN</h4>
              <p>Profesional Técnico en Prótesis Dental</p>
              <h4>FORMATO</h4>
              <button className="boton_2">PRESENCIAL</button>
              <h4>GRADO OBTENIDO</h4>
              <p>Bachiller Técnico en Prótesis Dental</p>
              <hr className="borde_derecha" />
            </div>
          </div>

          {/* ¿Qué aprenderás? */}
          <div className="container_aprenderas">
            <div>
              <h2 className="aprenderas_tex">¿Qué aprenderás?</h2>
              <p>
                Aprenderás a diseñar y fabricar prótesis dentales personalizadas, utilizando materiales especializados y tecnología avanzada. También adquirirás habilidades para ajustar y reparar las prótesis según las necesidades de los pacientes.
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
                <li>Diseño y fabricación de prótesis dentales</li>
                <li>Ajuste y reparación de prótesis dentales</li>
                <li>Manejo de tecnología y materiales avanzados para prótesis</li>
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

export default Protesis;
