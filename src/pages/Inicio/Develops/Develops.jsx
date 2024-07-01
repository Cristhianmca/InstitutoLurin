
import './Develops.css';

const Develops = () => {
    return (
        <div className="container_develop"> 
        <h1>DESARROLLADORES <i className="fa-solid fa-layer-group"></i></h1>
        <article className="card_develop">
            <div className='background'>
                <img className='develop__image' src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1717899819/PXL_20240519_182756082.PORTRAIT_wgxnnb.png" alt="profile"/>
                <h2 className='content__title_develop'>Cristhian Medina  <i className="fa-solid fa-badge-check"></i></h2>
            </div>
            <div className='content_develop'>
                
                <p className='content__paragraph_develop'>
                    Desarrollador fullstack Jr. con experiencia en el desarrollo de aplicaciones web 
                   
                </p>
                <p className='content__paragraph_stacks'>Stacks :</p>
                <ul className="chips">
                    <li className="chip">React.js</li>
                    <li className="chip">JavaScript</li>
                    <li className="chip">Django</li>
                </ul>
                <div className="action-buttons">
                    <a className='action-buttons__link' href="#book-a-mentor">
                        Book a lector
                    </a>
                    <a  href="#learn-more" className="secondary">
                        Learn More
                    </a>
                </div>
            </div>
        </article>
    </div>
    )
}

export default Develops;