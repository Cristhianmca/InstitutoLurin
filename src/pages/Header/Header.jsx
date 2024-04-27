import  { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`container_header ${menuOpen ? 'menu-open' : ''}`}>
            <Link to = '/'> <img className='image_instituto' src="https://i.postimg.cc/kgWtNYym/lurin.png" alt="" /></Link>
            <div className="menu-icon" onClick={toggleMenu}>
                <svg viewBox="0 0 150 80" width="40" height="40">
                    <rect width="80" height="15"></rect>
                    <rect y="30" width="80" height="15"></rect>
                    <rect y="60" width="80" height="15"></rect>
                </svg>
            </div>
            <ul className='lista_desordenada'>
              <Link to= '/inicio'>
                <li>Inicio</li></Link>
              <Link to = '/nosotros'>
                <li>Nosotros</li>
              </Link>
              <Link to = '/carreras'>
                <li>Carreras</li></Link>
              <Link to = '/admision'>
                <li>Admisión</li></Link>
               <Link to = '/noticias'>
                <li>Noticias</li></Link> 
              <Link to = '/contactanos'>
                <li>Contactanos</li></Link>
            </ul>
        </div>
    );
};

export default Header;

