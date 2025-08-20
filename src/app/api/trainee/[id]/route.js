import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { normalizeTraineeId, isValidTraineeId, normalizeTraineeData } from '@/lib/traineeUtils';

export async function GET(request, { params }) {
  const { id } = await params;
  
  // Validate and normalize trainee ID
  const traineeId = normalizeTraineeId(id);
  if (!isValidTraineeId(traineeId)) {
    return NextResponse.json(
      { error: 'Valid trainee ID is required' },
      { status: 400 }
    );
  }

  try {
    const [trainee] = await pool.query( 
      `SELECT * FROM trainees WHERE id = ?`,
      [traineeId]
    );

    if (trainee.length === 0) {
      return NextResponse.json(
        { error: 'Trainee not found' },
        { status: 404 }
      );
    }

    // Normalize the trainee data for consistent field mapping
    const rawTraineeData = trainee[0];
    const normalizedData = normalizeTraineeData({
      ...rawTraineeData,
      // Map internship fields for backward compatibility
      HaveStarted: rawTraineeData.has_started_internship === 1,
      AcceptanceLetter: rawTraineeData.internship_letter_url || '',
      hascompleted: rawTraineeData.has_completed_internship === 1,
      completionLetter: rawTraineeData.completion_letter_url || ''
    });

    return NextResponse.json(normalizedData);

  } catch (error) {
    console.error('Get trainee error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


