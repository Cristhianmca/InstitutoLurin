import'./Blog.css'
import { Link } from 'react-router-dom';

const Blog = () =>{
    return(
        <>
       <div className='container_blog'>
    <div className='container_noticias'>
        <div className='container_diseño-tittle'>
            <h1 className="diseño_programacion__tittle">
                NOTICIAS IMPORTANTES <i className="fa-duotone fa-bullhorn"></i>
            </h1>
        </div>
    </div>

    <div className='container_cards'>
        <div className='card_blog'>
            <img className='card__imagen' src="https://i.postimg.cc/d09WZCWb/charladise-o.jpg" alt="Card Image" />
            {/* <p className='card__blog-paragraph'>Diseño</p> */}
            <h5 className='card__titulo'>Titulo</h5>
            <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
            
        </div>

        <div className='card_blog'>
            <img className='card__imagen' src="https://i.postimg.cc/wBzfB2k5/charlaprotesis.jpg" alt="Card Image" />
            <h5 className='card__titulo'>Titulo</h5>
            <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
            
        </div>

        <div className='card_blog'>
            <img className='card__imagen' src="https://i.postimg.cc/YCYDkZQq/charlaconta.jpg" alt="Card Image" />
            <h5 className='card__titulo'>Titulo</h5>
            <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum</p>
            
        </div>
        <div className='card_blog'>
            <img className='card__imagen' src="https://i.postimg.cc/YCYDkZQq/charlaconta.jpg" alt="Card Image" />
            <h5 className='card__titulo'>Titulo</h5>
            <p className='card__paragraph'>Lorem ipsm dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum</p>
            
        </div>
    </div>

    <div className='container_button'>
       <Link to = '/blog'>
        <button className='container_button_blog
        '>Ver Noticias</button>
        </Link> 
    </div>
</div>

        </>
    )
}

export default Blog;