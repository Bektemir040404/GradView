import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    code: '',
  });
  const [verificationCode, setVerificationCode] = useState(generateVerificationCode());
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function generateVerificationCode() {
    const code = Math.floor(1000 + Math.random() * 9000); 
    return code;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.code === String(verificationCode)) {
      setIsFormSubmitted(true);
      setIsCodeCorrect(true);
    } else {
      setIsCodeCorrect(false);
    }
  };

  return (
    <Container className="my-5"  style={{ maxWidth: '900px' }}>
      {/* Заголовок */}
      <motion.h2
        className="text-center fw-bold mb-5 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: 'Space Mono, monospace' }}
      >
        Контакты
      </motion.h2>

      <Row className="mb-4">
        <Col md={4} className="d-flex justify-content-center">
          <Image
            src="https://cojo.ru/wp-content/uploads/2022/12/avatarka-38.webp" 
            alt="Асан Усонов"
            fluid
            className="shadow-sm"
            width='230px'
          />
        </Col>
        <Col md={8}>
          <h3 className="fw-bold">Асан Усонов</h3>
          <p className="text-muted">Руководитель отдела по связям с выпускниками</p>
          <p>
            <strong>Ошский Технологический Университет</strong><br />
            ул. Исанова 81, кабинет 115<br />
            Ош, Кыргызстан 723503
          </p>
          <p><strong>Телефон:</strong> (+996 3222) 4 3883</p>
          <p><strong>Email:</strong> <a href="mailto:kolakova_d@auca.kg">oshtu.adyshev@mail.ru</a></p>
        </Col>
      </Row>

      {/* Форма для отправки сообщения */}
      <Row>
        <Col>
          <h4 className="fw-bold mb-3">Остались вопросы? Напишите нам:</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Ваше имя *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Сообщение *</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="code">
              <Form.Label>Проверочный код: <strong>{verificationCode}</strong> *</Form.Label>
              <Form.Control
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                required
              />
              {!isCodeCorrect && (
                <Alert variant="danger" className="mt-2">
                  Неверный проверочный код. Пожалуйста, попробуйте снова.
                </Alert>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </Form>

          {isFormSubmitted && isCodeCorrect && (
            <Alert variant="success" className="mt-4">
              Ваше сообщение успешно отправлено!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
