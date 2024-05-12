import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <img
        className="logo_instituto"
        src="https://i.postimg.cc/Bbk4tTfs/logoLurin.png"
        alt=""
      />
      <ul className={`cont-ul ${menuOpen ? "active" : ""}`}>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li className="develop">
          Carreras
          <ul className="ul-second">
            <ul className="front">
              <li>Diseño y Desarrollo Web</li>
              <li>Protesis</li>
              <li>Contabilidad</li>
            </ul>
          </ul>
        </li>
        <li className="develop">
          Admisión
          <ul className="ul-second">
            <ul className="front">
              <li>Exámen 2024</li>
              
            </ul>
          </ul>
        </li>
        <li className="develop">
            Noticias
            <ul className="ul-second">
            <ul className="front">
              <li>Blog</li>
              
            </ul>
          </ul>
            </li>

            <li className="develop">
           Contactanos <i className="fa-brands fa-whatsapp"></i>
           
            </li>

      </ul>
    </nav>
  );
}

export default Nav;
