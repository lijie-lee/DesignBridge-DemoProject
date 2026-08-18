# Chatter — Welcome Page Web App

A small, dependency-free web app implementing the **Chatter** comment-website welcome page design.

## Features

- Responsive marketing hero with gradient headline, CTAs, and social-proof stats
- Live comment-feed card with:
  - Seeded conversation
  - **Post a comment** — type in the composer and it appears at the top of the feed
  - **Like** toggle with live count
  - Auto-generated gradient avatars with initials
  - Simulated "online" counter
- Pure HTML/CSS/JS — no build step, no dependencies

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/app/
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup |
| `styles.css` | Styling, layout, animations |
| `app.js` | Interactive comment feed logic |
