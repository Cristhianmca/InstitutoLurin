
// import Nav from "../../Inicio/Header/Nav";
// import './Noticiascss.css';
// // npm sklip carousel
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



// const Noticias = () => {
//     const noticias = [
//         {
//             nombre: 'ana González',
//             foto: 'https://randomuser.me/api/portraits/women/1.jpg',
//             contenido: '¡Increíble servicio! Los resultados superaron todas nuestras expectativas. Definitivamente recomendaré a HealthStyle a todos mis amigos y colegas. Estoy muy contenta con la atención recibida y con los cambios positivos que he experimentado en mi salud.',
//             fecha: '12 de febrero de 2024' 
//           },
//           {
//             nombre: 'Juan Pérez',
//             foto: 'https://randomuser.me/api/portraits/men/1.jpg',
//             contenido: 'He probado muchos servicios similares en el pasado, pero ninguno se compara con HealthStyle. Su atención al cliente y resultados son incomparables. ¡Totalmente recomendado! Gracias a HealthStyle he logrado mejorar mi condición física y sentirme mejor conmigo mismo.',
//             fecha: '15 de febrero de 2024' 
//           },
//           {
//             nombre: 'Ana Martínez',
//             foto: 'https://randomuser.me/api/portraits/women/2.jpg',
//             contenido: 'HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo. Recomiendo encarecidamente los servicios de HealthStyle a cualquiera que esté buscando mejorar su calidad de vida.',
//             fecha: '18 de febrero de 2024' 
//           }
     
//     ];
  
//     const settings = {
//         dots: true, // Muestra puntos de navegación en la parte inferior del carrusel para cada diapositiva.
//         infinite: true, // Habilita el desplazamiento infinito del carrusel. Al llegar al final, vuelve a empezar desde el principio.
//         speed: 1000, // Velocidad de transición entre diapositivas en milisegundos.
//         slidesToShow: 1, // Número de diapositivas a mostrar en el carrusel a la vez.
//         slidesToScroll: 1, // Número de diapositivas a desplazar en cada movimiento del carrusel.
//         autoplay: true, // Habilita la reproducción automática de las diapositivas.
//         autoplaySpeed: 4000 // Intervalo de tiempo en milisegundos antes de pasar a la siguiente diapositiva automáticamente.
//       };
  
//     return (
//       <div className='noticias_pricipal_container'>
//         <Nav />
//         <Slider {...settings}>
//           {noticias.map((noticia, index) => (
//             <div key={index} className="noticias_container">
//               <img className='noticias_img'  src={noticia.foto} alt={noticia.nombre} />
//               <h3 className='noticiasnombre'>{noticia.nombre}</h3>
//               <p >{noticia.contenido}</p>
//               <span className="noticio_fecha">{noticia.fecha}</span>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   };
  
//   export default Noticias;

const Noticias =()=>{
    return(
        <h1>Noticias</h1>
    )
}
export default Noticias;