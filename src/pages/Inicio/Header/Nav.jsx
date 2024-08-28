import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // se hizo un estado para el menu esto es para que se abra y cierre el menu

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
  }; // esto es para que se abra y cierre el menu mediante un toggle que sirve para cambiar el estado del menu

  return (
    <nav className="container_nav">
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`} // se hizo un div para el icono del menu
        onClick={toggleMenu} // esto es para que se abra y cierre el menu
      >
        <svg className='svg_icon' viewBox="0 0 150 80" width="40" height="40">
                    <rect width="80" height="15"></rect>
                    <rect y="30" width="80" height="15"></rect>
                    <rect y="60" width="80" height="15"></rect>
                </svg> 
      </div> 
   <Link to = '/'> 
   <img 
        className="logo_instituto"
        src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1717457856/images_pcrpfl.png"
        alt=""
      />  
   </Link>   
      <ul className={`cont-ul ${menuOpen ? "active" : ""}`}> 
      <Link to = '/' className="link" ><li className="develop" >Inicio</li>
      </Link>  
       <Link to='/nosotros' className="link">
       <li className="develop">Nosotros</li>
       </Link> 
        <li className="develop">
          Carreras
          <ul className="ul-second">
            <ul className="front">

             <Link to= '/diseño' className="link">
             <li className="develop
             ">Diseño y Desarrollo Web</li>
             </Link> 

            <Link to='/protesis' className="link">
            <li className="develop">Protesis</li>
            </Link>  

            <Link to= '/contabilidad' className="link">
            <li className="develop">Contabilidad</li>
            </Link>
              
            </ul>
          </ul>
        </li>
        <li className="develop">
          Admisión
          <ul className="ul-second">
            <ul className="front">
           <Link to = '/examen' className="link">
           <li className="develop">Exámen 2024</li>
           </Link>   
              
            </ul>
          </ul>
        </li>
        <li className="develop">
            Noticias
            <ul className="ul-second">
            <ul className="front">

          <Link to= '/blog' className="link">
          <li className="develop">Blog</li>
          </Link>    
              
            </ul>
          </ul>
            </li>

        <Link to = '/contactanos' className="link">
        <li className="develop">
           Contactanos <i className="fa-brands fa-whatsapp"></i>
           
            </li>
        </Link>   

        <li className="develop">
           <a className="biblioteca" href="https://centroderecursosies.drelm.gob.pe/" target="_blank">Bilioteca Virutal</a> <i className="fa-sharp-duotone fa-solid fa-books"></i>
           
            </li> 

        <Link to = '/contactanos' className="link">
        <li className="develop"> Aula Virtual <br />
           {/* <i className="fa-solid fa-user-bounty-hunter"></i> */}
           
            </li>
        </Link>   

      </ul>
    </nav>
  );
}

export default Nav;
