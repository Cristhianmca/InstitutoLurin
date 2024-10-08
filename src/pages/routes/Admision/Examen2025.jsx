
import Footer from '../../Inicio/Footer/Footer';
import Nav from '../../Inicio/Header/Nav';
import './Examen2025.css'; // Archivo CSS donde colocaremos los estilos

const Admision = () => {
  return (
    <>
    <Nav/>
    <div className="background-grid">
      <div className="card-container">
        <div className="admisiones-card">
          <div className="card-content">
            <h1 className="titulo">IESTP Lurin</h1>
            <h2 className="subtitulo">Admisión 2025</h2>
            <p className="frase">¡Sé parte del futuro con el IESTP Lurín!</p>
            <p className="descripcion">
              Nos enorgullecemos de formar profesionales altamente capacitados en diversas áreas técnicas, brindando una educación de calidad con enfoque en la tecnología y el desarrollo personal.
            </p>
            <div className="botones">
              <button className="boton-primario">requisitos</button>
              <button className="boton-secundario">+ Información</button>
            </div>
            <div className="social-media">
              <span>Síguenos en:</span>
              <div className="iconos">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="card-image">
            <img className='imagen_admision'
              src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1728353363/Blue_and_Tosca_Minimalist_Modern_University_Admission_Presentation_yakqyj.jpg"
              alt="Admisión 2025"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Admision;
