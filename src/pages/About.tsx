import aboutScreenBackgroundImage from '@/assets/aboutScreenBackgroundImage.jpeg';
import { PageHero } from '@/components/sections/PageHero';
import { CardGrid, ProcessTimeline } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { companyInfo, processSteps, values, whyChooseUs } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function About() {
  usePageMeta({
    title: 'About GSB Infrastructure',
    description:
      'Learn about GSB Infrastructure, our engineering expertise, execution approach, and commitment to quality, safety, and dependable infrastructure delivery.',
    path: '/about',
    image: aboutScreenBackgroundImage,
    breadcrumb: [{ name: 'About', path: '/about' }],
  });

  return (
    <>
      <PageHero
        description="Since 2011, GSB Infrastructure has been delivering civil, mechanical, and water infrastructure projects across India. With expertise in water treatment plants, industrial utilities, pipeline systems, structural fabrication, and equipment installation, we provide dependable execution backed by technical expertise and disciplined project management.

From planning and construction to commissioning support, our experienced teams work with leading EPC contractors, government agencies, and industrial clients to deliver safe, high-quality, and timely project outcomes."
        backgroundImage={aboutScreenBackgroundImage}
        eyebrow="About"
        title="Engineering Infrastructure.Built on Trust."
      />

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            eyebrow="Overview"
            title="We deliver infrastructure that communities and industries rely on every day."
            description={companyInfo.description}
          />
          <div className="rounded-[28px] border border-steel-300/60 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua-600">
              Mission & Vision
            </p>
            <p className="mt-5 text-base leading-8 text-steel-500">
              To be a trusted engineering partner delivering sustainable infrastructure that creates lasting value for industries, communities, and future generations.
              To deliver reliable infrastructure solutions through engineering excellence, disciplined execution, uncompromising safety, and a commitment to quality and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Core Values"
            title="Every project is planned and executed with precision to ensure safety, efficiency, and on-time delivery."
          />
          <CardGrid items={values} />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Meet Our Leadership"
            title="Experienced Leadership. Trusted Execution."
          />
          <ProcessTimeline items={processSteps} />
        </div>
      </section>

      {/* <section className="py-24">
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
      </section> */}
    </>
  );
}
