import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function PUT(request, { params }) {
  
  try {
    const data = await request.json();

    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

     
      // Update bank info
      await connection.query(
        `UPDATE trainees SET 
        bank_name = ?, account_number = ?, account_name = ?, bvn = ?
        WHERE trainee_id = ?`,
        [
          data.bank_name, data.account_number, data.account_name, data.bvn,
          id
        ]
      );

     
      await connection.commit();

      return NextResponse.json(
        { message: 'Trainee updated successfully' },
        { status: 200 }
      );

    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Update trainee error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}