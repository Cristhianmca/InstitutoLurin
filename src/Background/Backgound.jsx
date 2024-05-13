import  { useState, useEffect } from "react";
import './Backgound.css'
const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const Background = () => {
  const [spaceLayers, setSpaceLayers] = useState([]);

  useEffect(() => {
    const generateSpaceLayer = (size, totalStars, duration) => {
      const layer = [];
      for (let i = 0; i < totalStars; i++) {
        const color = COLORS[~~(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
      }
      return {
        size,
        duration,
        layer: layer.join(",")
      };
    };

    const spaceLayer1 = generateSpaceLayer("2px", 250, "25s");
    const spaceLayer2 = generateSpaceLayer("3px", 100, "20s");
    const spaceLayer3 = generateSpaceLayer("5px", 25, "15s");

    setSpaceLayers([spaceLayer1, spaceLayer2, spaceLayer3]);
  }, []);

  return (
    <div className="container">
      {spaceLayers.map((spaceLayer, index) => (
        <div
          key={`space-${index + 1}`}
          className={`space space-${index + 1}`}
          style={{
            "--size": spaceLayer.size,
            "--duration": spaceLayer.duration,
            "--space-layer": spaceLayer.layer
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
