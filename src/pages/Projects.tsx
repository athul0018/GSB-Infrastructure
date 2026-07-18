import { PageHero } from '@/components/sections/PageHero';
import { CardGrid } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { projects, stats } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Projects() {
  usePageMeta('Projects', 'Selected project highlights and proof');

  return (
    <>
      <PageHero
        description="Projects are framed as proof of execution quality, sector familiarity, and delivery discipline."
        eyebrow="Projects"
        title="Case-study style project highlights that show how proof will be presented once verified details arrive."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Featured Work"
            title="A proof-led project grid positioned for future case study depth and image-rich storytelling."
          />
          <CardGrid items={projects} variant="media" />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Supporting Metrics"
            title="Project proof becomes stronger when paired with delivery, response, and process signals."
          />
          <CardGrid
            items={stats.map((item) => ({ title: item.label, value: item.value, icon: item.icon }))}
            variant="stat"
          />
          <ButtonLink href="/contact" label="Ask About Similar Projects" />
        </div>
      </section>
    </>
  );
}
