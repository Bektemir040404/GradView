import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Forum = () => {
  return (
    <Container className="my-5">
      {/* Заголовок */}
      <motion.h1
        className="text-center fw-bold mb-5 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: "Space Mono, monospace" }}
      >
        💬 Форум ОшТУ
      </motion.h1>

      <Row className="g-4">
        <Col>
          <Card className="h-100 shadow-sm border border-secondary rounded-2">
            <Card.Body>
              <Card.Title className="fw-bold text-primary fs-5">Форум ОшТУ</Card.Title>
              <Card.Text className="text-muted">
                На форуме ОшТУ обсуждаются актуальные темы для студентов и выпускников. 
                Вы можете найти информацию о различных мероприятиях, карьере и жизни университета.
                <br />
                Узнайте больше на официальном сайте: <a href="https://oshtu.kg" target="_blank" rel="noopener noreferrer">https://oshtu.kg</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forum;
