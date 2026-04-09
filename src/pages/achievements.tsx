import Head from 'next/head';
import Image from 'next/image';
import { studentAchievements } from '@/lib/achievementsData';
import ExpandableText from '@/components/ExpandableText';
import { motion, Variants } from 'framer-motion';

export default function AchievementsPage() {
  
  // Animation variants for the container to orchestrate the stagger effect
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1, // Each child will animate 0.1s after the previous one
  //     },
  //   },
  // };

  // // Animation variants for each individual card
  // const cardVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 100,
  //       damping: 10,
  //     },
  //   },
  // };
    // Animation variants for the container to orchestrate the stagger effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each individual card
  // Explicitly adding : Variants solves the "type: string" error
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Student Achievements | Department of AIMl & CGS</title>
      </Head>
      <div className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
              <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
                Student Achievements
              </h1>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                We are proud to celebrate the remarkable achievements of our students in various national and international competitions, research projects, and extracurricular activities.
              </p>
          </div>

          {/* 3xN Grid of Achievement Cards with Staggered Animation */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {studentAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent dark:hover:border-amber-400/50"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-xl font-lora text-blue-700 dark:text-blue-400">{achievement.title}</h3>
                  <div className="flex-grow mt-2">
                      <ExpandableText text={achievement.description} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}