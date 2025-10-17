Message Transfer App - Ready to upload to GitHub Pages

Files included:
- sender.html  -> Sender UI (labelled Sender)
- receiver.html -> Receiver UI (labelled Receiver)
- firebase.js  -> Firebase initialization (uses your provided config)
- style.css    -> Simple styles

How to use:
1. Upload these files to a public GitHub repository.
2. Enable GitHub Pages on the repository (Settings -> Pages -> Branch: main, Folder: / (root)).
3. Wait ~1-2 minutes, then open:
   https://<your-username>.github.io/<repo-name>/sender.html
   https://<your-username>.github.io/<repo-name>/receiver.html

Notes:
- Both pages use Firestore (collection 'messages') and Storage (folder 'images').
- Ensure your Firestore rules allow reads/writes while testing, e.g. allow read/write if request.auth == null for quick testing (but secure later).
- If images don't upload, check Storage rules and CORS settings in your Firebase console.
