import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const router = useRouter();
  // State to hold the user's search query
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Academics', href: '/academics' },
    { name: 'Research', href: '/research' },
    { name: 'Placement', href: '/placement' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'About Us', href: '/about' },
  ];

  // Function to handle the search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from reloading the page
    if (searchQuery.trim()) {
      // Redirect to the search page with the query as a parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-40 transition-colors duration-300">
        {/* Main header with logos */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* College Logo */}
            <div className="flex-shrink-0">
              <Image src="/logos/college-logo.png" alt="College Logo" width={200} height={60} />
            </div>
            
            {/* Search Bar Form */}
            <div className="hidden lg:flex flex-grow items-center justify-center px-8">
              <form onSubmit={handleSearch} className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search for courses, faculty, events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 pl-5 pr-12 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-4"
                  title="Search"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            
            {/* Accreditation Logos */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
               <Image src="/logos/NAAC A++ Grade1.png" alt="NAAC A++ Logo" width={80} height={60} />
               <Image src="/logos/25 years.jpg" alt="NBA Logo" width={80} height={60} />
               <Image src="/logos/nirf-logo.png" alt="NIRF Logo" width={80} height={60} />
            </div>
          </div>
        </div>

        {/* Main navigation menu */}
        <div className="bg-blue-800 text-white shadow-lg">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-8 h-14">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold tracking-wider transition duration-150 py-1 border-b-2 text-sm ${
                    router.pathname === link.href
                      ? 'text-amber-300 border-amber-300'
                      : 'border-transparent hover:text-amber-300 hover:border-amber-300'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </nav>
        </div>
      </header>

      {/* Vertical Side Buttons */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col space-y-1">
        <a href="https://earth.google.com/web/search/Hindusthan+College+of+Arts+and+Science,+Avinashi+Road,+behind+Nava+India,+Udayampalayam,+Tamil+Nadu/@11.01257474,76.99322694,424.90483139a,826.56047547d,35y,359.99847219h,0t,0r/data=CtMBGqQBEp0BCiQweDNhNTI2NWQwZjBlMjAyZGQ6MHg2YzFjYjI0OTMxOGM3N2YZOrB32nUGJkAhpJTGHpA_U0AqY0hpbmR1c3RoYW4gQ29sbGVnZSBvZiBBcnRzIGFuZCBTY2llbmNlLCBBdmluYXNoaSBSb2FkLCBiZWhpbmQgTmF2YSBJbmRpYSwgVWRheWFtcGFsYXlhbSwgVGFtaWwgTmFkdRgBIAEiJgokCeXGw6pmByZAESjzSibaBCZAGTZu-8XzP1NAIddBj_NHP1NAQgIIAToDCgEwQgIIAEoNCP___________wEQAA" className="bg-amber-500 hover:bg-amber-600 text-white font-bold p-3 rounded-l-md shadow-lg transition-transform hover:translate-x-[-4px]">
          <span style={{ writingMode: 'vertical-rl' }} className="transform rotate-180 tracking-widest text-sm">CAMPUS TOUR</span>
        </a>
        <a href="https://apply.hindusthan.net/arts-and-science" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-l-md shadow-lg transition-transform hover:translate-x-[-4px]">
          <span style={{ writingMode: 'vertical-rl' }} className="transform rotate-180 tracking-widest text-sm">ADMISSION 2026</span>
        </a>
      </div>
    </>
  );
}

