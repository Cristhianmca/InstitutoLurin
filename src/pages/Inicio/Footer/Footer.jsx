import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2 className="footer-title">Instituto Lurín</h2>
            <p className="footer-description">
              Nuestro objetivo fundamental es formar profesionales en los tres
              programas de estudios que brindamos Diseño y Programación Web,Contabilidad y Protesís Dental, con una sólida base científica
              y tecnológica, un alto nivel de especialización.
            </p>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Enlaces Útiles</h3>
            <ul className="footer-links">
              <a href="#">Nosotros</a>
              <a href="#">Carreras</a>
              <a href="#">Admisión</a>
              <a href="#">Noticias</a>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contacto</h3>
            <p className="footer-contact">
              Dirección: A.H. Villa Alejandro 1ra Etapa - Mz. K, Lt. 15/16,
              Lurín{" "}
              <a
                target="_blank"
                href="https://maps.app.goo.gl/LicQTD8PFPDB2iXs5"
              >
                <i className="fa-duotone fa-location-dot"></i>
              </a>{" "}
            </p>

            {/*<iframe className="mapa"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.166527110122!2d-76.91184432488932!3d-12.237001388014924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bc72d6d93753%3A0xfdf8d58a089393d9!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20Tecnol%C3%B3gico%20P%C3%BAblico%20Lur%C3%ADn!5e0!3m2!1ses!2spe!4v1717120659649!5m2!1ses!2spe"
          
        ></iframe> */}

            <p className="footer-contact">
              Celular : 99999999 <i className="fa-brands fa-whatsapp"></i>{" "}
            </p>
            <p className="footer-contact">Email: lurin@gmail.com</p>
          </div>

          <div className="footer-section social">
            <h3 className="footer-title">Síguenos</h3>
            <div className="footer-social-icons">
              <a
                target="_blank"
                href="https://www.facebook.com/iestplurinOFICIAL/?locale=es_LA"
                className="footer-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Instituto Lurín. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
