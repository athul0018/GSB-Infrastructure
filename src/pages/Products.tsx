import { PageHero } from '@/components/sections/PageHero';
import { CardGrid } from '@/components/sections/SharedSections';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { products } from '@/data/site';
import { usePageMeta } from '@/utils/meta';

export default function Products() {
  usePageMeta({
    title: 'Infrastructure Products',
    description:
      'View GSB Infrastructure product capabilities including booster skids, storage tanks, filtration modules, and pump or control assemblies for industrial applications.',
    path: '/products',
    breadcrumb: [{ name: 'Products', path: '/products' }],
  });

  return (
    <>
      <PageHero
        description="The product architecture supports image-led cards, application summaries, and later technical detail expansion."
        eyebrow="Products"
        title="A product catalog built to grow into a richer engineering product showcase."
      />

      <section className="py-24">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Featured Products"
            title="Product cards are intentionally modular so they can serve homepage highlights and catalog layouts."
          />
          <CardGrid items={products} variant="media" />
        </div>
      </section>

      <section className="bg-mist-100 py-24">
        <div className="container rounded-[28px] border border-steel-300/60 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-aqua-600">
            Application Mapping
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel-500">
            This section is reserved for use-case mapping, sector fit, and specification-led product
            summaries once final business content is available.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" label="Ask About Products" />
          </div>
        </div>
      </section>
    </>
  );
}
