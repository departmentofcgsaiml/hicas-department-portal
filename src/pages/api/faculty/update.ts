// import type { NextApiRequest, NextApiResponse } from 'next';

// // This is our secure, server-side endpoint for updating faculty data.
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // We only allow PUT requests for updating data.
//   if (req.method === 'PUT') {
//     const updatedData = req.body;

//     // --- SIMULATE SAVING TO DATABASE ---
//     // In a real application with PostgreSQL, this is where you would write
//     // the logic to update the faculty member's record in your database.
//     console.log("Received data to update:", updatedData);
    
//     // For now, we will just simulate a successful save.
//     // We'll send a success response back to the frontend.
//     res.status(200).json({ success: true, message: 'Profile updated successfully!' });
//   } else {
//     res.setHeader('Allow', ['PUT']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


import type { NextApiRequest, NextApiResponse } from 'next';
import { facultyData } from '@/lib/facultyData';

// This is our secure, server-side endpoint for updating faculty data.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We only allow PUT requests for updating data.
  if (req.method === 'PUT') {
    const updatedData = req.body;

    // --- SERVER-SIDE VALIDATION ---
    // CORRECTED: We now check the incoming data before proceeding.
    // 1. Check if an ID exists and if it's a number.
    if (!updatedData.id || typeof updatedData.id !== 'number') {
      // If the ID is missing or invalid, send a 400 Bad Request error.
      return res.status(400).json({ success: false, message: 'Invalid or missing faculty ID.' });
    }

    // --- SIMULATE SAVING TO DATABASE ---
    // Now that we've validated the ID, we can proceed.
    // In a real application, you would find the faculty member in the database using this ID.
    const facultyMemberExists = facultyData.some(member => member.id === updatedData.id);

    if (facultyMemberExists) {
        console.log("Received valid data to update for ID:", updatedData.id);
        console.log("Updated data:", updatedData);
        
        // For now, we will just simulate a successful save.
        // We'll send a success response back to the frontend.
        res.status(200).json({ success: true, message: 'Profile updated successfully!' });
    } else {
        // If no faculty member with that ID exists in our data.
        res.status(404).json({ success: false, message: 'Faculty member not found.' });
    }

  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

