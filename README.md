# Ella Amitay Sadovsky — Portfolio (Astro)

Static portfolio site, built with [Astro](https://astro.build/), deployed via GitHub Pages to `amitaysadovsky.com`.

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Project structure

```
public/        Static assets served as-is (css, images, pdfs, CNAME, .htaccess)
src/
  layouts/
    BaseLayout.astro       Header, footer, lightbox markup + JS
  components/
    Slideshow.astro        Home-page slideshow
  data/
    works.ts               Single source of truth: nav menu + per-work image arrays
  pages/
    index.astro            Home
    about.astro
    contact.astro
    news.astro
    articles.astro
    publications.astro
    404.astro
    [slug].astro           Dynamic exhibition page (one per entry in works.ts)
```

URLs are determined by file paths — `src/pages/foo.astro` → `/foo`. Exhibition pages are generated from `works.ts` via the dynamic `[slug].astro` route.

## Adding a new exhibition

1. Drop the images in `public/images/`.
2. Add a new entry to `works` in `src/data/works.ts`:
   ```ts
   {
     slug: 'my-show',
     title: 'My Show 2026',
     images: [
       { src: '/images/my-show-01.jpg', caption: 'Oil on canvas, 2026' },
       // ...
     ],
   }
   ```
3. The page (`/my-show`) and the menu entry under "Works" appear automatically.

## Deployment

Push to `main`. GitHub Pages serves from the built `dist/` (configure via Pages → Build and deployment, or use a workflow). The `CNAME` in `public/` is shipped to `dist/` on build, keeping `amitaysadovsky.com` pointed correctly.
