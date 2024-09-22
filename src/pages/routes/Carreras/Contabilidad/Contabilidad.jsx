
import Nav from '../../../../pages/Inicio/Header/Nav'
import './Contabilidad.css'


const Contabilidad = () => {
  return (
    <div >
     
        <Nav/>
        <div className='container_carreras'>
        <img className='image_carreras' src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1722474482/Instituto/protecis_con_fondo_s4o2gv.jpg" alt="imagen protesis" />

          <div className='carreras_tittle'>
        <h1 className='carreras_tittle__tittle'>Contabilidad</h1>
        <p className='carreras_parrafo'>
          Adquiere las habilidades necesarias para gestionar y
          administrar la contabilidad de una empresa, analizar
          información financiera y tomar decisiones estratégicas
          basadas en datos. Conviértete en un profesional capaz
          de llevar la contabilidad de una organización y asesorar
          en la toma de decisiones financieras.
          

        </p>
          </div>
        
      
      <section className='container_carreras__section'>
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

export default Contabilidad
