import Nav from "../../../../pages/Inicio/Header/Nav";
import "./Diseño.css";

const Diseño = () => {
  return (
    <div>
      <Nav />
      <img
        className="image_carreras"
        src="https://res.cloudinary.com/dxhcv6buy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720292271/qghz54utluk14uiitvj4.jpg"
        alt="imagen diseño y programacion"
      />
      <div className="container_carreras">
        <div className="carreras_tittle">
          <h1 className="carreras_tittle__tittle">Diseño y desarrollo web</h1>
          <p className="carreras_parrafo">
            Domina las herramientas y lenguajes necesarios para crear sitios web
            dinámicos y funcionales. Aprende sobre diseño UX/UI, desarrollo
            frontend y backend, y conviértete en un experto en la construcción
            de experiencias digitales innovadoras
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

export default Diseño;
