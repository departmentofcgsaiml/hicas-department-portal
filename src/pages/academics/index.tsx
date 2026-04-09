import Head from 'next/head';
import Link from 'next/link';
import PageWithSidebar from '@/components/PageWithSidebar';

// --- Content Components for the Sidebar ---

const AcademicDepartments = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Academic Departments</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>Our college is proud to host a diverse range of academic departments, each dedicated to excellence in its field. The Department of AIML & CGS is one of our flagship departments, leading the way in cutting-edge technology and innovation.</p>
    </div>
  </div>
);

const TimeTable = () => {
  const timetableData = {
    aiml: [
      { year: "1st Year", link: "/academics/timetable/aiml-year1" },
      { year: "2nd Year", link: "/academics/timetable/aiml-year2" },
      { year: "3rd Year", link: "/academics/timetable/aiml-year3" },
    ],
    cgs: [
      { year: "1st Year", link: "/academics/timetable/cgs-year1" },
      { year: "2nd Year", link: "/academics/timetable/cgs-year2" },
      { year: "3rd Year", link: "/academics/timetable/cgs-year3" },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Time Table</h1>
      <div className="mt-8 space-y-12">
        
        {/* Table 1: Artificial Intelligence & Machine Learning */}
        <div>
          <h2 className="text-2xl font-lora text-slate-800 dark:text-slate-200">B.Sc Artificial Intelligence & Machine Learning</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">Department</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">1st Year</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">2nd Year</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">3rd Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-slate-800/50">
                  <td className="border border-slate-500 dark:border-slate-600 p-4">Artificial Intelligence & Machine Learning</td>
                  {timetableData.aiml.map(item => (
                    <td key={item.year} className="border border-slate-500 dark:border-slate-600 p-4 text-center">
                      <Link href={item.link} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        {item.year}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Computer Science with Cognitive Systems */}
        <div>
          <h2 className="text-2xl font-lora text-slate-800 dark:text-slate-200">B.Sc Computer Science with Cognitive Systems</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">Department</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">1st Year</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">2nd Year</th>
                  <th className="border border-slate-500 dark:border-slate-600 p-4 font-semibold">3rd Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dark:bg-slate-800/50">
                  <td className="border border-slate-500 dark:border-slate-600 p-4">Computer Science with Cognitive Systems</td>
                  {timetableData.cgs.map(item => (
                    <td key={item.year} className="border border-slate-500 dark:border-slate-600 p-4 text-center">
                      <Link href={item.link} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        {item.year}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};


const EContent = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">E-content Development Facility</h1>
     <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>We provide state-of-the-art facilities for the development of e-content, including digital labs and recording studios, to support modern teaching and learning methodologies.</p>
    </div>
  </div>
);

const OfficeOfCoE = () => (
    <div>
      <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Office of the CoE</h1>
       <div className="mt-6 prose dark:prose-invert max-w-none">
        <p>The Office of the Controller of Examinations is responsible for all examination-related matters, ensuring a fair and transparent evaluation process for all students.</p>
      </div>
    </div>
  );


export default function AcademicsPage() {
  
  const sidebarLinks = [
    { name: "Academic Departments", component: <AcademicDepartments /> },
    { name: "Time Table", component: <TimeTable /> },
    { name: "E-content Development Facility", component: <EContent /> },
    { name: "Office of the CoE", component: <OfficeOfCoE /> },
  ];

  return (
    <>
      <Head>
        <title>Academics | Department of AIMl & CGS</title>
      </Head>
      <PageWithSidebar pageTitle="Academics" sidebarLinks={sidebarLinks} />
    </>
  );
}


/*
vaada bin leda mudiyathe achuda enna frenda maga vitu pudida japanin hique va russiavin fotcava nee ennul enna kantu bitida
*/ 