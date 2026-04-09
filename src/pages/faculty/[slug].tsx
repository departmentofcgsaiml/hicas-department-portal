// import { useState, useEffect } from 'react';
// import { GetServerSideProps } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import { FacultyMember } from '@/lib/facultyData';
// import { PencilIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

// type FacultyProfileProps = {
//   member: FacultyMember | null;
// };

// export default function FacultyProfile({ member }: FacultyProfileProps) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // NEW: State to manage "Edit Mode"
//   const [isEditing, setIsEditing] = useState(false);
//   // NEW: State to hold the form data while editing
//   const [editData, setEditData] = useState<FacultyMember | null>(member);

//   // When the component loads or the member data changes, update the editData state
//   useEffect(() => {
//     setEditData(member);
//   }, [member]);
  
//   // State for the login form
//   const [facultyId, setFacultyId] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   if (!member || !editData) {
//     return <div className="container mx-auto py-16 text-center">Faculty member not found.</div>;
//   }
  
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setLoginError('');

//     const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ facultyId, password }),
//     });

//     if (response.ok) {
//         // On success, close the modal, reset the form, and ENTER EDIT MODE.
//         setIsModalOpen(false);
//         setIsEditing(true); // This is the key change!
//         setFacultyId('');
//         setPassword('');
//     } else {
//         const data = await response.json();
//         setLoginError(data.message || 'An unknown error occurred.');
//     }
//     setIsLoading(false);
//   };
  
//   // NEW: Function to handle saving the edited data
//   const handleSave = async () => {
//     if (!editData) return;
    
//     const response = await fetch('/api/faculty/update', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(editData),
//     });

//     if (response.ok) {
//         alert('Profile saved successfully!');
//         setIsEditing(false); // Exit edit mode
//     } else {
//         alert('Failed to save profile. Please try again.');
//     }
//   };

//   // NEW: Function to cancel editing
//   const handleCancel = () => {
//     setEditData(member); // Reset changes
//     setIsEditing(false); // Exit edit mode
//   };
  
//   // NEW: Handle changes in the input fields
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     // For nested data like education, we handle it specially
//     if (name.startsWith('education') || name.startsWith('experience') || name.startsWith('publications') || name.startsWith('researchInterests')) {
//         const [field] = name.split('.');
//         setEditData(prev => prev ? { ...prev, [field]: value.split('\n') } : null);
//     } else {
//         setEditData(prev => prev ? { ...prev, [name]: value } : null);
//     }
//   };

//   const tabs = ['Education', 'Experience', 'Publications', 'Research'];
//   const [activeTab, setActiveTab] = useState('Education');

//   const renderContent = () => {
//     const contentMap = {
//       Education: editData.education,
//       Experience: editData.experience,
//       Publications: editData.publications,
//       Research: editData.researchInterests,
//     };
//     const content = contentMap[activeTab as keyof typeof contentMap];

//     if (isEditing) {
//       return (
//         <textarea
//             name={activeTab.toLowerCase()}
//             value={content.join('\n')}
//             onChange={handleInputChange}
//             className="w-full h-48 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600"
//         />
//       );
//     }
//     return <ul>{content.map((item, i) => <li key={i} className="mb-2 list-disc list-inside">{item}</li>)}</ul>;
//   };

//   return (
//     <>
//       <Head>
//         <title>{member.name} | Department of AIMl & CGS</title>
//       </Head>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">
//           <div className="flex-shrink-0">
//             <div className="relative w-48 h-48 rounded-full border-4 border-amber-400 overflow-hidden shadow-lg">
//               <Image src={member.image} alt={member.name} fill className="object-cover" />
//             </div>
//           </div>
//           <div className="text-center md:text-left">
//              {isEditing ? (
//                 <input type="text" name="name" value={editData.name} onChange={handleInputChange} className="text-4xl font-bold font-lora bg-transparent border-b-2 border-dashed w-full" />
//              ) : (
//                 <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">{member.name}</h1>
//              )}
//              {isEditing ? (
//                 <input type="text" name="title" value={editData.title} onChange={handleInputChange} className="mt-2 text-xl bg-transparent border-b-2 border-dashed w-full" />
//              ) : (
//                 <p className="mt-2 text-xl text-slate-600 dark:text-slate-300">{member.title}</p>
//              )}
            
//             <div className="mt-4 space-y-1 text-slate-500 dark:text-slate-400">
//               <p><strong>Email:</strong> {isEditing ? <input type="email" name="email" value={editData.email} onChange={handleInputChange} className="bg-transparent border-b-2 border-dashed" /> : <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>}</p>
//               <p><strong>Phone:</strong> {isEditing ? <input type="tel" name="phone" value={editData.phone} onChange={handleInputChange} className="bg-transparent border-b-2 border-dashed" /> : member.phone}</p>
//             </div>
            
