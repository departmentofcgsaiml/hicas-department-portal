import Head from 'next/head';

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News & Events | Department of Computer Science</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-lora text-center text-brand-red-900 dark:text-white">
          News & Events
        </h1>
        <p className="mt-4 text-lg text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Stay up-to-date with the latest announcements, achievements, and upcoming events from the department.
        </p>
      </div>
    </>
  );
}
