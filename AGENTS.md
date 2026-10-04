Help me craft a personal website for Julia Adele Callahan. She is running for the Bibb County Democratic Party Chair in Macon, GA.


Democrats on offense (football themed)

General idea is that its time for a change, time to make things happen.

Info she wants to include (stubbed out with lorem ipsum for now):
How her biz started.

Journey into politics.


Source Material:

https://www.facebook.com/JuliaAdeleCallahan/
https://www.instagram.com/jaythaqueen/
https://georgiarecorder.com/author/juliacallhan/
https://www.macon.com/news/state/georgia/article290807424.html
https://msmagazine.com/author/jcallahan/
https://www.13wmaz.com/article/news/national/hackers-accessed-records-of-att-customers-macon/93-ad4872a9-5de0-41d2-b3e9-c0b16fd8979a
https://www.youtube.com/watch?v=uNYl3-OjoU8
https://www.cnn.com/2022/06/16/opinions/infant-formula-biden-shortage-mothers-callahan
https://wgxa.tv/news/state-news/georgia-lawmakers-unite-to-tackle-unregulated-anti-abortion-clinics-across-the-state-crisis-pregnancy-center-maternal-health
https://www.gainformer.com/the-macon-bibb-county-democratic-committee-elects-new-officers/
https://www.facebook.com/p/Dream-Clean-Housekeeping-Company-LLC-61550656630177
https://www.instagram.com/p/Dak5xq-ETPY/
https://www.freeandjust.us/press/080224-ride-to-decide-macon-ga
https://www.wpganews.com/2026/01/24/anti-abortion-march-draws-large-crowds-downtown-macon/
https://www.americanprogressaction.org/article/without-child-tax-credit-some-georgia-parents-must-leave-workforce-to-care-for-their-children/
https://wgxa.tv/news/local/we-cant-just-sit-here-and-wait-bibb-dems-push-for-jail-transparency-after-deaths
https://www.threads.com/@jaythaqueen
https://www.13wmaz.com/article/news/local/trust-your-gut-central-georgia-mom-warns-parents-to-pay-attention-to-infants-as-rsv-cases-peak-2/93-9fe2f643-9267-4479-b3df-7a81f8dc2c5b
https://maconmelody.com/macon-bibb-mayorkeeps-public-comments-offline/
https://www.facebook.com/JuliaAdeleCallahan/posts/im-sincerely-grateful-to-have-won-reelection-to-my-post-seat-in-district-5-on-th/10225866530608729/
https://macon-newsroom.com/14378/food/georgia-is-the-last-state-to-take-the-hassle-out-of-food-benefits-for-millions-of-women-and-children/
https://georgiarecorder.com/author/juliacallhan/


Tech Notes:

This should be a static astro site to be hosted on something like s3/cloudflare/github pages. https://astro.build/

Implementation and verification:

- Use Bun 1.3.14 and Node.js 24 in CI. Install with `bun install --frozen-lockfile`; build with `bun run build`.
- The canonical production origin is `https://www.joinjulia.com`. Pull-request builds use `SITE_URL` for their own origin; derive metadata and discovery URLs from `Astro.site`.
- Hosting is Cloudflare Pages Direct Upload, driven by `.github/workflows/deploy.yml`. Keep the generated top-level `dist/404.html` so missing routes return HTTP 404 rather than the homepage.
- Keep production crawlable. Public previews use `X-Robots-Tag: noindex, nofollow` and allow crawling so crawlers can read the header. Never include 404 pages in the sitemap.
- Use only approved, verified campaign facts in visible copy, JSON-LD, and social metadata. Do not invent policies, election dates, endorsements, credentials, or a likeness of Julia. The story placeholders require approved replacement copy.
- Keep this file in the repository; do not publish it as a website discovery file. An optional future `llms.txt` must mirror approved public content and must not promise ranking improvements.
- For discovery changes, run the Bun build, `git diff --check`, and `actionlint` when workflows change. Inspect the generated sitemap, robots.txt, canonical metadata, and JSON-LD, then verify the PR preview's HTTP responses and indexing headers.
- The sharing image is reproducible with `python3 scripts/render-social-card.py` (Pillow required). Keep its metadata dimensions and text consistent with the generated image.
