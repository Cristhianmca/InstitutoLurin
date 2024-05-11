import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

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
    <Link to='/'><img
        className="logo_instituto"
        src="https://i.postimg.cc/Bbk4tTfs/logoLurin.png"
        alt=""
      />
    </Link>  
      <ul className={`cont-ul ${menuOpen ? "active" : ""}`}>
        <Link className="link" to = '/'>
             <li>Inicio</li>
        </Link>
       
        
      <Link className="link"> <li>Nosotros</li>
      </Link> 

        <li className="develop">
          Carreras
          <ul className="ul-second">
            <ul className="front">
             <Link to= '/diseño' className="link"><li>Diseño y Desarrollo Web</li>
             </Link> 
             
           <Link to= '/protesis' className="link"><li>Protesis</li>
           </Link>   

            <Link to = 'contabilidad' className="link"><li>Contabilidad</li>
            </Link>  
            </ul>
          </ul>
        </li>
        <li className="develop">
          Admisión
          <ul className="ul-second">
            <ul className="front">
            <Link to = '/examen' className="link"><li>Exámen 2024</li>
            </Link>  
              
            </ul>
          </ul>
        </li>
        <li className="develop">
            Noticias
            <ul className="ul-second">
            <ul className="front">
             <Link to = '/blog' className="link"><li>Blog</li>
             </Link> 
              
            </ul>
          </ul>
            </li>

           <Link to= 'contactanos' className="link"><li className="develop">
           Contactanos <i className="fa-brands fa-whatsapp"></i>
           
            </li>
           </Link> 

      </ul>
    </nav>
  );
}

export default Nav;
