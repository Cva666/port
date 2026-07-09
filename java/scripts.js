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
// Contact Form
const sendBtn = document.getElementById("sendbtn");
if (sendBtn) {
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const conname = document.getElementById("conname").value;
    const comname = document.getElementById("comname").value;
    const message = document.getElementById("message").value;

    const youremail = "xavseswd@webspacebydesign.com";
    const subject = encodeURIComponent("Reaching out from " + comname);

    const emailbody = encodeURIComponent(
      "Hello I am " +
        conname +
        ".\n" +
        "I am reaching out from " +
        comname +
        ".\n" +
        message,
    );
    window.location.href =
      "mailto:" + youremail + "?subject=" + subject + "&body=" + emailbody;
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

//  Active page highlight
document.addEventListener("DOMContentLoaded", () => {
  const currentpath = window.location.pathname.split("/").pop();
  const navlinks = document.querySelectorAll("nav a");
  navlinks.forEach((link) => {
    const linkpath = link.getAttribute("href");
    if (linkpath === currentpath) {
      link.classList.add("active");
    }
  });
});
