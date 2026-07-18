import { PageHero } from '@/components/sections/PageHero';
import { CardGrid, ProcessTimeline } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { processSteps, services } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Services() {
  usePageMeta('Services', 'Infrastructure and utility service overview');

  return (
    <>
      <PageHero
        description="Service modules are designed to scale from concise homepage cards into richer supporting page content."
        eyebrow="Services"
        title="Infrastructure, utility, civil, and support services structured for clear decision-making."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Capability Overview"
            title="Each service block can later absorb real deliverables, specifications, and sector examples."
          />
          <CardGrid items={services} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Execution"
            title="A process section helps service detail feel operational instead of purely promotional."
          />
          <ProcessTimeline items={processSteps} />
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ButtonLink href="/contact" label="Request Service Consultation" />
        </div>
      </section>
    </>
  );
}
