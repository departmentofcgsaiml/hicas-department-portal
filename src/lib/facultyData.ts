// // This file acts as our temporary database for faculty information.

// // Define the new, expanded structure for a faculty member's data
// export type FacultyMember = {
//   id: number;
//   slug: string;
//   name: string;
//   title: string;
//   image: string;
//   email: string;
//   phone: string;
//   expertise: string[];
//   scholarLink: string;
  
//   // New detailed fields
//   publicationStats: {
//     total: number;
//     journals: number;
//     bookChapters: number;
//     books: number;
//     conferences: number;
//     projects: number;
//   };
//   citationStats: {
//     citations: number;
//     hIndex: number;
//   };
//   googleScholarStats: {
//     citations: { total: number; since2020: number };
//     hIndex: { total: number; since2020: number };
//     i10Index: { total: number; since2020: number };
//   };
//   experience: { year: string; position: string; institution: string }[];
//   qualifications: { year: number; degree: string; university: string }[];
//   awards: { year: number; title: string; institution: string }[];
//   publications: { title: string; authors: string; type: string; journal: string; year: number }[];
// };

// // Array of all faculty members with their detailed information
// export const facultyData: FacultyMember[] = [
//   {
//     id: 1,
//     slug: "s-sasikala",
//     name: "Dr. S. Sasikala",
//     title: "Professor & Head of the Department",
//     image: "/images/faculty/hod.jpg",
//     email: "sasikala.s@hicas.ac.in",
//     phone: "+91-123-456-7890",
//     expertise: ["Computer Science Information Systems"],
//     scholarLink: "https://scholar.google.co.in/citations?user=8XJN_YQAAAAJ&hl=en",
//     publicationStats: {
//       total: 120,
//       journals: 95,
//       bookChapters: 2,
//       books: 4,
//       conferences: 19,
//       projects: 9,
//     },
//     citationStats: {
//       citations: 43,
//       hIndex: 3,
//     },
//     googleScholarStats: {
//       citations: { total: 446, since2020: 239 },
//       hIndex: { total: 10, since2020: 7 },
//       i10Index: { total: 10, since2020: 6 },
//     },
//     experience: [
//       { year: "2021 - Present", position: "Head of the Department", institution: "Hindusthan College of Arts and Science" },
//       { year: "2016 - 2021", position: "Associate Professor", institution: "Hindusthan College of Arts and Science" },
//     ],
//     qualifications: [
//         { year: 2024, degree: "DGCA Approved Drone Pilot", university: "DGCA" },
//         { year: 2017, degree: "Qualified SET", university: "Mother Teresa Womens University" },
//         { year: 2009, degree: "M.C.A., Master of Computer Applications", university: "Periyar University" },
//     ],
//     awards: [
//         { year: 2023, title: "Gold Medal - Smart Street Light using Solar and IoT", institution: "iNVENTX 2023 Multimedia University, Malaysia" },
//         { year: 2023, title: "Silver Medal - OysterIoT: IoT Based Monitoring System", institution: "iNVENTX 2023 Multimedia University, Malaysia" },
//     ],
//     publications: [
//       { title: "A Hybrid Recurrent Neural Network with Mini-Batch Gradient Descent Method for Multiple Sclerosis Disease Prediction", authors: "Kavipriya E.; Sasikala S.", type: "Conference Paper", journal: "Lecture Notes in Electrical Engineering", year: 2025 },
//       { title: "Effectiveness of feature selection in cardio vascular disease prediction using classification", authors: "Dr.S.Sasikala", type: "Article", journal: "Journal of Maharaja Sayajirao", year: 2022 },
//       { title: "E-Learning Essentials", authors: "Dr.S.Sasikala", type: "Book", journal: "SM Publishers", year: 2022 },
//     ]
//   },
//   // Add other faculty members here with simpler data structures if needed

