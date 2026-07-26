import { PageHero } from '@/components/sections/PageHero';
import { CardGrid } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { projects, stats } from '@/data/site';
import { usePageMeta } from '@/utils/meta';
import ProjectScreenBackgroundImage from '@/assets/ProjectScreenBackgroundImage.png'

export default function Projects() {
  usePageMeta({
    title: 'Infrastructure Projects',
    description:
      'Review selected GSB Infrastructure projects across water treatment, desalination, pipeline, and industrial utility execution environments.',
    path: '/projects',
    image: ProjectScreenBackgroundImage,
    breadcrumb: [{ name: 'Projects', path: '/projects' }],
  });

  return (
    <>
      <PageHero
        description="From water treatment facilities to industrial utilities and large-scale pipeline networks, our projects reflect our commitment to quality, safety, and disciplined execution."
        eyebrow="Projects"
        title="Proven Construction. Trusted Delivery."
        backgroundImage={ProjectScreenBackgroundImage}
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Featured Work"
            title="Proven Construction. Trusted Delivery."
          />
          <CardGrid items={projects} variant="media" />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Our Experience"
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
