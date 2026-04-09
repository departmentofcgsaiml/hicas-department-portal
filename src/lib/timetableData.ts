// This file acts as our central database for all timetables.

export type TimetableEntry = {
  subject: string;
  staff: string;
};

export type Timetable = {
  slug: string;
  title: string;
  classTutor: string;
  // A 2D array for the schedule [day][period]
  schedule: (TimetableEntry | null)[][];
};

// Data transcribed from the user's timetable image for AIML 2nd Year
const aimlYear2Schedule: (TimetableEntry | null)[][] = [
  // Day 1 (Col 1)
  [{ subject: 'RPA LAB (Lib lab)', staff: 'Dr. S.Saranya & Mrs.M.Radha' }, { subject: 'DT', staff: '(Mrs.M.Radha)' }, { subject: 'RPA LAB(Lib lab)', staff: '(Dr.D.Priyadharsini & Mrs.M.Radha)' }, { subject: 'DT', staff: '(Mrs.M.Radha)' }, { subject: 'VAC', staff: '(Ms.E.Kavipriya)' }, { subject: 'IOT LAB (Lib lab)', staff: '(Dr.S.Sasikala & Dr.D.Priyadharsini)' }],
  // Day 2 (Col 2)
  [null, { subject: 'OE', staff: '(Dr.T.Kavitha)' }, null, { subject: 'IOT', staff: '(Dr.S.Sasikala)' }, { subject: 'IOT LAB (Lib lab)', staff: '(Dr.S.Sasikala & Dr.D.Priyadharsini)' }, { subject: 'IOT', staff: '(Dr.D.Priyadharsini)' }],
  // Day 3 (Col 3)
  [{ subject: 'DT', staff: '(Ms.E.Kavipriya)' }, { subject: 'IOT LAB (Lib lab)', staff: '(Dr.S.Sasikala & Dr.D.Priyadharsini)' }, { subject: 'IOT', staff: '(Dr.S.Sasikala)' }, { subject: 'OE', staff: '(Dr.T.Kavitha)' }, { subject: 'OE', staff: '(Dr.T.Kavitha)' }, { subject: 'PLACEMENT', staff: '(Mr. Vinoth Kumar)' }],
  // Day 4 (Col 4)
  [{ subject: 'GA', staff: '(Mrs. A.Kiruthika)' }, null, { subject: 'LOE', staff: '(Mrs.R.Sumathi)' }, { subject: 'VAC', staff: '(Ms.E.Kavipriya)' }, { subject: 'IOT', staff: '(Dr.D.Priyadharsini)' }, null],
  // Day 5 (Col 5)
  [{ subject: 'IOT', staff: '(Dr.D.Priyadharsini)' }, { subject: 'DT', staff: '(Mrs.M.Radha)' }, { subject: 'OE', staff: '(Dr.T.Kavitha)' }, { subject: 'IOT LAB (Lib lab)', staff: '(Dr.S.Sasikala & Dr.D.Priyadharsini)' }, { subject: 'RPA LAB(Lib lab)', staff: '(Dr.S.Saranya & Mrs.M.Radha)' }, { subject: 'DT', staff: '(Ms.E.Kavipriya)' }],
  // Day 6 (Col 6)
  [{ subject: 'DT', staff: '(Mrs.M.Radha)' }, { subject: 'LOE', staff: '(Ms.E.Kavipriya)' }, { subject: 'GA', staff: '(Mrs.A.Kiruthika)' }, null, null, { subject: 'IOT', staff: '(Dr.D.Priyadharsini)' }]
];

export const timetableData: Timetable[] = [
  { slug: "aiml-year2", title: "AIML - 2nd Year Timetable", classTutor: "Mrs. M. Radha", schedule: aimlYear2Schedule },
  // Placeholders for other timetables
  { slug: "aiml-year1", title: "AIML - 1st Year Timetable", classTutor: "TBD", schedule: [] },
  { slug: "aiml-year3", title: "AIML - 3rd Year Timetable", classTutor: "TBD", schedule: [] },
  { slug: "cgs-year1", title: "CGS - 1st Year Timetable", classTutor: "TBD", schedule: [] },
  { slug: "cgs-year2", title: "CGS - 2nd Year Timetable", classTutor: "TBD", schedule: [] },
  { slug: "cgs-year3", title: "CGS - 3rd Year Timetable", classTutor: "TBD", schedule: [] },
];

