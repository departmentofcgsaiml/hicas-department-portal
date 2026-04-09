// import { GetStaticPaths, GetStaticProps } from 'next';
// import Head from 'next/head';
// import { timetableData, Timetable } from '@/lib/timetableData';

// type TimetablePageProps = {
//   timetable: Timetable;
// };

// export default function TimetablePage({ timetable }: TimetablePageProps) {
//   if (!timetable) {
//     return <div>Timetable not found.</div>;
//   }

//   const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//   const timeSlots = [
//     "09:30 AM - 10:20 AM", // Period 1
//     "10:20 AM - 11:10 AM", // Period 2
//     "11:10 AM - 12:00 PM", // Period 3
//     "12:00 PM - 01:05 PM", // Period 4
//     "01:05 PM - 02:00 PM", // Lunch
//     "02:00 PM - 02:50 PM", // Period 5
//     "02:50 PM - 03:45 PM", // Period 6
//   ];

//   return (
//     <>
//       <Head>
//         <title>{timetable.title} | Department of AIMl & CGS</title>
//       </Head>
//       <div className="bg-white dark:bg-slate-900">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
//               {timetable.title}
//             </h1>
//             <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
//               Academic Year 2025-2026
//             </p>
//           </div>
          
//           <div className="mt-12 overflow-x-auto">
//             <table className="w-full text-center border-collapse">
//               <thead>
//                 <tr className="bg-slate-100 dark:bg-slate-800">
//                   <th className="border border-slate-500 dark:border-slate-600 p-3 font-semibold">Time / Day</th>
//                   {daysOfWeek.map(day => (
//                     <th key={day} className="border border-slate-500 dark:border-slate-600 p-3 font-semibold">{day}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {timeSlots.map((time, periodIndex) => (
//                   <tr key={time} className="dark:bg-slate-800/50">
//                     <td className="border border-slate-500 dark:border-slate-600 p-3 font-semibold bg-slate-50 dark:bg-slate-700">{time}</td>
//                     {time.includes("Lunch") ? (
//                       <td colSpan={5} className="border border-slate-500 dark:border-slate-600 p-3 font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300">
//                         LUNCH BREAK
//                       </td>
//                     ) : (
//                       daysOfWeek.map((_, dayIndex) => (
//                         <td key={dayIndex} className="border border-slate-500 dark:border-slate-600 p-3">
//                           {timetable.schedule[periodIndex > 4 ? periodIndex -1 : periodIndex][dayIndex]}
//                         </td>
//                       ))
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = timetableData.map((tt) => ({
//     params: { timetableSlug: tt.slug },
//   }));
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const timetable = timetableData.find((tt) => tt.slug === params?.timetableSlug);
//   return { props: { timetable } };
// };


import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { timetableData, Timetable } from '@/lib/timetableData';

type TimetablePageProps = {
  timetable: Timetable;
};

export default function TimetablePage({ timetable }: TimetablePageProps) {
  if (!timetable) {
    return <div>Timetable not found.</div>;
  }

  const hours = ["I", "II", "III", "IV", "V", "VI"];
  const days = ["1", "2", "3", "4", "5", "6"];

  return (
    <>
      <Head>
        <title>{timetable.title} | Department of AIMl & CGS</title>
      </Head>
      <div className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
              {timetable.title}
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">
              Class Tutor: {timetable.classTutor}
            </p>
          </div>
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-400 dark:border-slate-600 p-3 font-semibold">Day/Hour</th>
                  {days.map(day => (
                    <th key={day} className="border border-slate-400 dark:border-slate-600 p-3 font-semibold">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hours.map((hour, hourIndex) => (
                  <tr key={hour} className="dark:bg-slate-800/50">
                    <td className="border border-slate-400 dark:border-slate-600 p-3 font-semibold bg-slate-50 dark:bg-slate-700">{hour}</td>
                    {days.map((_, dayIndex) => {
                      const session = timetable.schedule[dayIndex]?.[hourIndex];
                      return (
                        <td key={`${dayIndex}-${hourIndex}`} className="border border-slate-400 dark:border-slate-600 p-2 min-w-[150px]">
                          {session ? (
                            <div>
                              <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{session.subject}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{session.staff}</p>
                            </div>
                          ) : (
                            <span>-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = timetableData.map((tt) => ({
    params: { timetableSlug: tt.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const timetable = timetableData.find((tt) => tt.slug === params?.timetableSlug);
  return { props: { timetable } };
};