// // Array of all faculty members with their detailed information
//  {
//     id: 2,
//     slug: "radha-m",
//     name: "Ms. Radha M",
//     title: "Assistant Professor",
//     image: "/images/faculty/faculty-3.jpg",
//     email: "radha.m@hicas.ac.in",
//     phone: "+91-123-456-7891",
//     expertise: ["Data Mining", "Machine Learning", "Web Technologies"],
//     scholarLink: "#", // Placeholder link
//     publicationStats: {
//       total: 15,
//       journals: 8,
//       bookChapters: 1,
//       books: 0,
//       conferences: 6,
//       projects: 3,
//     },
//     citationStats: {
//       citations: 25,
//       hIndex: 2,
//     },
//     googleScholarStats: {
//       citations: { total: 50, since2020: 30 },
//       hIndex: { total: 4, since2020: 4 },
//       i10Index: { total: 2, since2020: 2 },
//     },
//     experience: [
//       { year: "2018 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" },
//       { year: "2015 - 2018", position: "Software Developer", institution: "Tech Solutions Inc." },
//     ],
//     qualifications: [
//         { year: 2014, degree: "M.Phil in Computer Science", university: "Bharathiar University" },
//         { year: 2013, degree: "Master of Computer Applications (MCA)", university: "Bharathiar University" },
//     ],
//     awards: [
//         { year: 2022, title: "Best Teacher Award", institution: "Hindusthan College of Arts and Science" },
//     ],
//     publications: [
//       { title: "A Study on Machine Learning Algorithms for Text Classification", authors: "Radha M., et al.", type: "Journal Article", journal: "International Journal of Computer Science", year: 2024 },
//       { title: "An overview of Data Mining", authors: "Radha M.", type: "Book Chapter", journal: "Foundations of Computer Science", year: 2022 },
//     ]
//   },
//   {
//     id: 3,
//     slug: "kavipriya-e",
//     name: "Ms. KAVIPRIYA ELANGOVAN",
//     title: "Assistant Professor",
//     image: "/images/faculty/faculty-1.jpg",
//     email: "kavipriya.e@hicas.ac.in",
//     phone: "+91-987-654-3210",
//     expertise: ["Data Mining", "Machine Learning", "Multiple Sclerosis Diagnosis"],
//     scholarLink: "https://hicas.irins.org/profile/255392",
//      publicationStats: {
//       total: 5,
//       journals: 3,
//       bookChapters: 0,
//       books: 0,
//       conferences: 2,
//       projects: 1, // From patents
//     },
//     citationStats: { // Placeholder data
//       citations: 10,
//       hIndex: 1,
//     },
//     googleScholarStats: { // Placeholder data
//       citations: { total: 15, since2020: 15 },
//       hIndex: { total: 2, since2020: 2 },
//       i10Index: { total: 1, since2020: 1 },
//     },
//     experience: [
//       { year: "2021 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" },
//     ],
//     qualifications: [
//         { year: 2021, degree: "M.C.A", university: "Kumaraguru College of Technology" },
//         { year: 2019, degree: "B.Sc (CS)", university: "Sri Krishna Arts and Science College" },
//     ],
//     awards: [
//         { year: 2023, title: "Gold Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" },
//         { year: 2023, title: "Silver Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" },
//         { year: 2021, title: "Bronze Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" },
//     ],
//     publications: [
//       { title: "Parkinson’s Disease diagnosis using Data Mining Techniques: Survey and Comprehensive Evaluation", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "UGC – Care Approved : Education and Society", year: 2023 },
//       { title: "A survey on Machine Learning Techniques used for Multiple Sclerosis Diagnosis: Challenges and Potential", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "UGC – Care Approved: Humanities and Social Science Studies", year: 2023 },
//       { title: "Performance assessment of machine learning techniques for early multiple sclerosis prediction using resting-state FMRI connectivity data", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "Web of Science: Muskin in bayern", year: 2023 },
//       { title: "A Hybrid Recurrent Neural Network with Mini-Batch Gradient Descent method for Multiple Sclerosis Disease", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Conference Paper", journal: "4th International Conference on Advances and Application of Artificial Intelligence and Machine Learning (ICAAIML – 2023)", year: 2023 },
//       { title: "Comprehensive Survey of Applications of Data Mining Techniques in Healthcare", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Conference Paper", journal: "3rd International Conference on Engineering, Social-Sciences and Humanities (ICESSU – 2023)", year: 2021 },
//     ]
//   },
//   // ADDED more examples with unique slugs
//    {
//   id: 4,
//   slug: "jayakumar-r",
//   name: "Mr. Jayakumar R",
//   title: "Assistant Professor",
//   image: "/images/faculty/faculty-2.jpg",
//   email: "jayakumar.r@hicas.ac.in",
//   phone: "+91-111-222-3333",
//   expertise: ["Computer Science Information Systems", "Artificial Intelligence"],
//   scholarLink: "#", // Placeholder for his Google Scholar link
//   publicationStats: {
//     total: 1,
//     journals: 0,
//     bookChapters: 0,
//     books: 0,
//     conferences: 1,
//     projects: 0,
//   },
//   citationStats: { // Placeholder data
//     citations: 9,
//     hIndex: 1,
//   },
//   googleScholarStats: {
//     citations: { total: 9, since2020: 4 },
//     hIndex: { total: 1, since2020: 1 },
//     i10Index: { total: 0, since2020: 0 },
//   },
//   experience: [
//     { year: "2021 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" },
//   ],
//   qualifications: [
//       { year: 2014, degree: "M.Phil", university: "Sankara College of Science and Commerce" },
//   ],
//   awards: [], // No awards listed, so it's an empty array
//   publications: [
//     { title: "Network Security Protocols", authors: "Jayakumar R", type: "Conference Paper", journal: "International Conference on Network Security", year: 2023 },
//   ],
//   researchInterests: ["Network Security", "Cryptography"], 
// }
// ];

