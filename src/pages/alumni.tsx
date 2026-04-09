
// // import React from 'react';
// // import { motion, Variant } from 'framer-motion';
// // import { 
// //   GraduationCap, 
// //   Briefcase, 
// //   Quote, 
// //   Award, 
// //   Globe, 
// //   Users, 
// //   Target, 
// //   Linkedin,
// //   MapPin,
// //   Calendar
// // } from 'lucide-react';

// import React from 'react';
// import { motion, Variants } from 'framer-motion'; // Added Variants here
// import { 
//   GraduationCap, 
//   Briefcase, 
//   Quote, 
//   Award, 
//   Globe, 
//   Users, 
//   Linkedin,
//   MapPin,
//   Calendar
// } from 'lucide-react';

// // --- Local Data (Self-contained for the preview environment) ---
// const alumniData = [
//   {
//     id: 1,
//     name: "Praneesh C",
//     year: "2024",
//     degree: "B.Sc AIML",
//     role: "Cloud Infrastructure Specialist",
//     company: "Ambition College, Canada",
//     image: "https://ui-avatars.com/api/?name=Praneesh+C&background=0284c7&color=fff",
//     testimonial: "The rigorous training in AI and Cloud Computing at HICAS gave me the confidence to excel in an international academic and professional environment. The faculty support was the bridge to my success.",
//     location: "Ontario, Canada",
//     linkedin: "https://www.linkedin.com"
//   },
//   {
//     id: 2,
//     name: "Sarah Jenkins",
//     year: "2023",
//     degree: "B.Sc CGS",
//     role: "Senior Cybersecurity Analyst",
//     company: "Wells Fargo",
//     image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=991b1b&color=fff",
//     testimonial: "Focusing on Cognitive Systems allowed me to understand the human element of security. Today at Wells Fargo, I apply those unique insights to protect financial data on a global scale.",
//     location: "Bangalore, India",
//     linkedin: "https://www.linkedin.com"
//   },
//   {
//     id: 3,
//     name: "Rahul Kumar",
//     year: "2023",
//     degree: "B.Sc AIML",
//     role: "Software Development Engineer",
//     company: "Amazon (AWS)",
//     image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=f59e0b&color=fff",
//     testimonial: "From national-level hackathons to building scalable ML models, the curriculum prepared me for the high-performance culture at Amazon. I'm proud to be an AIML graduate.",
//     location: "Hyderabad, India",
//     linkedin: "https://www.linkedin.com"
//   },
//   {
//     id: 4,
//     name: "Dinesh E",
//     year: "2024",
//     degree: "B.Sc AIML",
//     role: "AI Research Associate",
//     company: "Tech Mahindra",
//     image: "https://ui-avatars.com/api/?name=Dinesh+E&background=10b981&color=fff",
//     testimonial: "The department's focus on real-world projects helped me bridge the gap between classroom theory and industrial application. It was an invaluable experience.",
//     location: "Chennai, India",
//     linkedin: "https://www.linkedin.com"
//   }
// ];
// interface StatCardProps {
//   icon: React.ElementType;
//   value: string | number;
//   label: string;
//   color: string;
// }

// // const StatCard = ({ icon: Icon, value, label, color }) => (
// //   <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl text-center border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
// //     <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 ${color}`}>
// //       <Icon className="w-8 h-8" />
// //     </div>
// //     <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{value}</p>
// //     <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</p>
// //   </div>
// // );
// const StatCard = ({ icon: Icon, value, label, color }: StatCardProps) => (
//   <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl text-center border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
//     <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 ${color}`}>
//       <Icon className="w-8 h-8" />
//     </div>
//     <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{value}</p>
//     <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</p>
//   </div>
// );

// export default function App() {
//   // const containerVariants = {
//   //   hidden: { opacity: 0 },
//   //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   // };

//   // const cardVariants = {
//   //   hidden: { y: 30, opacity: 0 },
//   //   visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
//   // };
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   const cardVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30">
//       {/* Modern Prestigious Hero */}
//       <section className="relative pt-32 pb-40 overflow-hidden bg-slate-900 text-white">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-8 inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
//           >
//             <GraduationCap className="w-5 h-5 text-amber-400" />
//             <span className="text-xs font-bold uppercase tracking-widest text-amber-200">Our Enduring Legacy</span>
//           </motion.div>
          
//           <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
//             Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Alumni</span> Network
//           </h1>
          
//           <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
//             Over 500+ innovators and leaders shaping the future of technology across 25 countries.
//           </p>
//         </div>
//       </section>

