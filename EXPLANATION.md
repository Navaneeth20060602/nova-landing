# Short Explanation

## Design decisions

NOVA is positioned as a practical productivity tool, not a flashy AI demo, so
the design leans calm and editorial rather than loud: a warm off-white
background, a near-black ink color for text, and a single amber accent used
sparingly (risk flags, the AI summary panel, stat highlights) so it carries
meaning instead of being decoration. Dark sections (stats, final CTA, footer)
break up the page rhythm instead of using cards/shadows for separation.
Type pairs a geometric display face (Space Grotesk) for headings against a
neutral body face (Inter), so headings read as designed rather than as the
default browser font stack.

## Technology choices

React + Vite was chosen because the brief marks React as preferred, and Vite
gives a fast dev loop with zero config. Plain CSS (one stylesheet per
component, co-located with its `.jsx` file) was used instead of a utility
framework like Tailwind so that class names describe what they style
(`.hero-card`, `.pricing-toggle`) rather than a wall of utility classes —
this made it easier to keep each section's styling isolated and easy to
reason about.

## Component structure

Each of the 13 required sections is its own component under `src/components`,
each with its own CSS file. `App.jsx` only orders and renders them — it
holds no section-specific logic except the shared dark/light theme state,
which is lifted up because both the navbar toggle and the `<html>` attribute
it sets need access to it. State that's local to one section (which FAQ item
is open, which testimonial is showing, the pricing toggle) lives inside that
section's own component rather than in `App.jsx`, since nothing else needs it.

## Challenges faced

- Getting the count-up stats to only animate once, on first scroll into
  view, needed an `IntersectionObserver` that disconnects itself after
  firing — otherwise it would restart every time the section entered and
  left the viewport.
- Keeping the mobile nav's max-height transition smooth without a fixed
  pixel value required animating `max-height` to a generous fixed number
  rather than `auto`, since CSS can't transition to/from `auto`.
- Balancing the numbered "How it works" steps against the brief's warning
  not to overuse numbered markers — that section is a genuine sequence
  (connect tools → add a brief → approve → NOVA runs the week), so numbering
  it is earned; the Features grid intentionally has no numbering since those
  six items aren't ordered.

## How AI tools were used

Codex was used to scaffold the component and CSS files from an explicit
design plan (colors, type, layout decided first, then built to that plan)
and to check the result against the assignment's required sections and
interactions checklist. Content, copy, and structural choices were directed
and reviewed rather than accepted as-is — see the design notes above for the
reasoning behind specific choices, which I can walk through and modify live.

## How I'd improve accessibility further

The testimonial carousel already uses a polite `aria-live` region so a
screen reader announces a selected testimonial without interrupting the
visitor. A next pass would audit every color pair with a contrast tool and
run an automated landmark/heading-level check with axe.

## How I'd optimize performance

Self-host the two Google Fonts instead of loading them from Google's CDN
(removes a render-blocking third-party request), lazy-load the hero mockup
graphics if they were real images instead of CSS/markup, and code-split
anything below the fold if the page grew larger — at its current size
(~215KB JS, ~66KB gzipped) it isn't necessary yet.

## How I'd turn this into a production application

Move the static copy into a CMS (or at minimum a `content.js`/JSON file) so
non-engineers can update pricing and testimonials without a deploy, wire the
newsletter form to a real endpoint (e.g. a serverless function calling an
email provider's API) instead of just client-side validation, add analytics
and a cookie-consent banner, and set up CI to run lint/build on every PR
before deploying via Vercel/Netlify's git integration.
