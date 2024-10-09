import { useState } from 'react';
import PropTypes from 'prop-types';
import './Develops.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Facebook } from 'react-feather';

const DeveloperCard = ({ developer, isPaused, setPause }) => {
  return (
    <div 
      className={`developer-card ${isPaused ? 'paused' : ''}`} 
      onMouseEnter={() => setPause(true)} 
      onMouseLeave={() => setPause(false)}
    >
      <img src={developer.photo} alt={`${developer.name} profile`} className="developer-photo" />
      <div className="developer-info">
        <h3>{developer.name}</h3>
        <p><strong>Stacks:</strong> {developer.stacks.join(', ')}</p>
        <div className="social-links">
          {developer.socials.map((social) => (
            <a href={social.link} key={social.platform} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

DeveloperCard.propTypes = {
  developer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isPaused: PropTypes.bool.isRequired,
  setPause: PropTypes.func.isRequired,
};

const Develops = () => {
  const [isPaused, setPause] = useState(false);

  const developers = [
    {
      name: 'Cristhian Medina',
      photo: 'https://res.cloudinary.com/dxhcv6buy/image/upload/v1728402480/photo_2024-10-08_10-46-13_riycka.png',
      stacks: ['HTML', 'JS', 'CSS','React','Java'],
      socials: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/cristhian-medina-7b6b54228/', icon: <FaLinkedin /> },
        { platform: 'GitHub', link: 'https://github.com/Cristhianmca', icon: <FaGithub /> },
        { platform: 'facebook', link: 'https://www.facebook.com/cristhian.medina.315', icon: <Facebook/> },
      ],
    },
    {
      name: 'Cesar Marca',
      photo: 'https://via.placeholder.com/100',
      stacks: ['Angular', 'Python', 'Django'],
      socials: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/marialopez', icon: <FaLinkedin /> },
        { platform: 'GitHub', link: 'https://github.com/marialopez', icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <div className="developers-section">
      <h2 className="typewriter-effect">Desarrolladores</h2>
      <div className={`developers-cards-container ${isPaused ? 'paused' : ''}`}>
        {developers.map((dev) => (
          <DeveloperCard key={dev.name} developer={dev} isPaused={isPaused} setPause={setPause} />
        ))}
      </div>
    </div>
  );
};

export default Develops;