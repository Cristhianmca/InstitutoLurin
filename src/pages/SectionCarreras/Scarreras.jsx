import './Scarreras.css'

const Scarreras = () =>{
    return (
        <div className="container_carreras-total">
            <div className='container_carreras-tittle'><h1 className="carreras__tittle">3 CARRERAS</h1>
            </div>
            
            <div className="container_carreras">

            <div className='card'>
                 <div className='card_carreras'>
                    <div className='card_personajes'></div>
                       
                     <div className='card_detalle'>
                        <h2 className='card_detalle-tittle'>Diseño</h2>
                        <p className='card_detalle_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt praesentium quasi itaque voluptatem velit eius animi eligendi, nam veritatis.</p>
                        <div className='btn'><h6>Leer mas</h6></div>
                     </div>
                 </div>
            </div>

            <div className='card'>
                 <div className='card_carreras_2'>
                    <div className='card_personajes_2'></div>
                       
                     <div className='card_detalle_2'>
                        <h2 className='card_detalle-tittle'>Protesis Dental</h2>
                        <p className='card_detalle_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt praesentium quasi itaque voluptatem velit eius animi eligendi, nam veritatis.</p>
                        <div className='contenedor'>
                            <div className='tarjeta'><h6>Leer mas</h6></div>
                        </div>
                        
                     </div>
                 </div>
            </div>

            <div className='card'>
                 <div className='card_carreras_3'>
                    <div className='card_personajes_3'></div>
                       
                     <div className='card_detalle_3'>
                        <h2 className='card_detalle-tittle'>Contabilidad</h2>
                        <p className='card_detalle_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt praesentium quasi itaque voluptatem velit eius animi eligendi, nam veritatis.</p>
                        <div className='btn'><h6>Leer mas</h6></div>
                     </div>
                 </div>
            </div>
            </div>
        </div>
        

        
    )
}
export default Scarreras;