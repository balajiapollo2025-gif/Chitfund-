# Sri Chit Funds — PWA (Flat Version, No Folders)

All files are in ONE flat list — no subfolders (no "icons" folder). This
avoids the GitHub "drag and drop" folder-upload problem entirely.

## Files in this package (11 files, all at the same level)
```
index.html
manifest.json
service-worker.js
icon-72.png
icon-96.png
icon-128.png
icon-144.png
icon-152.png
icon-192.png
icon-384.png
icon-512.png
```

## How to upload to GitHub (simple — no folder needed)
1. Open your GitHub repository.
2. Click **Add file → Upload files**.
3. Select ALL 11 files above at once (Ctrl+A in the file picker after
   opening this extracted folder) and upload them together.
4. Scroll down → **Commit changes**.
5. Go to **Settings → Pages** → enable Pages for the `main` branch,
   folder `/ (root)` → Save.
6. Wait 1–2 minutes, then open your GitHub Pages link
   (e.g. `https://<username>.github.io/<repo>/`).

## Verify it worked
Open these 3 links directly in the browser — none should show a 404:
- `https://<username>.github.io/<repo>/manifest.json`
- `https://<username>.github.io/<repo>/icon-192.png`
- `https://<username>.github.io/<repo>/service-worker.js`

If all three load correctly, open the main link on Android **Chrome** and:
- Tap the gold **"⬇ Install App"** button inside the app, OR
- Chrome menu (⋮) → **"Install app"**

The app icon will appear on the home screen and work fully offline after
that (airplane mode is fine).

## Updating content later
Just re-upload the changed file(s) the same way (Add file → Upload files,
select the updated file, Commit). No renaming or folder steps needed since
everything is flat.

## Publishing future updates (for the developer/reseller)
Whenever you change the app and want existing installs to get the update:
1. Edit `index.html`, bump the line `const APP_VERSION = '0.2';` to the new
   number (e.g. `'0.3'`).
2. Edit `version.json` — set `"version"` to the same new number, and update
   `"notes"` with a short description of what changed.
3. Edit `service-worker.js` — bump `CACHE_NAME` (e.g. `chit-funds-cache-v4`).
   This is required, otherwise phones keep using old cached files.
4. Upload all changed files to GitHub (Add file → Upload files, same names
   — GitHub will ask to confirm overwriting, click yes → Commit).
5. Already-installed users will automatically get a popup ("New version
   available") within a few seconds of opening the app (needs internet
   just for that check), with an "Update Now" button that refreshes them
   to the latest version.
