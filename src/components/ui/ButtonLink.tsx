import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const styles = {
  primary:
    'bg-ink-900 text-white hover:bg-aqua-600 focus-visible:ring-aqua-500',
  secondary:
    'border border-steel-300 bg-white text-ink-900 hover:border-aqua-500 hover:text-aqua-600 focus-visible:ring-aqua-500',
  ghost:
    'bg-transparent text-ink-900 hover:text-aqua-600 focus-visible:ring-aqua-500',
};

export function ButtonLink({
  href,
  label,
  variant = 'primary',
  className,
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4',
        styles[variant],
        className,
      )}
      to={href}
    >
      <span>{label}</span>
      {variant !== 'secondary' ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
}
