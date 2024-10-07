
import Nav from '../../Inicio/Header/Nav';
import './Noticias.css';

export default function Noticias() {
  return (
    <>
      <Nav/>
    <div className="contenedor">
      
      <section className="evento">
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261386/004_utwknp.png" alt="Desfile por Fiestas Patrias" className="imagen" />
        <div className="contenido">
          <h2 className="titulo">Semana Deportiva</h2>
          <p className="descripcion">
            Del 09 al 13 de setiembre se llevó a cabo la Semana Deportiva del
            instituto, con diversas actividades y competencias para fomentar el
            deporte y la vida saludable entre nuestros estudiantes. 

          </p>
          <button className="boton">Leer más</button>
        </div>
      </section>

      <section className="evento">
        <div className="contenido">
          <h2 className="titulo">Equipo representante de voley femenino</h2>
          <p className="descripcion">
            Nuestro equipo de vóley femenino se consagró campeón del torneo
            interuniversitario, demostrando su talento y dedicación en cada
            partido. ¡Felicitaciones a nuestras deportistas por este gran
            logro!
          </p>
          <button className="boton">Leer más</button>
        </div>
        <img src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728261387/011_vcvqwk.jpg" alt="Estudiantes en el aula" className="imagen" />
      </section>
    </div>
    </>
  );
}