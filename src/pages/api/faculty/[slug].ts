import type { NextApiRequest, NextApiResponse } from 'next';
import { facultyData, FacultyMember } from '@/lib/facultyData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FacultyMember | { message: string }>
) {
  const { slug } = req.query; // Get the slug from the URL (e.g., /api/faculty/radha-m)

  // Find the faculty member in our data file with the matching slug
  const member = facultyData.find((m) => m.slug === slug);

  if (member) {
    // If the member is found, send their data back
    res.status(200).json(member);
  } else {
    // If not found, send a 404 error
    res.status(404).json({ message: 'Faculty member not found.' });
  }
}
