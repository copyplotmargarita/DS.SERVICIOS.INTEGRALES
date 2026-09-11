import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-body-md text-on-surface bg-surface overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="w-full pt-20 bg-surface flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