//             {!isEditing ? (
//                 <button onClick={() => setIsModalOpen(true)} className="mt-4 inline-flex items-center bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 font-bold py-2 px-4 rounded-md text-sm">
//                     <PencilIcon className="h-4 w-4 mr-2" />
//                     Edit Profile
//                 </button>
//             ) : (
//                 <div className="mt-4 flex space-x-4">
//                     <button onClick={handleSave} className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm">
//                         <CheckIcon className="h-4 w-4 mr-2" />
//                         Save Changes
//                     </button>
//                     <button onClick={handleCancel} className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm">
//                         <XMarkIcon className="h-4 w-4 mr-2" />
//                         Cancel
//                     </button>
//                 </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-16">
//           <div className="border-b border-slate-300 dark:border-slate-700">
//             <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`${ activeTab === tab ? 'border-amber-500 text-amber-600 dark:text-amber-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </nav>
//           </div>
//           <div className="py-8 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-6 rounded-b-lg">
//             {renderContent()}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 max-w-sm w-full">
//             <h2 className="text-2xl font-bold font-lora text-brand-red-900 dark:text-white">Faculty Login</h2>
//             <p className="text-slate-600 dark:text-slate-400 mt-2">Please enter your credentials to edit this profile.</p>
//             <form onSubmit={handleLogin} className="mt-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Faculty ID</label>
//                 <input type="text" value={facultyId} onChange={(e) => setFacultyId(e.target.value)} className="w-full mt-1 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600" />
//               </div>
//                <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600" />
//               </div>
//               {loginError && <p className="text-sm text-red-500">{loginError}</p>}
//               <div className="flex justify-end space-x-4 pt-4">
//                  <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-200 dark:bg-slate-600 font-bold py-2 px-4 rounded-md">Cancel</button>
//                  <button type="submit" disabled={isLoading} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md disabled:bg-blue-400">
//                     {isLoading ? 'Logging in...' : 'Login'}
//                  </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.params || {};
//   const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
//   const host = context.req.headers.host;
//   const res = await fetch(`${protocol}://${host}/api/faculty/${slug}`);
//   const member = res.ok ? await res.json() : null;
//   return { props: { member } };
// };

