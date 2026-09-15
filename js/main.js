(function () {
  var STORAGE_KEY = "shadow-docs-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  applyTheme(localStorage.getItem(STORAGE_KEY));

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var isLight = root.getAttribute("data-theme") === "light";
        var next = isLight ? "dark" : "light";
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
