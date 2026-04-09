import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Coffee, 
  Home, 
  Trophy, 
  Users, 
  Library, 
  Wifi, 
  ChevronRight,
  Music,
  Camera
} from 'lucide-react';

// --- Internal Layout Component (Self-contained for preview) ---
const PageContentWrapper = ({ title, sidebarLinks }: { title: string, sidebarLinks: { name: string, component: React.ReactNode, icon: any }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Hero Section */}
      <div className="bg-blue-900 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 italic">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 text-6xl md:text-8xl">HICAS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Life at the Department of AIML & CGS is more than just code. It's a journey of growth, friendship, and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{title}</h2>
              </div>
              <nav className="p-4 space-y-2">
                {sidebarLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-black transition-all ${
                      activeTab === index 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none translate-x-2' 
                        : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <link.icon className={`w-5 h-5 mr-3 ${activeTab === index ? 'text-amber-400' : 'text-slate-400'}`} />
                      {link.name}
                    </div>
                    {activeTab === index && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-12 min-h-[600px]"
            >
              {sidebarLinks[activeTab].component}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

// --- Section Components ---

const Infrastructure = () => (
  <div className="space-y-8">
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
        <Cpu className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase">Technical Infrastructure</h2>
    </div>
    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" className="w-full h-64 object-cover rounded-3xl mb-8" alt="Computing Lab" />
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
        <Wifi className="w-6 h-6 text-amber-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">High-Speed Connectivity</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Dedicated 1Gbps fiber optic line ensuring seamless access to cloud resources and global databases.</p>
      </div>
      <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
        <Library className="w-6 h-6 text-blue-500 mb-4" />
        <h3 className="font-bold text-lg mb-2">Digital Library</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">24/7 access to IEEE, ACM, and Springer journals, providing the backbone for research and self-study.</p>
      </div>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-slate-600 dark:text-slate-400">Our labs are equipped with the latest NVIDIA RTX enabled systems, specialized for heavy deep learning model training and cognitive system simulations.</p>
    </div>
  </div>
);

const StudentClubs = () => (
  <div className="space-y-8">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-2xl">
        <Users className="w-8 h-8 text-amber-600" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase">Clubs & Communities</h2>
    </div>
    <div className="grid gap-6">
      {[
        { name: "AI Explorers Club", desc: "A student-led group focusing on generative AI and neural architecture search.", color: "border-blue-500" },
        { name: "Code-Botics Society", desc: "Merging robotics with cognitive intelligence. Organizers of the annual Robofest.", color: "border-amber-500" },
        { name: "Cyber-Guardians", desc: "The official CGS cybersecurity club dedicated to ethical hacking and digital forensics.", color: "border-emerald-500" }
      ].map((club) => (
        <div key={club.name} className={`p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border-l-8 ${club.color} shadow-sm transition-transform hover:scale-[1.02]`}>
          <h3 className="text-xl font-black mb-2">{club.name}</h3>
          <p className="text-slate-500 dark:text-slate-400">{club.desc}</p>
          <button className="mt-4 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800">Join Community &rarr;</button>
        </div>
      ))}
    </div>
  </div>
);

const HostelLife = () => (
  <div className="space-y-8">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
        <Home className="w-8 h-8 text-purple-600" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase">Residential Facilities</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="group overflow-hidden rounded-3xl relative h-64">
        <img src="https://images.unsplash.com/photo-1555854817-5b2260d15024?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Hostel Room" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <p className="text-white font-bold">Modern Living Quarters</p>
        </div>
      </div>
      <div className="group overflow-hidden rounded-3xl relative h-64">
        <img src="https://images.unsplash.com/photo-1567521464027-f119f816f17a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Dining Hall" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <p className="text-white font-bold">Hygienic Dining Hall</p>
        </div>
      </div>
    </div>
    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem]">
      <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-500 mr-2" /> Wi-Fi Enabled Corridors</li>
        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-500 mr-2" /> 24/7 Security & CCTV</li>
        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-500 mr-2" /> Multi-Cuisine Cafeteria</li>
        <li className="flex items-center"><ChevronRight className="w-4 h-4 text-amber-500 mr-2" /> Medical Facility On-Site</li>
      </ul>
    </div>
  </div>
);

const Sports = () => (
  <div className="space-y-8">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl">
        <Trophy className="w-8 h-8 text-emerald-600" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase">Sports & Recreation</h2>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        We believe in the concept of a sound mind in a sound body. Our campus offers extensive sports infrastructure for both indoor and outdoor activities.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {['Cricket Ground', 'Basketball Court', 'Indoor Gym', 'Table Tennis', 'Badminton', 'Football Turf'].map((sport) => (
        <div key={sport} className="p-4 text-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm font-black text-xs uppercase tracking-widest text-slate-500">
          {sport}
        </div>
      ))}
    </div>
  </div>
);

// --- Main Page Export ---

export default function App() {
  const campusLifeLinks = [
    { name: "Infrastructure", component: <Infrastructure />, icon: Cpu },
    { name: "Student Clubs", component: <StudentClubs />, icon: Users },
    { name: "Hostel & Dining", component: <HostelLife />, icon: Home },
    { name: "Sports & Fitness", component: <Sports />, icon: Trophy },
  ];

  return (
    <PageContentWrapper 
      title="Campus Experience" 
      sidebarLinks={campusLifeLinks} 
    />
  );
}