# DesignBridge

This is a demo project for DesignBridge.

## Mindful Haven — wellbeing UI mockup

`index.html` is a self-contained, front-end UI mockup for **Mindful Haven**, a
lightweight app for everyday wellbeing (everyday stress, low moods, overwhelm).
It implements the Mindful Haven product spec with a soothing, dashboard-first design.

### How to open

It's a single static HTML file — no build step or server required:

- Open `index.html` directly in any modern browser, **or**
- Serve the folder locally, e.g. `python3 -m http.server` and visit the printed URL.

All CSS and JavaScript are inline; the page makes **no external network requests**.

### What's inside

- **Home / hero** — calming intro with an animated breathing orb.
- **Daily Mood Check-in** (dashboard-first) — mood + energy + optional note, with saved-state feedback.
- **Recommended exercise** — a suggested calming activity surfaced right after the check-in.
- **My Journey** — recent mood history (7-day trend) and simple stats.
- **Calming Exercises** — four types: breathing, grounding, mindfulness, and a quick reset.
- **Support Space** — community notes, resources, and gentle crisis support (988).
- **Navigation** — Home · Check-in · Exercises · My Journey.

### Accessibility & design notes

- Mood/energy selectors are ARIA **radiogroups** with arrow-key / Home / End navigation and roving tabindex.
- Skip link, `<main>` landmark, `aria-live` status regions, and visible focus styles.
- Honors `prefers-reduced-motion`.
- Soft pastel palette with a single reserved primary color (`--sage-deep`) for key actions and selected states.

> Note: This is a UI mockup. Interactions (save, toast, "leave a note") are front-end only;
> there is no backend, persistence, or real crisis-flow wiring yet.
