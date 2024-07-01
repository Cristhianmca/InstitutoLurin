
import './video.css'

const VideoFondo = () => {
  return (
    <div id='miVideoFondo'>
        <video className='videoContainer'  autoPlay muted  >
             <source src='https://res.cloudinary.com/dxhcv6buy/video/upload/v1716775698/fondo-con_ventanas_zkufwc.mp4' type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoFondo
