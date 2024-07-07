import'./Blog.css'
// import { Link } from 'react-router-dom';

// const Blog = () =>{
//     return(
//         <>
//        <div className='container_blog'>
//     <div className='container_noticias'>
//         <div className='container_diseño-tittle'>
//             <h1 className="diseño_programacion__tittle">
//                 NOTICIAS IMPORTANTES <i className="fa-duotone fa-bullhorn"></i>
//             </h1>
//         </div>
//     </div>

//     <div className='container_cards'>
//         <div className='card_blog'>
//             <img className='card__imagen' src="https://i.postimg.cc/d09WZCWb/charladise-o.jpg" alt="Card Image" />
//             {/* <p className='card__blog-paragraph'>Diseño</p> */}
//             <h5 className='card__titulo'>Titulo</h5>
//             <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
            
//         </div>

//         <div className='card_blog'>
//             <img className='card__imagen' src="https://i.postimg.cc/wBzfB2k5/charlaprotesis.jpg" alt="Card Image" />
//             <h5 className='card__titulo'>Titulo</h5>
//             <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
            
//         </div>

//         <div className='card_blog'>
//             <img className='card__imagen' src="https://i.postimg.cc/YCYDkZQq/charlaconta.jpg" alt="Card Image" />
//             <h5 className='card__titulo'>Titulo</h5>
//             <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum</p>
            
//         </div>
//         <div className='card_blog'>
//             <img className='card__imagen' src="https://i.postimg.cc/YCYDkZQq/charlaconta.jpg" alt="Card Image" />
//             <h5 className='card__titulo'>Titulo</h5>
//             <p className='card__paragraph'>Lorem ipsm dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum</p>
            
//         </div>
//     </div>

//     <div className='container_button'>
//        <Link to = '/blog'>
//         <button className='container_button_blog
//         '>Ver Noticias</button>
//         </Link> 
//     </div>
// </div>

//         </>
//     )
// }

// export default Blog;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


/*cesar*/

const Blog = () => {
    const blog = [
        {
            nombre: 'María González',
            foto: 'https://i.postimg.cc/d09WZCWb/charladise-o.jpg',
            contenido: '¡Increíble servicio! Los resultados superaron todas nuestras expectativas. Definitivamente recomendaré a HealthStyle a todos mis amigos y colegas. Estoy muy contenta con la atención recibida y con los cambios positivos que he experimentado en mi salud.',
            fecha: '12 de febrero de 2024' 
          },
          {
            nombre: 'Juan Pérez',
            foto: 'https://i.postimg.cc/wBzfB2k5/charlaprotesis.jpg',
            contenido: 'He probado muchos servicios similares en el pasado, pero ninguno se compara con HealthStyle. Su atención al cliente y resultados son incomparables. ¡Totalmente recomendado! Gracias a HealthStyle he logrado mejorar mi condición física y sentirme mejor conmigo mismo.',
            fecha: '15 de febrero de 2024' 
          },
          {
            nombre: 'Ana Martínez',
            foto: 'https://i.postimg.cc/YCYDkZQq/charlaconta.jpg',
            contenido: 'HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo. Recomiendo encarecidamente los servicios de HealthStyle a cualquiera que esté buscando mejorar su calidad de vida.',
            fecha: '18 de febrero de 2024' 
          },
          {
            nombre: 'Ana Martínez',
            foto: 'https://i.postimg.cc/YCYDkZQq/charlaconta.jpg',
            contenido: 'HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo. Recomiendo encarecidamente los servicios de HealthStyle a cualquiera que esté buscando mejorar su calidad de vida.',
            fecha: '18 de febrero de 2024' 
          }
     
    ];
  
    const settings = {
        dots: true, // Muestra puntos de navegación en la parte inferior del carrusel para cada diapositiva.
        infinite: true, // Habilita el desplazamiento infinito del carrusel. Al llegar al final, vuelve a empezar desde el principio.
        speed: 1000, // Velocidad de transición entre diapositivas en milisegundos.
        slidesToShow: 1, // Número de diapositivas a mostrar en el carrusel a la vez.
        slidesToScroll: 1, // Número de diapositivas a desplazar en cada movimiento del carrusel.
        autoplay: true, // Habilita la reproducción automática de las diapositivas.
        autoplaySpeed: 4000 // Intervalo de tiempo en milisegundos antes de pasar a la siguiente diapositiva automáticamente.
      };
  
      return (
        <div className='blog_principal_container'>
        
          <Slider {...settings}>
            {blog.map((entrada, index) => (
              <div key={index} className="blog_container">
                <img className='blog_img'  src={entrada.foto} alt={entrada.nombre} />
                <h3 className='blog_nombre'>{entrada.contenido}</h3>
                <span className="blog_fecha">{entrada.fecha}</span>
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    
    export default Blog;