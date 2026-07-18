import { motion } from 'framer-motion';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-ink-900 py-20 text-white sm:py-24">
      <div className="container max-w-5xl">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-aqua-500"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
