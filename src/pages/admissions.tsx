import Head from 'next/head';
import PageWithSidebar from '@/components/PageWithSidebar'; // Import our new layout

// --- Content Components for the Sidebar ---
// Each of these is a small component that will be displayed when its link is clicked.

const ProgramsOffered = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Programs Offered</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>Our department is proud to offer two cutting-edge undergraduate programs designed to prepare students for the future of technology:</p>
      <ul>
        <li><strong>B.Sc. Artificial Intelligence & Machine Learning</strong></li>
        <li><strong>B.Sc. Computer Science with Cognitive Systems</strong></li>
      </ul>
    </div>
  </div>
);

const AdmissionProcedure = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Admission Procedure</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <h2 className="text-2xl font-lora">B.Sc. Admissions Overview</h2>
      <p>Hindusthan College of Arts and Science is one of the premier institutions in the region, excelling since its inception. Our B.Sc. programs are affiliated with Bharathiar University, Coimbatore, and the final degree will be awarded by the University.</p>
      <p>Admissions into our programs are based on the norms laid down by the Department of Higher Education, Government of Tamil Nadu, and Bharathiar University admission regulations.</p>
      <h2 className="text-2xl font-lora mt-8">Admissions under Management Quota</h2>
      <p>A percentage of the total seats are filled through the Management Quota. To be noted is that the seats offered are filled up within the first few days of counseling with significant, high cut-off marks. We are inviting candidate registration for counseling to apply for Management Quota.</p>
    </div>
  </div>
);

const FeeStructure = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Fee Structure</h1>
     <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>The detailed fee structure for our undergraduate programs will be provided at the time of counseling. Please contact the admissions office for further details.</p>
    </div>
  </div>
);
const Scholarship = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Scholarship</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>Our department is proud to offer many Scholarship undergraduate programs designed to prepare students for the future of technology:</p>
      <ul>
        <li><strong>B.Sc. Artificial Intelligence & Machine Learning</strong></li>
        <li><strong>B.Sc. Computer Science with Cognitive Systems</strong></li>
      </ul>
    </div>
  </div>
);

const MedalsAwards = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Medals & Awards</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>Details about medals and awards will be updated soon. Please contact the department for more information.</p>
      
    </div>
  </div>
);

const ContactAdmissions = () => (
  <div>
    <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">Contact Admissions</h1>
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <p>
        For any queries regarding admissions, please contact our admissions office:
      </p>
      <ul>
        <li>Email: <a href="mailto:admissions@hindusthan.net" className="text-brand-red-900 underline">admissions@hindusthan.net</a></li>
        <li>Phone: <a href="tel:+914222222222" className="text-brand-red-900 underline">+91 422 2222222</a></li>
      </ul>
      <p>
        You may also visit our campus during working hours for in-person assistance.
      </p>
    </div>
  </div>
);

   
export default function AdmissionsPage() {
  
  // This array connects the sidebar link text to the component that should be rendered.
  const sidebarLinks = [
    { name: "Programs Offered", component: <ProgramsOffered /> },
    { name: "Admission Procedure", component: <AdmissionProcedure /> },
    { name: "Fee Structure", component: <FeeStructure /> },
    {name: "Scholarship", component: <Scholarship /> },
    { name: "Medals & Awards", component: <MedalsAwards /> },
    { name: "Contact Admissions", component: <ContactAdmissions /> },
  ];

  return (
    <>
      <Head>
        <title>Admissions | Department of AIMl & CGS</title>
      </Head>
      <PageWithSidebar pageTitle="Admissions" sidebarLinks={sidebarLinks} />
    </>
  );
}