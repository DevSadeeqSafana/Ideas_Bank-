import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const has_started_internship = formData.get('has_started_internship') === 'true';
    const has_completed_internship = formData.get('has_completed_internship') === 'true';
    const state_of_internship = formData.get('state_of_internship');
    const LGA_of_internship = formData.get('LGA_of_internship');
    const traineeId = formData.get('traineeId');
    
    const acceptanceFile = formData.get('acceptancePhoto');
    const completionFile = formData.get('completionPhoto');
    
    let internship_letter_url = formData.get('acceptancePhoto') || '';
    let completion_letter_url =formData.get('completionPhoto') || '';
    
    if (!traineeId) {
      return NextResponse.json({ error: 'Trainee ID is required' }, { status: 400 });
    }
    
    // Update internship details in the trainees table
    const result = await pool.query(
      `UPDATE trainees SET 
      has_started_internship = ?, 
      internship_letter_url = ?, 
      has_completed_internship = ?, 
      completion_letter_url = ?,
      state_of_internship = ?,
      LGA_of_internship = ?
      WHERE id = ?`,
      [
        has_started_internship ? 1 : 0, 
        internship_letter_url, 
        has_completed_internship ? 1 : 0, 
        completion_letter_url,
        state_of_internship,
        LGA_of_internship,
        traineeId
      ]
    );

    console.log('Update result:', result);

    if (result[0].affectedRows === 0) {
      return NextResponse.json({ error: 'Trainee not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Internship information saved successfully' }, { status: 200 });
    
  } catch (error) {
    console.error('Internship API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const traineeId = searchParams.get('traineeId');
    
    if (!traineeId) {
      return NextResponse.json({ error: 'Trainee ID is required' }, { status: 400 });
    }
    
    const [trainee] = await pool.query(
      'SELECT has_started_internship, internship_letter_url, has_completed_internship, completion_letter_url FROM trainees WHERE id = ?',
      [traineeId]
    );
    
    if (trainee.length === 0) {
      return NextResponse.json({ error: 'Trainee not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      has_started_internship: trainee[0].has_started_internship === 1,
      internship_letter_url: trainee[0].internship_letter_url || '',
      has_completed_internship: trainee[0].has_completed_internship === 1,
      completion_letter_url: trainee[0].completion_letter_url || ''
    });
    
  } catch (error) {
    console.error('Get internship error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}