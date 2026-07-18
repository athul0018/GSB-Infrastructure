# Corporate Website Project

## Project Overview
This repository will contain a production-ready corporate website built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React.

The current discovery phase is based on:
- A project brief for a premium corporate website
- A company PDF whose extractable cover-page data identifies `GSB INFRASTRUCTURE`
- User confirmation that the website should represent `GSB INFRASTRUCTURE`
- One reference website used only for inspiration, not copying

## Current Status
- Phase 1 analysis completed
- PRD, technical architecture, and design strategy documents created in `.trae/documents`
- Phase 2 information architecture created in `.trae/documents/information-architecture.md`
- Phase 3 design system created in `.trae/documents/design-system-spec.md`
- Phase 4 wireframe blueprint created in `.trae/documents/wireframes.md`
- Phase 5 component plan created in `.trae/documents/component-plan.md`
- Company identity confirmed as `GSB INFRASTRUCTURE`
- Project is temporarily using explicit dummy content to unblock planning
- Phase 6 setup readiness documented in `.trae/documents/setup-readiness.md`
- Awaiting services, products, certifications, projects, brand assets, and plain text profile content before final implementation
- Local scaffolding is currently blocked because the environment does not expose `node` or `npm`

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Planned Folder Structure
```text
src/
  app/
  components/
  data/
  features/
  pages/
  types/
  utils/
```

## Development
Project planning is complete through Phase 6. Actual project scaffolding can begin once `node` and `npm` are available in the environment.

## Build
Planned build command:

```bash
npm run build
```

## Deployment
Static frontend deployment target to be confirmed later.

## Environment Variables
No environment variables are currently required for the static-first scope.

## Coding Standards
- Functional components only
- Typed props and data models
- Reusable feature-based architecture
- Semantic HTML and accessibility-first implementation
- Minimal, performance-conscious animation

## Component Structure
Planned reusable components include:
- Navbar
- Footer
- Hero
- SectionTitle
- Button
- Card
- Badge
- ServiceCard
- ProductCard
- IndustryCard
- ProcessSteps
- Timeline
- Statistics
- CTA banner
- ContactForm

## Performance Goals
- Lighthouse above `95`
- Optimized images
- Minimal bundle size
- Semantic markup and strong Core Web Vitals

## Accessibility Notes
- WCAG AA contrast
- Keyboard-accessible navigation
- Proper form labels and landmarks
- Reduced-motion support

## Future Improvements
- CMS integration if content needs frequent updates
- CRM or email integration for contact form
- Search or filter experiences for products and projects
