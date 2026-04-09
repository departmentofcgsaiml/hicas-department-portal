import type { NextApiRequest, NextApiResponse } from 'next';
import { facultyData, FacultyMember } from '@/lib/facultyData';

// This function is our API endpoint. It will be accessible at /api/faculty
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FacultyMember[]> // It will return an array of faculty members
) {
  // For now, we are just returning the data from our file.
  // Later, this is where we will query our PostgreSQL database.
  res.status(200).json(facultyData);
}
