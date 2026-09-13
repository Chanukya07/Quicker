## 2024-05-18 - Added skip-to-content link
**Learning:** Found that Tailwind was not fully configured for styles to be applied in app/globals.css in this specific Next.js 16 app version setup, requiring an @import "tailwindcss" statement for utility classes like `focus:translate-y-0` to work for visually hidden a11y links.
**Action:** Next time ensuring any Tailwind classes used for a11y actually map to styles by verifying the `globals.css` configuration early on.
