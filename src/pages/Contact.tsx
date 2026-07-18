import { ContactBlock } from '@/components/sections/ContactBlock';
import { PageHero } from '@/components/sections/PageHero';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { companyInfo } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Contact() {
  usePageMeta('Contact', `Contact ${companyInfo.name}`);

  return (
    <>
      <PageHero
        description="The contact page keeps the conversion flow simple: direct contact options first, then a clear form."
        eyebrow="Contact"
        title="Get in touch for project planning, utility upgrades, retrofits, or support requirements."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Inquiry"
            title="Use the form for planning conversations or contact GSB Infrastructure directly."
            description="This inquiry flow is frontend-ready and can be wired into email or CRM tools later."
          />
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