//       {/* Achievements Stats Section */}
//       <div className="container mx-auto px-4 -mt-20 relative z-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <StatCard icon={Users} value="500+" label="Total Graduates" color="text-blue-500" />
//           <StatCard icon={Briefcase} value="150+" label="MNC Placements" color="text-emerald-500" />
//           <StatCard icon={Globe} value="25+" label="Countries" color="text-amber-500" />
//           <StatCard icon={Award} value="30+" label="Entrepreneurs" color="text-purple-500" />
//         </div>
//       </div>

//       {/* Wall of Fame Grid */}
//       <section className="container mx-auto px-4 py-32">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div>
//             <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Wall of Fame</h2>
//             <div className="w-20 h-1.5 bg-amber-400 mt-4 rounded-full"></div>
//           </div>
//           <div className="flex items-center space-x-4">
//              <button className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Class of 2024</button>
//              <button className="px-6 py-2 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-blue-600">All Batches</button>
//           </div>
//         </div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {alumniData.map((alumnus) => (
//             <motion.div
//               key={alumnus.id}
//               variants={cardVariants}
//               className="group bg-white dark:bg-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-full"
//             >
//               <div className="p-10 flex flex-col flex-grow">
//                 {/* Profile Header */}
//                 <div className="flex items-center space-x-6 mb-10">
//                   <div className="relative w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
//                     <img src={alumnus.image} alt={alumnus.name} className="object-cover w-full h-full" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-black text-slate-900 dark:text-white">{alumnus.name}</h3>
//                     <div className="flex items-center text-amber-500 font-bold text-[10px] uppercase tracking-widest mt-1">
//                       <Calendar className="w-3 h-3 mr-1" />
//                       Class of {alumnus.year}
//                     </div>
//                     <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black text-blue-600 uppercase">
//                       {alumnus.degree}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Role and Company */}
//                 <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
//                   <div className="flex items-start space-x-3">
//                     <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="text-sm font-black text-slate-800 dark:text-slate-200">{alumnus.role}</p>
//                       <p className="text-xs font-bold text-slate-400">at {alumnus.company}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
//                     <MapPin className="w-3 h-3 mr-1" />
//                     {alumnus.location}
//                   </div>
//                 </div>

//                 {/* Testimonial */}
//                 <div className="relative flex-grow">
//                   <Quote className="absolute -top-4 -left-4 w-12 h-12 text-slate-100 dark:text-slate-800" />
//                   <p className="relative z-10 italic text-slate-600 dark:text-slate-300 leading-relaxed pl-6 text-lg">
//                     "{alumnus.testimonial}"
//                   </p>
//                 </div>
//               </div>

//               {/* Card Footer */}
//               <div className="px-10 py-6 bg-slate-950 flex justify-between items-center group-hover:bg-blue-900 transition-colors duration-500">
//                 <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Story</span>
//                 <a 
//                   href={alumnus.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-white font-black text-xs hover:text-amber-400 transition-colors uppercase tracking-widest"
//                 >
//                   Connect <Linkedin className="w-4 h-4 ml-2" />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Global Outreach CTA - FIXED BUTTON LINKS */}
//       <section className="bg-blue-900 py-32 relative overflow-hidden">
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Are you an Alumnus?</h2>
//           <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
//             Stay connected with your alma mater, mentor your juniors, and join our global networking events.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <a 
//               href="https://hicas.ac.in/alumni/registration" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-full shadow-2xl shadow-amber-900/40 transition-all transform hover:scale-105 uppercase tracking-widest text-sm inline-block"
//             >
//               Register in Portal
//             </a>
//             <a 
//               href="https://www.linkedin.com/school/hindusthan-college-of-arts-and-science/people/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-black border border-white/20 rounded-full transition-all uppercase tracking-widest text-sm inline-block"
//             >
//               Join LinkedIn Group
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Quote, 
  Award, 
  Globe, 
  Users, 
  Linkedin,
  MapPin,
  Calendar
} from 'lucide-react';

