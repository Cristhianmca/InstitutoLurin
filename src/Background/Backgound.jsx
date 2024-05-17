import  { useState, useEffect } from "react";
import './Backgound.css'
const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const Background = () => {
  const [spaceLayers, setSpaceLayers] = useState([]); // se hizo un arreglo para guardar las capas de estrellas

  useEffect(() => {
    const generateSpaceLayer = (size, totalStars, duration) => {
      const layer = [];
      for (let i = 0; i < totalStars; i++) {
        const color = COLORS[~~(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
      } // todo esto es para generar las capas de estrellas
      return {
        size,
        duration,
        layer: layer.join(",")
      }; // se retorna un objeto con las propiedades de la capa de estrellas
    };

    const spaceLayer1 = generateSpaceLayer("2px", 250, "25s"); // se generan las capas de estrellas
    const spaceLayer2 = generateSpaceLayer("3px", 100, "20s"); // esto es para generar las capas de estrellas
    const spaceLayer3 = generateSpaceLayer("5px", 25, "15s"); // esto es para generar las capas de estrellas

    setSpaceLayers([spaceLayer1, spaceLayer2, spaceLayer3]);
  }, []); // esto sirve para que solo se ejecute una vez el useEffect y no se genere un bucle infinito de capas de estrellas []

  return (
    <div className="container">
      {spaceLayers.map((spaceLayer, index) => ( // se mapean las capas de estrellas mediante un map que srive para recorrer el arreglo de capas de estrellas
        <div
          key={`space-${index + 1}`}
          className={`space space-${index + 1}`}
          style={{
            "--size": spaceLayer.size,
            "--duration": spaceLayer.duration,
            "--space-layer": spaceLayer.layer
          }}
        ></div> // todo este div sirve para mapear las capas de estrellas y mostrarlas en el navegador
      ))}
    </div>
  );
};

export default Background;
