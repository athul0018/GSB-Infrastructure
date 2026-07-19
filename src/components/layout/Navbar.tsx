import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import companyLogo from '@/assets/Company Logo.png';
import { siteNav } from '@/data/site';

import { ButtonLink } from '../ui/ButtonLink';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link className="flex h-full items-center justify-center" to="/">
          <img
            alt="GSB Infrastructure logo"
            className="block h-40 w-auto object-contain sm:h-30 mt-1 "
            src={companyLogo}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteNav.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" label="Request a Quote" />
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="rounded-md border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {isOpen ? (
          <div className="absolute inset-x-4 top-24 rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-4">
              {siteNav.map((item) => (
                <NavLink
                  key={item.href}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white/10 text-white' : 'text-white/75'}`
                  }
                  onClick={() => setIsOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
              <ButtonLink className="justify-center" href="/contact" label="Request a Quote" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
