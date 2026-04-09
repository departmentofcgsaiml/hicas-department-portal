// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// type LayoutProps = {
//   children: React.ReactNode;
// };

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="bg-brand-parchment dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300">
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }

import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    /* FIXED: Removed 'bg-brand-parchment' and 'dark:' prefixes to lock the theme.
       ADDED: 'overflow-x-hidden' to prevent any 'dodgy' horizontal scrolling on mobile.
    */
    <div className="bg-slate-900 text-slate-200 min-h-screen transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main className="w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}