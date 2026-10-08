# STUDIO AIFPA website preview

The existing STUDIO AIFPA preview project. It is separate from the owner's personal homepage and SnapLog repositories; `aifpa.kr` is not configured here.

## Preview

- Public GitHub Pages preview: <https://ziaside.github.io/studio-aifpa-preview/>
- Local preview: serve this directory at <http://127.0.0.1:4173/>

The site is static HTML, CSS, and JavaScript. It uses responsive layouts, working section navigation, a mobile menu, a browsable work gallery, motion reduction support, and basic SEO metadata.

## Review and launch metadata

- SnapLog's App Store and Google Play buttons lead to the actual released apps in new tabs. Both store listings show the individual developer's name. The site describes SnapLog as a product made by the studio founder, without claiming a separate company is the store publisher.
- The footer's `Established 2025` follows the studio's business registration certificate (opening date: 2025-04-01). The 2024 LOUD awards describe earlier creative activity; they are not represented as the registered business opening date.
- This GitHub Pages preview has `noindex,nofollow,noarchive`, no canonical URL, a disallowing `robots.txt`, and an empty `sitemap.xml`. Its Open Graph image is a browser capture of the existing hero and real SnapLog screen.
- `deployment/build_production.py --output <new-directory-outside-this-repository>` prepares a separate static production package with `https://aifpa.kr/` canonical, public indexing, production Open Graph URLs, `robots.txt`, `sitemap.xml`, and `CNAME`. It does not publish or alter the preview.

Before connecting the domain, obtain the owner's approval. The existing GitHub Pages site can be connected to the apex domain using GitHub's repository Pages setting and the required web `A` records at Gabia. Preserve all Zoho Mail `MX`, SPF, DKIM, and domain-verification TXT records. Do not point `www` or change other repositories without a separate decision. Recheck mail, HTTPS, redirects, and production metadata after DNS propagates.

## Design reference

The Tracebit system was inspected through [Inspo](https://github.com/Nutlope/inspo) using `get_screen("tracebit-com")` and `get_design_system("tracebit-com", live: true)` on 2026-10-08. The extracted source and STUDIO AIFPA implementation tokens are recorded in [DESIGN.md](DESIGN.md). This site adapts its measured type scale, spacing, colors, and editorial layout to the studio's own content and imagery; it does not use Tracebit artwork or code.

Inter Tight and Noto Sans KR are loaded from Google Fonts under the SIL Open Font License 1.1. TWK Lausanne Pan is a reference only and is not bundled because a license has not been provided.

## Original studio assets

- The [STUDIO AIFPA Figma original](https://www.figma.com/design/BJvpami8SqVUf7FN2drHpf/200-Pages?node-id=4001-5502) and [LOUD studio listing](https://www.loud.kr/gelato/market/3615) support the project record, portfolio images, and 2024 awards.
- Portfolio excerpts are exported from the original Figma work. They are not assigned to specific clients where that mapping could not be verified.
- SnapLog in-app screens and the app icon come from the owner's existing SnapLog website's Figma exports. The iOS and Android store preview images come from the owner's Dropbox product materials. These show real SnapLog screens; no app mockups were invented.
- Contact email: `info@aifpa.kr`, supplied by the owner.

All original studio and product imagery remains the owner's material.
