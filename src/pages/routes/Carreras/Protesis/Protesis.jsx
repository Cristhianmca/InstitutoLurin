import Nav from "../../../../pages/Inicio/Header/Nav";
import "./Protesis.css";

const Protesis = () => {
  return (
    <div  >
      <Nav/>
        <div className='container_carreras'>
            <img className='image_carreras' src="https://i.postimg.cc/JhGVW6bL/PROTESIS-DENTAL.png" alt="imagen de dental" />
        </div>
     
        
        <section className='container_principal'>
            <div className='sub_container_carreras'>
                <div className='container-tex'>
                    <p>¿Te interesa el mundo del analisis,la economia y la gestion financiera?</p>
                    <h2>La carrera de Protesis Dental es ideal para ti.</h2>
                    <p>La carrera de Contabilidad te permitirá adquirir conocimientos y habilidades para la gestión de información financiera y administrativa de las organizaciones, con el fin de tomar decisiones y cumplir con las obligaciones fiscales y legales. </p>
                    <button className='boton-contabilidad'>CONOCER MAS...</button>
                    {/* <hr className='borde_derecha' /> */}
                </div>
            
                <div className='container_sub_img'>
                    <img className=''  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                    <img  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                    <img  src="https://i.postimg.cc/fRqBgGDL/contabilidad-comercial.jpg" alt="img apollo contavilidad" />
                </div>    
            </div>        
        </section>
{/* ---------------conoce la carrera---------------------------- */}
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
                {/* <hr className='borde_izquierda' /> */}
                  <h2>Lo que necesitas saber</h2>
                  <h4>CARRERA</h4>
                  <p>administración de redes y comunicaciones</p>
                  <h4>DURACIÓN</h4>
                  <p>2 años</p>
                  <h4>TITULACIÓN</h4>
                  <p>profecional Técnico en administación de redes y comunicación</p>
                  <h4>FORMATO</h4>
                  <button className='boton_2'>VIRTUAL</button>
                  <h4>GRADO OBTENIDO</h4>
                  <p>Bachiller técnico en administracion de Redes y cComunicaciónes</p>
                  {/* <hr className='borde_derecha' /> */}
              </div>
            </div>

{/* ---------------Que aprenderas?---------------- */}
            <div className='container_aprenderas'>
              <div>
                <h2 className='aprenderas_tex'>¿Qué aprenderás?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nobis neque quisquam unde, sequi porro tenetur, nostrum ex </p> 
              </div>
        
            </div>

{/* ---------------certificaciones---------------- */}

            <div className='certificaciones'>
              <div>
              {/* <hr className='borde_izquierda' /> */}
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

          <div className='container_convenios'>
              {/* <hr className='borde_derecha' /> */}
            <div>
                <h2>Principales Convenios</h2>
                <div>
                    <img src="https://i.postimg.cc/CMDYWyM0/images-1.jpg" alt="cisco" />
                    <img src="https://i.postimg.cc/9Mw46x0k/8867-Microsoft-5-F00-Logo-2-D00-fo.jpg" alt="microsofs" />
                    <img src="https://i.postimg.cc/yd6K9W4y/images-2.jpg" alt="oracle" />
                </div>
            </div>
          </div>
        </section>


    </div>

  );
};

export default Protesis;
