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

async function checkTableStructure() {
  try {
    console.log('Checking trainees table structure...');
    
    // Check if table exists and get its structure
    const [columns] = await pool.query('DESCRIBE trainees');
    console.log('Table structure:');
    console.table(columns);
    
    // Get a sample row to see current data
    const [rows] = await pool.query('SELECT * FROM trainees LIMIT 1');
    console.log('\nSample row:');
    if (rows.length > 0) {
      console.log(rows[0]);
    } else {
      console.log('No data found in trainees table');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await pool.end();
  }
}

checkTableStructure();