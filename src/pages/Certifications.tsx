import { PageHero } from '@/components/sections/PageHero';
import { CardGrid } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { certifications } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Certifications() {
  usePageMeta({
    title: 'Quality and Certifications',
    description:
      'Explore the quality, compliance, and certification presentation structure used by GSB Infrastructure to communicate trust and execution standards.',
    path: '/certifications',
    breadcrumb: [{ name: 'Certifications', path: '/certifications' }],
  });

  return (
    <>
      <PageHero
        description="This page is structured to present verified certifications, safety standards, and quality commitments in a low-noise format."
        eyebrow="Certifications"
        title="Quality and compliance signals arranged for trust, not clutter."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Quality Framework"
            title="Certification cards show the intended structure for verified trust assets."
          />
          <CardGrid items={certifications} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container rounded-[28px] border border-steel-300/60 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aqua-600">
            Compliance Note
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel-500">
            Replace all provisional certification content with verified approvals, audit language,
            document dates, and downloadable evidence before production launch.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" label="Request Qualification Details" />
          </div>
        </div>
      </section>
    </>
  );
}
