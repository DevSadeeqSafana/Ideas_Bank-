import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { normalizeTraineeId, isValidTraineeId } from '@/lib/traineeUtils';

export async function POST(request, { params }) {
  try {
    const data = await request.json();

    // Validate and normalize trainee ID
    const traineeId = normalizeTraineeId(data.traineeId);
    if (!isValidTraineeId(traineeId)) {
      return NextResponse.json(
        { error: 'Valid trainee ID is required' },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();
      console.log(`UPDATE trainees SET 
        bank_name = ?, account_number = ?, account_name = ?, bvn = ?
        WHERE id = ?`,
        [
          data.bank_name, data.account_number, data.account_name, data.bvn,
          traineeId
        ])
      // Update bank info
      await connection.query(
        `UPDATE trainees SET 
        bank_name = ?, account_number = ?, account_name = ?, bvn = ?
        WHERE id = ?`,
        [
          data.bank_name, data.account_number, data.account_name, data.bvn,
          traineeId
        ]
      );

     
      await connection.commit();

      return NextResponse.json(
        { 
          message: 'Trainee bank information updated successfully',
          traineeId: traineeId 
        },
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

export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    // Validate and normalize trainee ID
    const traineeId = normalizeTraineeId(data.id);
    if (!isValidTraineeId(traineeId)) {
      return NextResponse.json(
        { error: 'Valid trainee ID is required' },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Update trainee verification information
      await connection.query(
        `UPDATE trainees SET 
        nin = ?, date_of_birth = ?
        WHERE id = ?`,
        [
          data.nin, data.date_of_birth,
          traineeId
        ]
      );

      await connection.commit();

      return NextResponse.json(
        { 
          message: 'Trainee verification information updated successfully',
          traineeId: traineeId 
        },
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
