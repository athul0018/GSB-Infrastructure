import { motion } from 'framer-motion';

import { ContactBlock } from '@/components/sections/ContactBlock';
import { CardGrid, ProcessTimeline } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import {
  certifications,
  companyInfo,
  heroContent,
  processSteps,
  projects,
  services,
  stats,
} from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Home() {
  usePageMeta('Home', companyInfo.tagline);

  return (
    <>
      <section
        className="overflow-hidden bg-ink-900 bg-cover bg-center bg-no-repeat py-20 text-white sm:py-28"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(14, 26, 36, 0.88), rgba(23, 108, 105, 0.68)), url(${heroContent.image})`,
        }}
      >
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-aqua-500">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={heroContent.primaryCta.href} label={heroContent.primaryCta.label} />
              <ButtonLink
                href={heroContent.secondaryCta.href}
                label={heroContent.secondaryCta.label}
                variant="secondary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-steel-300/60 bg-mist-100 py-8">
        <div className="container">
          <CardGrid
            items={stats.map((item) => ({
              title: item.label,
              value: item.value,
              icon: item.icon,
            }))}
            variant="stat"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Company Introduction"
            title="Built on trust, quality, and disciplined execution."
            description={companyInfo.description}
          />
          {/* <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-steel-300/60 bg-white p-6 text-sm leading-7 text-ink-900 shadow-soft"
              >
                {item}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Core Services"
            title="Comprehensive construction expertise delivering reliable water, utility, and industrial infrastructure through disciplined project execution."
            description="Experienced leadership and management ensure that each project is delivered on time."
          />
          <CardGrid items={services} />
        </div>
      </section>

      {/* <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Industries Served"
            title="Sector-focused support for facilities that depend on dependable systems."
            description="Each industry block can later expand with verified project examples, compliance detail, and application notes."
          />
          <CardGrid items={industries} />
        </div>
      </section> */}

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Meet Our Leadership"
            title="Experienced Leadership. Trusted Execution."        
          />
          <ProcessTimeline items={processSteps} />
        </div>
      </section>

      {/* <section className="bg-white py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Featured Products"
            title="Product-led capability blocks that can scale into a richer catalog later."
            description="These cards are intentionally reusable across the homepage and the dedicated products route."
          />
          <CardGrid items={products} variant="media" />
        </div>
      </section> */}

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Projects"
            title="Proven Construction. Trusted Delivery."
            description="From water treatment facilities to industrial utilities and large-scale pipeline networks, our projects reflect our commitment to quality, safety, and disciplined execution."
          />
          <CardGrid items={projects} variant="media" />
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Company Profile"
            title="Compliance and quality signals presented in a calm, credibility-led format."
            description="Certification badges are presented in a way that supports safe replacement with verified claims later."
          />
          <CardGrid items={certifications} />
        </div>
      </section>

      <section className="bg-ink-900 py-20 text-white">
        <div className="container rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aqua-500">
                Ready to Start
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Bring your next infrastructure scope into a clearer project conversation.
              </h2>
            </div>
            <ButtonLink href="/contact" label="Talk to GSB Infrastructure" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Inquary"
            title="Let's Discuss Your Requirements"
            description="Tell us about your project, and our team will get back to you promptly."
          />
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
