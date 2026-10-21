Royal Wedding Invitation Website
A responsive Indian wedding invitation starter inspired by traditional ivory, gold, burgundy, and jewel-tone invitation cards.

Run it in VS Code
Extract this folder somewhere easy to find.
Open VS Code.
Choose File → Open Folder and select royal-wedding-invitation.
Install the Live Server extension (search for it in Extensions).
Right-click index.html and select Open with Live Server.
You can also open index.html directly in a browser, but Live Server is better while editing.

Folder structure
index.html — content and page sections
style.css — colors, typography, layout, responsive/mobile styles
script.js — countdown, mobile navigation, WhatsApp RSVP
Personalize it
Search the files for these sample values and replace them:

Anil and Shambhavi — names
21 November 2026 and event dates/times — actual schedule
Venue name, address and Google Maps directions URL
WhatsApp number in script.js (digits only, including country code)
Page title and description in index.html
The countdown date is configured near the top of script.js: new Date("2026-11-21T19:00:00+05:30")

The RSVP form opens WhatsApp with a prefilled message; it does not save responses to a database. If you need a private RSVP dashboard or stored guest list, connect a backend or a form service before publishing.

Publish it
A simple static version can be published using GitHub Pages or Netlify. Test the public link on a phone before sharing it. Google Fonts require an internet connection; the page otherwise uses local HTML/CSS/JavaScript.
