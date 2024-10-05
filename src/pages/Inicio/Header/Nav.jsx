import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
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
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <img className="logo_instituto" src="/lurin.png" alt="Logo Instituto" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <svg className='svg_icon' viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
        <ul className={`cont-ul ${menuOpen ? 'active' : ''}`}>
          <li className="develop"><Link to="/" className="link" onClick={toggleMenu}>
          Inicio
          </Link></li>
          <li className="develop"><Link to="/nosotros" className="link" onClick={toggleMenu}>Nosotros</Link></li>
          <li className="develop">
          <a href="#carreras" onClick={() => toggleSubmenu(0)}> Carreras  </a>  
            <ul className={`ul-second ${activeSubmenu === 0 ? 'active' : ''}`}>
              <li className="develop"><Link to="/diseño" className="link" onClick={toggleMenu}>Diseño y Desarrollo Web</Link></li>
              <li className="develop"><Link to="/protesis" className="link" onClick={toggleMenu}>Prótesis</Link></li>
              <li className="develop"><Link to="/contabilidad" className="link" onClick={toggleMenu}>Contabilidad</Link></li>
            </ul>
          </li>
          <li  className="develop" onClick={() => toggleSubmenu(1)}>
            Admisión
            <ul className={`ul-second ${activeSubmenu === 1 ? 'active' : ''}`}>
              <li className="develop"><Link to="/examen" className="link" onClick={toggleMenu}>Examen 2024</Link></li>
            </ul>
          </li>
       <Link to = "/noticias"> <li className="develop" onClick={() => toggleSubmenu(2)}>
            Noticias
            {/* <ul className={`ul-second ${activeSubmenu === 2 ? 'active' : ''}`}>
              <li className="develop"><Link to="/blog" className="link" onClick={toggleMenu}>Blog</Link></li>
            </ul> */}
          </li></Link>  
          <li className="develop">
            <Link to="/contactanos" className="link" onClick={toggleMenu}>Contáctanos </Link>
            {/* <i className="fa-brands fa-whatsapp"></i> */}
          </li>
          <li className="develop">
            <a className="biblioteca" href="https://centroderecursosies.drelm.gob.pe/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              Biblioteca Virtual 
            </a>
            {/* <i className="fa-sharp fa-solid fa-books"></i> */}
          </li>
          <li className="develop">
            <Link to="https://iestplurin.jedu.pe/" target='_blank' className="link" onClick={toggleMenu}>Intranet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}