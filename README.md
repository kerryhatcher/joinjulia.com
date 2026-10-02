# joinjulia.com

Julia Adele Callahan's campaign homepage: **Democrats on offense**.

Static Astro, self-hosted fonts, and an original football playbook graphic. The page has no client-side application framework, tracking, signup service, or server requirement. Native expandable priority rows work with JavaScript disabled.

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:4321. To build and inspect the production site:

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static host, including S3, Cloudflare Pages, or GitHub Pages with the `joinjulia.com` custom domain. Use `npm ci && npm run build` as the build command and `dist` as the output directory. The site currently assumes deployment at the domain root; a GitHub project subpath requires configuring Astro's `base` and adapting the root-relative public asset links.

## Content

Edit `src/pages/index.astro` for homepage copy, priority subjects, story sections, press links, and social links. Edit `src/styles/global.css` for the visual system.

Both personal stories intentionally contain lorem ipsum. Detailed priority statements are explicitly marked as coming soon. Replace these with Julia's approved copy before publishing. The four priority subjects come from the saved Playbook design choice in `.impeccable/questions/62329d60.answer.json` and its selected concept; no policy details, election dates, endorsements, or donation links were invented.

Source links come from the supplied campaign brief. The homepage includes Julia's author pages at [Ms. Magazine](https://msmagazine.com/author/jcallahan/) and [Georgia Recorder](https://georgiarecorder.com/author/juliacallhan/), plus the supplied [CAP Action story](https://www.americanprogressaction.org/article/without-child-tax-credit-some-georgia-parents-must-leave-workforce-to-care-for-their-children/). These are reading links, not endorsements.

Julia Playbook is a renamed, sharp-corner derivative of Jamie Wilson's Norwester; it and Barlow are served locally under the SIL Open Font License. Original font, reproducible modification script, and license are in `assets/fonts/` and `public/fonts/`. The football illustration is AI-generated from the selected concept; its exact generation prompt is embedded in `assets/plates/routes.png` and saved alongside the optimized WebP. No generated likeness of Julia is used.

Impeccable design context and review evidence live in `.impeccable/`; the enduring visual system is in `DESIGN.md`.
