# joinjulia.com

Julia Adele Callahan's campaign homepage: **Democrats on offense**.

Static Astro, self-hosted fonts, and an original football playbook graphic. The page has no client-side application framework, tracking, or server requirement. Native expandable priority rows work with JavaScript disabled.

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

Deploy the contents of `dist/` to any static host, including S3, Cloudflare Pages, or GitHub Pages. Use `bun install --frozen-lockfile && bun run build` as the build command and `dist` as the output directory. Local builds default to `https://www.joinjulia.com/`; `SITE_URL` and `BASE_PATH` can override the origin and deployment path.

## Cloudflare Pages

The `joinjulia` Direct Upload project lives in the **Julia Callahan** Cloudflare account (`e33f99b627bf3afdbc0311ed464a1e42`). Its production branch is `main`, output directory is `dist/`, and production domain is **https://www.joinjulia.com**. `wrangler.jsonc` records the local deployment configuration. No Astro server adapter or Pages Functions are needed.

`.github/workflows/deploy.yml` installs dependencies with Bun's frozen lockfile, builds the static site, and uploads `dist/` to Cloudflare using `cloudflare/wrangler-action`. Pushes to `main` deploy production. Manual runs deploy only when run against `main`. Builds use `/` as the base path and `https://www.joinjulia.com` as the production origin.

### Repository credentials

In [GitHub Actions settings](https://github.com/kerryhatcher/joinjulia.com/settings/secrets/actions), configure:

| Type | Name | Value |
| --- | --- | --- |
| Actions variable | `CLOUDFLARE_ACCOUNT_ID` | `e33f99b627bf3afdbc0311ed464a1e42` |
| Actions secret | `CLOUDFLARE_API_TOKEN` | A Cloudflare token with **Account → Cloudflare Pages → Edit**, scoped to the **Julia Callahan** account |

The account variable and deployment secret are configured. For credential rotation, create a replacement Pages token and update the Actions secret. Keep the token out of source control. The token needs no DNS permissions for routine deployments.

### Pull-request previews

Opening, reopening, or updating a pull request from this repository builds and deploys a preview using the Pages branch `pr-<number>`. Its stable address is `https://pr-<number>.joinjulia.pages.dev`; later commits update that address without changing production. Each deployment also has an immutable URL, available in the Actions job summary and its GitHub environment (`preview-pr-<number>`).

Preview builds use their preview origin for canonical metadata, allow crawlers in `robots.txt` so they can read `X-Robots-Tag: noindex, nofollow`, and omit sitemap discovery from the preview robots file. Previews are public. Fork pull requests run the build but skip deployment because they cannot access the Cloudflare secret. Preview deployments remain available after a pull request closes; remove old deployments through Cloudflare Pages when no longer needed.

### Domain and deployment

`www.joinjulia.com` and `joinjulia.com` are attached to the Pages project, with proxied CNAME records pointing at `joinjulia.pages.dev`. A Cloudflare Single Redirect rule permanently redirects all requests for `joinjulia.com` to `https://www.joinjulia.com`, preserving the path and query string. Cloudflare handles HTTPS and apex CNAME flattening. The first successful production deployment is required before the site is served, and certificate/domain activation can take time. GitHub Pages settings are no longer used by this workflow.

For an authenticated local production deployment:

```sh
CLOUDFLARE_ACCOUNT_ID=e33f99b627bf3afdbc0311ed464a1e42 bun run deploy
```

Use `bunx wrangler login` first, or provide `CLOUDFLARE_API_TOKEN` through your shell's secure credential mechanism. See [Cloudflare's Direct Upload CI guide](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) and [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Search discovery and sharing

Astro's sitemap integration generates `sitemap-index.xml` and `sitemap-0.xml` using `Astro.site`; the 404 page is excluded. `src/pages/robots.txt.ts` generates a static, crawlable production robots file with the sitemap URL. The top-level `404.html` generated from `src/pages/404.astro` makes Cloudflare Pages return real 404 responses instead of its default homepage fallback.

The homepage includes descriptive title and sharing metadata, `WebSite` and `Person` JSON-LD using the existing verified profile links, and a 1200 × 630 PNG sharing card. Regenerate the card with `python3 scripts/render-social-card.py` (Pillow required); this is an optional asset-authoring step, not a build dependency. Its text uses the site's licensed Julia Playbook font.

After merging, submit `https://www.joinjulia.com/sitemap-index.xml` in Google Search Console and inspect the homepage's indexing and canonical URL. Approved biography and policy copy is still required. Repository `AGENTS.md` guides coding agents and is not published; `llms.txt` is deferred until substantive approved content is available. These files do not promise ranking improvements.

The production `joinjulia.pages.dev` hostname redirects to `https://www.joinjulia.com/` through the account-level Cloudflare Bulk Redirect list `joinjulia_production_redirect` and its enabled rule. The redirect uses HTTP 301, preserves query strings and path suffixes, and enables subpath matching. Include subdomains is disabled so PR preview subdomains remain available. This is live account configuration rather than a Pages `_redirects` rule; no site redeployment is required.

## Contact form

`src/components/ContactForm.astro` uses the Basic HTML Formspree integration: a native POST to `https://formspree.io/f/xnpnekbv`. Name, email, and message have visible labels and browser validation; the hidden `_gotcha` field provides Formspree's honeypot filtering. The form works with JavaScript disabled and needs no framework, server function, API key, or extra dependency.

The campaign closing link and footer link lead to `#contact`. Formspree handles delivery, spam checks, errors, and the confirmation page. Verify the form's recipient and notification settings in the Formspree dashboard. Changing the endpoint only requires editing the form's `action`.

## Content

Edit `src/pages/index.astro` for homepage copy, priority subjects, story sections, press links, and social links. Edit `src/styles/global.css` for the visual system.

The business story is drafted from Julia's background supplied by the site owner and her dated posts: her father's death in January 2023, caregiving responsibilities for her sibling and young children, and the June 2023 announcement of Dream Clean Housekeeping Company. The draft connects those experiences to her stated support for mothers, families, mental health, and small businesses. Julia should review the wording before publication. Detailed priority statements are explicitly marked as coming soon and still require approved copy. The four priority subjects come from the saved Playbook design choice in `.impeccable/questions/62329d60.answer.json` and its selected concept; no policy details, election dates, endorsements, or donation links were invented.

Source links come from the supplied campaign brief. The homepage includes Julia's author pages at [Ms. Magazine](https://msmagazine.com/author/jcallahan/) and [Georgia Recorder](https://georgiarecorder.com/author/juliacallhan/), plus the supplied [CAP Action story](https://www.americanprogressaction.org/article/without-child-tax-credit-some-georgia-parents-must-leave-workforce-to-care-for-their-children/). These are reading links, not endorsements.

Julia Playbook is a renamed, sharp-corner derivative of Jamie Wilson's Norwester; it and Barlow are served locally under the SIL Open Font License. Original font, reproducible modification script, and license are in `assets/fonts/` and `public/fonts/`. The football illustration is AI-generated from the selected concept; its exact generation prompt is embedded in `assets/plates/routes.png` and saved alongside the optimized WebP. No generated likeness of Julia is used.

Impeccable design context and review evidence live in `.impeccable/`; the enduring visual system is in `DESIGN.md`.