// This file acts as our temporary database for faculty information.

export type FacultyMember = {
  id: number;
  slug: string;
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  expertise: string[];
  scholarLink: string;
  publicationStats: { total: number; journals: number; bookChapters: number; books: number; conferences: number; projects: number; };
  citationStats: { citations: number; hIndex: number; };
  googleScholarStats: { citations: { total: number; since2020: number }; hIndex: { total: number; since2020: number }; i10Index: { total: number; since2020: number }; };
  experience: { year: string; position: string; institution: string }[];
  qualifications: { year: number; degree: string; university: string }[];
  awards: { year: number; title: string; institution: string }[];
  publications: { title: string; authors: string; type: string; journal: string; year: number }[];
  researchInterests: string[];
};

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    slug: "s-sasikala",
    name: "Dr. S. Sasikala",
    title: "Professor & Head of the Department",
    image: "/images/faculty/hod.jpg",
    email: "sasikala.s@hicas.ac.in",
    phone: "+91-123-456-7890",
    expertise: ["Computer Science Information Systems", "AI", "IoT"],
    scholarLink: "https://scholar.google.co.in/citations?user=8XJN_YQAAAAJ&hl=en",
    publicationStats: { total: 120, journals: 95, bookChapters: 2, books: 4, conferences: 19, projects: 9 },
    citationStats: { citations: 43, hIndex: 3 },
    googleScholarStats: { citations: { total: 446, since2020: 239 }, hIndex: { total: 10, since2020: 7 }, i10Index: { total: 10, since2020: 6 } },
    experience: [ { year: "2021 - Present", position: "Head of the Department", institution: "Hindusthan College of Arts and Science" }, { year: "2016 - 2021", position: "Associate Professor", institution: "Hindusthan College of Arts and Science" } ],
    qualifications: [ { year: 2024, degree: "DGCA Approved Drone Pilot", university: "DGCA" }, { year: 2017, degree: "Qualified SET", university: "Mother Teresa Womens University" }, { year: 2009, degree: "M.C.A., Master of Computer Applications", university: "Periyar University" } ],
    awards: [ { year: 2023, title: "Gold Medal - Smart Street Light using Solar and IoT", institution: "iNVENTX 2023 Multimedia University, Malaysia" }, { year: 2023, title: "Silver Medal - OysterIoT: IoT Based Monitoring System", institution: "iNVENTX 2023 Multimedia University, Malaysia" } ],
    publications: [ { title: "A Hybrid Recurrent Neural Network with Mini-Batch Gradient Descent Method for Multiple Sclerosis Disease Prediction", authors: "Kavipriya E.; Sasikala S.", type: "Conference Paper", journal: "Lecture Notes in Electrical Engineering", year: 2025 }, { title: "Effectiveness of feature selection in cardio vascular disease prediction using classification", authors: "Dr.S.Sasikala", type: "Article", journal: "Journal of Maharaja Sayajirao", year: 2022 }, { title: "E-Learning Essentials", authors: "Dr.S.Sasikala", type: "Book", journal: "SM Publishers", year: 2022 } ],
    researchInterests: ["Data-Driven Insights", "Hybrid Deep Learning", "IoT"],
  },
  {
    id: 2,
    slug: "radha-m",
    name: "Ms. Radha M",
    title: "Assistant Professor",
    image: "/images/faculty/faculty-3.jpg",
    email: "radha.m@hicas.ac.in",
    phone: "+91-123-456-7891",
    expertise: ["Data Mining", "Machine Learning", "Web Technologies"],
    scholarLink: "#",
    publicationStats: { total: 15, journals: 8, bookChapters: 1, books: 0, conferences: 6, projects: 3 },
    citationStats: { citations: 25, hIndex: 2 },
    googleScholarStats: { citations: { total: 50, since2020: 30 }, hIndex: { total: 4, since2020: 4 }, i10Index: { total: 2, since2020: 2 } },
    experience: [ { year: "2018 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" }, { year: "2015 - 2018", position: "Software Developer", institution: "Tech Solutions Inc." } ],
    qualifications: [ { year: 2014, degree: "M.Phil in Computer Science", university: "Bharathiar University" }, { year: 2013, degree: "Master of Computer Applications (MCA)", university: "Bharathiar University" } ],
    awards: [ { year: 2022, title: "Best Teacher Award", institution: "Hindusthan College of Arts and Science" } ],
    publications: [ { title: "A Study on Machine Learning Algorithms for Text Classification", authors: "Radha M., et al.", type: "Journal Article", journal: "International Journal of Computer Science", year: 2024 }, { title: "An overview of Data Mining", authors: "Radha M.", type: "Book Chapter", journal: "Foundations of Computer Science", year: 2022 } ],
    researchInterests: ["Data Mining", "Machine Learning"],
  },
  {
    id: 3,
    slug: "kavipriya-e",
    name: "Ms. KAVIPRIYA ELANGOVAN",
    title: "Assistant Professor",
    image: "/images/faculty/faculty-1.jpg",
    email: "kavipriya.e@hicas.ac.in",
    phone: "+91-987-654-3210",
    expertise: ["Data Mining", "Machine Learning", "Multiple Sclerosis Diagnosis"],
    scholarLink: "https://hicas.irins.org/profile/255392",
    publicationStats: { total: 5, journals: 3, bookChapters: 0, books: 0, conferences: 2, projects: 1 },
    citationStats: { citations: 10, hIndex: 1 },
    googleScholarStats: { citations: { total: 15, since2020: 15 }, hIndex: { total: 2, since2020: 2 }, i10Index: { total: 1, since2020: 1 } },
    experience: [ { year: "2021 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" } ],
    qualifications: [ { year: 2021, degree: "M.C.A", university: "Kumaraguru College of Technology" }, { year: 2019, degree: "B.Sc (CS)", university: "Sri Krishna Arts and Science College" } ],
    awards: [ { year: 2023, title: "Gold Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" }, { year: 2023, title: "Silver Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" }, { year: 2021, title: "Bronze Medal", institution: "Research Project Showcase-Multimedia University, Malaysia" } ],
    publications: [ { title: "Parkinson’s Disease diagnosis using Data Mining Techniques: Survey and Comprehensive Evaluation", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "UGC – Care Approved : Education and Society", year: 2023 }, { title: "A survey on Machine Learning Techniques used for Multiple Sclerosis Diagnosis: Challenges and Potential", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "UGC – Care Approved: Humanities and Social Science Studies", year: 2023 }, { title: "Performance assessment of machine learning techniques for early multiple sclerosis prediction using resting-state FMRI connectivity data", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Article", journal: "Web of Science: Muskin in bayern", year: 2023 }, { title: "A Hybrid Recurrent Neural Network with Mini-Batch Gradient Descent method for Multiple Sclerosis Disease", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Conference Paper", journal: "4th International Conference on Advances and Application of Artificial Intelligence and Machine Learning (ICAAIML – 2023)", year: 2023 }, { title: "Comprehensive Survey of Applications of Data Mining Techniques in Healthcare", authors: "E.Kavi Priya, Dr.S.Sasikala", type: "Conference Paper", journal: "3rd International Conference on Engineering, Social-Sciences and Humanities (ICESSU – 2023)", year: 2021 } ],
    researchInterests: ["Machine Learning", "Data Mining"],
  },
  // CORRECTED: Added the missing 'researchInterests' field to Mr. Jayakumar R's data
  {
    id: 4,
    slug: "jayakumar-r",
    name: "Mr. Jayakumar R",
    title: "Assistant Professor",
    image: "/images/faculty/faculty-2.jpg",
    email: "jayakumar.r@hicas.ac.in",
    phone: "+91-111-222-3333",
    expertise: ["Computer Science Information Systems", "Artificial Intelligence"],
    scholarLink: "#",
    publicationStats: { total: 1, journals: 0, bookChapters: 0, books: 0, conferences: 1, projects: 0 },
    citationStats: { citations: 9, hIndex: 1 },
    googleScholarStats: { citations: { total: 9, since2020: 4 }, hIndex: { total: 1, since2020: 1 }, i10Index: { total: 0, since2020: 0 } },
    experience: [ { year: "2021 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" } ],
    qualifications: [ { year: 2014, degree: "M.Phil", university: "Sankara College of Science and Commerce" } ],
    awards: [],
    publications: [ { title: "Network Security Protocols", authors: "Jayakumar R", type: "Conference Paper", journal: "International Conference on Network Security", year: 2023 } ],
    researchInterests: ["Network Security", "Cryptography"],
  },
  {
    id: 4,
    slug: "priyadharshini-s",
    name: "Mrs. Priyadharshini S",
    title: "Assistant Professor",
    image: "/images/faculty/faculty-5.jpg",
    email: "priyadharshinis@hicas.ac.in",
    phone: "+91-111-222-3333",
    expertise: ["Computer Science Information Systems", "Artificial Intelligence"],
    scholarLink: "#",
    publicationStats: { total: 1, journals: 0, bookChapters: 0, books: 0, conferences: 1, projects: 0 },
    citationStats: { citations: 9, hIndex: 1 },
    googleScholarStats: { citations: { total: 9, since2020: 4 }, hIndex: { total: 1, since2020: 1 }, i10Index: { total: 0, since2020: 0 } },
    experience: [ { year: "2021 - Present", position: "Assistant Professor", institution: "Hindusthan College of Arts and Science" } ],
    qualifications: [ { year: 2014, degree: "M.Phil", university: "Sankara College of Science and Commerce" } ],
    awards: [],
    publications: [ { title: "Network Security Protocols", authors: "priyadharshini", type: "Conference Paper", journal: "International Conference on Network Security", year: 2023 } ],
    researchInterests: ["Network Security", "Cryptography"],
  }
];
