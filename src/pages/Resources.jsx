import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBook, FaFileAlt, FaEnvelope, FaUsers, FaBriefcase, FaQuestionCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Resources = () => {
  return (
    <Container className="my-5">
      <motion.h1
        className="text-center fw-bold mb-5 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: "Space Mono, monospace" }}
      >
        Полезные ресурсы для студентов и выпускников ОшТУ
      </motion.h1>

      <Row xs={1} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm border border-secondary rounded-2">
            <Card.Body>
              <Card.Title className="fw-bold text-primary fs-5"><FaBook /> Доступ к библиотеке ОшТУ</Card.Title>
              <Card.Text className="text-muted">
                Выпускники с студентическим билетом могут пользоваться библиотекой 
                <br /><br />
                📞 (+996) 312 915 000 доб. 305<br />
                ✉️ library@oshtu.kg<br />
                🌐 https://library.oshtu.kg/
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100 shadow-sm border border-secondary rounded-2">
            <Card.Body>
              <Card.Title className="fw-bold text-success fs-5"><FaFileAlt /> Запрос транскрипта</Card.Title>
              <Card.Text className="text-muted">
                ОшТУ выдает академические справки, подтверждения о зачислении и другие документы. 
                <br /><br />
                📞 (+996) 312 915 000 доб. 289<br />
                ✉️ service@oshtu.kg
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100 shadow-sm border border-secondary rounded-2">
            <Card.Body>
              <Card.Title className="fw-bold text-warning fs-5"><FaUsers /> Встречи выпускников</Card.Title>
              <Card.Text className="text-muted">
                Участвуйте в ежегодных карьерных ярмарках и локальных мероприятиях. Можно организовать встречу выпускников в любом городе — ОшТУ поможет!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100 shadow-sm border border-secondary rounded-2">
            <Card.Body>
              <Card.Title className="fw-bold text-info fs-5"><FaBriefcase /> Карьерные услуги</Card.Title>
              <Card.Text className="text-muted">
                Обратитесь в карьерный центр ОшТУ за помощью в поиске работы или предложите вакансию для студентов и выпускников. Связь с карьерным офисом всегда открыта.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <motion.h3
            className="fw-bold text-secondary mb-3 mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            <FaQuestionCircle /> Часто задаваемые вопросы
          </motion.h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Как восстановить доступ к личному кабинету?</Accordion.Header>
              <Accordion.Body>
                Напишите в техподдержку по адресу <a href="mailto:support@oshtu.kg">support@oshtu.kg</a> или обратитесь в деканат.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Где найти расписание экзаменов?</Accordion.Header>
              <Accordion.Body>
                Актуальное расписание всегда размещается на <a href="https://oshtu.kg" target="_blank" rel="noopener noreferrer">официальном сайте университета</a>.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Как стать участником сообщества выпускников?</Accordion.Header>
              <Accordion.Body>
                Заполните форму регистрации. По подробнее переходите на страницу <Link to="/communiti">Стать частью сообщества</Link>
              </Accordion.Body>   
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Видео */}
      <Row className="my-5">
        <Col>
          <motion.h3
            className="fw-bold text-danger mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            📺 Видео о жизни ОшТУ
          </motion.h3>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/3N4HLuCvXcY"
              title="Видео ОшТУ"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;
