import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { LoginModal, ForgotPasswordModal } from '../admin/AuthModals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// Список страниц для поиска (можно вынести в отдельный файл или получать через API)
const PAGES = [
  { path: '/', title: { en: 'Home', ru: 'Главная', kg: 'Башкы' }, key: 'home' },
  { path: '/about', title: { en: 'About', ru: 'О нас', kg: 'Биз жөнүндө' }, key: 'about' },
  { path: '/news', title: { en: 'News', ru: 'Новости', kg: 'Жаңылыктар' }, key: 'news' },
  { path: '/students', title: { en: 'Students', ru: 'Студенты', kg: 'Студенттер' }, key: 'students' },
  { path: '/alumni', title: { en: 'Alumni', ru: 'Выпускники', kg: 'Бүтүрүүчүлөр' }, key: 'alumni' },
  { path: '/career', title: { en: 'Career', ru: 'Карьера', kg: 'Кесип' }, key: 'career' },
  { path: '/partners', title: { en: 'Partners', ru: 'Партнеры', kg: 'Өнөктөштөр' }, key: 'partners' },
  { path: '/find-alumni', title: { en: 'Find Alumni', ru: 'Найти выпускников', kg: 'Бүтүрүүчүлөрдү табуу' }, key: 'find-alumni' },
  { path: '/contact', title: { en: 'Contact', ru: 'Контакты', kg: 'Байланыш' }, key: 'contact' },
  { path: '/cemployment-stats', title: { en: 'Employment', ru: 'Трудоустройство', kg: 'Жумушка орношуу' }, key: 'contact' },
  { path: '/donate', title: { en: 'Donate', ru: 'Пожертвовать', kg: 'Көмөк көрсөтүү' }, key: 'donate' },
  { path: '/register', title: { en: 'Register', ru: 'Регистрация', kg: 'Каттоо' }, key: 'register' },
];

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const { t, i18n: { language } } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = PAGES.filter(page => {
      const title = page.title[language] || page.title.en;
      return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setSearchResults(results);
    setShowSearchDropdown(results.length > 0);
  }, [searchQuery, language]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery('');
      setShowSearchDropdown(false);
    }
  };

  const handleResultSelect = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowSearchDropdown(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="top-bar" style={{ marginTop: '10px' }}>
        <Container className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex align-items-center">
            <Link to="/" className="brand-logo d-flex align-items-center text-decoration-none">
              <img src="/logo_oshtu.png" alt="Logo" className="brand-img me-2" />
              <div className="brand-text">
                <span>{t("university_line1")}</span>
                <span>{t("university_line2")}</span>
              </div>
            </Link>
          </div>

          <Button as={Link} to="/donate" variant="danger" size="sm" className="rounded-pill px-3 py-1 fw-semibold" style={{ fontSize: '13px' }}>
            {t("support_association")}
          </Button>

          <div className="icon-group d-flex align-items-center" style={{ color: '#0f068d' }}>
            <div className="search-container position-relative">
              <Form onSubmit={handleSearch} className="d-flex">
                <FormControl
                  type="search"
                  placeholder={t("search")}
                  className="me-2 search-input"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchDropdown(true)}
                  onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                />
                <Button variant="outline-light" type="submit" className="search-button">
                  <FaSearch />
                </Button>
              </Form>
              
              {showSearchDropdown && searchResults.length > 0 && (
                <Dropdown.Menu show className="search-dropdown">
                  {searchResults.map((page) => (
                    <Dropdown.Item 
                      key={page.key}
                      onClick={() => handleResultSelect(page.path)}
                    >
                      {page.title[language] || page.title.en}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              )}
            </div>
            
            <Nav.Link onClick={() => setShowLoginModal(true)}>{t("login")}</Nav.Link>
            <Nav.Link as={Link} to="/register">{t("register")}</Nav.Link>
            <div className="language-selector ms-2">
              <select className="form-select form-select-sm px-1" onChange={(e) => changeLanguage(e.target.value)} value={language}>
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="kg">KG</option>
              </select>
            </div>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" variant="dark" className="main-navbar">
        <Container>
          <Navbar.Toggle aria-controls="main-navbar-nav" className="custom-toggle" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">{t("nav_home")}</Nav.Link>
              <Nav.Link as={Link} to="/about">{t("nav_about")}</Nav.Link>
              <Nav.Link as={Link} to="/news">{t("nav_news")}</Nav.Link>
              <Nav.Link as={Link} to="/students">{t("nav_students")}</Nav.Link>
              <Nav.Link as={Link} to="/alumni">{t("nav_alumni")}</Nav.Link>
              <Nav.Link as={Link} to="/career">{t("nav_career")}</Nav.Link>
              <Nav.Link as={Link} to="/partners">{t("nav_partners")}</Nav.Link>
              <Nav.Link as={Link} to="/find-alumni">{t("nav_find_alumni")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("nav_contact")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onSwitchToForgotPassword={() => {
          setShowLoginModal(false);
          setShowForgotPasswordModal(true);
        }}
      />

      <ForgotPasswordModal
        show={showForgotPasswordModal}
        onHide={() => setShowForgotPasswordModal(false)}
        onSwitchToLogin={() => {
          setShowForgotPasswordModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};

export default Header;