import { PageHero } from '@/components/sections/PageHero';
import { CardGrid } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { industries, services } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Industries() {
  usePageMeta({
    title: 'Industries We Serve',
    description:
      'See how GSB Infrastructure supports manufacturing, institutions, commercial facilities, and large developments with reliable utility and infrastructure solutions.',
    path: '/industries',
    breadcrumb: [{ name: 'Industries', path: '/industries' }],
  });

  return (
    <>
      <PageHero
        description="Industry pages help visitors validate relevance quickly by mapping common operating needs to infrastructure solutions."
        eyebrow="Industries"
        title="Sector-focused positioning for manufacturing, institutions, commercial assets, and large developments."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Industry Coverage"
            title="Each industry block is designed to absorb challenges, solutions, and proof points later."
          />
          <CardGrid items={industries} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Related Solutions"
            title="The same service architecture can be reused to show which capabilities match each sector."
          />
          <CardGrid items={services} />
          <ButtonLink href="/contact" label="Discuss Sector Requirements" />
        </div>
      </section>
    </>
  );
}
