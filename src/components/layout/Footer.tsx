import { Link } from 'react-router-dom';

import { companyInfo, contactOptions, footerGroups } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 py-16 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua-500">
            {companyInfo.name}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight">
            Utility, civil, and infrastructure work delivered with clarity.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70">{companyInfo.description}</p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {contactOptions.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}: {item.value}
                </a>
              </li>
            ))}
            <li>{companyInfo.address}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
