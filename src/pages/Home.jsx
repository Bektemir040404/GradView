import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ fontSize: '1.5rem' }}>{t('hero_title')}</h2>
              <p className="lead">{t('hero_description')}</p>
              <div className="cta-buttons">
                <Button as={Link} to="/community" variant="primary" size="lg">
                  {t('join_community')}
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="student.png"
                alt={t('graduates')}
                className="img-fluid rounded hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div
          className="glass-card text-center my-5 p-4"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '7px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 32px rgba(0, 3, 162, 0.1)',
            color: '#0f068d',
          }}
        >
          <h4 className="fw-bold mb-3">
            <FaSearch className="me-2" style={{ color: '#0f068d' }} />
            {t('find_alumni')}
          </h4>
          <p className="mb-4">{t('find_alumni_desc')}</p>
          <Link to="/find-alumni" className="btn btn-outline-light px-4 py-2 rounded-pill bg-primary text-white">
            {t('go_to_search')}
          </Link>
        </div>
      </section>

      <section className="cta-banner py-4 bg-success text-white" style={{ marginTop: '20px', borderRadius: '7px' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="mb-3 mb-md-0 a">{t('new_graduate')}</h3>
              <p className="lead mb-0 b">
                {t('add_your_info')}
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button
                as={Link}
                to="/register"
                variant="light"
                size="lg"
                className="bt-s"
                style={{ marginTop: '15px' }}
              >
                <i className="bi bi-person-plus me-2"></i>{t('add_myself')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="quick-links py-5">
        <Container>
          <h2 className="text-center">{t('quick_access')}</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow">
                <Card.Body className="text-center">
                  <div className="icon-circle bg-primary-light mb-3">
                    <i className="bi bi-people fs-2 text-primary"></i>
                  </div>
                  <Card.Title className='b'>{t('section_main')}</Card.Title>
                  <ListGroup variant="flush" className='b'>
                    <ListGroup.Item action as={Link} to="/about">{t('nav_about')}</ListGroup.Item>
                    <ListGroup.Item action as={Link} to="/news">{t('nav_news')}</ListGroup.Item>
                    <ListGroup.Item action as={Link} to="/contact">{t('nav_contact')}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow">
                <Card.Body className="text-center">
                  <div className="icon-circle bg-success-light mb-3">
                    <i className="bi bi-person-badge fs-2 text-success"></i>
                  </div>
                  <Card.Title className='b'>{t('section_students_alumni')}</Card.Title>
                  <ListGroup variant="flush" className='b'>
                    <ListGroup.Item action as={Link} to="/students">{t('nav_students')}</ListGroup.Item>
                    <ListGroup.Item action as={Link} to="/alumni">{t('nav_alumni')}</ListGroup.Item>
                    <ListGroup.Item action as={Link} to="/career">{t('nav_career')}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow">
                <Card.Body className="text-center">
                  <div className="icon-circle bg-info-light mb-3">
                    <i className="bi bi-chat-left-text fs-2 text-info"></i>
                  </div>
                  <Card.Title className='b'>{t('section_partners')}</Card.Title>
                  <ListGroup variant="flush" className='b'>
                    <ListGroup.Item action as={Link} to="/partners">{t('nav_partners')}</ListGroup.Item>
                    <ListGroup.Item action as={Link} to="/survey">{t('survey')}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="employment-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="mb-4">{t('employment_stats_title')}</h2>
              <p className="lead mb-5">
                {t('employment_stats_description')}
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                {/* Основная кнопка статистики */}
                <Link
                  to="/employment-stats"
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-bold"
                  style={{
                    minWidth: '220px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <i className="bi bi-bar-chart-line me-2"></i>
                  {t('view_stats_button')}
                </Link>

                {/* Дополнительные кнопки */}
                <Link
                  to="/career"
                  className="btn btn-outline-primary btn-lg px-4 py-2 rounded-pill"
                  style={{
                    minWidth: '220px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="bi bi-briefcase me-2"></i>
                  {t('career_opportunities')}
                </Link>
              </div>
            </Col>
          </Row>

          {/* Блок с цифрами */}
          <Row className="mt-5 pt-4">
            <Col md={4} className="text-center mb-4">
              <div className="display-4 text-primary fw-bold">85%</div>
              <p className="fs-5">{t('employment_rate')}</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 text-success fw-bold">230+</div>
              <p className="fs-5">{t('companies_partners')}</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 text-info fw-bold">1,200+</div>
              <p className="fs-5">{t('graduates_last_year')}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="news-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="news.png"
                alt={t('news')}
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h2 className='a'>{t('stay_informed')}</h2>
              <p className='b'>{t('stay_informed_desc')}</p>
              <Button as={Link} to="/forum" variant="primary" size='lg' className='bt-s'>
                {t('read_forum')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
