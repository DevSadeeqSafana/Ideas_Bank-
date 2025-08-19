import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request, { params }) {
  const { id } = await params;
  try {

    const [trainee] = await pool.query( 
      `SELECT * FROM trainees WHERE id = ?`,
      [id]
    );

    if (trainee.length === 0) {
      return NextResponse.json(
        { error: 'Trainee not found' },
        { status: 404 }
      );
    }

    // Map the database fields to the expected frontend format
    const traineeData = {
      ...trainee[0],
      // Map internship fields
      HaveStarted: trainee[0].has_started_internship === 1,
      AcceptanceLetter: trainee[0].internship_letter_url || '',
      hascompleted: trainee[0].has_completed_internship === 1,
      completionLetter: trainee[0].completion_letter_url || ''
    };

    return NextResponse.json(traineeData);

  } catch (error) {
    console.error('Get trainee error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  
  try {
    const { id } = await params;
    const data = await request.json();

    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Update all trainee information in a single query
      await connection.query(
        `UPDATE trainees SET 
        nin = ?, date_of_birth = ?,
        bank_name = ?, account_number = ?, account_name = ?, bvn = ?,
        has_started_internship = ?, internship_letter_url = ?, 
        has_completed_internship = ?, completion_letter_url = ?
        WHERE id = ?`,
        [
          data.nin, data.dateofbirth,
          data.bank_name, data.account_number, data.account_name, data.bvn,
          data.HaveStarted ? 1 : 0, data.AcceptanceLetter,
          data.hascompleted ? 1 : 0, data.completionLetter,
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

export async function POST(request, { params }) {
  const { id } = await params;
  
  try {
    const data = await request.json();
    const { bank_name, account_number, account_name, bvn } = data;

    if (!id) {
      return NextResponse.json({ error: 'Trainee ID is required' }, { status: 400 });
    }

    console.log('Bank data received for trainee:', { bank_name, account_number, account_name, bvn, id });

    // Update bank details in the trainees table
    const result = await pool.query(
      `UPDATE trainees SET 
       bank_name = ?, account_number = ?, account_name = ?, bvn = ?
       WHERE id = ?`,
      [bank_name, account_number, account_name, bvn, id]
    );

    console.log('Update result:', result);

    if (result[0].affectedRows === 0) {
      return NextResponse.json({ error: 'Trainee not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Bank details updated successfully' }, { status: 200 });

  } catch (error) {
    console.error('Update bank error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
