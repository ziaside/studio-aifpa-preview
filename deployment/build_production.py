"""Prepare the approved aifpa.kr static site without changing the live preview."""

from argparse import ArgumentParser
from pathlib import Path
from shutil import copy2, copytree


SOURCE = Path(__file__).resolve().parents[1]
PREVIEW = "https://ziaside.github.io/studio-aifpa-preview/"
PRODUCTION = "https://aifpa.kr/"


def replace_once(text: str, old: str, new: str) -> str:
    if text.count(old) != 1:
        raise ValueError(f"Expected exactly one occurrence: {old}")
    return text.replace(old, new)


def main() -> None:
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    output = parser.parse_args().output.resolve()
    if output == SOURCE or SOURCE in output.parents:
        parser.error("Output must be outside the preview repository")
    if output.exists():
        parser.error("Output directory already exists")

    output.mkdir(parents=True)
    for name in ("index.html", "styles.css", "script.js", "favicon.svg", "og-image.png"):
        copy2(SOURCE / name, output / name)
    copytree(SOURCE / "assets", output / "assets")

    html = (output / "index.html").read_text()
    html = replace_once(
        html,
        '<meta name="robots" content="noindex,nofollow,noarchive" />',
        '<meta name="robots" content="index,follow" />\n    <link rel="canonical" href="https://aifpa.kr/" />',
    )
    html = html.replace(PREVIEW, PRODUCTION)
    if PREVIEW in html:
        raise ValueError("Preview URL remained in production HTML")
    (output / "index.html").write_text(html)
    (output / "robots.txt").write_text("User-agent: *\nAllow: /\nSitemap: https://aifpa.kr/sitemap.xml\n")
    (output / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        '  <url><loc>https://aifpa.kr/</loc></url>\n'
        '</urlset>\n'
    )
    (output / "CNAME").write_text("aifpa.kr\n")
    print(output)


if __name__ == "__main__":
    main()
