import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Alumni = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-5 bg-white from-primary to-info text-white">
          <Container>
            <Row className="mb-5">
              <Col>
                <motion.h2
                  className="text-center fw-bold text-primary"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Выпускникам
                </motion.h2>
                <p className="lead text-center text-muted mt-3">
                  Приглашаем Вас присоединиться к сообществу выпускников  Университета ОшТУ!
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Изображения */}
        <Row className="justify-content-center text-center mb-4 g-4">
          <Col md={4}>
            <Card className="shadow-sm border rounded-4">
              <Card.Img variant="top" src="https://oshtu.kg/wp-content/uploads/2023/02/img133.jpg" />
              <Card.Body>
                <Card.Title>Встреча выпускников 2025</Card.Title>
                <Card.Text>Торжественное мероприятие с участием преподавателей, награждением лучших и живой музыкой.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm border rounded-4">
              <Card.Img variant="top" src="https://oshtu.kg/wp-content/uploads/2024/02/whatsapp-image-2024-02-28-at-11.56.01.jpg" />
              <Card.Body>
                <Card.Title>Alumni Club ОшТУ</Card.Title>
                <Card.Text>Сообщество для общения, коллабораций, карьерного роста и бизнес-идей между выпускниками.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* Описание */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-sm border rounded-4">
              <Card.Body>
                <p className="fs-5">
                  Ассоциация выпускников помогает универсантам и Университету найти общие интересы, будь то научный проект, получение дополнительного образования, формирование экспертного сообщества по вопросам науки, образования, экономики, развития университета или организация встречи однокурсников.
                </p>
                <p className="fs-5 fw-bold">Для реализации таких проектов в Ассоциации уже созданы:</p>
                <ul className="fs-5">
                  <li>— база данных выпускников разных лет и специальностей;</li>
                  <li>— веб-портал выпускников с широкими возможностями поиска и общения;</li>
                  <li>— группы в социальных сетях (Facebook, ВКонтакте, LinkedIn);</li>
                  <li>— регулярные новостные рассылки;</li>
                  <li>— Лекторий;</li>
                  <li>— сувенирный интернет-магазин – официальная продукция Университета;</li>
                  <li>— поддержка и развитие проектов;</li>
                  <li>— региональные представительства и клубы.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Hover-эффект */}
      <style jsx>{`
        .card:hover {
          transform: scale(1.02);
          transition: 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Alumni;
