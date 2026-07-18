## 1. Purpose
This document defines Phase 5 component planning for the `GSB INFRASTRUCTURE` website.

- Focus: reusable React component architecture
- Goal: reduce duplication and keep page composition clean
- Constraint: all content-facing components must work with replaceable dummy data

## 2. Component Strategy
- Build pages by composition, not large monolithic files
- Keep shared UI in `src/components`
- Keep route-specific composition in `src/features/*`
- Keep content in structured data modules under `src/data`

## 3. Global Component Inventory
### 3.1 Layout Components
- `AppShell`
- `PageContainer`
- `Section`
- `SectionGrid`
- `Stack`

### 3.2 Navigation Components
- `Navbar`
- `MobileMenu`
- `NavLinkGroup`
- `Footer`

### 3.3 Typography and UI Primitives
- `SectionTitle`
- `Eyebrow`
- `Button`
- `Badge`
- `Divider`
- `IconWrapper`

### 3.4 Card Components
- `InfoCard`
- `ServiceCard`
- `ProductCard`
- `IndustryCard`
- `ProjectCard`
- `CertificationCard`
- `StatCard`

### 3.5 Content and Proof Components
- `Hero`
- `TrustStrip`
- `MetricGroup`
- `WhyChooseUs`
- `ProcessSteps`
- `Timeline`
- `CaseStudyHighlight`
- `CtaBanner`

### 3.6 Form Components
- `ContactForm`
- `FormField`
- `TextareaField`
- `ContactDetailList`

## 4. Feature-Level Composition
### 4.1 Home Feature
- `HomeHeroSection`
- `HomeTrustSection`
- `HomeIntroSection`
- `HomeServicesSection`
- `HomeIndustriesSection`
- `HomeWhyChooseUsSection`
- `HomeProcessSection`
- `HomeProductsSection`
- `HomeProjectsSection`
- `HomeCertificationsSection`
- `HomeContactSection`

### 4.2 About Feature
- `AboutHeroSection`
- `AboutOverviewSection`
- `MissionVisionSection`
- `ValuesSection`
- `AboutProcessSection`
- `AboutCtaSection`

### 4.3 Services Feature
- `ServicesHeroSection`
- `ServiceCategoryGrid`
- `ServiceDetailSection`
- `ServicesCtaSection`

### 4.4 Products Feature
- `ProductsHeroSection`
- `ProductCategoryGrid`
- `FeaturedProductSection`
- `ProductApplicationMatrix`
- `ProductsCtaSection`

### 4.5 Industries Feature
- `IndustriesHeroSection`
- `IndustryGrid`
- `ChallengeSolutionSection`
- `RelatedSolutionsSection`

### 4.6 Projects Feature
- `ProjectsHeroSection`
- `FeaturedProjectSection`
- `ProjectsGrid`
- `ProjectOutcomeStrip`

### 4.7 Certifications Feature
- `CertificationsHeroSection`
- `CertificationGrid`
- `ComplianceNoteSection`

### 4.8 Contact Feature
- `ContactHeroSection`
- `InquiryOptionsSection`
- `ContactFormSection`
- `ContactInfoSection`

## 5. Component Props Planning
### 5.1 Shared Card Pattern
Most content cards should support:
- `title`
- `description`
- `icon`
- `tag`
- `href`
- `image`

### 5.2 Hero Pattern
Hero sections should support:
- `eyebrow`
- `title`
- `description`
- `primaryCta`
- `secondaryCta`
- `stats`
- `media`

### 5.3 CTA Pattern
CTA banners should support:
- `title`
- `description`
- `primaryAction`
- `secondaryAction`
- `tone`

## 6. Data Architecture
### 6.1 Suggested Data Files
- `src/data/site.ts`
- `src/data/navigation.ts`
- `src/data/company.ts`
- `src/data/services.ts`
- `src/data/products.ts`
- `src/data/industries.ts`
- `src/data/projects.ts`
- `src/data/certifications.ts`
- `src/data/contact.ts`

### 6.2 Type Files
- `src/types/common.ts`
- `src/types/navigation.ts`
- `src/types/content.ts`

## 7. Route-to-Component Mapping
| Route | Feature Composition |
|-------|---------------------|
| `/` | Home feature sections |
| `/about` | About feature sections |
| `/services` | Services feature sections |
| `/products` | Products feature sections |
| `/industries` | Industries feature sections |
| `/projects` | Projects feature sections |
| `/certifications` | Certifications feature sections |
| `/contact` | Contact feature sections |

## 8. Reuse Rules
- `Hero`, `SectionTitle`, `Button`, `Badge`, `Section`, and `CtaBanner` must be globally reusable
- Card components should share a common styling contract
- Contact details should be data-driven, not duplicated across pages
- Section spacing must be handled by layout wrappers, not repeated utility classes everywhere

## 9. File Size and Maintainability Rules
- Keep component files under `300` lines where possible
- Split section logic from UI primitives
- Use hooks only when behavior is reusable or stateful
- Avoid dynamic imports for route components

## 10. Testing Targets
- Render tests for shared components
- Basic route render coverage
- Contact form validation checks
- Data mapping checks for card grids and timelines

## 11. Phase 5 Output
- Shared component inventory is defined
- Feature composition is mapped
- Data structure direction is defined
- Implementation can begin once the toolchain is available
