import "./headerr.css";
import { useState } from "react";

const Headerr = () => {
  const [menuAbrir, setMenuAbrir] = useState(false);

  const toggleMenu = () => {
    setMenuAbrir(!menuAbrir);
  };

  return (
    <div className={`container_headerr ${menuAbrir ? "menu-abrir" : ""} `}>
      <img
        className="image_instituto"
        src="https://i.postimg.cc/kgWtNYym/lurin.png"
        alt=""
      />

      <div className="menu-icon1" onClick={toggleMenu}>
        <svg viewBox=" 0 0 100 80" width="40" height="40">
          <rect width="80" height="15"></rect>
          <rect y="30" width="80" height="15"></rect>
          <rect y="60" width="80" height="15"></rect>
          <rect></rect>
        </svg>
      </div>

      <ul className="listas_desordenadas">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Carreras</li>
        <li>Admision</li>
        <li>Noticias</li>
        <li>Contactanos</li>
      </ul>
    </div>
  );
};

export default Headerr;
