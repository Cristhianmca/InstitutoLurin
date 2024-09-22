
import Nav from '../../../../pages/Inicio/Header/Nav'
import "./Protesis.css"


const Protesis = () => {
  return (
    
    <div >
     
        <Nav/>
        <div className='container_protesis'>
        <img className='image_protesis' src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1722474482/Instituto/protecis_con_fondo_s4o2gv.jpg" alt="imagen protesis" />

          <div className='protesis_tittle'>
        <h1>Portesis Dental</h1>
        <p>
          Domina las herramientas y lenguajes necesarios para crear sitios web
          dinámicos y funcionales. Aprende sobre diseño UX/UI, desarrollo
          frontend y backend, y conviértete en un experto en la construcción de
          experiencias digitales innovadoras
        </p>
          </div>
        
      
      <section className='container_protesis__section'>
        <article className='section_article'>
          Título Oficional a nombre de la Nación
        </article>
        <article className='section_article'>
          Duración: 3 años
        </article>
        <article className='section_article'>
          Modalidad: Presencial
        </article>
        <article className='section_article'>
          Título Profesional: Técnico en Prótesis Dental
        </article>
        <article className='section_article'>
          Diseño de Prótesis Dental
        </article>
        <article className='section_article'>
          Fabricación de Prótesis Dental
        </article>
      

      </section>
      </div>
    </div>
  )
}

export default Protesis
