import "./Carreras.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importa Helmet

const Carreras = () => {
  return (
    <div className="container_carreras-total">
      {/* Helmet para el SEO */}
      <Helmet>
        <title>Instituto Lurín - Nuestras Carreras</title>
        <meta name="description" content="Conoce las diversas carreras que ofrecemos en el Instituto Lurín, como Prótesis, Diseño y Desarrollo Web, y Contabilidad, con formación de alta calidad y tecnología avanzada." />
        <meta name="keywords" content="Carreras, Prótesis, Diseño Web, Contabilidad, Instituto Lurín, Educación, Formación Profesional" />
      </Helmet>
      
      <div className="background_tittle">
        <div className="container_carreras-tittle">
          <h1 id="carreras" className="carreras__tittle">
            NUESTRAS CARRERAS <i className="fa-duotone fa-graduation-cap"></i>
          </h1>
        </div>

        <div className="background">
          <div className="centering">
            <div className="articles">
              <article>
                <figure>
                  <img
                    className="img-article"
                    src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1722474482/Instituto/protecis_con_fondo_s4o2gv.jpg"
                    alt="Preview"
                  />
                </figure>
                <div className="article-preview">
                  <h2 className="carreras_tittle-protesis">Prótesis</h2>
                  <p>
                    Te prepararemos para diseñar, fabricar y ajustar prótesis
                    dentales que mejoren la salud bucal y la estética de los
                    pacientes. Aprenderás a trabajar con tecnología avanzada y
                    materiales especializados, garantizando un trabajo preciso y
                    de alta calidad.
                  </p>
                  <Link to="/protesis" className="read-more" title="Ver más">
                    Ver más
                  </Link>
                </div>
              </article>
              <article>
                <figure>
                  <img
                    src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1722474481/Instituto/dise%C3%B1o_1_con_fondo_rtmjiw.jpg"
                    alt="Preview"
                  />
                </figure>
                <div className="article-preview">
                  <h2>Diseño y Desarrollo Web</h2>
                  <p>
                    Domina las herramientas y lenguajes necesarios para crear
                    sitios web dinámicos y funcionales. Aprende sobre diseño
                    UX/UI, desarrollo frontend y backend, y conviértete en un
                    experto en la construcción de experiencias digitales
                    innovadoras.
                  </p>
                  <Link to="/diseño" className="read-more" title="Ver más">
                    Ver más
                  </Link>
                </div>
              </article>
              <article>
                <figure>
                  <img
                    src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1722474481/Instituto/contabilidad_con_condo_avwvre.jpg"
                    alt="Preview"
                  />
                </figure>
                <div className="article-preview">
                  <h2>Contabilidad</h2>
                  <p>
                    Adquiere las habilidades necesarias para gestionar y
                    analizar la información financiera de una empresa. Esta
                    carrera te preparará para desempeñarte en el mundo de los
                    negocios, ofreciendo asesoría financiera, auditorías y
                    control de cuentas con precisión.
                  </p>
                  <Link to="/contabilidad" className="read-more" title="Ver más">
                    Ver más
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carreras;
