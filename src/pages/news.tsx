import Head from 'next/head';
import Image from 'next/image';
import { newsData } from '@/lib/newsData'; // Import data from our new central file
import { motion } from 'framer-motion'; // Import for animations

export default function NewsPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <>
      <Head>
        <title>News & Events | Department of AIMl & CGS</title>
      </Head>
      <div className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
              <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
                News & Events
              </h1>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                Stay up-to-date with the latest announcements, achievements, and upcoming events from the Department of AIMl & CGS.
              </p>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {newsData.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.category.toUpperCase()}</p>
                  <h3 className="mt-2 text-xl font-bold font-lora text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                   <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 flex-grow">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
