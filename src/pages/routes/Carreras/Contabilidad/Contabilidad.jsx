
import Nav from '../../../../pages/Inicio/Header/Nav'
import './Contabilidad.css'


const Contabilidad = () => {
  return (
    <div  >
      <Nav/>
        <div className='container_carreras'>
            <img className='image_carreras' src="https://i.postimg.cc/J4q9HVx8/CONTABILIDAD.png" alt="imagen de contabilidad" />
        </div>
     
        
        <section className='container_principal'>

            <div className='sub_container_carreras'>
                <div className='container-tex'>
                    <p>¿Te interesa el mundo del analisis,la economia y la gestion financiera?</p>
                    <h2>La carrera de Contabilidad es ideal para ti.</h2>
                    <p>La carrera de Contabilidad te permitirá adquirir conocimientos y habilidades para la gestión de información financiera y administrativa de las organizaciones, con el fin de tomar decisiones y cumplir con las obligaciones fiscales y legales. </p>
                    <button className='boton-contabilidad'>CONOCER MAS...</button>
                </div>
            
                <div className='container_sub_img'>
                    <img className=''  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                    <img  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                    <img  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                </div>
            </div>
        </section>

        <section className='container_principal_02'>
          <div className='sub_container_principal_02'>

{/* ---------------conoce la carrera---------------- */}
            <div className='conoce_la_carrera'>
                <h2>Conoce <br /> la carrera</h2>
                <p>El profecional tecnico de administracion de redes y comunicion es capaz de implementar redes informaticas y de comuniciones siguiendo estandares internacionales.Asimismo, sabra administrar servivios de redes informaticas para garantizar el nivel comprometido y asegurar la seguridad basada en estandares inrternacionales y restricciones organizacionales</p>
            </div>

{/* ---------------lo que necesitas saber---------------- */}
            <div className='nececitas_saber'>
              <div>
                  <h2>Lo que necesitas saber</h2>
                  <h4>CARRERA</h4>
                  <p>administración de redes y comunicaciones</p>
                  <h4>DURACIÓN</h4>
                  <p>2 años</p>
                  <h4>TITULACIÓN</h4>
                  <p>profecional Técnico en administación de redes y comunicación</p>
                  <h4>FORMATO</h4>
                  <button className='boton-contabilidad'>VIRTUAL</button>
                  <h4>GRADO OBTENIDO</h4>
                  <p>Bachiller técnico en administracion de Redes y cComunicaciónes</p>
              </div>
            </div>

{/* ---------------Que aprenderas?---------------- */}
            <div className='container_aprenderas'>
              <div>
                <h2>¿Qué aprenderás?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p> 
              </div>
            </div>

{/* ---------------certificaciones---------------- */}

            <div className='certificaciones'>
              <div>
                <h2>Certificaciones</h2>
                <p>al culminar tu carrera podras obtener las siguientes certificaciones</p>
                <ul>
                  <li>soporte Técnico de los sistemas de información</li>
                  <li>imprementacion de redes y servicios de comunicacion</li>
                  <li>gestion de la seguridad de los servicios e infraestructura de red.</li>
                </ul>
              </div>
              <img src="https://i.postimg.cc/KvptbpDV/images.jpg" alt="certificado" />
            </div>
          </div>
          </section>


    </div>

  )
}

export default Contabilidad
