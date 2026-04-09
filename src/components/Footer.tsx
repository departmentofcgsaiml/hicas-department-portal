import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// You can install react-icons by running: npm install react-icons
// This component replaces the old simple footer.

export default function Footer() {

  const linkColumns = {
    "Useful Links": [
      { name: "About AIML & CGS", href: "about" },
      { name: "Courses", href: "/courses" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "/contact" },
    ],
    
    "Student Life & Support": [
        { name: "Student Council", href: "#" },
        { name: "Scholarships", href: "/admissions" },
        { name: "Internships", href: "#" },
        { name: "Student Clubs", href: "#" },
    ],

    "Programmes": [
        { name: "B.Sc Artificial Intelligence & Machine Leaning", href: "/admissions" },
        { name: "B.Sc Computer Science with Cognitive System", href: "/admissions" },
    ]
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/groups/165535000140834/", name: "Facebook" },
    { icon: <FaTwitter />, href: "https://x.com/hicas.ac.in", name: "Twitter" },
    { icon: <FaYoutube />, href: "https://youtube.com/@hoddeptofcognitivesystems?si=V3iaNPfyTzrkmdOV", name: "YouTube" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hicas_cgs_aiml/#", name: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://in.linkedin.com/school/hicas/", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Link Columns */}
          {Object.entries(linkColumns).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white text-lg relative pb-2 mb-4">
                {title}
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-amber-400"></span>
              </h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-amber-300 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Find Us Section */}
          <div>
            <h3 className="font-bold text-white text-lg relative pb-2 mb-4">
              FIND US
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-amber-400"></span>
            </h3>
            <div className="space-y-2 text-sm">
              <p>Hindustan College of Arts and Science</p>
              <p>NAVA india, Coimbatro</p>
              <p>Tamil Nadu, India</p>
              <p className="pt-2">T: +91 987654321</p>
              <p>E: hicascgsaiml@gmail.com</p>
            </div>
            <a href="https://www.bing.com/ck/a?!&&p=6486ac13bad46e4a933489f6b63d27f8a69e934c48ea34dab4386fba5fbc0db5JmltdHM9MTc1ODMyNjQwMA&ptn=3&ver=2&hsh=4&fclid=120cae43-2b75-616a-13b7-bb182a176060&u=a1L21hcHM_Jm1lcGk9MH5-RW1iZWRkZWR-QWRkcmVzc19MaW5rJnR5PTE4JnE9SGluZHVzdGhhbiUyMENvbGxlZ2UlMjBvZiUyMEVkdWNhdGlvbiZzcz15cGlkLllONDA3MHg2NzU0OTA3NDgyNTk1ODU0MjY0JnBwb2lzPTExLjAxMzMzODA4ODk4OTI1OF83Ni45OTQ0NTM0MzAxNzU3OF9IaW5kdXN0aGFuJTIwQ29sbGVnZSUyMG9mJTIwRWR1Y2F0aW9uX1lONDA3MHg2NzU0OTA3NDgyNTk1ODU0MjY0fiZjcD0xMS4wMTMzMzh-NzYuOTk0NDUzJnY9MiZzVj0xJkZPUk09TVBTUlBM" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm">
              View Google Map
            </a>
          </div>

        </div>

        {/* Follow Us Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
            <h3 className="font-bold text-white text-lg">FOLLOW US</h3>
            <div className="flex space-x-4 mt-4 md:mt-0">
                {socialLinks.map(social => (
                    <a key={social.name} href={social.href} aria-label={social.name} className="bg-slate-700 hover:bg-amber-500 text-white p-3 rounded-full transition-colors">
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
            <p>Copyright © {new Date().getFullYear()}, Hindustan Educational and Charitable Trust. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}