# Sri Chit Funds — PWA (Installable Android App)

This is a **Progressive Web App**. Once hosted, it can be installed on
any Android phone straight from Chrome — it gets a real home-screen icon,
opens full-screen (no browser bar), and works 100% offline after the first
open. No Play Store needed.

## Files in this package
```
index.html          → the whole app (UI + data logic)
manifest.json        → tells Android this is an installable app (name, icon, colors)
service-worker.js    → caches everything so it works with zero internet after first load
icons/               → app icons in all required sizes
```

## IMPORTANT: why you can't just double-click index.html for this part
Android's "Install App" feature only works when the app is loaded over
`https://` (or `localhost`) — this is a security rule set by Google, not
something we can bypass. Opening the file directly (`file://...`) will
still run the app perfectly, but Chrome won't offer to *install* it as an
app icon.

So you need to put these files on a free web host, **once**. After that,
every visit works fully offline, exactly like a native app.

## Easiest way (2 minutes, free, no account strictly required)

**Option A — Netlify Drop**
1. Go to https://app.netlify.com/drop on your computer.
2. Drag this whole folder (the one containing index.html) onto the page.
3. Netlify gives you a link like `https://yoursite.netlify.app`.
4. Open that link on the Android phone in **Chrome**.
5. Tap the **⋮ menu → "Install app"** (or the gold "⬇ Install App" button
   inside the app itself, or "Add to Home screen").
6. Done — the app icon now appears on the home screen and works offline.

**Option B — GitHub Pages**
1. Create a free GitHub repository and upload these files.
2. Settings → Pages → enable Pages for the `main` branch.
3. Open the generated `https://<username>.github.io/<repo>` link on Android
   Chrome and install as above.

**Option C — Your own web hosting**
Upload the folder as-is (keep the folder structure) to any hosting that
serves plain files over HTTPS (cPanel, Firebase Hosting, Vercel, etc.).

## After installing
- The app works completely offline — airplane mode, no wifi, no data, all fine.
- All chit fund data (members, groups, collections, auctions, receipts) is
  stored privately on that phone.
- Use the in-app **Backup** screen regularly to download a JSON backup file
  — this protects data if the phone is lost, reset, or the app is uninstalled.
- To move data to a new phone: install the app there too, then use
  Backup → Restore with the saved JSON file.

## Prefer a real native APK instead?
If you'd rather have a proper installable `.apk` file that doesn't need any
hosting at all, ask for the "Android Studio WebView project" version
instead — it wraps this same app so it never needs to be online, even once.
