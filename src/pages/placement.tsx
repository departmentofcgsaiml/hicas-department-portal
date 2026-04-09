
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Award, Users, Globe, CheckCircle } from 'lucide-react';

const recruitersData = [
  { 
    name: "ServiceNow", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/ServiceNow_logo.svg",
    description: "A leading platform for digital workflows. ServiceNow actively recruits our graduates for roles in software engineering and cloud infrastructure, prioritizing those with strong problem-solving and full-stack development skills.",
    category: "Software/Cloud",
    website: "https://www.servicenow.com"
  },
  { 
    name: "Autodesk", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Autodesk_logo.svg",
    description: "A global leader in 3D design and engineering software. Autodesk seeks out our students for their expertise in computer graphics, computational geometry, and software architecture.",
    category: "Engineering Design",
    website: "https://www.autodesk.com"
  },
  { 
    name: "Juspay", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/JusPay_Logo.png",
    description: "A pioneering payments technology company. Juspay values our students' deep understanding of secure coding practices, functional programming, and scalable system design.",
    category: "Payments",
    website: "https://www.juspay.in"
  },
  { 
    name: "Wells Fargo", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank_Logo.svg",
    description: "As a major financial institution, Wells Fargo recruits our CGS (Cognitive Systems) graduates for critical roles in cybersecurity, fraud detection, and developing secure fintech solutions.",
    category: "FinTech/Security",
    website: "https://www.wellsfargo.com"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: "Amazon Web Services (AWS) and their e-commerce divisions actively hire our graduates for roles in cloud computing, machine learning, and large-scale systems engineering.",
    category: "E-commerce/Cloud",
    website: "https://www.amazon.jobs"
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Microsoft is a top destination for our graduates, who take on roles in software development for Azure, AI research, and building next-generation applications.",
    category: "Multinational Tech",
    website: "https://careers.microsoft.com"
  },
  { 
    name: "Zoho", 
    logo: "https://cdn.freebiesupply.com/logos/large/2x/zoho-1-logo-png-transparent.png",
    description: "A global leader in cloud software. Zoho's unique recruitment model focuses on raw talent and logical thinking. Many of our students join their product development teams, working on global SaaS products used by millions.",
    category: "SaaS",
    website: "https://www.zoho.com"
  },
  {
    name: "Cognizant", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    description: "A key recruiter for our department, Cognizant hires across various domains including AI, Digital Engineering, and Cybersecurity. They offer robust training programs for new recruits to transition smoothly into global projects.",
    category: "IT Services",
    website: "https://www.cognizant.com/careers"
  }
];

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(' ');
  const isLong = words.length > 20;
  const displayedText = isExpanded ? text : words.slice(0, 20).join(' ') + (isLong ? '...' : '');

  return (
    <div className="text-sm text-slate-600 dark:text-slate-400">
      <p className="leading-relaxed">{displayedText}</p>
      {isLong && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

// Premium Styled Stat Card
const StatCard = ({ icon: Icon, value, label, colorClass }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden"
  >
    {/* Decorative background circle */}
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150 ${colorClass}`}></div>
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className={`p-4 rounded-2xl mb-4 ${colorClass} bg-opacity-10 dark:bg-opacity-20`}>
        <Icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')}`} />
      </div>
      <div className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
        {value}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-900 pt-20 pb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block"
          >
            Placement Cell Excellence
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            Where Ambition Meets <br/><span className="text-blue-600">Opportunity</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between academic brilliance and industry standards. 
            Our graduates are the preferred choice for global tech giants.
          </p>

          {/* Premium Styled Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <StatCard 
              icon={Users} 
              value="95%+" 
              label="Placement Record" 
              colorClass="bg-blue-600"
            />
            <StatCard 
              icon={Award} 
              value="18 LPA" 
              label="Highest Package" 
              colorClass="bg-amber-500"
            />
            <StatCard 
              icon={Globe} 
              value="50+" 
              label="Global Partners" 
              colorClass="bg-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Recruiters Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Our Elite Recruiters</h2>
            <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 mx-8 hidden md:block"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {recruitersData.map((recruiter) => (
            <motion.div
              key={recruiter.name}
              variants={cardVariants}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 p-8 flex flex-col group"
            >
              {/* FIXED: Logo now wrapped in a working link with a fallback on error */}
              <a 
                href={recruiter.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-20 w-full mb-8 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={recruiter.logo}
                  alt={`${recruiter.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${recruiter.name}&background=random&color=fff`; }}
                />
              </a>

              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{recruiter.name}</h3>
                <span className="text-[10px] font-black bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md uppercase">
                  {recruiter.category}
                </span>
              </div>
              <div className="flex-grow">
                <ExpandableText text={recruiter.description} />
              </div>

              {/* FIXED: Added functional link to the footer icon */}
              <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-slate-400">
                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> Active Hiring</span>
                <a 
                  href={recruiter.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={`Visit ${recruiter.name} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}