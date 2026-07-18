# DECISIONS

## D-001: Start with documentation before implementation
- Why: The project is a greenfield website build and the active workflow requires PRD and technical documentation before development.
- Alternatives considered: Start scaffolding immediately from the user prompt.
- Trade-offs: Slightly slower start, but clearer scope and fewer architectural reversals.
- Final choice: Complete PRD, technical architecture, and design strategy first.

## D-002: Treat the project as static-first
- Why: The current requirements are content-led and do not yet require backend functionality.
- Alternatives considered: Add a backend from the start for contact form handling.
- Trade-offs: Static-first improves speed and simplicity, but contact processing may need later integration.
- Final choice: Build a static React frontend first and add backend integration only if needed.

## D-003: Confirm company identity before implementation
- Why: The brief described a water treatment company, but the PDF cover page identified `GSB INFRASTRUCTURE`.
- Alternatives considered: Assume water treatment positioning and continue.
- Trade-offs: Clarifying first prevents incorrect messaging and avoids a misleading site structure.
- Final choice: Confirm the intended company, then proceed with `GSB INFRASTRUCTURE` as the approved project subject.

## D-004: Use explicit dummy data to unblock IA work
- Why: Real services, products, certifications, and project content are still missing, but planning can continue safely if placeholders are clearly labeled.
- Alternatives considered: Pause until all final content is received.
- Trade-offs: Faster progress now, but placeholder assumptions must be audited before implementation is finalized.
- Final choice: Proceed through Phase 2 with dummy content documented in the IA file and replace it later with approved business content.

## D-005: Complete planning phases before environment setup
- Why: The environment currently lacks the Node.js toolchain required for Vite scaffolding, but planning work can still meaningfully progress.
- Alternatives considered: Stop after Phase 2 and wait for the toolchain.
- Trade-offs: More complete preparation now, while actual coding remains blocked until the environment is ready.
- Final choice: Complete design-system, wireframe, component, and setup-readiness documentation before attempting implementation.
