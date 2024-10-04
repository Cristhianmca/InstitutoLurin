import Nav from "../../../../pages/Inicio/Header/Nav";
import "./Protesis.css";

const Protesis = () => {
  return (
    <div>
      <Nav />
      <div className="container_carreras">
        <img
          className="image_carreras"
          src="https://res.cloudinary.com/dxhcv6buy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720292271/qghz54utluk14uiitvj4.jpg"
          alt="imagen protesis"
        />

        <div className="carreras_tittle">
          <h1 className="carreras_tittle__tittle">Protesis Dental</h1>
          <p className="carreras_parrafo">
            Te prepararemos para diseñar, fabricar y ajustar prótesis dentales
            que mejoren la salud bucal y la estética de los pacientes.
            Aprenderás a trabajar con tecnología avanzada y materiales
            especializados, garantizando un trabajo preciso y de alta calidad
          </p>
        </div>

        <section className="container_carreras__section">
          <article className="section_article">
            Título Oficional a nombre de la Nación
          </article>
          <article className="section_article">Duración: 3 años</article>
          <article className="section_article">Modalidad: Presencial</article>
          <article className="section_article">
            Título Profesional: Técnico en Prótesis Dental
          </article>
          <article className="section_article">
            Diseño de Prótesis Dental
          </article>
          <article className="section_article">
            Fabricación de Prótesis Dental
          </article>
        </section>
      </div>
    </div>
  );
};

export default Protesis;
