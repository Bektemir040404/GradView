import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  const newsData = [
    {
      title: 'ОшТУ запускает Инновационный Хаб с Tesla AI',
      date: '12 апреля 2025',
      description: 'Новый центр на базе ИТ-факультета готовит лидеров в сфере искусственного интеллекта.',
      link: '#',
      image: 'https://overclockers.ru/st/c/650/400/legacy/blog/429624/541088_O.jpg',
    },
    {
      title: 'Студенты создают дрона-эколога',
      date: '5 марта 2025',
      description: 'Инженеры ОшТУ разработали дрона для очистки реки Ак-Буура от загрязнений.',
      link: '#',
      image: 'https://gornovosti.ru/media/cache/94/8e/948e602bf8c1ea694cc4bb6adbf99fa5.webp',
    },
    {
      title: 'ОшТУ — в топ-500 мировых вузов',
      date: '28 февраля 2025',
      description: 'Вуз признан на глобальном уровне за цифровые инициативы и инновации.',
      link: '#',
      image: 'https://avatars.mds.yandex.net/get-altay/14272474/2a000001951f3f38e36ec18f6d378c343bbb/L_height',
    },
    {
      title: 'Открытие AR-лаборатории',
      date: '10 февраля 2025',
      description: 'Лаборатория дополненной реальности открыта при поддержке Microsoft.',
      link: '#',
      image: 'https://vt.chuvsu.ru/uploads/posts/2020-11/1606209109_1606209161298.png',
    },
    {
      title: 'ОшТУ принимает стартап-форум',
      date: '30 января 2025',
      description: 'На форуме обсуждались инвестиции в ИТ и студенческие проекты.',
      link: '#',
      image: 'https://oshtu.kg/wp-content/uploads/2022/09/img15.jpg',
    },
    {
      title: 'Выпускница ОшТУ — финалистка Women in Tech',
      date: '12 января 2025',
      description: 'Айзира Э. вошла в ТОП-10 женщин-инноваторов Центральной Азии.',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewSBfbSB4IWjmMLl1Ps6TUn9VhtauxuLGiQ&s',
    },
    {
      title: 'ОшТУ тестирует блокчейн-дипломы',
      date: '22 декабря 2024',
      description: 'Дипломы студентов теперь можно проверить через блокчейн-систему.',
      link: '#',
      image: 'https://cryptonews.net/upload/article/detail/10b/10b87f7d9e1bd39e88bd595377744842.png',
    },
    {
      title: 'Команда ОшТУ победила в хакатоне',
      date: '15 декабря 2024',
      description: 'Студенты обошли 40 команд из СНГ, решая кейсы цифрового здравоохранения.',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zefHK-xeI7wYB5ZhQxp9m6hN20LYjEjitw&s',
    },
  ];
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
                {t('news_title')}
              </motion.h2>
              <p className="lead text-center text-muted mt-3">
                {t('news_subtitle')}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* News Grid */}
      <Container className="py-5">
        <Row className="g-4">
          {newsData.map((news, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
              >
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <Card.Img
                    variant="top"
                    src={news.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <h5 className="fw-bold">{t(`news_${index}_title`)}</h5>
                    <p className="text-muted">
                      <FaCalendarAlt className="me-2 text-primary" />
                      {t(`news_${index}_date`)}
                    </p>
                    <p className="flex-grow-1">{t(`news_${index}_desc`)}</p>
                    <div className="text-end mt-3">
                      <Button
                        variant="outline-primary"
                        as={Link}
                        to={news.link}
                      >
                        {t('news_read_more')} <FaArrowRight className="ms-1" />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default News;