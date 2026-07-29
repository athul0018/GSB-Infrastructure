import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SiteLayout } from '@/components/layout/SiteLayout';
import About from '@/pages/About';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Industries from '@/pages/Industries';
import Products from '@/pages/Products';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';

function NotFound() { 
  return (
    <section className="bg-cloud-50 py-24">
      <div className="container rounded-[28px] border border-steel-300/60 bg-white p-10 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aqua-600">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl text-ink-900">Page not found.</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-steel-500">
          The route you requested is not available in this demo build yet.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
          <Route element={<Services />} path="services" />
          <Route element={<Products />} path="products" />
          <Route element={<Industries />} path="industries" />
          <Route element={<Projects />} path="projects" />
          <Route element={<Certifications />} path="certifications" />
          <Route element={<Contact />} path="contact" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
