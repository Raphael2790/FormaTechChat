import React from 'react';

import './Footer.css';

import logofacebook from '../../assets/facebook.png';
import logolinkedin from '../../assets/linkedin.png';
import logoyoutube from '../../assets/youtube.png';
import logofooter from '../../assets/logo_footer.png';


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-links">
        <a href="https://www.facebook.com/formareassociados/" target="_blank" rel="noopener noreferrer">
          <img src={logofacebook} alt="Logo Facebook"/>
        </a>
        <a href="https://www.linkedin.com/company/formare-associados" target="_blank" rel="noopener noreferrer">
          <img src={logolinkedin} alt="Logo Linkedin"/>
        </a>
        <a href="https://www.youtube.com/channel/UClW2qOPn50fyA04j0TkmIXw" target="_blank" rel="noopener noreferrer">
          <img src={logoyoutube} alt="Logo Youtube"/>
        </a>
      </div>
      <div className="links">
        <a href="https://formareassociados.com.br/">HOME</a> | <a href="https://formareassociados.com.br/iapp-consultores">IAPP CONSULTORES</a> | <a href="https://formareassociados.com.br/iapp-rh">IAPP GESTORES</a> | <a href="https://formareassociados.com.br/formacao">FORMAÇÃO</a> | <a href="https://formareassociados.com.br/cursos">CURSOS EAD</a> | <a href="https://formareassociados.com.br/videos">VÍDEOS</a> | <a href="https://formareassociados.com.br/evento">EVENTOS</a><br/>
        <strong><a href="https://formareassociados.com.br/sobre-nos">SOBRE</a> | <a href="https://formareassociados.com.br/noticias">NOTÌCIAS</a> | <a href="http://blog.formareassociados.com.br/">BLOG</a> | <a href="https://formareassociados.com.br/contate-nos">CONTATO</a></strong><br/><br/>
        <a href="https://formareassociados.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={logofooter} alt="Logo Formare"/>
        </a>
      </div>
      <div className="copyright">
        <p>Copyright© 2019 - Formare Associados.</p><br/>
        <p>Todos os Direitos Reservados</p>
      </div>
    </div>
  )
}
