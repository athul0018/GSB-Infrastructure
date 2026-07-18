import { PageHero } from '@/components/sections/PageHero';
import { CardGrid, ProcessTimeline } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { companyInfo, processSteps, values, whyChooseUs } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function About() {
  usePageMeta('About', `About ${companyInfo.name}`);

  return (
    <>
      <PageHero
        description="This page positions GSB Infrastructure as a careful, execution-led partner with a calm and professional corporate voice."
        eyebrow="About"
        title="A regional infrastructure company shaped around disciplined delivery and long-term support."
      />

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            eyebrow="Overview"
            title="We present complex utility and civil scopes in a way stakeholders can trust quickly."
            description={companyInfo.description}
          />
          <div className="rounded-[28px] border border-steel-300/60 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua-600">
              Mission & Vision
            </p>
            <p className="mt-5 text-base leading-8 text-steel-500">
              The final profile can replace this block with verified origin story, mission, leadership,
              and strategic positioning content without changing the surrounding page architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Values"
            title="The design system uses compact value cards to keep the narrative confident and readable."
          />
          <CardGrid items={values} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="How We Work"
            title="Execution is presented as a staged process instead of an abstract promise."
          />
          <ProcessTimeline items={processSteps} />
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-4 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-steel-300/60 bg-white p-6 text-sm leading-7 text-ink-900 shadow-soft"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="container mt-10">
          <ButtonLink href="/contact" label="Discuss a Project" />
        </div>
      </section>
    </>
  );
}
