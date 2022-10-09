import './Footer.css';
import logo from '../img/logo_isec.png';

const Footer = () => {
    return (
      <footer>
        <span>Trabalho desenvolvido por Filipe Carvalho para a cadeira de Linguagens Script</span>
        <img src={logo} alt="" />
      </footer>
    );
};

export default Footer;
