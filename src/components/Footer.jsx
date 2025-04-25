import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='footer-bottom2'>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">ОШТУ Сообщество</h5>
            <p className="footer-about">
              Объединяем выпускников ОШТУ с 1990 года. Сохраняем традиции, строим будущее.
            </p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </Col>

          <Col md={2} className="footer-col">
            <h5 className="footer-title">Навигация</h5>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/news">Новости</Link></li>
            </ul>
          </Col>

          <Col md={2} className="footer-col">
            <h5 className="footer-title">Сообщество</h5>
            <ul className="footer-links">
              <li><Link to="/alumni">Выпускникам</Link></li>
              <li><Link to="/partners">Партнеры</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </Col>

          <Col md={4} className="footer-col" >
            <h5 className="footer-title">Контакты</h5>
            <ul className="footer-contacts">
              <li>
                <FaMapMarkerAlt /> Кыргызстан, г. Ош, ул. Исанова 81
              </li>
              <li>
                <FaEnvelope /> oshtu.adyshev@mail.ru
              </li>
              <li>
                <FaPhone />(+996 3222) 4 3883
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6} className="copyright">
            © {new Date().getFullYear()} ОШТУ Сообщество выпускников. Все права защищены.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;