// --- Local Data ---
const alumniData = [
  {
    id: 1,
    name: "Praneesh C",
    year: "2024",
    degree: "B.Sc AIML",
    role: "Cloud Infrastructure Specialist",
    company: "Ambition College, Canada",
    image: "https://ui-avatars.com/api/?name=Praneesh+C&background=0284c7&color=fff",
    testimonial: "The rigorous training in AI and Cloud Computing at HICAS gave me the confidence to excel in an international academic and professional environment. The faculty support was the bridge to my success.",
    location: "Ontario, Canada",
    linkedin: "https://www.linkedin.com"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    year: "2023",
    degree: "B.Sc CGS",
    role: "Senior Cybersecurity Analyst",
    company: "Wells Fargo",
    image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=991b1b&color=fff",
    testimonial: "Focusing on Cognitive Systems allowed me to understand the human element of security. Today at Wells Fargo, I apply those unique insights to protect financial data on a global scale.",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    year: "2023",
    degree: "B.Sc AIML",
    role: "Software Development Engineer",
    company: "Amazon (AWS)",
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=f59e0b&color=fff",
    testimonial: "From national-level hackathons to building scalable ML models, the curriculum prepared me for the high-performance culture at Amazon. I'm proud to be an AIML graduate.",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com"
  },
  {
    id: 4,
    name: "Dinesh E",
    year: "2024",
    degree: "B.Sc AIML",
    role: "AI Research Associate",
    company: "Tech Mahindra",
    image: "https://ui-avatars.com/api/?name=Dinesh+E&background=10b981&color=fff",
    testimonial: "The department's focus on real-world projects helped me bridge the gap between classroom theory and industrial application. It was an invaluable experience.",
    location: "Chennai, India",
    linkedin: "https://www.linkedin.com"
  }
];

// 1. Define the interface for StatCard props to satisfy 'strict' mode
interface StatCardProps {
  icon: React.ElementType;
  value: string | number;
  label: string;
  color: string;
}

const StatCard = ({ icon: Icon, value, label, color }: StatCardProps) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl text-center border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-2">
    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 ${color}`}>
      <Icon className="w-8 h-8" />
    </div>
    <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{value}</p>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</p>
  </div>
);

export default function App() {
  // 2. Explicitly type the animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30">
      {/* Modern Prestigious Hero */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-200">Our Enduring Legacy</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Alumni</span> Network
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Over 500+ innovators and leaders shaping the future of technology across 25 countries.
          </p>
        </div>
      </section>

      {/* Achievements Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} value="500+" label="Total Graduates" color="text-blue-500" />
          <StatCard icon={Briefcase} value="150+" label="MNC Placements" color="text-emerald-500" />
          <StatCard icon={Globe} value="25+" label="Countries" color="text-amber-500" />
          <StatCard icon={Award} value="30+" label="Entrepreneurs" color="text-purple-500" />
        </div>
      </div>

      {/* Wall of Fame Grid */}
      <section className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Wall of Fame</h2>
            <div className="w-20 h-1.5 bg-amber-400 mt-4 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-4">
             <button className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Class of 2024</button>
             <button className="px-6 py-2 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-blue-600">All Batches</button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {alumniData.map((alumnus) => (
            <motion.div
              key={alumnus.id}
              variants={cardVariants}
              className="group bg-white dark:bg-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-full"
            >
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-6 mb-10">
                  <div className="relative w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <img src={alumnus.image} alt={alumnus.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{alumnus.name}</h3>
                    <div className="flex items-center text-amber-500 font-bold text-[10px] uppercase tracking-widest mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      Class of {alumnus.year}
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-[10px] font-black text-blue-600 uppercase">
                      {alumnus.degree}
                    </span>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-black text-slate-800 dark:text-slate-200">{alumnus.role}</p>
                      <p className="text-xs font-bold text-slate-400">at {alumnus.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <MapPin className="w-3 h-3 mr-1" />
                    {alumnus.location}
                  </div>
                </div>

                <div className="relative flex-grow">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-slate-100 dark:text-slate-800" />
                  <p className="relative z-10 italic text-slate-600 dark:text-slate-300 leading-relaxed pl-6 text-lg">
                    "{alumnus.testimonial}"
                  </p>
                </div>
              </div>

              <div className="px-10 py-6 bg-slate-950 flex justify-between items-center group-hover:bg-blue-900 transition-colors duration-500">
                <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Story</span>
                <a 
                  href={alumnus.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-black text-xs hover:text-amber-400 transition-colors uppercase tracking-widest"
                >
                  Connect <Linkedin className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-blue-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Are you an Alumnus?</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Stay connected with your alma mater, mentor your juniors, and join our global networking events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://hicas.ac.in/alumni/registration" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-full shadow-2xl shadow-amber-900/40 transition-all transform hover:scale-105 uppercase tracking-widest text-sm inline-block"
            >
              Register in Portal
            </a>
            <a 
              href="https://www.linkedin.com/school/hindusthan-college-of-arts-and-science/people/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-black border border-white/20 rounded-full transition-all uppercase tracking-widest text-sm inline-block"
            >
              Join LinkedIn Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}