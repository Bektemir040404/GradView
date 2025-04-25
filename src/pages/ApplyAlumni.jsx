import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ApplyAlumni = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>{t('hello')}</h1>
          <p>Добавить себя</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyAlumni;
