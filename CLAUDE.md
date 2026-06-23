# AURA Ring 2 Repo Guide

## Architecture
- **Next.js 14 App Router**: Server and Client components.
- **Scroll Choreography**: GSAP 3 + ScrollTrigger callback-based (no scrub) to control a single pinned `<Canvas>` rendering the 3D ring.
- **3D**: `@react-three/fiber` and `@react-three/drei`.
- **Styling**: Tailwind v3 with custom tokens in `tailwind.config.ts`.
- **UI Primitives**: Radix UI wrapped in Shadcn-like components, but specifically tailored to the liquid glass aesthetic.

## Key Files
- `components/ScrollScene.tsx`: The choreographer that drives the ring across sections.
- `components/Ring3D.tsx`: The actual 3D model component.
- `components/ui/liquid-glass-card.tsx`: The core container primitive used across the site.
- `app/globals.css`: Holds specific CSS like custom scrollbars and the `--brand` color.

## Important Constraints
- **Do not use em dashes**.
- **GSAP Scrub is disabled**: Always use `onEnter` / `onLeaveBack` callbacks with `gsap.to` for transitions.
- **Ring model**: Ensure the `/models/aura-ring.glb` exists.
