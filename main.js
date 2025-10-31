// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  themeToggle.textContent = root.classList.contains("dark") ? "☀️" : "🌙";
});

// Persist theme
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
  themeToggle.textContent = "☀️";
}
