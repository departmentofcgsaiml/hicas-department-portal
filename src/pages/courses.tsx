import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Cpu, 
  Brain, 
  Code, 
  Globe, 
  Shield, 
  CheckCircle2, 
  Download,
  Clock,
  Layers,
  GraduationCap
} from 'lucide-react';

// --- Curriculum Data ---
const programs = [
  {
    id: 'aiml',
    title: "B.Sc. Artificial Intelligence & Machine Learning",
    description: "A comprehensive program designed to build a solid foundation in computational intelligence, data science, and neural architectures.",
    duration: "3 Years",
    semesters: 6,
    coreSubjects: [
      { icon: Brain, title: "Neural Networks", desc: "Understanding biological and artificial neuron structures." },
      { icon: Code, title: "Python Programming", desc: "Advanced scripting for data manipulation and AI." },
      { icon: Layers, title: "Deep Learning", desc: "Multi-layered architectures for complex pattern recognition." },
      { icon: Cpu, title: "Computer Vision", desc: "Teaching machines to interpret visual data from the world." }
    ],
    outcomes: [
      "Develop scalable machine learning models.",
      "Design and implement autonomous systems.",
      "Master Big Data analytics and visualization.",
      "Understand ethical implications of AI deployment."
    ]
  },
  {
    id: 'cgs',
    title: "B.Sc. Computer Science with Cognitive Systems",
    description: "An industry-aligned program focused on the intersection of human psychology, computer science, and smart system interaction.",
    duration: "3 Years",
    semesters: 6,
    coreSubjects: [
      { icon: Globe, title: "Cognitive Science", desc: "Studying the nature of human intelligence and perception." },
      { icon: Shield, title: "Cyber Security", desc: "Protecting intelligent systems from adversarial attacks." },
      { icon: Activity, title: "Natural Language Processing", desc: "Bridge the gap between human language and machines." },
      { icon: Brain, title: "Human-Machine Interaction", desc: "Designing intuitive interfaces for smart environments." }
    ],
    outcomes: [
      "Understand cognitive modeling and behavioral analysis.",
      "Apply AI to solve complex human-centric problems.",
      "Architect secure and resilient cognitive systems.",
      "Expertise in IT infrastructure and cloud services."
    ]
  }
];

function Activity(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('aiml');

  const activeProgram = programs.find(p => p.id === activeTab) || programs[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
      
      {/* Premium Minimal Hero */}
      <section className="bg-slate-900 pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500 rounded-full animate-[pulse_8s_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/30 rounded-full animate-[pulse_12s_infinite]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-200">Curriculum Roadmap</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6 italic">
            Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Futures</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Our curriculum is built on industry standards, ensuring students gain both theoretical depth and practical expertise.
          </p>
        </div>
      </section>

      {/* Program Selection Tabs */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="flex bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-2xl mx-auto">
          {programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`flex-1 py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === prog.id 
                  ? 'bg-blue-600 text-white shadow-xl' 
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              {prog.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Info Column */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight mb-6">
                    {activeProgram.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {activeProgram.description}
                  </p>
                </div>

                <div className="flex gap-8 border-y border-slate-100 dark:border-slate-800 py-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</p>
                      <p className="font-black dark:text-white">{activeProgram.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-2xl text-amber-600">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Semesters</p>
                      <p className="font-black dark:text-white">{activeProgram.semesters} Semesters</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">Learning Outcomes</h3>
                  <div className="grid gap-4">
                    {activeProgram.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Curriculum Grid */}
              <div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-10 text-center">Core Specializations</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {activeProgram.coreSubjects.map((subject, i) => (
                      <div key={i} className="space-y-4 group">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <subject.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-lg text-slate-900 dark:text-white uppercase tracking-tight leading-none">{subject.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{subject.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <button className="inline-flex items-center space-x-3 px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-black rounded-full hover:bg-blue-600 dark:hover:bg-amber-400 transition-all uppercase tracking-widest text-xs">
                      <Download className="w-4 h-4" />
                      <span>Download Syllabus PDF</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Graduation / Admissions CTA */}
      <section className="bg-slate-100 dark:bg-slate-900 py-32 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8">Ready to start your journey?</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            Applications for the 2026 Academic Year are now open. Secure your place in one of the most innovative departments in the region.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://hicas.ac.in/admission" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-full shadow-2xl shadow-blue-900/40 transition-all transform hover:scale-105 uppercase tracking-widest text-sm inline-block"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}