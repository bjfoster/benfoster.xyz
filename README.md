# benfoster.xyz

Personal site. [Astro](https://astro.build), static output, no client-side JS.

## Develop

```sh
pnpm install
pnpm hooks    # once per machine: enables .githooks/pre-commit
pnpm dev      # http://localhost:4321
```

## Content

Posts and projects are markdown files with typed frontmatter; the schemas live
in `src/content.config.ts` and bad frontmatter fails the build.

```
src/content/posts/*.md       title, description?, date, draft
src/content/projects/*.md    title, summary, url?, order
```

A new post shows up on `/blog`, in the three most recent on the homepage, and in
`/rss.xml`. Set `draft: true` to keep it out of the build.

## Checks

`pnpm verify` runs the lot — formatting, types, build. The pre-commit hook runs
the same three, and so does CI before deploying.

TypeScript is pinned to 6.x because `astro check` can't use the 7.x native
compiler yet.

## Deploy

Push to `main`. GitHub Actions builds and publishes to GitHub Pages
(Settings → Pages → Source must be **GitHub Actions**). The custom domain lives
in `public/CNAME`.
