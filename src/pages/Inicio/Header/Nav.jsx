import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="container_nav">
      <div className="menu-icon" onClick={toggleMenu}>
        <svg className='svg_icon' viewBox="0 0 150 80" width="40" height="40">
          <rect width="80" height="15"></rect>
          <rect y="30" width="80" height="15"></rect>
          <rect y="60" width="80" height="15"></rect>
        </svg>
      </div>
      <Link to="/">
        <img className="logo_instituto" src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1717457856/images_pcrpfl.png" alt="" />
      </Link>
      <ul className={`cont-ul ${menuOpen ? 'active' : ''}`}>
        <li className="develop"><Link to="/" className="link">Inicio</Link></li>
        <li className="develop"><Link to="/nosotros" className="link">Nosotros</Link></li>
        <li className="develop" onClick={() => toggleSubmenu(0)}>
          Carreras
          <ul className={`ul-second ${activeSubmenu === 0 ? 'active' : ''}`}>
            <li className="develop"><Link to="/diseño" className="link">Diseño y Desarrollo Web</Link></li>
            <li className="develop"><Link to="/protesis" className="link">Protesis</Link></li>
            <li className="develop"><Link to="/contabilidad" className="link">Contabilidad</Link></li>
          </ul>
        </li>
        <li className="develop" onClick={() => toggleSubmenu(1)}>
          Admisión
          <ul className={`ul-second ${activeSubmenu === 1 ? 'active' : ''}`}>
            <li className="develop"><Link to="/examen" className="link">Exámen 2024</Link></li>
          </ul>
        </li>
        <li className="develop" onClick={() => toggleSubmenu(2)}>
          Noticias
          <ul className={`ul-second ${activeSubmenu === 2 ? 'active' : ''}`}>
            <li className="develop"><Link to="/blog" className="link">Blog</Link></li>
          </ul>
        </li>
        <li className="develop">
          <Link to="/contactanos" className="link">
            Contáctanos <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </li>
        <li className="develop">
          <a className="biblioteca" href="https://centroderecursosies.drelm.gob.pe/" target="_blank" rel="noopener noreferrer">
            Biblioteca Virtual <i className="fa-sharp fa-solid fa-books"></i>
          </a>
        </li>
        <li className="develop">
          <Link to="/aula-virtual" className="link">
            Aula Virtual
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;