import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export const LoginModal = ({ show, onHide, onSwitchToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    generateCaptcha();
  }, [show]);

  const generateCaptcha = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(randomCode);
    setUserCaptchaInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Вход на сайт</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Введите ваш E-mail</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите ваш пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

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
              onChange={(e) => setUserCaptchaInput(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">
            Войти
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={onSwitchToForgotPassword}>
              Забыли пароль?
            </Button>
            <Button
              variant="link"
              onClick={() => {
                onHide();
                navigate('/register');
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

// ForgotPasswordModal остается без изменений
export const ForgotPasswordModal = ({ show, onHide, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password submitted:', email);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Забыли пароль?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              Введите E-mail, указанный при регистрации, для получения нового пароля
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Выслать пароль
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={onSwitchToLogin}>
              Вернуться к входу
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};