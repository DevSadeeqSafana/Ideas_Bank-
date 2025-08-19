import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();

    const { bank_name, account_number, account_name, bvn, traineeId } = data;

    if (!traineeId) {
      return NextResponse.json({ error: 'Trainee ID is required' }, { status: 400 });
    }

    console.log('Bank data received:', { bank_name, account_number, account_name, bvn, traineeId });

    // Update bank details in the trainees table
    const result = await pool.query(
      `UPDATE trainees SET 
       bank_name = ?, account_number = ?, account_name = ?, bvn = ?
       WHERE id = ?`,
      [bank_name, account_number, account_name, bvn, traineeId]
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
