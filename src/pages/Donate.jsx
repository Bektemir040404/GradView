import React from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import {
  FaHandsHelping,
  FaDonate,
  FaUserFriends,
  FaEnvelope,
  FaMoneyBillWave,
  FaUniversity,
  FaPhone,
  FaQrcode,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Donate = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5 text-center">
        <Col>
          <motion.h2
            className="fw-bold text-primary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Поддержать Ассоциацию Выпускников ОшТУ
          </motion.h2>
          <p className="lead text-muted">
            Присоединяйтесь к инициативе выпускников и помогите развитию будущих поколений!
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <h4><FaHandsHelping className="me-2" />О фонде</h4>
            <p>
              Это новая инициатива выпускников ОшТУ. Цель — объединить усилия для помощи будущим поколениям студентов через стипендии, мероприятия и развитие университета.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm bg-light">
            <h5 className="text-success"><FaDonate className="me-2" />Финансовая поддержка</h5>
            <ul>
              <li>Перевод на официальный счёт университета</li>
              <li>Оплата через QR-код</li>
              <li>Оставьте заявку — мы свяжемся с вами</li>
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-sm bg-light">
            <h5 className="text-info"><FaUserFriends className="me-2" />Нефинансовая помощь</h5>
            <ul>
              <li>Проведение лекций, мастер-классов</li>
              <li>Участие в Совете выпускников</li>
              <li>Организация сообществ выпускников по регионам</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm border-success">
            <h5 className="text-primary mb-3"><FaUniversity className="me-2" />Реквизиты для перевода</h5>
            <p><strong>Получатель:</strong> Ошский Технологический Университет</p>
            <p><strong>Банк:</strong> Keremet Bank</p>
            <p><strong>Счёт в KGS:</strong> 123456789098765</p>
            <p><strong>Назначение:</strong> "Пожертвование от выпускника"</p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow-sm border-success text-center">
            <h5><FaQrcode className="me-2" />QR-код для перевода</h5>
            <Image
              src="https://habrastorage.org/storage1/82ec194d/82c86917/c2d44992/6a420214.png"
              alt="QR для оплаты"
              fluid
              style={{ maxWidth: '168px', margin: 'auto' }}
            />
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="p-4 shadow-sm border-primary">
            <h5 className="text-primary mb-3">
              <FaMoneyBillWave className="me-2" />Вы можете поддержать Ассоциацию
            </h5>
            <p>
              Вы можете поддержать Ассоциацию выпускников — любая помощь пойдет на развитие проектов, поддержку студентов и укрепление сообщества.
            </p>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="fullname">
                    <Form.Label>Имя и фамилия *</Form.Label>
                    <Form.Control type="text" placeholder="Ваше имя и фамилия" required />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="anonymousName"
                    label="Анонимная поддержка"
                    className="mt-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="anonymousAmount"
                    label="Анонимная сумма"
                  />
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder="example@mail.com" required />
                  </Form.Group>
                  <Form.Group controlId="phone" className="mt-3">
                    <Form.Label>Телефон *</Form.Label>
                    <Form.Control type="text" placeholder="+996..." required />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="purpose">
                    <Form.Label>Назначение взноса *</Form.Label>
                    <Form.Control type="text" placeholder="Стипендия, мероприятия, оборудование..." required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="amount">
                    <Form.Label>Сумма взноса *</Form.Label>
                    <Form.Select defaultValue="">
                      <option value="">Выберите сумму</option>
                      <option value="10000">10000 с</option>
                      <option value="5000">5000 с</option>
                      <option value="1500">1500 с</option>
                      <option value="800">800 с</option>
                      <option value="500">500 с</option>
                      <option value="300">300 с</option>
                      <option value="150">150 с</option>
                      <option value="other">Другая сумма</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="success" type="submit">
                Отправить
              </Button>
              <p className="mt-3 text-muted">
                Если у вас возникли проблемы с осуществлением перевода, напишите нам на <a href="mailto:oshtu.adyshev@mail.ru">oshtu.adyshev@mail.ru</a>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <p className="text-muted">
            Вопросы? Свяжитесь с нами: <FaEnvelope className="ms-2" /> oshtu.adyshev@mail.ru | <FaPhone className="ms-2" /> (+996 3222) 4 3883
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
