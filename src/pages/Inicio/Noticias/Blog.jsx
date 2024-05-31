import'./Blog.css'

const Blog = () =>{
    return(
        <>
        <div className='container_paralelo'>
        <div className='container_diseño-tittle'><h1 className="diseño_programacion__tittle">BLOG</h1>
            </div>
          {/* <div className="paralelo"> Diseño y Desarrollo web </div>   */}
        </div>
        
        
        <div className='container_blog'>
           
		
	
         <div className='card_blog'>
                <img className='card__imagen' src="https://i.postimg.cc/d09WZCWb/charladise-o.jpg" alt="" />
                <p className='card__blog-paragraph'>Diseño</p>
                <h5 className='card__titulo'>Titulo</h5>
                <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
                <p>Ver mas </p>
            </div>

            <div className='card_blog'>
                <img className='card__imagen' src="https://i.postimg.cc/wBzfB2k5/charlaprotesis.jpg" alt="" />
                <h5 className='card__titulo'>Titulo</h5>
                <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum, sit dolorem suscipit officia aliquam magnam totam eos!</p>
                <p>Ver mas </p>
            </div>

            <div className='card_blog'>
                <img className='card__imagen' src="https://i.postimg.cc/YCYDkZQq/charlaconta.jpg" alt="" />
                <h5 className='card__titulo'>Titulo</h5>
                <p className='card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui natus obcaecati earum</p>
                <p>Ver mas </p>
            </div>
        </div>
        
        </>
    )
}

export default Blog;