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

## Licensing System (yearly renewal keys)
This app now includes a built-in license system:
- On first open, the app shows an "Activate Your App" screen asking for a
  license key.
- You generate license keys using a separate, PRIVATE tool called the
  "License Manager" (Mother App) — this is a different file, kept only on
  your own computer, never uploaded anywhere public.
- A generated key is valid for the number of days you choose (365 by
  default = 1 year). The customer pastes it once into their app.
- The app shows a small badge (top-right) with days remaining. There is a
  5-day grace period after expiry before the app locks again, so a late
  renewal doesn't cut off a customer instantly.
- To renew a customer: open the License Manager, load their Customer ID,
  click "Generate License Key" again, and send them the new key.

### Before you start selling
1. Open `index.html` and find `const SELLER_CONTACT = '9876543210';`
   near the top of the `<script>` — change this to YOUR WhatsApp number.
   This is what customers see if they need to request a renewal.
2. Keep the separate `mother-app.html` (License Manager) file ONLY on your
   own computer. Do not upload it to GitHub or send it to anyone — it
   contains the secret key used to sign valid licenses.
