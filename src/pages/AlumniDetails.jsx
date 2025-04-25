import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Фикс для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const OSH_TU_COORDINATES = {
    lat: 40.48740,
    lng: 72.83214,
    address: "г. Ош, ул. Исанова, 81"
};

const AlumniDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const alumni = state?.alumni;
    const [showContactForm, setShowContactForm] = useState(false);
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState(['Готов помогать студентам', 'Ищет сотрудников', 'Ментор']);
    const [activeTab, setActiveTab] = useState('info');

    if (!alumni) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">Данные выпускника не найдены</div>
                <button className="btn btn-primary" onClick={() => navigate('/find-alumni')}>
                    Вернуться к поиску
                </button>
            </div>
        );
    }

    const getStatusLabel = () => {
        const currentYear = new Date().getFullYear();
        if (!alumni.graduation_year) return 'Гость';
        if (alumni.graduation_year < currentYear) return 'Выпускник';
        if (alumni.graduation_year === currentYear) return 'Выпускник этого года';
        return 'Студент';
    };

    // Mock данные (замените реальными данными из БД)
    const profileData = {
        workplace: alumni.workplace || 'Не указано',
        position: alumni.position || 'Не указано',
        email: alumni.email || 'Не указано',
        phone: alumni.phone || 'Не указано',
        achievements: alumni.achievements || 'Не указано',
        skills: alumni.skills || ['Не указано'],
        events: alumni.events || ['Не указано'],
        socialLinks: alumni.socialLinks || [
            { platform: 'LinkedIn', url: '#' },
            { platform: 'Facebook', url: '#' }
        ],
        location: alumni.location || { lat: 51.505, lng: -0.09, address: 'Лондон, Великобритания' },
        careerTimeline: [
            { year: '2021-2024', position: 'Junior Developer', company: 'Tech Solutions' },
        ],
        meetings: [
            { date: '15.05.2025', description: 'Встреча на конференции TechConf 2025' },
            { date: '22.05.2025', description: 'Собеседование по найму' }
        ]
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        alert(`Сообщение отправлено: ${message}`);
        setMessage('');
        setShowContactForm(false);
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '1200px' }}>
            <button
                className="btn btn-outline-primary mb-4"
                onClick={() => navigate(-1)}
                style={{ borderRadius: '20px', padding: '5px 15px' }}
            >
                ← Вернуться к результатам
            </button>

            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                    <div className="d-flex flex-column flex-md-row align-items-center gap-4 mb-4">
                        <div className="position-relative">
                            <img
                                src="https://www.kindpng.com/picc/m/195-1956937_college-student-icon-hd-png-download.png"
                                alt={alumni.fio}
                                className="rounded-circle border"
                                style={{
                                    width: '140px',
                                    height: '140px',
                                    objectFit: 'cover',
                                    border: '3px solid #f0f0f0 !important'
                                }}
                            />
                            {alumni.is_association_member && (
                                <span
                                    className="position-absolute bottom-0 end-0 bg-success text-white rounded-circle p-2"
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        transform: 'translate(10px, 10px)'
                                    }}
                                    title="Член ассоциации"
                                >
                                    ✓
                                </span>
                            )}
                        </div>
                        <div className="text-center text-md-start flex-grow-1">
                            <h2 className="card-title mb-1" style={{ color: '#2c3e50' }}>{alumni.fio}</h2>
                            <p className="text-muted mb-2">{alumni.specialty || 'Специальность не указана'}</p>
                            <span className={`badge ${getStatusLabel() === 'Выпускник' ? 'bg-success' :
                                getStatusLabel() === 'Студент' ? 'bg-info' :
                                    getStatusLabel() === 'Выпускник этого года' ? 'bg-warning text-dark' : 'bg-secondary'}`}>
                                {getStatusLabel()}
                            </span>

                            <div className="mt-3 d-flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="badge bg-light text-dark border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button
                            className="btn btn-primary align-self-start"
                            onClick={() => setShowContactForm(!showContactForm)}
                        >
                            Связаться
                        </button>
                    </div>

                    {showContactForm && (
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5>Отправить сообщение</h5>
                                <form onSubmit={handleSendMessage}>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Введите ваше сообщение..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    <ul className="nav nav-tabs mb-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'info' ? 'active' : ''}`}
                                onClick={() => setActiveTab('info')}
                            >
                                Основная информация
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'career' ? 'active' : ''}`}
                                onClick={() => setActiveTab('career')}
                            >
                                Карьера
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'contacts' ? 'active' : ''}`}
                                onClick={() => setActiveTab('contacts')}
                            >
                                Контакты
                            </button>
                        </li>
                    </ul>

                    {activeTab === 'info' && (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Образование</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Направление</span>
                                                <span className="fw-bold">{alumni.direction || '—'}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Год вступления</span>
                                                <span className="fw-bold">
                                                    {[...new Set(alumni.performance_years?.sort())].join(', ') || '—'}
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Год окончания</span>
                                                <span className="fw-bold">{alumni.graduation_year || '—'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Участие в мероприятиях</h5>
                                    </div>
                                    <div className="card-body">
                                        {profileData.events.map((event, index) => (
                                            <div key={index} className="mb-2">
                                                <i className="bi bi-calendar-event me-2 text-primary"></i>
                                                {event}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'career' && (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Текущая работа</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Место работы</span>
                                                <span className="fw-bold">{profileData.workplace}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Должность</span>
                                                <span className="fw-bold">{profileData.position}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <h6>Профессиональные достижения:</h6>
                                                <p>{profileData.achievements}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Навыки</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">
                                            {profileData.skills.map((skill, index) => (
                                                <span key={index} className="badge bg-primary">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card mb-4 border-0 shadow-sm h-100">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Карьерный рост</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="timeline">
                                            {profileData.careerTimeline.map((item, index) => (
                                                <div key={index} className="timeline-item mb-3">
                                                    <div className="timeline-badge bg-primary"></div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-heading">
                                                            <h6 className="timeline-title">{item.position}</h6>
                                                            <p className="text-muted mb-1">
                                                                <small>{item.year}</small>
                                                            </p>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <p>{item.company}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contacts' && (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Контактная информация</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex align-items-center">
                                                <i className="bi bi-envelope me-3 text-primary fs-5"></i>
                                                <span>{profileData.email}</span>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center">
                                                <i className="bi bi-phone me-3 text-primary fs-5"></i>
                                                <span>{profileData.phone}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <h6>Социальные сети:</h6>
                                                <div className="d-flex flex-wrap gap-3 mt-2">
                                                    {profileData.socialLinks.map((link, index) => (
                                                        <a
                                                            key={index}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-decoration-none"
                                                        >
                                                            <i className={`bi bi-${link.platform.toLowerCase()} me-1`}></i>
                                                            {link.platform}
                                                        </a>
                                                    ))}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card mb-4 border-0 shadow-sm">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Встречи</h5>
                                    </div>
                                    <div className="card-body">
                                        {profileData.meetings.map((meeting, index) => (
                                            <div key={index} className="mb-3">
                                                <h6>{meeting.date}</h6>
                                                <p className="mb-0">{meeting.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Место работы</h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <div style={{ height: '400px' }}>
                                            <MapContainer
                                                center={[OSH_TU_COORDINATES.lat, OSH_TU_COORDINATES.lng]}
                                                zoom={17}
                                                style={{ height: '100%', width: '100%' }}
                                            >
                                                <TileLayer
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                />
                                                <Marker position={[OSH_TU_COORDINATES.lat, OSH_TU_COORDINATES.lng]}>
                                                    <Popup>
                                                        <strong>Ошский технологический университет</strong><br />
                                                        {OSH_TU_COORDINATES.address}
                                                    </Popup>
                                                </Marker>
                                            </MapContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-light">
                                <h5 className="mb-0">Отзывы</h5>
                            </div>
                            <div className="card-body">
                                <div className="alert alert-info">
                                    Функция отзывов будет реализована в следующей версии
                                </div>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => alert('Функция добавления отзыва будет доступна позже')}
                                >
                                    Оставить отзыв
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniDetails;