
Be Unique Collection - Single Page Static Website
------------------------------------------------

What's included:
- index.html  : Main single-page website. (Netlify form enabled)
- styles.css  : Styling + simple animations
- script.js   : Lightbox, WhatsApp fallback, basic interactions
- images/     : Placeholder images (replace with your photos)

How to use locally:
1. Extract the zip.
2. Open index.html in a browser to preview.
   - Note: Netlify form will NOT work when opened from file:// locally.
   - For form submissions, either deploy to Netlify (see below) or use the WhatsApp button as fallback.

Deploy to Netlify (to enable Netlify Forms):
1. Create a new GitHub repository and push the folder contents.
2. Create a Netlify account and "New site from Git".
3. Connect the GitHub repo, select the branch, and deploy.
4. Netlify will automatically enable form captures for the form named "contact".
   - You can view submissions in Netlify dashboard > Forms.

Customization:
- Update phone numbers and text in index.html.
- Replace images in /images folder with your gallery images. Keep filenames or update data-full attributes.
- Update 'waNumber' in script.js to include correct country code.

If you want, I can:
- Replace placeholders with your Instagram images (if you upload them here).
- Add a styled PDF price-list download button.
- Add email sending using a serverless function instead of Netlify Forms.

