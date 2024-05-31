
import Nav from '../../Inicio/Header/Nav'
import Background from '../../../Background/Backgound'
import './Nosotros.css'

const Nosotros = () => {
    return (
        <div>
            <Background/>
            <Nav/>
            <div className='container_mision_vision'>
                <h1 className='tittle_mision_vision'>MISIÓN</h1>
                <p className='parrafo_mision_vision'>La misión del Instituto Lurín es formar profesionales competentes, con valores éticos y morales, capaces de liderar el desarrollo de la sociedad, a través de una educación de calidad, con enfoque en la innovación, investigación y tecnología.</p>
                <h1 className='tittle_mision_vision'>VISIÓN</h1>
                <p className='parrafo_mision_vision'>El Instituto Lurín es una institución educativa líder en la formación de profesionales, reconocida por su calidad académica, innovación y compromiso con el desarrollo sostenible de la sociedad.</p>
            </div>
        </div>
    )
}

export default Nosotros