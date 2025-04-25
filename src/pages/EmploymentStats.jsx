import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Table, Badge, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const EmploymentStats = () => {
    // Моковые данные (замените реальными данными из API)
    const [stats, setStats] = useState({
        totalGraduates: 0,
        employed: 0,
        unemployed: 0,
        government: 0,
        education: 0,
        privateSector: 0,
        entrepreneurship: 0,
        byYear: []
    });

    // Загрузка данных (пример с моковыми данными)
    useEffect(() => {
        // Здесь должен быть fetch к вашему API
        const mockData = {
            totalGraduates: 1250,
            employed: 876,
            unemployed: 125,
            government: 230,
            education: 180,
            privateSector: 420,
            entrepreneurship: 46,
            byYear: [
                { year: 2023, employed: 92, total: 100 },
                { year: 2022, employed: 85, total: 110 },
                { year: 2021, employed: 78, total: 120 }
            ]
        };
        setStats(mockData);
    }, []);

    // Расчет процентов
    const employedPercent = Math.round((stats.employed / stats.totalGraduates) * 100);
    const unemployedPercent = Math.round((stats.unemployed / stats.totalGraduates) * 100);
    const govPercent = Math.round((stats.government / stats.employed) * 100);
    const eduPercent = Math.round((stats.education / stats.employed) * 100);
    const privatePercent = Math.round((stats.privateSector / stats.employed) * 100);
    const entrepreneurPercent = Math.round((stats.entrepreneurship / stats.employed) * 100);

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Статистика трудоустройства выпускников</h1>

            {/* Основная статистика */}
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Общая статистика</Card.Title>
                            <div className="mb-3">
                                <h5>Всего выпускников: <Badge bg="primary">{stats.totalGraduates}</Badge></h5>
                            </div>
                            <div className="mb-3">
                                <h6>Трудоустроены: {employedPercent}%</h6>
                                <ProgressBar now={employedPercent} variant="success" className="mb-2" />
                                <h6>Не трудоустроены: {unemployedPercent}%</h6>
                                <ProgressBar now={unemployedPercent} variant="danger" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Распределение по секторам</Card.Title>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Государственный сектор</td>
                                        <td>{govPercent}% ({stats.government} чел.)</td>
                                    </tr>
                                    <tr>
                                        <td>Образование (вузы/школы)</td>
                                        <td>{eduPercent}% ({stats.education} чел.)</td>
                                    </tr>
                                    <tr>
                                        <td>Частный сектор</td>
                                        <td>{privatePercent}% ({stats.privateSector} чел.)</td>
                                    </tr>
                                    <tr>
                                        <td>Собственный бизнес</td>
                                        <td>{entrepreneurPercent}% ({stats.entrepreneurship} чел.)</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Динамика по годам */}
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Динамика трудоустройства по годам</Card.Title>
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Год выпуска</th>
                                        <th>Всего выпускников</th>
                                        <th>Трудоустроено</th>
                                        <th>Процент трудоустройства</th>
                                        <th>Прогресс</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.byYear.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.year}</td>
                                            <td>{item.total}</td>
                                            <td>{item.employed}</td>
                                            <td>{Math.round((item.employed / item.total) * 100)}%</td>
                                            <td>
                                                <ProgressBar
                                                    now={Math.round((item.employed / item.total) * 100)}
                                                    variant="info"
                                                    style={{ height: '20px' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Дополнительная информация */}
            <Row className="mt-4">
                <Col>
                    <Card bg="light">
                        <Card.Body>
                            <Card.Title>Информация для работодателей</Card.Title>
                            <Card.Text>
                                Хотите предложить вакансии нашим выпускникам? Оставьте заявку в
                                <a as={Link} to="/contact" className="ms-1">разделе для работодателей</a>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default EmploymentStats;