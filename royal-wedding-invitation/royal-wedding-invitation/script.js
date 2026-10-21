// EDIT THESE SETTINGS BEFORE PUBLISHING
const weddingDate = new Date("2026-11-21T19:00:00+05:30");
// Use the couple's WhatsApp number with country code, digits only.
// Example for India: 919876543210. Replace this demo number.
const whatsappNumber = "919876543210";
// Optional: put the complete Google Maps directions URL for your venue here.
const venueMapUrl = "https://maps.google.com/";

const $ = (id) => document.getElementById(id);

// Mobile navigation
const menuToggle = $("menuToggle");
const navLinks = $("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Countdown timer
function updateCountdown() {
  const now = Date.now();
  let remaining = Math.max(0, weddingDate.getTime() - now);
  const days = Math.floor(remaining / 86400000);
  remaining %= 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining %= 3600000;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  $("days").textContent = String(days).padStart(2, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Venue map button
$("mapLink").href = venueMapUrl;

// RSVP: prepares a WhatsApp message. This does not store submissions in a database.
$("rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("guestName") || "").trim();
  const attendance = String(form.get("attendance") || "");
  const guests = String(form.get("guestCount") || "1");
  const message = String(form.get("message") || "").trim();
  const text = [
    "Wedding RSVP — Anil & Shambhavi",
    `Name: ${name}`,
    `Response: ${attendance}`,
    `Number of guests: ${guests}`,
    message ? `Message: ${message}` : ""
  ].filter(Boolean).join("\n");

  if (!/^\d{10,15}$/.test(9328507975)) {
    $("formStatus").textContent = "Please set a valid WhatsApp number in script.js first.";
    return;
  }
  $("formStatus").textContent = "Opening WhatsApp with your RSVP message…";
  const url = `https://wa.me/${9328507975}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
