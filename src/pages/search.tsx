import Head from 'next/head';
import { useRouter } from 'next/router';
import { facultyData } from '@/lib/facultyData';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { UserIcon, BookOpenIcon } from '@heroicons/react/24/solid';

// This is the new page for displaying search results.
export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const allSearchableContent = [
      ...facultyData.map(member => ({
        type: 'Faculty',
        title: member.name,
        description: member.title,
        url: `/faculty/${member.slug}`,
        image: member.image
      })),
      // Add pages
      { type: 'Page', title: 'About Us', description: 'Learn about the department\'s history, vision, and mission.', url: '/about' },
      { type: 'Page', title: 'Courses & Curriculum', description: 'Explore our B.Sc. programmes in AIML and CGS.', url: '/courses' },
      { type: 'Page', title: 'Research & Labs', description: 'Discover our cutting-edge research projects and facilities.', url: '/research' },
    ];

    if (typeof q === 'string' && q.trim() !== '') {
      const lowerCaseQuery = q.toLowerCase();
      
      // UPDATED SEARCH LOGIC: Now searches title and description of all content
      const results = allSearchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseQuery) ||
          item.description.toLowerCase().includes(lowerCaseQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [q]);

  const searchQuery = Array.isArray(q) ? q[0] : q || '';

  return (
    <>
      <Head>
        <title>Search Results for "{searchQuery}"</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[60vh]">
        <h1 className="text-3xl font-bold font-lora text-brand-red-900 dark:text-white">
          Search Results
        </h1>
        {searchQuery ? (
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Showing {searchResults.length} results for: <span className="font-semibold">"{searchQuery}"</span>
          </p>
        ) : (
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Please enter a search term in the header.
          </p>
        )}

        {/* Display Search Results */}
        <div className="mt-12">
            {searchResults.length > 0 ? (
                <div className="space-y-6">
                    {searchResults.map((result, index) => (
                        <Link key={index} href={result.url} className="group block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                  {result.type === 'Faculty' ? (
                                    <div className="relative w-16 h-16">
                                      <Image src={result.image} alt={result.title} fill className="rounded-full object-cover" />
                                    </div>
                                  ) : (
                                    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                      <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                  )}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">{result.type}</p>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-blue-600 mt-1">{result.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{result.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                searchQuery && <p className="mt-8 text-center text-slate-500">No results found for "{searchQuery}". Please try another search term.</p>
            )}
        </div>
      </div>
    </>
  );
}
