import {
  Award,
  Building2,
  Cable,
  ClipboardCheck,
  Droplets,
  Factory,
  HardHat,
  Phone,
  ShieldCheck,
  Waves,
  Wrench,
} from 'lucide-react';

import { createImageUrl } from '@/utils/media';

export const siteNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export const companyInfo = {
  name: 'GSB Infrastructure',
  tagline: 'Reliable infrastructure systems for industrial, commercial, and institutional projects.',
  description:
    'GSB Infrastructure is presented as a regional engineering and infrastructure partner delivering utility systems, civil execution, and long-term support for facilities that need dependable project outcomes.',
  address: '6/212A Pachat Veedu, Mannur PO, Kozhikode, Kerala - 673301',
  email: 'gsbinfra9@gmail.com',
  phone: '9656536188',
  landline: '0495 2470058',
};

export const heroContent = {
  eyebrow: 'Regional Infrastructure Partner',
  title: 'Industrial utility and infrastructure execution with calm, dependable precision.',
  description:
    'From water distribution infrastructure to civil support works and utility retrofits, GSB Infrastructure helps facilities move from planning to delivery with clarity and confidence.',
  primaryCta: { label: 'Request a Quote', href: '/contact' },
  secondaryCta: { label: 'View Services', href: '/services' },
  image: createImageUrl(
    'premium industrial infrastructure facility exterior, clean utility piping, engineered water systems, civil works context, professional corporate photography, Kerala India, warm daylight, minimalist composition, realistic',
    'landscape_16_9',
  ),
};

export const stats = [
  { value: '12+', label: 'Years of execution-led project support', icon: HardHat },
  { value: '40+', label: 'Projects across mixed-use sectors', icon: Building2 },
  { value: '24/7', label: 'Response support for urgent system issues', icon: Phone },
  { value: '100%', label: 'Commitment to delivery discipline', icon: ClipboardCheck },
];

export const services = [
  {
    title: 'Water Distribution Infrastructure',
    description: 'Pipeline installation, pumping support, and network upgrades for dependable utility delivery.',
    icon: Waves,
  },
  {
    title: 'Industrial Utility Systems',
    description: 'Process piping, tank installation, and facility utility integration for operational resilience.',
    icon: Droplets,
  },
  {
    title: 'Civil and Structural Works',
    description: 'Equipment foundations, support platforms, and site-ready civil works for plant and facility contexts.',
    icon: Building2,
  },
  {
    title: 'Operation and Maintenance Support',
    description: 'Inspection, troubleshooting, retrofit, and repair support to extend system performance.',
    icon: Wrench,
  },
];

export const products = [
  {
    title: 'Pressure Booster Skids',
    summary: 'Compact utility boosting assemblies for building and facility pressure requirements.',
    tag: 'Utility Systems',
    image: createImageUrl(
      'pressure booster skid in a clean industrial environment, stainless steel pumps, control panel, premium product photography, neutral background, realistic',
      'landscape_4_3',
    ),
  },
  {
    title: 'Storage and Process Tanks',
    summary: 'Engineered tanks for operational storage, transfer, and process support needs.',
    tag: 'Storage',
    image: createImageUrl(
      'large industrial storage tanks, clean engineered facility, premium corporate product photography, realistic, industrial steel finish',
      'landscape_4_3',
    ),
  },
  {
    title: 'Filtration and Utility Modules',
    summary: 'Pre-assembled modules that simplify deployment for site-based utility applications.',
    tag: 'Modular Systems',
    image: createImageUrl(
      'industrial filtration module with pipes and gauges, modern engineering photography, clean background, realistic',
      'landscape_4_3',
    ),
  },
  {
    title: 'Control Panels and Pump Assemblies',
    summary: 'Integrated electrical and pumping packages designed for consistent field performance.',
    tag: 'Controls',
    image: createImageUrl(
      'industrial pump assembly with control panel, technical equipment photography, premium lighting, realistic',
      'landscape_4_3',
    ),
  },
];

export const industries = [
  {
    title: 'Manufacturing',
    description: 'Production environments that need robust utility systems and dependable execution windows.',
    icon: Factory,
  },
  {
    title: 'Commercial Facilities',
    description: 'Buildings and campuses that require pressure stability, distribution upgrades, and service continuity.',
    icon: Building2,
  },
  {
    title: 'Institutions',
    description: 'Hospitals, schools, and institutional assets with compliance-sensitive infrastructure needs.',
    icon: ShieldCheck,
  },
  {
    title: 'Residential Developments',
    description: 'Large-scale residential projects that need reliable water and utility support systems.',
    icon: Cable,
  },
];

export const processSteps = [
  'Initial consultation and site understanding',
  'Technical assessment and scope definition',
  'Proposal, scheduling, and procurement alignment',
  'Execution with coordination and quality checks',
  'Testing, handover, and ongoing support',
];

export const projects = [
  {
    title: 'Manufacturing Campus Utility Upgrade',
    summary: 'A utility upgrade involving pumping, piping, and service continuity improvements for a Kozhikode industrial campus.',
    sector: 'Manufacturing',
    image: createImageUrl(
      'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
      'landscape_16_9',
    ),
  },
  {
    title: 'Commercial Building Pumping Retrofit',
    summary: 'Retrofit work for upgraded tank support and pressure management in a multi-story commercial site.',
    sector: 'Commercial',
    image: createImageUrl(
      'commercial building utility retrofit, mechanical room with pumps and tanks, realistic engineering photography',
      'landscape_16_9',
    ),
  },
  {
    title: 'Institutional Drainage and Civil Support',
    summary: 'Example civil and drainage support work designed around safety, timelines, and operational continuity.',
    sector: 'Institutional',
    image: createImageUrl(
      'institutional facility civil works and drainage system, professional construction photography, clean composition, realistic',
      'landscape_16_9',
    ),
  },
];

export const certifications = [
  {
    title: 'Quality Management System',
    summary: 'A quality-led presentation block designed for verified certifications and standards documentation.',
    icon: Award,
  },
  {
    title: 'Site Safety Compliance',
    summary: 'A compliance-focused card intended to represent construction and industrial site-safety credibility.',
    icon: ShieldCheck,
  },
  {
    title: 'Delivery Discipline',
    summary: 'A trust signal representing schedule clarity, reporting, and handover readiness.',
    icon: ClipboardCheck,
  },
];

export const values = [
  {
    title: 'Execution Discipline',
    description: 'We structure work carefully so site delivery stays practical, coordinated, and measurable.',
    icon: ClipboardCheck,
  },
  {
    title: 'Technical Clarity',
    description: 'We simplify complex utility and civil requirements into decisions that teams can act on quickly.',
    icon: Droplets,
  },
  {
    title: 'Long-Term Support',
    description: 'We stay involved beyond handover with maintenance-minded thinking and responsive follow-up.',
    icon: Wrench,
  },
];

export const whyChooseUs = [
  'Structured planning and site coordination',
  'Utility, civil, and support capability under one roof',
  'Clear communication for procurement and facility teams',
  'Compliance and quality-proof framework presented in a clear, replaceable structure',
];

export const contactOptions = [
  { label: 'Email Us', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
  { label: 'Call Mobile', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
  { label: 'Call Landline', value: companyInfo.landline, href: `tel:${companyInfo.landline}` },
];

export const footerGroups = [
  {
    title: 'Company',
    links: siteNav.slice(0, 4),
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Industries', href: '/industries' },
      { label: 'Projects', href: '/projects' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
