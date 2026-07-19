import { PageHero } from '@/components/sections/PageHero';
import { CardGrid, ProcessTimeline } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { processSteps, services } from '@/data/site';
import { usePageMeta } from '@/utils/meta';
import serviceScreenBackgroundImage from '@/assets/serviceScreenBackgroundImage.jpeg';

export default function Services() {
  usePageMeta('Services', 'Infrastructure and utility service overview');

  return (
    <>
      <PageHero
        description="GSB Infrastructure specializes in the construction and execution of water treatment plants, industrial utilities, pipelines, and civil infrastructure. Our experienced teams deliver projects safely, efficiently, and to the highest quality standards."
        eyebrow="Services"
        title="Solutions for Water & Industrial Infrastructure"
        backgroundImage={serviceScreenBackgroundImage}
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Our Capabilities"
            title="Comprehensive construction expertise delivering reliable water, utility, and industrial infrastructure through disciplined project execution."
          />
          <CardGrid items={services} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Why GSB Infrastructure"
            title="Our experience, technical expertise, and disciplined execution enable us to deliver reliable infrastructure solutions with quality, safety, and lasting value."
          />
          <ProcessTimeline items={processSteps} />
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ButtonLink href="/contact" label="Discuss Your Project" />
        </div>
      </section>
    </>
  );
}
