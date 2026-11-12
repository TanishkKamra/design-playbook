# Ship-readiness: performance, privacy, fonts

Check this for anything real users will load. The privacy points apply to GDPR and similar data-protection laws. This is not legal advice; check the law of the market you ship to. Some laws fine per complaint, so one careless tracker can repeat the cost.

## Under load
- [ ] **Indexes:** every database column used to filter, join, sort or search is indexed. Check slow queries with EXPLAIN.
- [ ] **Caching:** data that rarely changes is cached (Redis or a hosted equivalent, or HTTP cache headers and a CDN), with an explicit TTL and invalidation.
- [ ] **Images:**
  - Responsive sizes (`srcset`, `sizes`).
  - AVIF or WebP.
  - Explicit width and height, so nothing shifts.
  - Lazy loading below the fold, eager loading for the hero image.
- [ ] **Load test** before launch (k6 or Artillery) at twice the expected peak, watching p95 latency and the error rate.
- [ ] **Rate limits:** public endpoints are rate-limited per IP per minute, stricter on auth, signup and AI calls, and return 429 with `Retry-After`.
- [ ] **Front-end budgets:**
  - LCP under 2.5 s (1.5 s for marketing pages).
  - CLS under 0.1 (0.05 is the award-level target).
  - INP under 200 ms (100 ms is the target).

## Fonts
- [ ] **Self-host web fonts:** woff2, `font-display: swap`, and preload the one display face.
  - Loading from a third-party font CDN sends every visitor's IP to that provider, which a German court ruled a GDPR breach in 2022.
  - Self-hosting is also faster.
- [ ] **Licences:** check every font's licence before shipping.
  - Free foundry fonts are often free for commercial use but not open source: modifying or redistributing the files may be restricted, and web self-hosting terms vary.
  - Read the licence page for the specific font.
  - A paid font's cost is named to the client, with a free fallback.
- [ ] **Subsetting:** fonts are subset to the scripts the site uses, and no unused weights load.

## Logo and brand marks
- [ ] **The mark survives four tests:** at 16 px (favicon size) it can still be named, in one colour no shapes merge, blurred its silhouette still reads, and reversed (white on dark) nothing disappears. Judge the 16 px test with someone who has not seen the mark before.

## Privacy by default
- [ ] **Third-party assets:** self-host fonts, scripts and anything else that would leak visitor IPs to a third party.
- [ ] **Analytics and session replay** load only after consent, with inputs masked. Replay never records passwords or payment fields.
- [ ] **Consent banner:** shown whenever non-essential cookies or trackers run, and declining is as easy as accepting.
- [ ] **Marketing and waitlist email** carries an unsubscribe link and a sender postal address (the US CAN-SPAM Act requires both).
- [ ] **Subscriptions** state the price, the renewal period and how to cancel, before the pay button.
- [ ] **Children:** an age check, or a stated minimum age, wherever children could sign up.
- [ ] **Privacy policy:** covers every type of personal data collected.
  - Profile photos are personal data, and count as biometric data when processed to identify someone.
- [ ] **No secrets in client code:** API keys stay server-side, and environment files are never committed.
