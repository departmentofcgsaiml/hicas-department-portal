import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Bell, 
  Newspaper, 
  Award, 
  TrendingUp, 
  Search,
  Clock,
  ExternalLink
} from 'lucide-react';

// --- Local News & Events Data ---
const newsEventsData = [
  {
    id: 1,
    type: 'news',
    category: 'Research',
    title: "AI Excellence: Department Receives ₹50 Lakhs Research Grant",
    date: "Jan 15, 2026",
    description: "The Department of AIML has been awarded a prestigious grant from the Ministry of Education to develop low-cost AI solutions for rural healthcare monitoring.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    type: 'event',
    category: 'Workshop',
    title: "Global Symposium on Cognitive Computing 2026",
    date: "Feb 10, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Main Auditorium, HICAS",
    description: "Join industry experts from Microsoft and IBM as they discuss the future of human-machine interaction and cognitive system architecture.",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    type: 'news',
    category: 'Achievement',
    title: "Student Team Wins National Hackathon at IIT Madras",
    date: "Jan 05, 2026",
    description: "A team of 3rd-year AIML students secured first place for their project 'Agro-Vision', an AI-powered pest detection system using drone imagery.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 4,
    type: 'event',
    category: 'Placement',
    title: "Recruitment Drive: ServiceNow and Juspay",
    date: "Feb 22, 2026",
    time: "09:00 AM onwards",
    location: "Placement Cell Hall B",
    description: "On-campus placement drive for final year students. Pre-placement talks will begin at 09:30 AM sharp in the seminar hall.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 5,
    type: 'news',
    category: 'Faculty',
    title: "Dr. S. Sasikala Appointed as Senior Advisor to State AI Board",
    date: "Dec 28, 2025",
    description: "Our HOD, Dr. Sasikala, will join the state technical committee to help formulate ethics guidelines for autonomous system deployment.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 6,
    type: 'event',
    category: 'Seminar',
    title: "Web 3.0 and the Future of Decentralized Intelligence",
    date: "March 05, 2026",
    time: "02:00 PM",
    location: "Virtual (Zoom Link to be sent)",
    description: "An expert guest lecture on how Blockchain and AI are merging to create decentralized autonomous organizations (DAOs).",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export default function NewsEventsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = newsEventsData.filter(item => {
    const matchesFilter = filter === 'all' || item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
      
      {/* Dynamic Hero Section */}
      <section className="relative pt-24 pb-32 bg-blue-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-blue-300 mb-6"
            >
              <Bell className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">HICAS Department Feed</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter italic">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Insights</span> & Updates
            </h1>
            
            <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
              Discover the latest research breakthroughs, departmental news, and upcoming academic events at the Department of AIML & CGS.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbar: Search and Filter */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-100 dark:border-slate-700">
          
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl w-full md:w-auto">
            {['all', 'news', 'event'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === type 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search news or events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 dark:text-white outline-none"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <section className="container mx-auto px-4 py-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter + searchQuery} // Re-animate when filter changes
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Media Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md ${
                      item.type === 'news' ? 'bg-blue-600/80' : 'bg-amber-500/80'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Calendar className="w-3 h-3 mr-2 text-blue-500" />
                    {item.date}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Event Details specific */}
                  {item.type === 'event' && (
                    <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                      <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">
                        <Clock className="w-3 h-3 mr-2 text-amber-500" />
                        {item.time}
                      </div>
                      <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-bold">
                        <MapPin className="w-3 h-3 mr-2 text-amber-500" />
                        {item.location}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-700">
                    <a href={item.link} className="flex items-center text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
                      {item.type === 'event' ? 'Register Now' : 'Full Story'}
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    {item.type === 'news' && (
                      <TrendingUp className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Newspaper className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">No updates found</h3>
            <p className="text-slate-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </section>

      {/* Newsletter / Notifications CTA
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Never Miss an Update</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Get the latest departmental news, research publications, and event invitations directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 bg-white/10 border border-white/10 rounded-full text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full"
            />
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-full transition-all shadow-xl shadow-blue-900/40 uppercase tracking-widest text-xs whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Institutional Footer 
      <footer className="bg-slate-950 py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-12 mb-12">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white mb-1">60+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Events/Year</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white mb-1">15+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">News Outlets</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white mb-1">10k+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Readership</span>
             </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}