// import Head from 'next/head';

// export default function AboutPage() {
//   return (
//     <>
//       <Head>
//         <title>About Us | Department of Computer Science</title>
//       </Head>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold font-lora text-center text-brand-red-900 dark:text-white">
//           About Our Department
//         </h1>
//         <p className="mt-4 text-lg text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
//           Here you can write about the department rich history, its vision for the future, and its core mission and values.
//         </p>
//       </div>
//     </>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, BookOpen, Quote } from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
      {/* Simple Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic mb-6"
          >
            About Our <span className="text-amber-400">Department</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Pioneering the future of intelligence through innovation, research, and academic excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              A Legacy of <span className="text-blue-600">Excellence</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              The Department of Artificial Intelligence & Machine Learning and Computer Science with Cognitive Systems at HICAS is dedicated to shaping the next generation of tech leaders. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In an era where data and algorithms drive global progress, our department serves as a crucible for innovation. We combine rigorous mathematical foundations with hands-on technical training to ensure our students are not just consumers of technology, but creators of it.
            </p>
          </motion.div>

          {/* Image/Stats Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-[3rem] p-8 border border-slate-200 dark:border-slate-700">
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm text-center">
                    <p className="text-3xl font-black text-blue-600">2021</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Established</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm text-center">
                    <p className="text-3xl font-black text-amber-500">15+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Expert Faculty</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm text-center">
                    <p className="text-3xl font-black text-emerald-500">500+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Students</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm text-center">
                    <p className="text-3xl font-black text-purple-500">10+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Industry MoUs</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision & Mission */}
        <section className="mt-32 grid md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border border-blue-100 dark:border-blue-800"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "To be a premier center of excellence in Artificial Intelligence and Cognitive Sciences, fostering ethical innovation and empowering individuals to solve complex global challenges."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-amber-50 dark:bg-amber-900/20 rounded-[2.5rem] border border-amber-100 dark:border-amber-800"
          >
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">Our Mission</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Providing high-quality technical education in AI, ML, and Cognitive Computing.
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Encouraging research culture among faculty and students for real-world impact.
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Collaborating with industry giants to bridge the gap between classroom and careers.
              </li>
            </ul>
          </motion.div>
        </section>

        {/* HOD Message Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-200 dark:border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-slate-100 dark:text-slate-800">
            <Quote className="w-32 h-32 opacity-10" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-shrink-0">
               <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Dr+Sasikala&background=0284c7&color=fff&size=512" alt="HOD" className="object-cover w-full h-full" />
               </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase mb-2 tracking-tight">HOD's Message</h3>
              <p className="text-blue-600 font-bold text-lg mb-6">Dr. S. Sasikala, M.C.A., M.Phil., Ph.D.</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                "Welcome to the Department of AIML & CGS. Our department is a place of endless possibilities where curiosity meets computation. We believe in nurturing not just experts in code, but thinkers who understand the human impact of artificial intelligence. We invite you to be part of this transformative journey."
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Research Excellence</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Innovating Education</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}