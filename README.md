# joinjulia.com

Julia Adele Callahan's campaign homepage: **Democrats on offense**.

Static Astro, self-hosted fonts, and an original football playbook graphic. The page has no client-side application framework, tracking, signup service, or server requirement. Native expandable priority rows work with JavaScript disabled.

## Development

Use Bun 1.3.14 and Node.js 22.12 or newer (Astro and Wrangler run on Node.js).

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:4321. To build and inspect the production site:

```sh
bun run build
bun run preview
```

Deploy the contents of `dist/` to any static host, including S3, Cloudflare Pages, or GitHub Pages. Use `bun install --frozen-lockfile && bun run build` as the build command and `dist` as the output directory. Local builds default to `https://joinjulia.com/`; `SITE_URL` and `BASE_PATH` can override the origin and deployment path.

## Cloudflare Pages

The `joinjulia` Direct Upload project lives in the **Julia Callahan** Cloudflare account (`e33f99b627bf3afdbc0311ed464a1e42`). Its production branch is `main`, output directory is `dist/`, and production domain is **https://joinjulia.com**. `wrangler.jsonc` records the local deployment configuration. No Astro server adapter or Pages Functions are needed.

`.github/workflows/deploy.yml` installs dependencies with Bun's frozen lockfile, builds the static site, and uploads `dist/` to Cloudflare using `cloudflare/wrangler-action`. Pushes to `main` deploy production. Manual runs deploy only when run against `main`. Builds use `/` as the base path and `https://joinjulia.com` as the production origin.

### Repository credentials

In [GitHub Actions settings](https://github.com/kerryhatcher/joinjulia.com/settings/secrets/actions), configure:

| Type | Name | Value |
| --- | --- | --- |
| Actions variable | `CLOUDFLARE_ACCOUNT_ID` | `e33f99b627bf3afdbc0311ed464a1e42` |
| Actions secret | `CLOUDFLARE_API_TOKEN` | A Cloudflare token with **Account → Cloudflare Pages → Edit**, scoped to the **Julia Callahan** account |

The account variable and deployment secret are configured. For credential rotation, create a replacement Pages token and update the Actions secret. Keep the token out of source control. The token needs no DNS permissions for routine deployments.

### Pull-request previews

Opening, reopening, or updating a pull request from this repository builds and deploys a preview using the Pages branch `pr-<number>`. Its stable address is `https://pr-<number>.joinjulia.pages.dev`; later commits update that address without changing production. Each deployment also has an immutable URL, available in the Actions job summary and its GitHub environment (`preview-pr-<number>`).

Preview builds use their preview origin for canonical metadata, disallow crawlers in `robots.txt`, and return `X-Robots-Tag: noindex, nofollow`. Previews are public. Fork pull requests run the build but skip deployment because they cannot access the Cloudflare secret. Preview deployments remain available after a pull request closes; remove old deployments through Cloudflare Pages when no longer needed.

### Domain and deployment

`joinjulia.com` is attached to the Pages project, with a proxied apex CNAME pointing at `joinjulia.pages.dev`. Cloudflare handles HTTPS and apex CNAME flattening. The first successful production deployment is required before the site is served, and certificate/domain activation can take time. GitHub Pages settings are no longer used by this workflow.

For an authenticated local production deployment:

```sh
bun run deploy
```

Use `bunx wrangler login` first, or provide `CLOUDFLARE_API_TOKEN` through your shell's secure credential mechanism. See [Cloudflare's Direct Upload CI guide](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) and [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Content

Edit `src/pages/index.astro` for homepage copy, priority subjects, story sections, press links, and social links. Edit `src/styles/global.css` for the visual system.

Both personal stories intentionally contain lorem ipsum. Detailed priority statements are explicitly marked as coming soon. Replace these with Julia's approved copy before publishing. The four priority subjects come from the saved Playbook design choice in `.impeccable/questions/62329d60.answer.json` and its selected concept; no policy details, election dates, endorsements, or donation links were invented.

Source links come from the supplied campaign brief. The homepage includes Julia's author pages at [Ms. Magazine](https://msmagazine.com/author/jcallahan/) and [Georgia Recorder](https://georgiarecorder.com/author/juliacallhan/), plus the supplied [CAP Action story](https://www.americanprogressaction.org/article/without-child-tax-credit-some-georgia-parents-must-leave-workforce-to-care-for-their-children/). These are reading links, not endorsements.

Julia Playbook is a renamed, sharp-corner derivative of Jamie Wilson's Norwester; it and Barlow are served locally under the SIL Open Font License. Original font, reproducible modification script, and license are in `assets/fonts/` and `public/fonts/`. The football illustration is AI-generated from the selected concept; its exact generation prompt is embedded in `assets/plates/routes.png` and saved alongside the optimized WebP. No generated likeness of Julia is used.

Impeccable design context and review evidence live in `.impeccable/`; the enduring visual system is in `DESIGN.md`.
