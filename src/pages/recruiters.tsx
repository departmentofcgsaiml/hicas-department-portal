import Head from 'next/head';
import Image from 'next/image';
import { recruitersData } from '@/lib/recruitersData'; // Import data from our new central file
import ExpandableText from '@/components/ExpandableText'; // Reuse our expandable text component
import { motion } from 'framer-motion'; // Import for animations

export default function RecruitersPage() {

  // Animation variants for the container to orchestrate the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each individual card
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Our Recruiters | Department of AIMl & CGS</title>
      </Head>
      <div className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
              <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
                Our Top Recruiters
              </h1>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                We are proud to partner with a wide range of leading multinational companies and innovative startups that actively recruit our talented students for various roles.
              </p>
          </div>

          {/* Animated Grid of Recruiter Cards */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {recruitersData.map((recruiter) => (
              <motion.div
                key={recruiter.name}
                variants={cardVariants}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src={recruiter.logo}
                      alt={`${recruiter.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center font-bold text-xl font-lora text-blue-700 dark:text-blue-400">{recruiter.name}</h3>
                  <div className="flex-grow mt-2 text-center">
                      <ExpandableText text={recruiter.description} />
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
