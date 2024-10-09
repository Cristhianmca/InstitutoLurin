import { Helmet } from 'react-helmet'; // Importa Helmet
import Nav from '../../../../pages/Inicio/Header/Nav';
import './Contabilidad.css';

const Contabilidad = () => {
  return (
    <div>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Contabilidad - IESTP Lurín</title>
        <meta name="description" content="Descubre la carrera de Contabilidad en el IESTP Lurín. Aprende a gestionar la información financiera y administrativa, y adquiere las habilidades necesarias para tomar decisiones y cumplir con las obligaciones fiscales y legales." />
        <meta name="keywords" content="Contabilidad, IESTP Lurín, carrera de contabilidad, gestión financiera, obligaciones fiscales, decisiones administrativas, educación técnica" />
      </Helmet>

      <Nav />
      <div className="container_carreras">
        <img className="image_carreras" src="https://i.postimg.cc/J4q9HVx8/CONTABILIDAD.png" alt="imagen de contabilidad" />
      </div>

      <section className="container_principal">
        <div className="sub_container_carreras">
          <div className="container-tex">
            <p>¿Te interesa el mundo del análisis, la economía y la gestión financiera?</p>
            <h2>La carrera de Contabilidad es ideal para ti.</h2>
            <p>
              La carrera de Contabilidad te permitirá adquirir conocimientos y habilidades para la gestión de información financiera y administrativa de las organizaciones, con el fin de tomar decisiones y cumplir con las obligaciones fiscales y legales.
            </p>
            <button className="boton-contabilidad">CONOCER MÁS...</button>
            {/* <hr className="borde_derecha" /> */}
          </div>

          <div className="container_sub_img">
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contabilidad" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contabilidad" />
            <img src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contabilidad" />
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
              El profesional técnico de administración de redes y comunicación es capaz de implementar redes informáticas y de comunicaciones siguiendo estándares internacionales. Asimismo, sabrá administrar servicios de redes informáticas para garantizar el nivel comprometido y asegurar la seguridad basada en estándares internacionales y restricciones organizacionales.
            </p>
          </div>

          {/* Lo que necesitas saber */}
          <div className="nececitas_saber">
            <div>
              {/* <hr className="borde_izquierda" /> */}
              <h2>Lo que necesitas saber</h2>
              <h4>CARRERA</h4>
              <p>Administración de redes y comunicaciones</p>
              <h4>DURACIÓN</h4>
              <p>2 años</p>
              <h4>TITULACIÓN</h4>
              <p>Profesional Técnico en administración de redes y comunicación</p>
              <h4>FORMATO</h4>
              <button className="boton_2">VIRTUAL</button>
              <h4>GRADO OBTENIDO</h4>
              <p>Bachiller técnico en administración de Redes y Comunicaciones</p>
              {/* <hr className="borde_derecha" /> */}
            </div>
          </div>

          {/* Qué aprenderás */}
          <div className="container_aprenderas">
            <div>
              <h2 className="aprenderas_tex">¿Qué aprenderás?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex.</p>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="certificaciones">
            <div>
              {/* <hr className="borde_izquierda" /> */}
              <h2>Certificaciones</h2>
              <p>Al culminar tu carrera, podrás obtener las siguientes certificaciones:</p>
              <ul>
                <li>Soporte Técnico de los sistemas de información</li>
                <li>Implementación de redes y servicios de comunicación</li>
                <li>Gestión de la seguridad de los servicios e infraestructura de red</li>
              </ul>
            </div>
            <img src="https://i.postimg.cc/KvptbpDV/images.jpg" alt="certificado" />
          </div>
        </div>

        {/* Convenios */}
        <div className="container_convenios">
          {/* <hr className="borde_derecha" /> */}
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

export default Contabilidad;
