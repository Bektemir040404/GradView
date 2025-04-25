import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindAlumni = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fio: '',
    direction: 'не выбрано',
    specialty: 'не выбрано',
    graduation_year: '',
    performance_year: ''
  });

  const [directions, setDirections] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Загрузка направлений при монтировании
  useEffect(() => {
    const fetchDirections = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/directions');
        const data = await response.json();
        setDirections(data);
      } catch (err) {
        setError('Не удалось загрузить направления');
      }
    };
    fetchDirections();
  }, []);

  // Загрузка специальностей при изменении направления
  useEffect(() => {
    const fetchSpecialties = async () => {
      if (formData.direction && formData.direction !== 'не выбрано') {
        try {
          const response = await fetch(
            `http://localhost:5000/api/specialties/${encodeURIComponent(formData.direction)}`
          );
          const data = await response.json();
          setSpecialties(data);
          setFormData(prev => ({ ...prev, specialty: 'не выбрано' }));
        } catch (err) {
          setError('Не удалось загрузить специальности');
        }
      } else {
        setSpecialties([]);
      }
    };
    fetchSpecialties();
  }, [formData.direction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const groupSimilarAlumni = (data) => {
    const grouped = {};

    data.forEach(alumni => {
      const key = `${alumni.fio}_${alumni.specialty}_${alumni.graduation_year}`;

      if (!grouped[key]) {
        grouped[key] = {
          ...alumni,
          count: 1,
          performance_years: [alumni.performance_year],
          ids: [alumni.id]
        };
      } else {
        grouped[key].count += 1;
        // Добавляем год только если его еще нет в массиве
        if (!grouped[key].performance_years.includes(alumni.performance_year)) {
          grouped[key].performance_years.push(alumni.performance_year);
        }
        grouped[key].ids.push(alumni.id);
      }
    });

    return Object.values(grouped);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchPerformed(true);

    try {
      const response = await fetch('http://localhost:5000/api/alumni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fio: formData.fio.trim(),
          direction: formData.direction,
          specialty: formData.specialty,
          graduation_year: formData.graduation_year,
          performance_year: formData.performance_year
        })
      });

      if (!response.ok) throw new Error('Ошибка сервера');

      const data = await response.json();
      const groupedData = groupSimilarAlumni(data);

      setAlumniData(groupedData);

      if (groupedData.length === 0) {
        setError('Ничего не найдено. Попробуйте изменить критерии поиска.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (alumni) => {
    const currentYear = new Date().getFullYear();
    if (!alumni.graduation_year) return 'Гость';
    if (alumni.graduation_year < currentYear) return 'Выпускник';
    if (alumni.graduation_year === currentYear) return 'Выпускник этого года';
    return 'Студент';
  };

  const getAssociationStatus = (alumni) => {
    return alumni.is_association_member ? 'Член Ассоциации' : '';
  };

  const handleReset = () => {
    setFormData({
      fio: '',
      direction: 'не выбрано',
      specialty: 'не выбрано',
      graduation_year: '',
      performance_year: ''
    });
    setSpecialties([]);
    setAlumniData([]);
    setError(null);
    setSearchPerformed(false);
  };

  const handleAlumniClick = (alumni) => {
    // Передаем все данные выпускника при переходе
    navigate('/alumni-details', { state: { alumni } });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '1070px', marginBottom: '20px' }}>
      <h2 style={{ color: '#003366' }}>Поиск выпускников</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* ФИО */}
          <div className="col-md-12 mb-3">
            <label htmlFor="fio" className="form-label">Фамилия и Имя</label>
            <input
              type="text"
              className="form-control"
              id="fio"
              name="fio"
              value={formData.fio}
              onChange={handleChange}
              placeholder="Введите часть имени или фамилии"
            />
          </div>
        </div>

        <div className="row">
          {/* Год вступления */}
          <div className="col-md-3 mb-3">
            <label htmlFor="performance_year" className="form-label">Год вступления</label>
            <input
              type="number"
              className="form-control"
              id="performance_year"
              name="performance_year"
              value={formData.performance_year}
              onChange={handleChange}
              placeholder="Например: 2016"
            />
          </div>

          {/* Год окончания */}
          <div className="col-md-3 mb-3">
            <label htmlFor="graduation_year" className="form-label">Год окончания</label>
            <input
              type="number"
              className="form-control"
              id="graduation_year"
              name="graduation_year"
              value={formData.graduation_year}
              onChange={handleChange}
              placeholder="Например: 2020"
            />
          </div>
        </div>

        <div className="row">
          {/* Направление */}
          <div className="col-md-6 mb-3">
            <label htmlFor="direction" className="form-label">Направление</label>
            <select
              className="form-select"
              id="direction"
              name="direction"
              value={formData.direction}
              onChange={handleChange}
            >
              <option value="не выбрано">Выберите направление</option>
              {directions.map((dir, index) => (
                <option key={index} value={dir}>{dir}</option>
              ))}
            </select>
          </div>

          {/* Специальность */}
          <div className="col-md-6 mb-3">
            <label htmlFor="specialty" className="form-label">Специальность</label>
            <select
              className="form-select"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              disabled={formData.direction === 'не выбрано'}
            >
              <option value="не выбрано">Выберите специальность</option>
              {specialties.map((spec, index) => (
                <option key={index} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 d-flex gap-2" style={{ marginBottom: '10px' }}>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Поиск...' : 'Найти'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Сбросить
          </button>
        </div>
      </form>

      {/* Отображение результатов */}
      {loading && <div className="mt-3">Загрузка...</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {searchPerformed && (
        <div className="mt-4">
          {alumniData.length === 0 ? (
            <div className="alert alert-warning">Нет данных по заданным параметрам.</div>
          ) : (
            <>
              <div className="alert alert-info">Найдено: {alumniData.length}</div>

              <div className="list-group">
                {alumniData.map((alumni) => (
                  <div
                    key={alumni.ids[0]}
                    className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAlumniClick(alumni)}
                  >
                    <img
                      src="https://www.kindpng.com/picc/m/195-1956937_college-student-icon-hd-png-download.png"
                      alt={alumni.fio}
                      className="rounded-circle"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">
                        {alumni.fio}
                        {alumni.count > 1 && (
                          <span className="badge bg-secondary ms-2"></span>
                        )}
                      </h5>
                      <p className="mb-0 text-muted">{alumni.specialty || 'Специальность не указана'}</p>
                      <p className="mb-0">
                        <small className="text-muted">
                          {[...new Set(alumni.performance_years)].join(', ')} — {alumni.graduation_year || '—'}
                        </small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FindAlumni;