import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHandshake, FaLaptopCode, FaBullhorn, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Students = () => {
  const { t } = useTranslation();

  // Функция для рендеринга переведенного текста с HTML
  const renderTranslatedHTML = (key) => {
    return <span dangerouslySetInnerHTML={{ __html: t(key) }} />;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-5 from-primary to-info text-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <motion.h2
                className="text-center fw-bold text-primary"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {t('students_title')}
              </motion.h2>
              <p className="lead text-center text-muted mt-3">
                {t('students_subtitle')}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Scholarship Program */}
        <motion.div
          
          className="mb-5 p-4 p-md-5 bg-primary bg-opacity-10 rounded-4"
        >
          <h2 className="fw-semibold d-flex align-items-center">
            <FaGraduationCap className="me-2 text-primary" />
            {renderTranslatedHTML('students_scholarship_title')}
          </h2>
          <p className="mt-3">
            {t('students_scholarship_desc1')}
          </p>
          <p className="mt-3 fw-semibold">
            {t('students_scholarship_desc2')}
          </p>
          <Button 
            as={Link} 
            to="/apply-scholarship" 
            variant="primary" 
            className="mt-3"
          >
            {t('students_apply_button')} <FaArrowRight className="ms-2" />
          </Button>
        </motion.div>

        {/* Mentorship Program */}
        <motion.div
          
          className="mb-5 p-4 p-md-5 bg-warning bg-opacity-10 rounded-4"
        >
          <h2 className="fw-semibold d-flex align-items-center">
            <FaHandshake className="me-2 text-warning" />
            {renderTranslatedHTML('students_mentorship_title')}
          </h2>
          <p className="mt-3">
            {t('students_mentorship_desc1')}
          </p>
          <p className="mt-3 fw-semibold">
            {t('students_mentorship_desc2')}
          </p>
          <Button 
            as={Link} 
            to="/apply-mentorship" 
            variant="warning" 
            className="mt-3"
          >
            {t('students_apply_button')} <FaArrowRight className="ms-2" />
          </Button>
        </motion.div>

        {/* Digital Platform */}
        <motion.div
          
          className="mb-5 p-4 p-md-5 bg-success bg-opacity-10 rounded-4"
        >
          <h2 className="fw-semibold d-flex align-items-center">
            <FaLaptopCode className="me-2 text-success" />
            {renderTranslatedHTML('students_platform_title')}
          </h2>
          <p className="mt-3">
            {t('students_platform_desc')}
          </p>
          <Button 
            as={Link} 
            to="/digital-platform" 
            variant="success" 
            className="mt-3"
          >
            {t('students_explore_button')} <FaArrowRight className="ms-2" />
          </Button>
        </motion.div>

        {/* News and Events */}
        <motion.div
         
          className="mb-5 p-4 p-md-5 bg-danger bg-opacity-10 rounded-4"
        >
          <h2 className="fw-semibold d-flex align-items-center">
            <FaBullhorn className="me-2 text-danger" />
            {renderTranslatedHTML('students_events_title')}
          </h2>
          <p className="mt-3">
            {t('students_events_desc')}
          </p>
          <Button 
            as={Link} 
            to="/events" 
            variant="danger" 
            className="mt-3"
          >
            {t('students_view_events_button')} <FaArrowRight className="ms-2" />
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Students;