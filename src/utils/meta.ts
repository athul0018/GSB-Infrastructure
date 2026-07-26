import { useEffect } from 'react';

const siteName = 'GSB Infrastructure';
const siteUrl = 'https://www.gsbinfra.co.in';
const defaultDescription =
  'GSB Infrastructure delivers water treatment plants, utility systems, pipelines, and industrial infrastructure with disciplined execution and dependable project delivery.';
const defaultImage = `${siteUrl}/company-logo.png`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageMetaOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  breadcrumb?: BreadcrumbItem[];
};

function ensureMeta(
  selector: string,
  attribute: 'name' | 'property',
  value: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function ensureLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

function ensureJsonLd(id: string, payload: Record<string, unknown>) {
  let script = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-id', id);
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
}

function removeJsonLd(id: string) {
  const script = document.head.querySelector(`script[data-seo-id="${id}"]`);
  script?.remove();
}

function toAbsoluteUrl(value?: string) {
  if (!value) {
    return defaultImage;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return new URL(value, siteUrl).toString();
}

export function usePageMeta({
  title,
  description = defaultDescription,
  path = '/',
  image,
  type = 'website',
  breadcrumb = [],
}: PageMetaOptions) {
  useEffect(() => {
    const canonicalUrl = new URL(path, siteUrl).toString();
    const imageUrl = toAbsoluteUrl(image);
    const fullTitle = `${title} | ${siteName}`;

    document.title = fullTitle;

    ensureMeta('meta[name="description"]', 'name', 'description', description);
    ensureMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');

    ensureMeta('meta[property="og:type"]', 'property', 'og:type', type);
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', description);
    ensureMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    ensureMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);
    ensureMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    ensureMeta(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      `${siteName} page preview`,
    );

    ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    ensureLink('canonical', canonicalUrl);

    ensureJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: defaultImage,
      email: 'mailto:gsbinfra9@gmail.com',
      telephone: '+91-9656536188',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6/212A, Mannur PO',
        addressLocality: 'Kozhikode',
        addressRegion: 'Kerala',
        postalCode: '673301',
        addressCountry: 'IN',
      },
    });

    ensureJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      inLanguage: 'en-IN',
    });

    ensureJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    });

    if (breadcrumb.length > 0) {
      ensureJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          ...breadcrumb.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.name,
            item: new URL(item.path, siteUrl).toString(),
          })),
        ],
      });
    } else {
      removeJsonLd('breadcrumb');
    }
  }, [breadcrumb, description, image, path, title, type]);
}
