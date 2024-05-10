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
            <Link to = '/'> <img className='image_instituto' src="https://i.postimg.cc/pXw5L0G4/images.png" alt="" /></Link>
            <div className="menu-icon" onClick={toggleMenu}>
                <svg viewBox="0 0 150 80" width="40" height="40">
                    <rect width="80" height="15"></rect>
                    <rect y="30" width="80" height="15"></rect>
                    <rect y="60" width="80" height="15"></rect>
                </svg>
            </div>
            <ul className='lista_desordenada'>
              <Link className='listas' to= '/inicio'>
                <li className='listas'>Inicio</li></Link>
              <Link className='listas' to = '/nosotros'>
                <li className='listas'>Nosotros</li>
              </Link>
              <Link className='listas' to = '/carreras'>
                <li className='listas'>Carreras</li></Link>
              <Link className='listas' to = '/admision'>
                <li className='listas'>Admisión</li></Link>
               <Link className='listas' to = '/noticias'>
                <li className='listas'>Noticias</li></Link> 
              <Link className='listas' to = '/contactanos'>
                <li className='listas'>Contactanos</li></Link>
            </ul>
        </div>
    );
};

export default Header;

