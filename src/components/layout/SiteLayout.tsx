import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-cloud-50 text-ink-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
