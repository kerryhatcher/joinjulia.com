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

Deploy the contents of `dist/` to any static host, including S3, Cloudflare Pages, or GitHub Pages. Use `npm ci && npm run build` as the build command and `dist` as the output directory. Local builds default to `https://joinjulia.com/`; `SITE_URL` and `BASE_PATH` can override the origin and deployment path.

## GitHub Pages

`.github/workflows/deploy.yml` deploys on pushes to `main` and can also be run manually from the Actions tab. It uses Node.js 24, installs the committed lockfile with `npm ci`, builds Astro, uploads only `dist/`, and deploys to the `github-pages` environment. Authentication uses the built-in GitHub token; no deployment secret is needed.

In the repository's **Settings → Pages**, select **GitHub Actions** as the build source. The workflow reads the Pages URL and base path, so the default `https://kerryhatcher.github.io/joinjulia.com/` address and a configured custom domain both work, including fonts, images, home links, and canonical metadata.

To use `joinjulia.com`, configure it under **Settings → Pages → Custom domain**, point its DNS at GitHub Pages, and enable HTTPS when available. Rerun the deployment after changing the domain so the build picks up the updated origin and path. GitHub Actions deployments use the repository's custom-domain setting; they do not require a `CNAME` file. See [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Content

Edit `src/pages/index.astro` for homepage copy, priority subjects, story sections, press links, and social links. Edit `src/styles/global.css` for the visual system.

Both personal stories intentionally contain lorem ipsum. Detailed priority statements are explicitly marked as coming soon. Replace these with Julia's approved copy before publishing. The four priority subjects come from the saved Playbook design choice in `.impeccable/questions/62329d60.answer.json` and its selected concept; no policy details, election dates, endorsements, or donation links were invented.

Source links come from the supplied campaign brief. The homepage includes Julia's author pages at [Ms. Magazine](https://msmagazine.com/author/jcallahan/) and [Georgia Recorder](https://georgiarecorder.com/author/juliacallhan/), plus the supplied [CAP Action story](https://www.americanprogressaction.org/article/without-child-tax-credit-some-georgia-parents-must-leave-workforce-to-care-for-their-children/). These are reading links, not endorsements.

Julia Playbook is a renamed, sharp-corner derivative of Jamie Wilson's Norwester; it and Barlow are served locally under the SIL Open Font License. Original font, reproducible modification script, and license are in `assets/fonts/` and `public/fonts/`. The football illustration is AI-generated from the selected concept; its exact generation prompt is embedded in `assets/plates/routes.png` and saved alongside the optimized WebP. No generated likeness of Julia is used.

Impeccable design context and review evidence live in `.impeccable/`; the enduring visual system is in `DESIGN.md`.
