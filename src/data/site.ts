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

import homeScreenBackgroundImage from '@/assets/homeScreenBackgroundImage.jpeg';
import Delhi from '@/assets/Delhi.jpg';
import Kanpur from '@/assets/Kanpur.jpg';
import { createImageUrl } from '@/utils/media';
import { T } from 'vitest/dist/chunks/reporters.d.BuRON0I0.js';

export const siteNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  // { label: 'Products', href: '/products' },
  // { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  // { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export const companyInfo = {
  name: 'GSB Infrastructure',
  tagline: 'Reliable infrastructure systems for industrial, commercial, and institutional projects.',
  description:
    'GSB Infrastructure specializes in the construction of water treatment plants, pipeline systems, industrial utilities, and civil-mechanical infrastructure. We deliver projects with precision, quality workmanship, and a strong commitment to safety, reliability, and timely execution.',
  address: '6/212A,Near CSI Church, Mannur PO, Kozhikode, Kerala - 673328',
  email: 'gsbinfra9@gmail.com',
  phone: '9656536188',
  landline: '9847345633',
};

export const heroContent = {
  eyebrow: 'Regional Infrastructure Partner',
  title: 'Industrial utility and infrastructure execution with calm, dependable precision.',
  description:
    'From water distribution infrastructure to civil support works and utility retrofits, GSB Infrastructure helps facilities move from planning to delivery with clarity and confidence.',
  primaryCta: { label: 'Request a Quote', href: '/contact' },
  secondaryCta: { label: 'View Services', href: '/services' },
  image: homeScreenBackgroundImage,
};

export const stats = [
  { value: '14+ years', label: 'Delivering construction excellence since 2011.', icon: HardHat },
  { value: '50+', label: 'Successfully executed across water and industrial infrastructure.', icon: Building2 },
  { value: 'Pan-India Execution', label: 'Supporting major EPC contractors and public utility projects.', icon: Phone },
  { value: '100%', label: 'Quality & Safety', icon: ClipboardCheck },
];

export const services = [
  {
    title: 'Water Treatment Infrastructure',
    description: 'Construction and execution of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Common Effluent Treatment Plants (CETP), and industrial water systems.',
    icon: Waves,
  },
  {
    title: 'Pipeline & Utility Networks',
    description: 'Installation of MS, DI, SS, CS, and UPVC pipelines, pumping systems, transmission mains, and utility networks.',
    icon: Droplets,
  },
  {
    title: 'Mechanical & Process Systems',
    description: 'Structural fabrication, equipment erection, process piping, storage tanks, clarifiers, digesters, pumps, and associated mechanical works.',
    icon: Building2,
  },
  {
    title: 'Operation & Maintenance',
    description: 'Inspection, maintenance, troubleshooting, retrofit works and shutdown support.',
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
  {
    title: 'Ganesan P \n (Managing Partner)',
    description: 'With over 30 years of experience in industrial and infrastructure construction, Ganesan P. leads GSB Infrastructure with a strong focus on quality, execution, and client satisfaction. His leadership has been instrumental in delivering complex projects across India and overseas.',
  },
  {
    title: 'Balarajan P \n (Partner)',
    description:
      'Balarajan P. brings over 20 years of experience in infrastructure project execution. He oversees project delivery with a commitment to operational excellence, timely completion, and quality workmanship.',
  },
 
];

export const projects = [
  {
    title: 'DM plant - Reliance Nagathane plant  ',
    summary: 'Mechanical works including equipment erection,SS,UPVC piping, along with the installation of pumps,filters and tanks.',
    sector: 'On going Project',
    image: createImageUrl(
    'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
    'landscape_16_9',
    )
  },
  {
    title: '400 MLD desalination plant-Chennai',
    summary: 'Mechanical works including equipment erection.',
    sector: 'On going Project',
    image: createImageUrl(
    'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
    'landscape_16_9',
    ),
  },
  {
    title: 'RO-ZLD Plant- JSW vijayanagar',
    summary: 'Executed end-to-end uPVC piping projects, including support fabrication, testing, and commissioning.',
    sector: 'JSW',
    image: createImageUrl(
    'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
    'landscape_16_9',
    ),
  },
   {
    title: '4 MLD foxconn Elephant Project- Bengaluru',
    summary: 'Mechanical works including equipment erection,SS,UPVC piping, along with the installation of pumps, tanks, and MBBR,MBR,oil skimmer etc.',
    sector: 'Gradiant (Foxconn)',
    image: createImageUrl(
      'institutional facility civil works and drainage system, professional construction photography, clean composition, realistic',
      'landscape_16_9',
    ),
  },
  {
    title: '40 MLD TTP- Gazhiabad',
    summary: 'laying, alignment, and jointing of a high-capacity 900 mm diameter DI transmission mainline.Handled all civil and mechanical works, completed hydro pressure testing',
    sector: 'VA Tech WABAG',
    image: Delhi,
  },
  {
 
  title: '150 MLD Desalination Plant-Chennai (O&M)',
  summary: 'Mechanical screen removal and installation of a new screening system, including equipment alignment.fabrication and erection of a dome roof for the UF permeate tank, installation of an access stair with supporting structural steel', 
  sector: 'VA Tech WABAG',
  image: createImageUrl(
    'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
    'landscape_16_9',
  ),

  },
  {
    title: '20 MLD CETP- Kanpur',
    summary: 'Mechanical works including equipment erection, boiler works, MS, SS, CS, and UPVC piping, along with the installation of pumps, tanks, and filter press systems.',
    sector: 'VA Tech WABAG (Namami Ganga)',
    image: Kanpur,
  },
 
  {
 
  title: '90 MLD STP-Bengaluru, Karnataka',
  summary: '• Mechanical Erection \n• Clarifier Installation \n• Thickener Installation \n• Pipeline Works', // <-- Added comma
  sector: 'VA Tech WABAG (BWSSB)',
  image: createImageUrl(
    'industrial campus utility upgrade, pipelines and mechanical systems, premium corporate case study photo, realistic daylight',
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
    description: 'Careful planning and coordinated execution ensure safe, efficient, and timely project delivery.',
    icon: ClipboardCheck,
  },
  {
    title: 'Engineering Excellence',
    description: 'We apply technical expertise and industry best practices to deliver reliable infrastructure solutions.',
    icon: Droplets,
  },
  {
    title: 'Quality & Safety',
    description: 'Quality workmanship and safe execution are fundamental to every project we undertake.',
    icon: Wrench,
  },
  {
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships through dependable service, transparency, and continued support.',
    icon: Wrench,
  },
];

export const whyChooseUs = [
  'Execution Discipline',
  'Engineering Excellence',
  'Quality & Safety',
  'Long-Term Partnership',
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
