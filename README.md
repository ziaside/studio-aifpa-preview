# STUDIO AIFPA website preview

An independent, responsive preview for STUDIO AIFPA. This repository is separate from the owner's personal GitHub homepage and SnapLog repositories. It does not configure `aifpa.kr`.

## Preview

Once GitHub Pages is enabled for `main` at the repository root, the public URL is <https://ziaside.github.io/studio-aifpa-preview/>.

The site is static HTML, CSS, and JavaScript. To preview locally, serve this directory with any static file server.

## Design reference and measured values

The design was researched through the hosted [Inspo MCP](https://github.com/Nutlope/inspo) endpoint using both `get_screen("linear-app")` and `get_design_system("linear-app", live: true)` on 2026-10-08. The source record was captured by Inspo on 2026-05-04. The site adapts the measured system; it does not reuse Linear artwork or source code.

| Property | Inspo / Linear reference | STUDIO AIFPA implementation |
| --- | --- | --- |
| Typeface | Inter Variable | Inter for Latin, Noto Sans KR for Korean |
| Display | 64px, weight 510, line-height 1, tracking −1.408px | fluid 43–74px desktop headline, 39–62px mobile, weight 600, tight tracking |
| Section title | 48px, weight 510, line-height 1, tracking −1.056px | fluid 39–58px, weight 600 |
| Body | 16px, weight 400, line-height 1.5 | 15–16px, line-height 1.6–1.95 |
| Button | 13px, weight 400 | 13–15px |
| Content width | 1440px maximum | 1440px maximum |
| Spacing | 8, 14, 17, 20, 24, 32, 40, 72, 80, 128, 224px | 8–32px component rhythm; about 110–184px between sections |
| Radius | 0, 2, 4, 6, 50px | 3–8px panels and 50px pills |
| Background / text | source tokens `#191a1b`, `#f7f8f8`, `#8a8f98`; captured hero near `#0a0a0a` | `#0b0c0e`, `#f7f8f8`, `#8a8f98` |
| Accent | source CSS `#7170ff`; screenshot has minor pale-gold details | adapted `#8c9aff` for the studio |

The reference's essential composition is a restrained header, large left-aligned headline, generous dark space, and real product UI dominating the lower hero. The site's hero uses only STUDIO AIFPA's original work images. Inter and Noto Sans KR are served through Google Fonts under the [SIL Open Font License 1.1](https://openfontlicense.org/).

## Verified studio material

Source: [STUDIO AIFPA's Figma original](https://www.figma.com/design/BJvpami8SqVUf7FN2drHpf/200-Pages?node-id=4001-5502), frame `4001:5502`, and the [public Loud listing](https://www.loud.kr/gelato/market/3615).

- The eight project names are transcribed from text node `4003:8126` in the Figma original.
- The 2024 LOUD AWARDS image is exported from Figma node `4001:6899`; the original also states the 2024 outstanding designer and rising star distinctions.
- Site portfolio imagery is exported from Figma frames `4001:5725`, `4001:5831`, `4001:5672`, `4001:5778`, `4001:5871`, and `4001:5916`. Images are presented as examples of the actual design work, without assigning an unverified client or project name to an individual image.
- The contact email `info@aifpa.kr` was provided by the site owner.

The studio's original work images remain the studio's copyrighted material. No license is granted for their reuse by this repository.

## Site behavior

- Mobile navigation opens and closes with a button, Escape, or a destination link.
- Work gallery supports touch/trackpad scrolling and previous/next buttons.
- Section links work as on-page navigation; contact links open an email draft.
- Motion respects `prefers-reduced-motion`.
- Includes page title, description, Open Graph metadata, canonical URL, favicon, alt text, and Organization structured data.
