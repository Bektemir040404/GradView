const express = require('express');
const mysql = require('mysql2/promise'); // Используем промисы для удобства
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Настройка подключения к MySQL
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'server_213',
    database: 'university_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// API для поиска выпускников
app.post('/api/alumni', async (req, res) => {
    try {
        const { fio, direction, specialty, graduation_year, performance_year } = req.body;
        
        let query = 'SELECT * FROM alumni WHERE 1=1';
        const params = [];
        
        if (fio && fio.trim() !== '') {
            query += ' AND fio LIKE ?';
            params.push(`%${fio.trim()}%`);
        }
        if (direction && direction !== 'не выбрано') {
            query += ' AND direction = ?';
            params.push(direction);
        }
        if (specialty && specialty !== 'не выбрано') {
            query += ' AND specialty = ?';
            params.push(specialty);
        }
        if (graduation_year && graduation_year.toString().trim() !== '') {
            query += ' AND graduation_year = ?';
            params.push(parseInt(graduation_year));
        }
        if (performance_year && performance_year.toString().trim() !== '') {
            query += ' AND performance_year = ?';
            params.push(parseInt(performance_year));
        }
        
        const [results] = await db.query(query, params);
        res.json(results);
        
    } catch (err) {
        console.error('Ошибка запроса:', err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// API для получения уникальных направлений
app.get('/api/directions', async (req, res) => {
    try {
        const [results] = await db.query('SELECT DISTINCT direction FROM alumni');
        res.json(results.map(item => item.direction));
    } catch (err) {
        console.error('Ошибка запроса:', err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// API для получения специальностей по направлению
app.get('/api/specialties/:direction', async (req, res) => {
    try {
        const { direction } = req.params;
        const [results] = await db.query(
            'SELECT DISTINCT specialty FROM alumni WHERE direction = ?',
            [direction]
        );
        res.json(results.map(item => item.specialty));
    } catch (err) {
        console.error('Ошибка запроса:', err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});