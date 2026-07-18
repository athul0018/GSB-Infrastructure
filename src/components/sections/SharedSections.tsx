import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type InfoItem = {
  title: string;
  description?: string;
  summary?: string;
  label?: string;
  tag?: string;
  value?: string;
  image?: string;
  sector?: string;
  icon?: LucideIcon;
};

export function CardGrid({
  items,
  variant = 'default',
}: {
  items: InfoItem[];
  variant?: 'default' | 'stat' | 'media';
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className={cn(
            'rounded-3xl border border-steel-300/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card',
            variant === 'media' ? 'overflow-hidden p-0' : '',
            variant === 'stat' ? 'bg-mist-100' : '',
          )}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
        >
          {item.image ? (
            <img
              alt={item.title}
              className="h-52 w-full object-cover"
              loading="lazy"
              src={item.image}
            />
          ) : null}
          <div className={cn(item.image ? 'p-6' : '')}>
            {item.icon ? (
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-500/10 text-aqua-600">
                <item.icon className="h-5 w-5" />
              </div>
            ) : null}
            {item.value ? (
              <p className="font-display text-4xl text-ink-900">{item.value}</p>
            ) : null}
            <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-steel-500">
              {item.description ?? item.summary ?? item.label}
            </p>
            {item.tag || item.sector ? (
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-aqua-600">
                {item.tag ?? item.sector}
              </p>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function ProcessTimeline({ items }: { items: string[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="rounded-3xl border border-steel-300/60 bg-white p-6 shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aqua-600">
            Step {index + 1}
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-900">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}
