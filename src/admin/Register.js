import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: '',
    agreeToTerms: false,
    university: 'other',
    direction: '',
    specialty: '',
    yearOfAdmission: '',
    yearOfGraduation: '',
    photo: '',
  });

  const [captcha, setCaptcha] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(randomCode);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleCaptchaInputChange = (e) => {
    setUserCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptchaInput !== captcha) {
      alert('Неверно введена капча. Попробуйте ещё раз.');
      generateCaptcha();
      return;
    }

    console.log('Registration data:', formData);
    alert('Регистрация прошла успешно!');
    // Здесь будет логика отправки данных на сервер
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Регистрация на сайте Ассоциации выпускников ОшТУ
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Имя *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Фамилия *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Отчество</Form.Label>
                      <Form.Control
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Пароль *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="agreeToTerms"
                    label="Согласие на обработку персональных данных *"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Выберите ВУЗ</Form.Label>
                  <Form.Check
                    type="radio"
                    label="ОшТУ"
                    name="university"
                    value="oshTU"
                    checked={formData.university === 'oshTU'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Другой ВУЗ"
                    name="university"
                    value="other"
                    checked={formData.university === 'other'}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.university === 'oshTU' && (
                  <>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Направление *</Form.Label>
                          <Form.Control
                            type="text"
                            name="direction"
                            value={formData.direction}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Специальность *</Form.Label>
                          <Form.Control
                            type="text"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Год вступления *</Form.Label>
                          <Form.Control
                            type="number"
                            name="yearOfAdmission"
                            value={formData.yearOfAdmission}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Год окончания *</Form.Label>
                          <Form.Control
                            type="number"
                            name="yearOfGraduation"
                            value={formData.yearOfGraduation}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Фото *</Form.Label>
                      <Form.Control
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Введите код с картинки *</Form.Label>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: '#f0f0f0',
                      fontSize: '24px',
                      letterSpacing: '8px',
                      marginBottom: '10px',
                      userSelect: 'none',
                    }}
                  >
                    {captcha}
                  </div>
                  <Form.Control
                    type="text"
                    value={userCaptchaInput}
                    onChange={handleCaptchaInputChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Зарегистрироваться
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
