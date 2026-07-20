# Upstream update notes

This repository is based on [al-folio](https://github.com/alshedivat/al-folio), but it is a personal site rather than a clean template checkout. When updating al-folio, use this file as the preservation checklist.

## Current upstream baseline

- Upstream repository: `alshedivat/al-folio`
- Last reviewed release: `v0.16.3`
- Upstream default branch: `main`
- Update method: compare against the release first, then merge upstream changes selectively. Do not replace the repository with a fresh template checkout.

## Custom behavior to preserve

### Site identity, theme, and navigation

- Personal identity, URLs, contact details, social links, and page ordering in `_config.yml`.
- Custom font and typography in `_sass/_base.scss`, `_sass/_variables.scss`, and the font assets/imports.
- Custom light/dark theme colors in `_sass/_themes.scss`.
- Custom layout and spacing rules in `_sass/_layout.scss` and `_sass/_base.scss`.
- Custom Duolingo entry in `_includes/social.liquid` and its matching `duolingo_id`/profile configuration.

### CV

- The JSON Resume source of truth in `assets/json/resume.json`, including the PhD data and Duolingo profile.
- The custom CV section structure in `_layouts/cv.liquid`.
- CV rendering partials in `_includes/resume/` and `_includes/cv/`.
- CV-specific styling in `_sass/_cv.scss`, including the timeline/list-group layout, date badges, typography, and Duolingo badge.
- The CV page settings and PDF link in `_pages/cv.md`.

### Blog posts and references

- The custom blog index in `_pages/blog.md`, including pagination, featured posts, tags/categories, thumbnails, and post cards.
- Blog post rendering in `_layouts/post.liquid`.
- The post table of contents behavior and the `toc` front-matter fields used by posts.
- The custom post-reference flow: `related_publications`, `citation`, `_layouts/bib_blog.liquid`, and the relevant bibliography styles/data.
- The personal posts in `_posts/`.

### Publications and bibliography

- Personal publication data in `_bibliography/papers.bib` and any supplementary bibliography files.
- Custom publication page/layout behavior in `_pages/publications.md`, `_layouts/bib.liquid`, and publication-related includes.
- Custom BibTeX fields and queries, including `phd=true` for the PhD project/publication filtering.

### Projects and other personal content

- Project metadata and pages in `_projects/`, especially `_projects/phd.md` and its `phd: true` field.
- Personal project rendering and card customizations in `_includes/projects.liquid`, `_includes/projects_horizontal.liquid`, and the project rules in `_sass/_base.scss`.
- Personal pages in `_pages/`, news, assets, PDFs, and app directories; upstream example content should not overwrite them.

### Local development

- `Dockerfile`, `docker-compose.yml`, and `Gemfile` must remain compatible with the local preview workflow.
- Keep the upstream-generated asset sources in `_scripts/`; they produce the runtime files under `assets/js/`.
- `bin/entry_point.sh` must keep the tracked `Gemfile.lock` instead of restoring or deleting it before starting Jekyll.
- Keep the Ruby version pinned rather than using `ruby:latest`; the site currently pins Ruby 3.3 because Ruby 4 breaks the Jekyll dependency set.
- Keep the explicit `logger` dependency required by the current Jekyll/Ruby combination.

## Update checklist

1. Read this file before starting an upstream update.
2. Record the target al-folio release and compare files against that release.
3. Preserve personal data and custom layouts before importing upstream files.
4. Merge upstream infrastructure, plugins, scripts, and security/build fixes where compatible.
5. Re-check CV, blog index, blog post, table of contents, references, publications, socials, and PhD project pages.
6. Run the Docker preview and a production build before committing.
7. Update the “Last reviewed release” above after the site has been verified.
