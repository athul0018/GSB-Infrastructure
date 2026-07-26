import { ContactBlock } from '@/components/sections/ContactBlock';
import { PageHero } from '@/components/sections/PageHero';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { companyInfo } from '@/data/site';
import { usePageMeta } from '@/utils/meta';
import ContactScreenBackgroundImage from '@/assets/ContactScreenBackgroundImage.png';

export default function Contact() {
  usePageMeta({
    title: 'Contact GSB Infrastructure',
    description:
      'Contact GSB Infrastructure for water treatment, pipeline, utility, and industrial infrastructure project discussions, enquiries, and execution support.',
    path: '/contact',
    image: ContactScreenBackgroundImage,
    breadcrumb: [{ name: 'Contact', path: '/contact' }],
  });

  return (
    <>
      <PageHero
        description="Whether you're planning a new water treatment facility, upgrading existing infrastructure, or seeking reliable execution support, our team is ready to help."
        eyebrow="Contact"
        title="Let's Build Your Next Project Together"
        backgroundImage={ContactScreenBackgroundImage}
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Enquiry"
            title="Let's Discuss Your Requirements"
            description="Tell us about your project, and our team will get back to you promptly."
          />
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
