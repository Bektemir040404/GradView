import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaRegStar, FaHandshake, FaUserFriends, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Иконки для социальных сетей и других разделов

const Community = () => {

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <motion.h1
            className="display-4 text-center fw-bold text-primary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Как остаться на связи с ОшТУ?
          </motion.h1>
          <p
            className="lead text-center text-muted mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem' }}
          >
            Вот несколько способов поддерживать связь с ОшТУ и одногруппниками!
          </p>
        </Col>
      </Row>

      {/* Социальные сети */}
      <Row className="mb-5">
        <Col>
          <h2
            className="fw-semibold text-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            <FaFacebook className="me-2" /> Социальные сети
          </h2>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Присоединяйтесь к нашей глобальной сети выпускников через эти платформы:
          </p>
          <ListGroup>
            <ListGroup.Item as="a" href="https://www.facebook.com/oshtechuniversity" target="_blank" className="fw-semibold text-info">
              <FaFacebook className="me-2" /> Facebook: ОшТУ
            </ListGroup.Item>
            <ListGroup.Item as="a" href="https://www.instagram.com/oshtu" target="_blank" className="fw-semibold text-info">
              <FaInstagram className="me-2" /> Instagram: @oshtu
            </ListGroup.Item>
            <ListGroup.Item as="a" href="https://www.linkedin.com/school/osh-tech-university" target="_blank" className="fw-semibold text-info">
              <FaLinkedin className="me-2" /> LinkedIn: ОшТУ
            </ListGroup.Item>
            <ListGroup.Item as="a" href="https://twitter.com/osh_tech_uni" target="_blank" className="fw-semibold text-info">
              <FaTwitter className="me-2" /> Twitter: @oshtu
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Карта UIDC */}
      <Row className="mb-5">
        <Col md={6}>
          <h2
            className="fw-semibold text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            <FaRegStar className="me-2" /> Примите участие в мероприятиях
          </h2>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Организуйте или примите участие в мероприятиях для выпускников:
          </p>
          <ul>
            <li>Помогите организовать мероприятия с местной группой выпускников.</li>
            <li>Создайте собственную группу выпускников в вашем регионе.</li>
            <li>Участвуйте в инициативах по сбору средств для университета.</li>
          </ul>
        </Col>
      </Row>

      {/* Менторство и трудоустройство */}
      <Row className="mb-5">
        <Col>
          <h2
            className="fw-semibold text-danger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            <FaHandshake className="me-2" /> Программа наставничества
          </h2>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Станьте наставником и помогите студентам ОшТУ добиться успеха в своей профессии.
          </p>
          <Button
            variant="outline-danger"
            size="lg"
            className="fw-semibold rounded-pill"
            as={Link} 
            to="/donate"
          >
            Стать наставником
          </Button>
        </Col>
      </Row>

      {/* Встречи с преподавателями и сотрудниками */}
      <Row>
        <Col>
          <h2
            className="fw-semibold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            <FaUserFriends className="me-2" /> Встречи с преподавателями и сотрудниками
          </h2>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Встречайтесь с преподавателями ОшТУ в вашем регионе и помогайте распространять информацию о университетских событиях.
          </p>
          <Button
            variant="outline-primary"
            size="lg"
            className="fw-semibold rounded-pill"
            href="/forum"
          >
            Узнать о событиях
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Community;
