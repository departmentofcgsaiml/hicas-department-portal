import type { NextApiRequest, NextApiResponse } from 'next';

// This is our secure, server-side login handler.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We only allow POST requests to this endpoint for security.
  if (req.method === 'POST') {
    const { facultyId, password } = req.body;

    // --- ROBUST AUTHENTICATION ---
    // CORRECTED: We now validate both the Faculty ID and the Password.
    // This is where you would normally check credentials against a real database.

    // 1. Check if the input is valid.
    if (!facultyId || !password) {
      return res.status(400).json({ success: false, message: 'Faculty ID and Password are required.' });
    }

    // 2. For now, we will use a simple, hardcoded ID and password for testing.
    // The "correct" ID is "HICAS123" and the password is "123".
    if (facultyId === 'HICAS123' && password === '123') {
      // If BOTH are correct, send a success response.
      res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
      // If either is incorrect, send a generic error response for security.
      res.status(401).json({ success: false, message: 'Incorrect Faculty ID or Password.' });
    }
  } else {
    // If the request is not a POST request, tell the user the method is not allowed.
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}