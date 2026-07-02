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
