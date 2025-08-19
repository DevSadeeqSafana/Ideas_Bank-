import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  registrationno: z.string().min(2, 'Invalid Trainee ID'),
  userType: z.enum(['APPLICANT', 'ADMIN'])
});

export const loginSchema = z.object({
  registrationno: z.string().min(2,'Invalid Trainee ID'),  
});