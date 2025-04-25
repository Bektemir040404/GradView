import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaCompass, FaGlobe, FaUsers, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  // Функция для рендеринга переведенного текста с HTML
  const renderTranslatedHTML = (key) => {
    return <span dangerouslySetInnerHTML={{ __html: t(key) }} />;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                {t('about_hero_title')}
              </motion.h2>
              <p className="lead text-center text-muted mt-3">
                {t('about_hero_subtitle')}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* Vision and Mission */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 h-100 bg-primary bg-opacity-10 rounded-4"
            >
              <h3 className="fw-semibold d-flex align-items-center">
                {renderTranslatedHTML('about_vision_title')}
              </h3>
              <p className="mt-3">
                {renderTranslatedHTML('about_vision_text')}
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 h-100 bg-warning bg-opacity-10 rounded-4"
            >
              <h3 className="fw-semibold d-flex align-items-center">
                {renderTranslatedHTML('about_mission_title')}
              </h3>
              <p className="mt-3">
                {renderTranslatedHTML('about_mission_text')}
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Opportunities and Community */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 h-100 bg-success bg-opacity-10 rounded-4"
            >
              <h3 className="fw-semibold d-flex align-items-center">
                {renderTranslatedHTML('about_features_title')}
              </h3>
              <ul className="mt-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {t(`about_features_list${item}`)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 h-100 bg-danger bg-opacity-10 rounded-4"
            >
              <h3 className="fw-semibold d-flex align-items-center">
                {renderTranslatedHTML('about_community_title')}
              </h3>
              <ul className="mt-3">
                {[1, 2, 3, 4].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {t(`about_community_list${item}`)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        {/* Future Plans */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-5 p-4 p-md-5 bg-dark text-white rounded-4"
        >
          <h3 className="fw-semibold d-flex align-items-center">
            {renderTranslatedHTML('about_future_title')}
          </h3>
          <p className="mt-3">
            {renderTranslatedHTML('about_future_text')}
          </p>
        </motion.div>

        <Row>
          <Col className='text-center'>
            <h3 className="text-center text-success fw-bold">
              {t('about_quote')}
            </h3>
            <p className="text-center text-muted">
              {t('about_quote_sub')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={Link}
                to="/apply-alumni"
                variant="success"
                size="lg"
                className="px-4 py-2 fw-semibold rounded-pill shadow-sm"
                style={{ fontSize: '1.1rem' }}
              >
                {renderTranslatedHTML('about_join_button')}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;