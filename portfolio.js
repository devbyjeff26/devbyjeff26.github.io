// Keep the footer year current without requiring JavaScript for page content.
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
