// toggle//
const toggle = document.getElementById("themetoggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isdark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isdark ? "dark" : "light");
  });
}

// portfolio open box //
const project = document.querySelectorAll(".project");
project.forEach(function (q) {
  q.addEventListener("click", function () {
    const aboutproject = q.nextElementSibling;
    aboutproject.classList.toggle("open");
  });
});