import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FacultyMember } from '@/lib/facultyData';
import { PencilIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';

type FacultyProfileProps = {
  member: FacultyMember | null;
};

export default function FacultyProfile({ member }: FacultyProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<FacultyMember | null>(member);

  useEffect(() => {
    setEditData(member);
  }, [member]);
  
  const [facultyId, setFacultyId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!member || !editData) {
    return <div className="container mx-auto py-16 text-center">Faculty member not found.</div>;
  }
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ facultyId, password }),
    });

    if (response.ok) {
        setIsModalOpen(false);
        setIsEditing(true);
        setFacultyId('');
        setPassword('');
    } else {
        const data = await response.json();
        setLoginError(data.message || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };
  
  const handleSave = async () => {
    if (!editData) return;
    
    // In a real application, you would also add validation here
    
    const response = await fetch('/api/faculty/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
    });

    if (response.ok) {
        alert('Profile saved successfully! (Note: Changes will be lost on refresh until we connect a real database)');
        // To see the changes reflected immediately, we would update the `member` prop
        // For now, exiting edit mode will show the temporary changes.
        setIsEditing(false);
    } else {
        alert('Failed to save profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditData(member);
    setIsEditing(false);
  };
  
  // CORRECTED: A much more robust input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prev => prev ? { ...prev, [name]: value } : null);
  };

  const handleTextAreaChange = (field: 'publications' | 'experience' | 'qualifications' | 'awards' | 'researchInterests', value: string) => {
    if (!editData) return;

    const lines = value.split('\n');
    let updatedArray: any[] = [];

    // This logic intelligently rebuilds the array of objects from the text
    switch (field) {
        case 'publications':
            updatedArray = lines.map(line => ({ ...editData.publications[0], title: line }));
            break;
        case 'experience':
            updatedArray = lines.map(line => ({ ...editData.experience[0], position: line }));
            break;
        case 'qualifications':
            updatedArray = lines.map(line => ({ ...editData.qualifications[0], degree: line }));
            break;
        case 'awards':
            updatedArray = lines.map(line => ({ ...editData.awards[0], title: line }));
            break;
        case 'researchInterests':
            updatedArray = lines;
            break;
    }
    
    setEditData(prev => prev ? { ...prev, [field]: updatedArray } : null);
  };


  const tabs = ['Education', 'Experience', 'Publications', 'Research'];
  const [activeTab, setActiveTab] = useState('Education');

  const renderContent = () => {
    if (isEditing) {
      let contentValue = '';
      if (activeTab === 'Education') contentValue = editData.qualifications.map(q => q.degree).join('\n');
      if (activeTab === 'Experience') contentValue = editData.experience.map(e => e.position).join('\n');
      if (activeTab === 'Publications') contentValue = editData.publications.map(p => p.title).join('\n');
      if (activeTab === 'Research') contentValue = editData.researchInterests.join('\n');
      
      return (
        <textarea
            aria-label={`Edit ${activeTab}`}
            value={contentValue}
            onChange={(e) => handleTextAreaChange(activeTab.toLowerCase() as any, e.target.value)}
            className="w-full h-48 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600"
        />
      );
    }

    switch (activeTab) {
      case 'Education':
        return editData.qualifications?.length > 0 ? (
          <ul className="space-y-4">{editData.qualifications.map((item, i) => <li key={i}><p className="font-semibold">{item.degree}</p><p className="text-sm text-slate-600 dark:text-slate-400">{item.university} - {item.year}</p></li>)}</ul>
        ) : <p>No education information available.</p>;
      case 'Experience':
        return editData.experience?.length > 0 ? (
          <ul className="space-y-4">{editData.experience.map((item, i) => <li key={i}><p className="font-semibold">{item.position}</p><p className="text-sm text-slate-600 dark:text-slate-400">{item.institution} - {item.year}</p></li>)}</ul>
        ) : <p>No experience information available.</p>;
      case 'Publications':
        return editData.publications?.length > 0 ? (
          <ul className="space-y-4">{editData.publications.map((item, i) => <li key={i}><p className="font-semibold text-blue-600 dark:text-blue-400">{item.title}</p><p className="text-sm text-slate-600 dark:text-slate-400">{item.authors} - {item.journal}, {item.year}</p></li>)}</ul>
        ) : <p>No publications listed.</p>;
      case 'Research':
        return editData.researchInterests?.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">{editData.researchInterests.map((item, i) => <li key={i}>{item}</li>)}</ul>
        ) : <p>No research interests listed.</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{member.name} | Department of AIMl & CGS</title>
      </Head>
      <div className="container mx-auto px-4 sm-px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full border-4 border-amber-400 overflow-hidden shadow-lg">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left">
             {isEditing ? (
                <input aria-label="Edit Name" type="text" name="name" value={editData.name} onChange={handleInputChange} className="text-4xl font-bold font-lora bg-transparent border-b-2 border-dashed w-full" />
             ) : (
                <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">{member.name}</h1>
             )}
             {isEditing ? (
                <input aria-label="Edit Title" type="text" name="title" value={editData.title} onChange={handleInputChange} className="mt-2 text-xl bg-transparent border-b-2 border-dashed w-full" />
             ) : (
                <p className="mt-2 text-xl text-slate-600 dark:text-slate-300">{member.title}</p>
             )}
            
            <div className="mt-4 space-y-1 text-slate-500 dark:text-slate-400">
              <p><strong>Email:</strong> {isEditing ? <input aria-label="Edit Email" type="email" name="email" value={editData.email} onChange={handleInputChange} className="bg-transparent border-b-2 border-dashed" /> : <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>}</p>
              <p><strong>Phone:</strong> {isEditing ? <input aria-label="Edit Phone" type="tel" name="phone" value={editData.phone} onChange={handleInputChange} className="bg-transparent border-b-2 border-dashed" /> : member.phone}</p>
            </div>
            
            {!isEditing ? (
                <button onClick={() => setIsModalOpen(true)} className="mt-4 inline-flex items-center bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 font-bold py-2 px-4 rounded-md text-sm">
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit Profile
                </button>
            ) : (
                <div className="mt-4 flex space-x-4">
                    <button onClick={handleSave} className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-sm">
                        <CheckIcon className="h-4 w-4 mr-2" />
                        Save Changes
                    </button>
                    <button onClick={handleCancel} className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm">
                        <XMarkIcon className="h-4 w-4 mr-2" />
                        Cancel
                    </button>
                </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <div className="border-b border-slate-300 dark:border-slate-700">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${ activeTab === tab ? 'border-amber-500 text-amber-600 dark:text-amber-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="py-8 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-6 rounded-b-lg">
            {renderContent()}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold font-lora text-brand-red-900 dark:text-white">Faculty Login</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Please enter your credentials to edit this profile.</p>
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Faculty ID</label>
                <input type="text" value={facultyId} onChange={(e) => setFacultyId(e.target.value)} className="w-full mt-1 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600" />
              </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 p-2 rounded border bg-gray-50 dark:bg-slate-700 dark:border-slate-600" />
              </div>
              {loginError && <p className="text-sm text-red-500">{loginError}</p>}
              <div className="flex justify-end space-x-4 pt-4">
                 <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-200 dark:bg-slate-600 font-bold py-2 px-4 rounded-md">Cancel</button>
                 <button type="submit" disabled={isLoading} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md disabled:bg-blue-400">
                    {isLoading ? 'Logging in...' : 'Login'}
                 </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params || {};
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = context.req.headers.host;
  const res = await fetch(`${protocol}://${host}/api/faculty/${slug}`);
  const member = res.ok ? await res.json() : null;
  return { props: { member } };
};

