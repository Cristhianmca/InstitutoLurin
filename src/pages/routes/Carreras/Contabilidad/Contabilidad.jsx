import { Helmet } from 'react-helmet'; // Importa Helmet
import Nav from '../../../../pages/Inicio/Header/Nav';
import './Contabilidad.css';

const Contabilidad = () => {
  return (
    <div>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Contabilidad - IESTP Lurín </title>
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
            <img src="https://i.postimg.cc/wjkrSKYv/carrera-contabilidad-universidad.jpg" alt="img apollo contabilidad" />
            <img src="https://i.postimg.cc/hj3vs3tZ/1conoce-5-universidades-donde-pue.jpg" alt="img apollo contabilidad" />
            <img src="https://i.postimg.cc/x1TCr2Np/3contabilidad.jpg" alt="img apollo contabilidad" />
          </div>
        </div>
      </section>

      {/* ---------------Conoce la carrera---------------------------- */}
      <section className="container_principal_02">
        <div className="sub_container_principal_02">

          {/* Conoce la carrera */}
          <div className="conoce_la_carrera">
            <h2>Conoce la carrera</h2>
            <p>
            Como profesional de la carrera técnica de Contabilidad serás capaz de gestionar, analizar y reportar la información financiera de manera efectiva. A lo largo del programa, aprenderás a llevar registros precisos, preparar informes financieros y cumplir con las normativas contables y fiscales. La carrera se enfoca en brindarte habilidades prácticas en contabilidad, auditoría y finanzas, permitiéndote trabajar en diferentes tipos de organizaciones, desde empresas hasta entidades gubernamentales, y desempeñar un papel clave en la toma de decisiones financieras.


            </p>
          </div>

          {/* Lo que necesitas saber */}
          <div className="nececitas_saber">
                  <h2>Lo que necesitas saber</h2>
            <div className='sub-nececitas_saber'>
              <div>
                  <h4>CARRERA</h4>
                  <p>CONTABILIDAD</p>
                  <h4>DURACIÓN</h4>
                  <p>3 años</p>
                  <h4>TITULACIÓN</h4>
                  <p>Profesional Técnico en Contabilidad</p>
              </div>

              <div>
                  <h4>FORMATO</h4>
                  <button className="boton_2">VIRTUAL</button>
                  <h4>GRADO OBTENIDO</h4>
                  <p>Bachiller técnico en carrera</p>
              </div>

            </div>
          </div>

          {/* Qué aprenderás */}
          <div className="container_aprenderas">
              <h2 className="aprenderas_tex">¿Qué aprenderás?</h2>
            <div className='sub_aprenderas_tex'>
              <div>
                  <p>✅Un profesional contable participa en áreas contables o financieros y elabora, analiza e interpreta los estados financieros de la organización con la aplicación de las normas internacionales.
                  </p>
                  <p>✅Gracias a los conocimientos en innovación y emprendimiento, podrá ser parte del lanzamiento de iniciativas o nuevos productos asegurando la sostenibilidad financiera de la empresa o tu propio negocio.
                  </p>
              </div>

              <div>
                  <p>✅Elabora y determina los impuestos tributarios y laborales de acuerdo a las normas tributarias. Desarrolla capacidades analíticas que aporten e iniciativas transversales de la institución.
                  </p>
              </div>
            </div>
          </div>

          {/* Certificaciones */}

          <div className="certificaciones">
            <div>
               <h2>Certificaciones</h2>
                <p>✅Soporte Técnico de los sistemas de información</p>
                <p>✅Implementación de redes y servicios de comunicación</p>
                <p>✅Gestión de la seguridad de los servicios e infraestructura de red</p>
              
            </div>
            <img src="https://i.postimg.cc/KvptbpDV/images.jpg" alt="certificado" />
          </div>
        </div>

        {/* Convenios */}
        <div className="container_convenios">
          {/* <hr className="borde_derecha" /> */}
          <div className='container-convenios'>
            <h2>Principales Convenios</h2>
            <div>
              <img src="https://i.postimg.cc/CMDYWyM0/images-1.jpg" alt="cisco" />
              <img src="https://i.postimg.cc/9Mw46x0k/8867-Microsoft-5-F00-Logo-2-D00-fo.jpg" alt="microsoft" />
              <img src="https://i.postimg.cc/yd6K9W4y/images-2.jpg" alt="oracle" />
              <img src="https://i.postimg.cc/yd6K9W4y/images-2.jpg" alt="oracle" />
              <img src="https://i.postimg.cc/yd6K9W4y/images-2.jpg" alt="oracle" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contabilidad;
