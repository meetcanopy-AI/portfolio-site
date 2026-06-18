const root = document.documentElement;
const toggles = document.querySelectorAll(".theme-toggle");
const storedTheme = localStorage.getItem("portfolio-theme");

if (storedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
}

function syncButtons() {
  const isDark = root.getAttribute("data-theme") === "dark";
  toggles.forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.textContent = isDark ? "Daylight" : "After Hours";
  });
}

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("portfolio-theme", "dark");
    }
    syncButtons();
  });
});

syncButtons();
