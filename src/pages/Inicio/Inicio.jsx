import './Inicio.css'

const Inicio = () => {
    return (
        <div className='contenedor_inicio'>
                <div className='inicio_paragraph'>
                    <p className='inicio__paragraph-creatividad'>#  CREATIVIDAD</p>
                    <p className='inicio__paragraph-presicion'> 
                    # PRESICIÓN <img src="" alt="" />
                    </p>
                    <p className='inicio__paragraph-cuidado'>
                    # CUIDADO
                    </p>
                    <p className='inicio__paragraph-entrelazan'>
                    Se entrelazan aquí :
                    </p>
                    <div className="inicio_logo">
                <h1 className="inicio_instituto">INSTITUTO</h1>
                <h2 className="inicio_lurin">LURÍN</h2>
               </div>
                </div>
               
               <div className='inicio_container_imagen'>
             
                {/* <img className='inicio__container-diseño' src="https://i.postimg.cc/RVHYx8k8/Dise-o-sin-t-tulo-7.png" alt="" /> */}
                {/* <img className='inicio__container-protesis' src="https://i.postimg.cc/BvKvT857/protesis-dental.png" alt="" />
                <img className='inicio__container-contabilidad' src="https://i.postimg.cc/fWfYSbvf/contabilidad.png" alt="" /> */}
                
               </div>
             
        </div>

    )

}

export default Inicio;