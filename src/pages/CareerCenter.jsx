import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';

const CareerCenter = () => {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                Карьерный центр
              </motion.h2>
              <p className="lead text-center text-muted mt-3">
              Карьерный центр Ассоциации выпускников ОшТУ помогает развитию бизнеса и карьеры универсантов.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mb-5">
        <h3 style={{ color: '#1a365d', borderBottom: '2px solid #1a365d', paddingBottom: '8px' }}>
          Здесь можно найти:
        </h3>
        <ol className="list-group list-group-numbered" style={{ '--bs-list-group-number-bg': '#ebf8ff', '--bs-list-group-number-color': '#1a365d', '--bs-list-group-number-border-radius': '50%' }}>
          <li className="list-group-item">вакансии от ведущих российских и зарубежных компаний, в которых уже работают выпускники ОшТУ.</li>
          <li className="list-group-item">сотрудников, в чьих знаниях не придется сомневаться, ведь они подтверждены дипломом Университета.</li>
          <li className="list-group-item">новые возможности для повышения квалификации благодаря курсам и стажировкам компаний-партнеров Ассоциации выпускников.</li>
          <li className="list-group-item">единомышленников для нового бизнеса, проекта или научного исследования.</li>
        </ol>
      </div>

      <div className="mb-5">
        <h3 style={{ color: '#1a365d', borderBottom: '2px solid #1a365d', paddingBottom: '8px' }}>
          Карьерный центр – работодателям:
        </h3>
        <ol className="list-group list-group-numbered" style={{ '--bs-list-group-number-bg': '#ebf8ff', '--bs-list-group-number-color': '#1a365d', '--bs-list-group-number-border-radius': '50%' }}>
          <li className="list-group-item">возможность подбора кандидатов на узкопрофильные специальности или области знаний.</li>
          <li className="list-group-item">организации заказных прикладных исследований рынка труда.</li>
          <li className="list-group-item">поддержка и продвижение HR-бренда компании в сообществе университета.</li>
          <li className="list-group-item">проведение заказных прикладных исследований рынка труда.</li>
        </ol>
      </div>

      <div className="mb-5">
        <h3 style={{ color: '#1a365d', borderBottom: '2px solid #1a365d', paddingBottom: '8px' }}>
          Карьерный центр – соискателям:
        </h3>
        <div className="d-flex justify-content-center gap-3 my-4">
          <button className="btn" style={{ backgroundColor: '#1a365d', color: 'white', borderRadius: '8px', padding: '10px 20px' }}>
            Заявка
          </button>
          <button className="btn" style={{ backgroundColor: '#3182ce', color: 'white', borderRadius: '8px', padding: '10px 20px' }}>
            Банк вакансий
          </button>
        </div>
        <p className="text-center">
          Банк вакансий от надежных работодателей и консультации по карьерному и профессиональному росту от ведущих HR-экспертов и топ-менеджеров — членов Ассоциации выпускников.
        </p>
      </div>

      <div className="mb-5 p-4 rounded" style={{ backgroundColor: '#ebf8ff', borderLeft: '4px solid #1a365d' }}>
        <h3 className="text-center mb-3" style={{ color: '#1a365d' }}>Подать заявку на консультацию</h3>
        <p className="text-center">
          Банк вакансий от надежных работодателей и консультации по карьерному и профессиональному росту от ведущих HR-экспертов и топ-менеджеров — членов Ассоциации выпускников.
        </p>
      </div>

      <div className="text-center mt-5">
        <h4 style={{ color: '#1a365d' }}>КОНТАКТЫ</h4>
        <p>
          <a href="mailto:info@alumnispbu.net" style={{ color: '#3182ce' }}>oshtu.adyshev@mail.ru</a>
        </p>
      </div>
    </div>
  );
};

export default CareerCenter;