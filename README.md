# Ella Amitay Sadovsky — site

Static rebuild of `amitaysadovsky.weebly.com`, ready for GitHub Pages.

## Files

- `index.html` — Home (news + slideshow)
- `about.html` — Bio, education, exhibitions, awards, CV download
- `contact.html` — Contact info
- 10 gallery / project pages: `2018`, `seven-2016`, `spare-parts-2014-2015`, `short-escape-2011-2013`, `dreams-decipherer-2009-2011`, `wall-installation-2009`, `in-between-2006-2008`, `shield-of-the-mighty-2011`, `quiet-island`, `private-investigations-2004`
- `news.html`, `publications.html`, `articles.html` — Etc section
- `css/style.css` — All styles, single file

No build step. No framework. Plain HTML + CSS + a tiny inline slideshow script.

## Preview locally

Double-click `index.html` to open it in a browser. All pages link to each other with relative paths, so it works straight from the file system.

## Known caveat — images and PDFs

All images and PDF downloads still load from Weebly's CDN
(`https://amitaysadovsky.weebly.com/uploads/...`). The new site will work as long as the Weebly site stays up, but it has a hidden dependency on it.

**To make the migration complete**, run the PowerShell script below. It downloads every image and PDF referenced by the HTML files into `images/` and `pdfs/`, then rewrites every URL in the HTML to point at the local copies.

In **PowerShell**, from this folder:

```powershell
$base = 'https://amitaysadovsky.weebly.com/uploads/5/7/0/3/57037851/'

# 1. Make folders
New-Item -ItemType Directory -Force -Path images, pdfs | Out-Null

# 2. Find every Weebly URL referenced by the HTML files
$pattern = [regex]::Escape($base) + '[^"'']+'
$urls = Select-String -Path *.html -Pattern $pattern -AllMatches |
  ForEach-Object { $_.Matches.Value } |
  Sort-Object -Unique

Write-Host "Found $($urls.Count) unique assets."

# 3. Download each into images/ or pdfs/, decoding URL-encoded names
foreach ($url in $urls) {
  $folder = if ($url -match '\.pdf$') { 'pdfs' } else { 'images' }
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

# 4. Rewrite the HTML so each URL points at its local copy.
#    Use .NET UTF-8 (no BOM) on both sides so PowerShell 5.1 doesn't
#    silently fall back to the system code page and corrupt Hebrew.
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
Get-ChildItem -Filter *.html | ForEach-Object {
  $content = [System.IO.File]::ReadAllText($_.FullName, $utf8NoBom)
  foreach ($url in $urls) {
    $folder = if ($url -match '\.pdf$') { 'pdfs' } else { 'images' }
    $name   = [uri]::UnescapeDataString((Split-Path -Leaf $url))
    $content = $content.Replace($url, "$folder/$name")
  }
  [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBom)
}

Write-Host "Done."
```

Save it as `migrate-assets.ps1` and run with `powershell -ExecutionPolicy Bypass -File .\migrate-assets.ps1`, or paste it directly into a PowerShell window opened at this folder.

After it finishes, open `index.html` and a couple of gallery pages to confirm everything still loads. If it does, commit the new `images/` and `pdfs/` folders along with the updated HTML.

4. Verify in a browser, then `git add` the asset folders.

Doing this means the GitHub Pages deploy is fully self-contained and survives Weebly being shut down.

## Deploy to GitHub Pages

1. **Create the repo on GitHub.**
   - Sign in at https://github.com.
   - Click **New repository**.
   - Name it `<your-username>.github.io` (for a user-site URL like `https://<your-username>.github.io/`) **or** any name (for a project-site URL like `https://<your-username>.github.io/<repo-name>/`).
   - Public, no README/.gitignore (you already have files locally).

2. **Push the site from this folder.** From a terminal in this directory:

   ```bash
   git init -b main
   git add .
   git commit -m "initial commit"
   git remote add origin git@github.com:<your-username>/<repo-name>.git
   git push -u origin main
   ```

   (Use the HTTPS URL `https://github.com/<your-username>/<repo-name>.git` instead of SSH if you don't have SSH keys configured.)

3. **Enable Pages.**
   - In the repo on GitHub: **Settings → Pages**.
   - Under *Build and deployment* → *Source*, choose **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)**. Save.
   - Within a minute the site will be live. The URL is shown on that same Settings → Pages screen.

4. **(Optional) Custom domain.**
   - On Settings → Pages, set your custom domain (e.g. `ellaamitay.com`).
   - Add a DNS CNAME record pointing to `<your-username>.github.io`.
   - Add a `CNAME` file in this folder containing only the domain name; commit + push.

## Updating the site

Edit any HTML file, commit, and push:

```bash
git add .
git commit -m "describe the change"
git push
```

GitHub Pages republishes automatically within a minute.
