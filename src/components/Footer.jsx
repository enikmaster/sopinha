import './Footer.css';
import logo from '../img/logo_isec.png';

const Footer = () => {
  const autor = "Filipe Carvalho";
  const cadeira = "Linguagens Script";

  return (
    <footer>
      <span>Trabalho desenvolvido por {autor} para a cadeira de {cadeira}</span>
      <img src={logo} alt="Logótipo do ISEC" />
    </footer>
  );
};

export default Footer;
