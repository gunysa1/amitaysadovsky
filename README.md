# Ella Amitay Sadovsky — Archive & Portfolio

A clean, high-end static rebuild of the artist's portfolio, migrated from Weebly to a self-contained architecture hosted on GitHub Pages. This version removes third-party dependencies, optimizes image delivery, and features a custom-built lightbox gallery.

## Site Structure

### Core Pages
- `index.html` — Home (Featured work & Recent News)
- `about.html` — Biography, Education, and CV
- `contact.html` — Artist contact info
- `news.html` — Unified timeline of exhibitions, awards, and residencies
- `404.html` — Custom "Catch-all" error page for broken links

### Exhibition Archives (Works)
- `suddenly-gone-2025.html` — Petach Tikva Museum of Art (Multimedia/Stop-motion)
- `without-leaving-home-2024.html` — Gordon Gallery 2024
- `glasshouse-2019.html` — Gordon Gallery 2019
- `seven-2016.html` — Rosenblatt Prize Exhibition (Includes local PDF catalog)
- `spare-parts-2014-2015` — The Open Museum, Tefen
- `short-escape-2011-2013` — Gordon Gallery 
- `dreams-decipherer-2009-2011` — Gordon Gallery
- `wall-installation-2009` — Museum project
- `shield-of-the-mighty-2011` — Mixed media series
- `quiet-island` — Video installation, Musrara neighborhood
- `in-between-2006-2008` — Oil on canvas series

## Technical Details

- **No Frameworks:** Pure HTML5 and CSS3. 
- **Surgical CSS:** All styles are housed in `css/style.css` for easy site-wide updates.
- **Custom Lightbox:** A lightweight JavaScript gallery handles full-screen image views, captions, and keyboard navigation (`Left`/`Right`/`Esc`).
- **Responsive Media:** Video embeds and images use a padding-bottom ratio technique to ensure they look perfect on both mobile and 4k displays.

## Asset Migration

The site is designed to be fully self-contained. To move away from Weebly’s CDN, use the provided PowerShell script.

### Directory Logic
- **Images:** All artwork and news images must sit in the `images/` folder.
- **PDFs:** Exhibition catalogs and CVs sit in the `documents/` folder.
- **Paths:** - If a page is in the root (like `index.html`), the path is `images/photo.jpg`.
  - If a page is moved to a subfolder, the path must be updated to `../images/photo.jpg`.

### The Migration Script (`migrate-assets.ps1`)
This script scrapes your HTML files for Weebly URLs, downloads them locally, and rewrites the code to point to your new folders.

```powershell
$base = 'https://amitaysadovsky.weebly.com/uploads/5/7/0/3/57037851/'

# 1. Initialize Folders
New-Item -ItemType Directory -Force -Path images, documents | Out-Null

# 2. Identify Assets
$pattern = [regex]::Escape($base) + '[^"'']+'
$urls = Select-String -Path *.html -Pattern $pattern -AllMatches |
  ForEach-Object { $_.Matches.Value } |
  Sort-Object -Unique

Write-Host "Found $($urls.Count) unique assets."

# 3. Download & Decode
foreach ($url in $urls) {
  $folder = if ($url -match '\.pdf$') { 'documents' } else { 'images' }
  $name   = [uri]::UnescapeDataString((Split-Path -Leaf $url))
  $dest   = Join-Path $folder $name
  if (Test-Path $dest) { continue }
  Write-Host "  -> $folder/$name"
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
  } catch {
    Write-Warning "Failed: $url"
  }
}

# 4. Rewrite HTML (UTF-8 No BOM to prevent Hebrew corruption)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
Get-ChildItem -Filter *.html | ForEach-Object {
  $content = [System.IO.File]::ReadAllText($_.FullName, $utf8NoBom)
  foreach ($url in $urls) {
    $folder = if ($url -match '\.pdf$') { 'documents' } else { 'images' }
    $name   = [uri]::UnescapeDataString((Split-Path -Leaf $url))
    $content = $content.Replace($url, "$folder/$name")
  }
  [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBom)
}
Write-Host "Migration Complete."
```

## Deployment

1. **Local Preview:** Open `index.html` in Chrome or Safari.
2. **Server Check:** Ensure the `.htaccess` file is uploaded to the root for 404 handling.
3. **GitHub Pages:** - Push to `main` branch.
   - Set GitHub Settings → Pages to "Deploy from branch" (root).
4. **Custom Domain:** If using `ellaamitay.com`, ensure the `CNAME` record in your DNS points to your GitHub URL.

## Maintenance

To add new work:
1. Upload the image to `images/`.
2. Duplicate an existing exhibition `.html` file.
3. Update the `data-caption` and `src` tags.
4. Add the new link to the navigation menu in `Library/header.lbi`.