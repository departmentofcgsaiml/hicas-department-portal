import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { facultyData, FacultyMember } from '@/lib/facultyData';
import { GetStaticProps } from 'next';

type FacultyPageProps = {
  members: FacultyMember[];
};

export default function FacultyPage({ members }: FacultyPageProps) {
  return (
    <>
      <Head>
        <title>Faculty | Department of AIMl & CGS</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
            <h1 className="text-4xl font-bold font-lora text-brand-red-900 dark:text-white">
            Our Faculty
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Meet the dedicated scholars, researchers, and mentors who are the cornerstone of our department's success.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => (
                <Link key={member.id} href={`/faculty/${member.slug}`} className="group block text-center">
                    <div className="relative w-40 h-40 mx-auto">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="rounded-full object-cover shadow-lg transition-transform group-hover:scale-105"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {member.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{member.title}</p>
                </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      members: facultyData,
    },
  };
};