import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                Партнеры
              </motion.h2>
              <p className="lead text-center text-muted mt-3">
                Ассоциация выпускников ОшТУ ведет свою деятельность, реализует проекты и проводит мероприятия благодаря участию и активной поддержке меценатов, а также корпоративных партнёров.
              </p>

              <p className="lead text-center text-muted mt-3">
                Часть компаний-партнёров помогает нам на постоянной основе в рутинной работе. Другие – поддерживают определенные проекты или мероприятия.
              </p>

              <p className="lead text-center text-muted mt-3">
                Компании оказывают свою поддержку путём спонсорства событий и проектов, предоставления товаров и продукции in kind, оказанием профессиональных услуг pro bono.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="p-4 my-4 rounded" style={{ backgroundColor: '#ebf8ff', borderLeft: '4px solid #1a365d' }}>
        <h3 style={{ color: '#1a365d' }}>Станьте партнером</h3>
        <p>
          Мы приглашаем и Вашу компанию стать партнёром ОшТУ! Вы можете стать спонсором или партнёром мероприятий.
        </p>
        <p>
          Для обсуждения деталей сотрудничества направьте письмо руководителю партнерских программ:
          <a href="mailto:oshtu.adyshev@mail.ru" style={{ color: '#3182ce' }}> oshtu.adyshev@mail.ru</a>.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-center mb-4" style={{ color: '#1a365d' }}>Наши партнеры</h2>

        <div className="row">
          {/* Билайн */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#f0f0f0', borderRadius: '50%', marginRight: '15px' }}></div>
                  <h3 className="card-title mb-0" style={{ color: '#1a365d' }}>Билайн</h3>
                </div>
                <p className="card-text">
                  «Билайн» — один из крупнейших телекоммуникационных операторов в России и странах СНГ, предоставляющий услуги мобильной и фиксированной связи, цифрового телевидения и доступа в интернет.
                </p>
                <p className="card-text">
                  Компания активно поддерживает образовательные инициативы и цифровые проекты, способствуя развитию IT-образования в регионе.
                </p>
                <div className="mt-3">
                  <a href="https://beeline.ru/" target="_blank" rel="noopener noreferrer" className="btn me-2" style={{ backgroundColor: '#1a365d', color: 'white' }}>
                    Перейти на сайт
                  </a>
                  <a href="tel:+78007000700" className="btn" style={{ backgroundColor: '#3182ce', color: 'white' }}>
                    +996 (312) 00-00-00
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Технопарк Бишкек */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#f0f0f0', borderRadius: '50%', marginRight: '15px' }}></div>
                  <h3 className="card-title mb-0" style={{ color: '#1a365d' }}>Технопарк Бишкек</h3>
                </div>
                <p className="card-text">
                  Технопарк Бишкек — это инновационная площадка для развития стартапов и технологических компаний в Кыргызстане.
                </p>
                <p className="card-text">
                  Технопарк предоставляет резидентам инфраструктуру, менторскую поддержку, доступ к инвестициям и образовательным программам в сфере высоких технологий.
                </p>
                <div className="mt-3">
                  <a href="https://technopark.kg/" target="_blank" rel="noopener noreferrer" className="btn me-2" style={{ backgroundColor: '#1a365d', color: 'white' }}>
                    Перейти на сайт
                  </a>
                  <a href="tel:+996312000000" className="btn" style={{ backgroundColor: '#3182ce', color: 'white' }}>
                    +996 (312) 00-00-00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;