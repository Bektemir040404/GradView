import { useAuth } from './AuthContext';
import { Container, Row, Col, Button,Card } from 'react-bootstrap';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4>Личный кабинет</h4>
              <Button variant="danger" onClick={logout}>
                Выйти
              </Button>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <img
                    src={user.photo || 'https://www.kindpng.com/picc/m/195-1956937_college-student-icon-hd-png-download.png'}
                    alt="Фото профиля"
                    className="rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={8}>
                  <h3>{user.lastName} {user.firstName} {user.middleName}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  
                  {user.university === 'oshTU' && (
                    <>
                      <p><strong>Университет:</strong> ОшТУ</p>
                      <p><strong>Направление:</strong> {user.direction}</p>
                      <p><strong>Специальность:</strong> {user.specialty}</p>
                      <p><strong>Годы обучения:</strong> {user.yearOfAdmission} - {user.yearOfGraduation}</p>
                    </>
                  )}
                  
                  <Button 
                    variant="primary" 
                    onClick={() => navigate('/find-alumni')}
                    className="mt-3"
                  >
                    Поиск выпускников
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};