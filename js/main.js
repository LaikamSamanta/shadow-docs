(function () {
  var STORAGE_KEY = "shadow-docs-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored || "system";
  }

  applyTheme(currentTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var stored = localStorage.getItem(STORAGE_KEY) || (prefersDark ? "dark" : "light");
        var next = stored === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }

    var sidebarToggle = document.querySelector("[data-sidebar-toggle]");
    var sidebar = document.querySelector(".sidebar");
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
      });
      document.addEventListener("click", function (e) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
          sidebar.classList.remove("open");
        }
      });
    }
  });
})();
