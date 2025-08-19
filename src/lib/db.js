import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'exam_user',
  password: process.env.DB_PASSWORD || 'exam_password',
  port: parseInt(process.env.DB_PORT, 10) || 3307,
  database: process.env.DB_NAME || 'ideas_bank',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`✅ Connected to ${process.env.DB_NAME || 'ideas_bank'} database`);
    connection.release();
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
})();

export default pool;
