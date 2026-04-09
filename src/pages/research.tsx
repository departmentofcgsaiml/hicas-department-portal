// import Head from 'next/head';

// export default function ResearchPage() {
//   return (
//     <>
//       <Head>
//         <title>Research | Department of Computer Science</title>
//       </Head>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-4xl font-bold font-lora text-center text-brand-red-900 dark:text-white">
//           Research & Labs
//         </h1>
//          <p className="mt-4 text-lg text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
//           This section will showcase the departments ongoing research projects, state-of-the-art labs, and facilities.
//         </p>
//       </div>
//     </>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Cpu, 
  Globe, 
  BookOpen, 
  Lightbulb, 
  Award, 
  ArrowRight,
  Microscope,
  Zap,
  ShieldCheck,
  Binary,
  Phone,
  Mail
} from 'lucide-react';

// --- Research Data ---
const researchStats = [
  { label: "Publications", value: "150+", icon: BookOpen, color: "text-blue-500" },
  { label: "Patents Filed", value: "12+", icon: Lightbulb, color: "text-amber-500" },
  { label: "Research Grants", value: "₹65L+", icon: Award, color: "text-emerald-500" },
  { label: "Active Projects", value: "25+", icon: Zap, color: "text-purple-500" },
];

const researchLabs = [
  {
    title: "AI & Deep Learning Lab",
    description: "Focused on developing high-performance neural architectures for computer vision and medical diagnostics.",
    icon: BrainIcon,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    areas: ["Neural Networks", "Generative AI", "Object Detection"]
  },
  {
    title: "IoT & Smart Systems Hub",
    description: "Developing intelligent edge devices for environmental monitoring and smart city infrastructure.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    areas: ["Sensor Networks", "Edge Computing", "Real-time Monitoring"]
  },
  {
    title: "Cognitive Computing Lab",
    description: "Exploring the intersection of human psychology and computational systems for better HCI.",
    icon: Binary,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    areas: ["Human-AI Interaction", "Decision Support", "Behavioral Modeling"]
  },
  {
    title: "Cybersecurity Lab",
    description: "Dedicated to securing cognitive systems and developing AI-driven threat detection models.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    areas: ["Forensics", "Intrusion Detection", "Secure Coding"]
  }
];

const featuredProjects = [
  {
    id: 1,
    title: "OysterIoT: Real-time Water Monitoring",
    lead: "Dr. S. Sasikala",
    status: "Completed",
    description: "A low-cost, high-accuracy IoT system for monitoring water quality parameters in real-time with cloud-based analytics.",
    tags: ["IoT", "Sustainability"]
  },
  {
    id: 2,
    title: "Multiple Sclerosis Prediction Model",
    lead: "Ms. E. Kavipriya",
    status: "Ongoing",
    description: "A hybrid recurrent neural network aimed at early detection of Multiple Sclerosis using mini-batch gradient descent.",
    tags: ["Health Tech", "Deep Learning"]
  },
  {
    id: 3,
    title: "Smart Street Light via Solar & AI",
    lead: "Dr. S. Saranya",
    status: "Award Winning",
    description: "Autonomous street lighting system that optimizes power consumption based on traffic density and ambient light.",
    tags: ["Green Energy", "Smart City"]
  }
];

// --- Internal Icons ---
function BrainIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  );
}

// --- Main Component ---
export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
      
      {/* Research Hero */}
      <section className="relative pt-24 pb-40 overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-md"
            >
              <Microscope className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Advancing Knowledge</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 uppercase tracking-tighter italic">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">&</span> Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              We are pushing the boundaries of what's possible in Artificial Intelligence, making complex systems smarter, faster, and more human-centric.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {researchStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl text-center border border-slate-100 dark:border-slate-700"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Research Labs Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Specialized Labs</h2>
            <p className="text-slate-500 mt-4 font-medium italic">Our world-class facilities are where theoretical insights become tangible technological solutions.</p>
          </div>
          <button className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center hover:translate-x-2 transition-transform">
            Browse All Facilities <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {researchLabs.map((lab, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col md:flex-row h-full"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src={lab.image} alt={lab.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <lab.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{lab.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {lab.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lab.areas.map(area => (
                    <span key={area} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-slate-50 dark:bg-slate-900 text-slate-400 rounded-md">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-slate-100 dark:bg-slate-900 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Impactful Projects</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">From award-winning innovations to ongoing doctoral research, our projects aim for real-world impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    project.status === 'Ongoing' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {project.status}
                  </span>
                  <FlaskConical className="w-5 h-5 text-slate-300" />
                </div>
                
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Lead: {project.lead}</p>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-700">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400">#{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Excellence CTA - UPDATED CONTACT INFO */}
      <section className="bg-blue-600 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Collab with Us</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            We are always looking for partners in industry and academia to solve the world's most pressing challenges through AI.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Phone Contact */}
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white/20 rounded-full mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                <a href="tel:+91987654321" className="text-white text-xl font-black hover:text-amber-400 transition-colors">
                  +91 987654321
                </a>
              </div>
              
              {/* Email Contact */}
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white/20 rounded-full mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:hicascgsaiml@gmail.com" className="text-white text-xl font-black hover:text-amber-400 transition-colors underline-offset-4 hover:underline">
                  hicascgsaiml@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}