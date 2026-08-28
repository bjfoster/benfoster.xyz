---
title: Hello world
description: A first post, mostly to prove the plumbing works.
date: 2026-08-28
draft: false
---

This is a markdown post. Drop a new `.md` file in `src/content/posts/` and it
shows up on the blog index, on the homepage, and in the RSS feed.

The frontmatter is checked at build time — a missing `title` or a malformed
`date` fails the build rather than silently producing a broken page.

## Formatting

Normal markdown works: **bold**, _italic_, [links](https://example.com), lists,
and code.

```js
const greeting = "hello";
console.log(greeting);
```

> Blockquotes look like this.

Set `draft: true` in the frontmatter to keep a post out of the build.
