//index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import StatCard from '@/components/StatCard';
import AnimatedImage from '@/components/AnimatedImage';
import SectionHeading from '@/components/SectionHeading';
import HeroSlider from '@/components/HeroSlider';
import AchievementSlider from '@/components/AchievementSlider';
import TestimonialSlider from '@/components/TestimonialSlider'; 
import InfoCard from '@/components/InfoCard'; 
import { CheckBadgeIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { studentAchievements } from '@/lib/achievementsData';
import { recruitersData } from '@/lib/recruitersData';

export default function HomePage() {
  // UPDATED: Added images and descriptions to the news items data
  const newsItems = [
    { 
      id: 1, 
      title: "HIBOT 2K26", 
      description: "An industry-academia partnership with Amazon gives doctoral fellows funding to pursue big ideas in AI research.", 
      category: "Student Experience",
      image: "/images/13.jpg" 
    },
    { 
      id: 2, 
      title: "IoT competition Award", 
      description: "Johns Hopkins computer scientists release new findings and a specialized dataset for training robots to recognize specific object parts.", 
      category: "Research",
      image: "/images/IoT.jpg"
    },
    { 
      id: 3, 
      title: "HITRON 2026: Talent Association", 
      description: "The Nexus Awards Program supports a diverse range of programming, research, and teaching activities at the Hopkins Bloomberg Center.", 
      category: "Awards and Honors",
      image: "/images/Hitron.jpeg"
    },
  ];

  const missionPoints = [
    "Creating a quality academic environment with relevant IT infrastructure.",
    "Motivating staff and students to actively involve in lifelong learning.",
    "Generating opportunities for students to evolve as competent professionals.",
  ];
  
  const advisoryBoard = [
    { name: "Mr. Dinesh", title: "Lawyer, Zoho Corporation", logo: "/logos/companies/zoho.png" },
    { name: "Mr. Vignesh", title: "MLE, Amazon", logo: "/logos/companies/amazon.png" },
    { name: "Mr. Lance", title: "TCS", logo: "/logos/companies/1cloudhub.png" },
    { name: "Mr. Saravanakumar B", title: "SDE, Microsoft", logo: "/logos/companies/microsoft.png" },
  ];

  const labs = ["Programming Languages Laboratory", "Data Structures Laboratory", "Software Engineering Laboratory", "AI and Machine Learning Laboratory", "Cybersecurity Laboratory"];
  const coes = ["COE in Full Stack Application Development", "COE in Cloud Computing"];
  const valueAddedCourses = ["Mastering Competitive Programming", "Cloud Security Essentials", "Mobile Web Testing with Selenium", "UI/UX Design with Figma"];
  const innovativeTeaching = ["Scratch Based Gamified Programming", "Coding Bootcamps", "Concept Learning using Video Animation", "Google Colabs for Intelligent Coding"];

  const facultyHighlights = [
    { name: "Ms KAVIPRIYA ELANGOVAN", title: "Associate Professor", image: "/images/faculty/faculty-1.jpg", link: "https://hicas.irins.org/profile/255392" },
    { name: "Mr JAYAKUMAR R", title: "Associate Professor", image: "/images/faculty/faculty-2.jpg", link: "https://hicas.irins.org/profile/196749" },
    { name: "Ms Radha M", title: "Assistant Professor", image: "/images/faculty/faculty-3.jpg", link: "/faculty/radha-m" },
    { name: "Mrs SUMATHI R", title: "Assistant Professor", image: "/images/faculty/faculty-4.jpg", link: "https://hicas.irins.org/profile/391815" },
    { name: "Dr PRIYADHARSHINI", title: "Assistant Professor", image: "/images/faculty/faculty-3.jpg", link: "/faculty/priyadharshini-s" },
    { name: "Dr Saranya S", title: "Assistant Professor", image: "/images/faculty/faculty-3.jpg", link: "https://hicas.irins.org/profile/316805" },
  ];
  
  // Data for the new Student Achievements section
  const studentAchievements = [
      { image: "/images/student-achivement/saravana&dinesh.webp", title: "Hindustan Debugging Contest", description: "Saravanakumar B, Dinesh E (AIML) - 2th position in Hindustan colleges." },
      { image: "/images/student-achivement/sujithaimg.webp", title: "HICAS Debugging Competition", description: "Sujitha A from the CGS branch, along with her teammate, win first prize in the debugging event hosted at HICAS." },
      { image: "/images/student-achivement/SRKclg.jpeg", title: "Memes Competion Contest", description: "Vignesh v, Mohammed Fazil H (AIML) - Won First Prize in SirRamaKrishna" },
      { image: "/images/student-achivement/winimage.jpeg", title: "Textile BrandBuild 360 - First Prize", description: "Deepika S and Vishnu M (AIML) secured the 1st position and a cash prize of ₹3,000 at Kumaraguru College of Technology, showcasing exceptional brand strategy and technical creativity."},
      { image: "/images/student-achivement/achivement-5.jpg", title: "Inter-Departmental Tech Meet", description: "Final year AIML students receiving the 2nd prize for their innovative project presentation during the National Level Symposium."},
  ];
  const recruiters = [
    { name: "tcs", logo: "/logos/companies/1cloudhub.png" },
    { name: "zoho", logo: "/logos/companies/zoho.png" },
    { name: "Amazon", logo: "/logos/companies/amazon.png" },
    { name: "microsoft", logo: "/logos/companies/microsoft.png" },
    { name: "HP", logo: "/logos/companies/HP.webp" },
    { name: "Philips", logo: "/logos/companies/Philips.webp" },
    { name: "Juspay", logo: "/logos/companies/juspay.webp" },
    { name: "reliance", logo: "/logos/companies/reliance.webp" },
    { name: "congizant", logo: "/logos/companies/Cognizant.png" },
    { name: "capgemini", logo: "/logos/companies/capgemini.webp" },
    { name: "wipro", logo: "/logos/companies/wipro.png" },
    { name: "ibm", logo: "/logos/companies/ibm.webp" },
    { name: "Autodesk", logo: "/logos/companies/Autodesk.webp" },
    { name: "accenture", logo: "/logos/companies/accenture.webp" },
    { name: "flipkart ", logo: "/logos/companies/flipkart.png" },
    { name: "HCL", logo: "/logos/companies/HCL.webp" },
    { name: " Deloitte", logo: "/logos/companies/Deloitte.webp" },
    { name: "zappify", logo: "/logos/companies/zappify.webp" },
  ];

  const testimonials = [
    { 
      image: "/images/alumini/PRANESHWARAN K III AIML.jpg", 
      quote: "Looking back on my time at SECE, I am filled with gratitude for the incredible education and supportive community that have profoundly influenced my career and personal life.",
      name: "PRANESHWARAN K III AIML",
      credentials: "2025, Data Engineer, IBM."
    },
    { 
      image: "/images/alumini/Ashwin III CGS.jpg", 
      quote: "The hands-on projects and mentorship from the faculty were invaluable. I felt more than prepared for the challenges of the tech industry.",
      name: "Ashwin III CGS",
      credentials: "2023, Software Engineer, Google."
    },
  ];


  return (
    <>
      <Head>
        <title>Department of AIMl & CGS | Welcome</title>
      </Head>

      <div>
        <HeroSlider />

        <section className="py-16 bg-brand-parchment dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
              Welcome to the Forefront of Innovation
            </h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              The Department of Artificial Intelligence & Machine Learning and Computer Science With Cognitive System is a dynamic and vibrant center for education, research, and innovation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Programme Scope */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>Programme Scope</SectionHeading>
                <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  The AIML & CGS programme offers a top-tier blend of intelligent systems and visual computing. Students master proper machine learning models and immersive graphics engineering. It’s a brilliant pathway for those looking to smash it as SDEs in global firms, delivering spot on technical expertise for the future.
                </p>
              </div>
              <div className="flex justify-center">
                <AnimatedImage
                  src="/images/AIimage.jpeg"
                  alt="A robotic car project for programme scope"
                  width={500}
                  height={400}
                />
              </div>
            </div>
            {/* Learning Scope */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <SectionHeading>Learning Scope</SectionHeading>
                <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
The AIML & CGS learning scope is top-tier, blending advanced neural networks with high-performance computer graphics. You’ll master building proper AI models and immersive visual systems, ensuring your technical skills are spot on for global industry demands. It’s a brilliant foundation to smash it in SDE roles and secure a successful career in London and beyond.
                </p>
              </div>
              <div className="md:order-1 flex justify-center">
                <AnimatedImage
                  src="/images/cgsimage.webp"
                  alt="Illustration of computer learning concepts"
                  width={500}
                  height={400}
                />
              </div>
            </div>
            
            {/* Career Progression */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>Career Progression</SectionHeading>
                <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  For an AIML & CGS graduate, the career path is top-tier. You’ll start by smashing it as a Junior SDE or Data Analyst, mastering the core tech stack. With a proper 2-3 years of experience, you’ll transition into Senior or Lead roles, specializing in AI architecture or high-end graphics. This brilliant progression is your ticket to a spot on internal transfer to London, eventually reaching Principal Engineer or CTO levels in global firms.
                </p>
              </div>
              <div className="flex justify-center">
                <AnimatedImage
                  src="/images/computer.jpeg"
                  alt="Illustration of a person looking towards career growth"
                  width={500}
                  height={300}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                {/* Vision */}
                <div>
                    <h2 className="text-3xl font-bold font-lora">VISION</h2>
                    <div className="flex items-center mt-2">
                        <span className="w-16 h-1 bg-amber-400"></span>
                        <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                        <span className="w-2 h-1 bg-amber-400"></span>
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-blue-100">
                        To groom students into globally competent software professionals and meet the ever changing requirements of the industry.
                    </p>
                </div>
                {/* Mission */}
                <div>
                    <h2 className="text-3xl font-bold font-lora">MISSION</h2>
                     <div className="flex items-center mt-2">
                        <span className="w-16 h-1 bg-amber-400"></span>
                        <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                        <span className="w-2 h-1 bg-amber-400"></span>
                    </div>
                    <ul className="mt-6 space-y-4">
                        {missionPoints.map((point, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircleIcon className="h-6 w-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-blue-100">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Corporate Advisory Board */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-lora text-blue-800 dark:text-blue-300">CORPORATE ADVISORY BOARD</h2>
              <div className="flex items-center justify-center mt-2">
                  <span className="w-16 h-1 bg-amber-400"></span>
                  <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                  <span className="w-2 h-1 bg-amber-400"></span>
              </div>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                Naming a few of our advisories working in top companies, who help us align our courses and curriculum to what the industry needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {advisoryBoard.map((member) => (
                <div key={member.name} className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 text-center transition-transform hover:-translate-y-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{member.title}</p>
                  <div className="mt-4 flex justify-center items-center h-20">
                    <Image src={member.logo} alt={`${member.title} logo`} width={120} height={40} className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Learning Section */}
        <section className="py-16 bg-blue-900 text-white" style={{ backgroundImage: `url('/images/enhanced-learning-bg.png')`, backgroundBlendMode: 'overlay' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-lora text-amber-400">ENHANCED LEARNING</h2>
              <div className="flex items-center justify-center mt-2">
                  <span className="w-16 h-1 bg-amber-400"></span>
                  <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                  <span className="w-2 h-1 bg-amber-400"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-blue-100">
              {/* Labs */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">LABS</h3>
                <ul className="space-y-3">
                  {labs.map((lab, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" /><span>{lab}</span></li>)}
                </ul>
              </div>
              {/* COEs */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">COES</h3>
                <ul className="space-y-3">
                  {coes.map((coe, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" /><span>{coe}</span></li>)}
                </ul>
              </div>
              {/* Value Added Courses */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">VALUE ADDED COURSES</h3>
                <ul className="space-y-3">
                  {valueAddedCourses.map((course, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" /><span>{course}</span></li>)}
                </ul>
              </div>
              {/* Innovative Teaching */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">INNOVATIVE TEACHING</h3>
                <ul className="space-y-3">
                  {innovativeTeaching.map((method, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" /><span>{method}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Highlights Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Head of the Department */}
            <div className="text-center">
              <h2 className="text-3xl font-bold font-lora text-blue-800 dark:text-blue-300">HEAD OF THE DEPARTMENT</h2>
               <div className="flex items-center justify-center mt-2">
                  <span className="w-16 h-1 bg-amber-400"></span>
                  <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                  <span className="w-2 h-1 bg-amber-400"></span>
              </div>
              <div className="mt-12 flex flex-col items-center">
                <div className="relative w-48 h-48">
                  <Image src="/images/faculty/hod.jpg" alt="Head of the Department" fill className="rounded-full object-cover shadow-lg" />
                </div>
                <a href="https://hicas.irins.org/profile/161848" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  Dr S. Sasikala
                </a>
                <p className="text-slate-500 dark:text-slate-400">Professor & Head of the Department</p>
              </div>
            </div>
        
        {/* Faculty Members */}
             <div className="text-center mt-20">
                <h2 className="text-3xl font-bold font-lora text-blue-800 dark:text-blue-300">FACULTY MEMBERS</h2>
                <div className="flex items-center justify-center mt-2">
                   <span className="w-16 h-1 bg-amber-400"></span>
                   <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                   <span className="w-2 h-1 bg-amber-400"></span>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-100 gap-8 mt-12">
                 {facultyHighlights.map((faculty) => (
                   <div key={faculty.name} className="flex flex-col items-center">
                      <div className="relative w-32 h-32">
                         <Image src={faculty.image} alt={faculty.name} fill className="rounded-full object-cover shadow-md" />
                      </div>
                      <a href={faculty.link} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 text-center">
                         {faculty.name}
                      </a>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{faculty.title}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </section>


        {/* Student Achievements Section - NEWLY ADDED */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold font-lora text-amber-600 dark:text-amber-400">STUDENT ACHIEVEMENTS</h2>
                <div className="flex items-center justify-center mt-2">
                    <span className="w-16 h-1 bg-amber-400"></span>
                    <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                    <span className="w-2 h-1 bg-amber-400"></span>
                </div>
              </div>
              <div className="mt-12">
                <AchievementSlider achievements={studentAchievements} />
              </div>
              <div className="text-center mt-8">
                <a href="/achievements" className="font-bold text-blue-700 dark:text-blue-400 border-2 border-blue-700 dark:border-blue-400 rounded-full px-6 py-2 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors">
                  KNOW MORE &rarr;
                </a>
              </div>
           </div>
        </section>
          
            {/* Get to Know Us Section - REDESIGNED with corrected alignment and heading */}
        <section
          className="py-20 text-white"
          style={{
            backgroundColor: "#111827",
            backgroundImage: `url('/images/get-to-know-bg.png')`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* CORRECTED: Heading is now left-aligned, no underline, and light blue */}
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              GET TO KNOW HICAS AIML & CGS
            </p>
            
            {/* CORRECTED: Increased the gap between columns for more center space */}
            <div className="mt-12 grid md:grid-cols-2 gap-x-24 items-start">
              {/* --- LEFT COLUMN --- */}
              <div className="space-y-12">
                {/* Card 1 - Video */}
                <div>
                  <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/F1VCvbJfaW8"
                      title="Community Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-lora">Discover Our Community</h3>
                  <div className="mt-3 flex items-start space-x-4">
                    <div className="w-1 h-full bg-amber-400 rounded self-stretch min-h-[4rem]"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Learn about our educational and research activities, student groups,
                      and more — directly from our students and faculty.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Image */}
                <div>
                  <div className="w-full overflow-hidden rounded-lg shadow-2xl">
                    <Image
                      src="/images/OIP.jpg"
                      alt="Campus life"
                      width={600}
                      height={400}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-lora">Life at HICAS AIML</h3>
                  <div className="mt-3 flex items-start space-x-4">
                    <div className="w-1 h-full bg-amber-400 rounded self-stretch min-h-[4rem]"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Explore our vibrant campus community, student clubs, and cultural
                      activities that bring learning to life.
                    </p>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN --- */}
              <div className="space-y-12 md:mt-24">
                {/* Card 2 - Image */}
                <div>
                  <div className="w-full overflow-hidden rounded-lg shadow-2xl">
                    <Image
                      src="/images/learning-scope.jpg"
                      alt="Learning environment"
                      width={600}
                      height={400}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-lora">Research that Saves Lives</h3>
                  <div className="mt-3 flex items-start space-x-4">
                    <div className="w-1 h-full bg-amber-400 rounded self-stretch min-h-[4rem]"></div>
                    <p className="text-gray-300 leading-relaxed">
                      From AI-driven healthcare to next-gen cybersecurity, our research
                      pushes boundaries and creates real-world impact.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Video */}
                <div>
                  <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-2xl">
                    <iframe
                      src= "https://www.youtube.com/embed/DwrPKYCKwsM?si=Ij-l4_gB7TX0syV_" //"https://www.youtube.com/embed/yawcgJ07EFY?si=E8Ku2O7k_K0tCUb6"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-lora">Innovating for the Future</h3>
                  <div className="mt-3 flex items-start space-x-4">
                    <div className="w-1 h-full bg-amber-400 rounded self-stretch min-h-[4rem]"></div>
                    <p className="text-gray-300 leading-relaxed">
                      Discover how our students and faculty are building solutions to
                      tackle tomorrow’s biggest challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruiters Section
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-lora text-blue-800 dark:text-blue-300">RECRUITERS</h2>
              <div className="flex items-center justify-center mt-2"><span className="w-16 h-1 bg-amber-400"></span><span className="w-2 h-1 bg-amber-400 mx-1"></span><span className="w-2 h-1 bg-amber-400"></span></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center mt-12">
              {recruiters.map((recruiter) => (
                <div key={recruiter.name} className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md transition-transform hover:-translate-y-2">
                   <div className="relative h-20"><Image src={recruiter.logo} alt={`${recruiter.name} logo`} fill className="object-contain" /></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12"><a href="#" className="font-bold text-blue-700 dark:text-blue-400 border-2 border-blue-700 dark:border-blue-400 rounded-full px-6 py-2 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors">KNOW MORE &rarr;</a></div>
          </div>
        </section> */}
        

        {/* Recruiters Section - CORRECTED */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-lora text-blue-800 dark:text-blue-300">RECRUITERS</h2>
              <div className="flex items-center justify-center mt-2"><span className="w-16 h-1 bg-amber-400"></span><span className="w-2 h-1 bg-amber-400 mx-1"></span><span className="w-2 h-1 bg-amber-400"></span></div>
            </div>
            {/* CORRECTED: Changed 'topRecruiters' to 'recruiters' and added proper typing */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center mt-12">
              {recruiters.map((recruiter: { name: string; logo: string }) => (
                <div key={recruiter.name} className="p-4 bg-white dark:bg-slate-900/50 rounded-lg shadow-md transition-transform hover:-translate-y-2 grayscale hover:grayscale-0">
                   <div className="relative h-20"><Image src={recruiter.logo} alt={`${recruiter.name} logo`} fill className="object-contain" /></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/recruiters" className="font-bold text-blue-700 dark:text-blue-400 border-2 border-blue-700 dark:border-blue-400 rounded-full px-6 py-2 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors">
                VIEW ALL RECRUITERS &rarr;
              </Link>
            </div>
          </div>
        </section>

         {/* Alumni Testimonials Section - REDESIGNED */}
        <section 
          className="py-16 bg-gray-900 dark:bg-red-900 text-white"
          style={{ backgroundImage: `url('/images/testimonial-bg.jpg')`, backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-lora text-amber-400">ALUMNI TESTIMONIALS</h2>
                    <div className="flex items-center justify-center mt-2">
                        <span className="w-16 h-1 bg-amber-400"></span>
                        <span className="w-2 h-1 bg-amber-400 mx-1"></span>
                        <span className="w-2 h-1 bg-amber-400"></span>
                    </div>
                </div>
                <div className="mt-12">
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-brand-parchment dark:bg-slate-900 border-y dark:border-slate-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-lora text-center text-brand-red-900 dark:text-white mb-12">By The Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StatCard value={10} label="Distinguished Faculty" suffix="+" />
              <StatCard value={15} label="Annual Research" suffix="+" />
              <StatCard value={12} label="Advanced Research Labs" />
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white mb-12">Latest News</h2>
              <a href="news" className="font-semibold text-blue-600 hover:underline text-sm">VIEW ALL NEWS &rarr;</a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
                   <div className="relative h-56 w-full">
                       <Image src={item.image} alt={item.title} fill className="object-cover" />
                   </div>
                   <div className="p-6">
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.category.toUpperCase()}</p>
                      <h3 className="mt-2 text-xl font-bold font-lora text-slate-800 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
