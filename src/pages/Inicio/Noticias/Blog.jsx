
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

/*cesar*/

import React from 'react';
import Slider from 'react-slick'; // Import react-slick for carousel functionality
import 'slick-carousel/slick/slick.css'; // Styles for slick carousel
import 'slick-carousel/slick/slick-theme.css'; // Theme styles for slick carousel
import './Blogcss.css';

const Blog = () => {
    const blogs = [ // Cambiado a 'blogs' para evitar confusión con el nombre del componente
        {
            nombre: 'Ana González',
            foto: 'https://i.postimg.cc/d09WZCWb/charladise-o.jpg',
            contenido: '¡Increíble servicio! Los resultados superaron todas nuestras expectativas. Definitivamente recomendaré a HealthStyle a todos mis amigos y colegas. Estoy muy contenta con la atención recibida y con los cambios positivos que he experimentado en mi salud.',
            fecha: '12 de febrero de 2024'
        },
        {
            nombre: 'Cesar Marca',
            foto: 'https://i.postimg.cc/wBzfB2k5/charlaprotesis.jpg',
            contenido: 'He probado muchos servicios similares en el pasado, pero ninguno se compara con HealthStyle. Su atención al cliente y resultados son incomparables. ¡Totalmente recomendado! Gracias a HealthStyle he logrado mejorar mi condición física y sentirme mejor conmigo mismo.',
            fecha: '15 de febrero de 2024'
        },
        {
            nombre: 'Ana Martínez',
            foto: 'https://i.postimg.cc/YCYDkZQq/charlaconta.jpg',
            contenido: 'HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo. Recomiendo encarecidamente los servicios de HealthStyle a cualquiera que esté buscando mejorar su calidad de vida.',
            fecha: '18 de febrero de 2024'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className='blog_principal_container'>
            <Slider {...settings}>
                {blogs.map((entrada, index) => ( // Cambiado a 'entrada' para evitar sombra de variables
                    <div key={index} className="blog_container">
                        <img className='blog_img' src={entrada.foto} alt={`Imagen de ${entrada.nombre}`} />
                        <h3 className='blog_contenido'>{entrada.contenido}</h3>
                        <span className="blog_fecha">{entrada.fecha}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Blog;