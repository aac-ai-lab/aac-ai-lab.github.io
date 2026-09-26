(function () {
  var year = document.getElementById("ano");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav-principal");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
