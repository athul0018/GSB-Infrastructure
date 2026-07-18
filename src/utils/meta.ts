import { useEffect } from 'react';

const defaultTitle = 'GSB Infrastructure';
const defaultDescription =
  'GSB Infrastructure is a corporate website showcasing infrastructure services, products, projects, and certifications.';

export function usePageMeta(title: string, description = defaultDescription) {
  useEffect(() => {
    document.title = `${title} | ${defaultTitle}`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', description);
  }, [description, title]);
}
